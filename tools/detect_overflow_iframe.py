"""Measures overflow inside a fixed-width iframe so media queries really apply at 375px."""

import re
import subprocess
from pathlib import Path

ROOT = Path(r"C:\Users\HAMZA-20\.minimax\sessions\mvs_f31c6d92b6e04f939cbb2313c7137ebe\workspace\portfolio")
DIST = ROOT / "dist"
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

PAGE = """<!doctype html><html><head><meta charset="utf-8"><title>pending</title></head>
<body style="margin:0">
<iframe id="f" src="/" style="width:375px;height:2600px;border:0"></iframe>
<script>
function measure() {
  var f = document.getElementById('f');
  var d = f.contentDocument;
  if (!d || !d.body) { setTimeout(measure, 200); return; }
  var vw = d.documentElement.clientWidth;
  var out = [];
  d.querySelectorAll('*').forEach(function (el) {
    var r = el.getBoundingClientRect();
    if (r.right > vw + 1 || r.width > vw + 1) {
      var cls = (el.getAttribute('class') || '').slice(0, 60);
      out.push(el.tagName + '[' + cls + '] w=' + Math.round(r.width) + ' r=' + Math.round(r.right));
    }
  });
  document.title = 'IFRAME_VW=' + vw + ' OVER=' + out.length + ' || ' + out.slice(0, 12).join(' ;; ');
}
document.getElementById('f').addEventListener('load', function () { setTimeout(measure, 800); });
setTimeout(measure, 400);
</script>
</body></html>
"""

(DIST / "iframe375.html").write_text(PAGE, encoding="utf-8")

cmd = [
    CHROME,
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--virtual-time-budget=12000",
    "--window-size=1200,2800",
    "--dump-dom",
    "http://127.0.0.1:4173/iframe375.html",
]
result = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="replace")
match = re.search(r"<title>(.*?)</title>", result.stdout, re.S)
print(match.group(1) if match else "no title")
(DIST / "iframe375.html").unlink(missing_ok=True)
