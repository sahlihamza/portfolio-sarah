"""Build a labelled contact sheet from a folder of images."""

import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

src = Path(sys.argv[1])
out = Path(sys.argv[2])
cols = int(sys.argv[3]) if len(sys.argv) > 3 else 4
cell = 340
pad = 10
label_h = 22

files = sorted(p for p in src.iterdir() if p.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"})
if not files:
    raise SystemExit(f"no images in {src}")

rows = (len(files) + cols - 1) // cols
sheet_w = cols * (cell + pad) + pad
sheet_h = rows * (cell + label_h + pad) + pad
sheet = Image.new("RGB", (sheet_w, sheet_h), "#1b1b1f")
draw = ImageDraw.Draw(sheet)

try:
    font = ImageFont.truetype("arial.ttf", 14)
except Exception:
    font = ImageFont.load_default()

for i, f in enumerate(files):
    r, c = divmod(i, cols)
    x = pad + c * (cell + pad)
    y = pad + r * (cell + label_h + pad)
    with Image.open(f) as im:
        im = im.convert("RGB")
        im.thumbnail((cell, cell), Image.LANCZOS)
        ox = x + (cell - im.width) // 2
        oy = y + (cell - im.height) // 2
        sheet.paste(im, (ox, oy))
    draw.text((x + 2, y + cell + 3), f.name, fill="#e8e8ea", font=font)

sheet.save(out, quality=92)
print(f"{len(files)} images -> {out.resolve()} ({sheet_w}x{sheet_h})")
