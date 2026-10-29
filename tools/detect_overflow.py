"""Injects an overflow-detection script into a copy of dist/index.html and dumps the report."""

import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(r"C:\Users\HAMZA-20\.minimax\sessions\mvs_f31c6d92b6e04f939cbb2313c7137ebe\workspace\portfolio")
DIST = ROOT / "dist"
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

SCRIPT = """
<script>
window.addEventListener('load', function () {
  setTimeout(function () {
    var vw = document.documentElement.clientWidth;
    var out = [];
    document.querySelectorAll('*').forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.right > vw + 1 || r.width > vw + 1) {
        var cls = (el.getAttribute('class') || '').slice(0, 70);
        out.push(el.tagName + '[' + cls + '] w=' + Math.round(r.width) + ' r=' + Math.round(r.right));
      }
    });
    document.title = 'VW=' + vw + ' OVER=' + out.length + ' || ' + out.slice(0, 18).join(' ;; ');
  }, 600);
});
</script>
"""

html = (DIST / "index.html").read_text(encoding="utf-8")
html = html.replace("</body>", SCRIPT + "</body>")
debug = DIST / "debug.html"
debug.write_text(html, encoding="utf-8")

width = sys.argv[1] if len(sys.argv) > 1 else "375"
headless = sys.argv[2] if len(sys.argv) > 2 else "--headless=new"
scale = sys.argv[3] if len(sys.argv) > 3 else "2"
cmd = [
    CHROME,
    headless,
    "--disable-gpu",
    "--no-sandbox",
    f"--force-device-scale-factor={scale}",
    "--virtual-time-budget=9000",
    f"--window-size={width},1400",
    "--dump-dom",
    "http://127.0.0.1:4173/debug.html",
]
result = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="replace")
match = re.search(r"<title>(.*?)</title>", result.stdout, re.S)
print(match.group(1) if match else "no title found")
debug.unlink(missing_ok=True)
