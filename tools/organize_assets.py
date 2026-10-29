"""Organise the extracted Canva assets into semantic public image filenames."""

import shutil
from pathlib import Path

BASE = Path(r"C:\Users\HAMZA-20\.minimax\sessions\mvs_f31c6d92b6e04f939cbb2313c7137ebe\workspace\portfolio")
SRC = BASE / "public" / "images" / "all"
DST = BASE / "public" / "images"

MAP = {
    "img_001_902x1600.jpg": "portrait.jpg",
    "img_002_798x325.png": "soukra-coupe.png",
    "img_003_800x384.png": "interieur-nuit.png",
    "img_004_799x656.png": "interieur-salon.png",
    "img_005_1597x571.png": "soukra-facade.png",
    "img_006_799x446.png": "halle-jour.png",
    "img_007_799x446.png": "halle-nuit.png",
    "img_008_799x542.png": "halle-plan.png",
    "img_009_604x611.png": "plan-etage-v1.png",
    "img_010_798x705.png": "plan-etage-v2.png",
    "img_011_799x554.png": "moodboard-salon.png",
    "img_012_1024x1536.png": "moodboard-global.png",
    "img_013_799x559.png": "moodboard-chambre.png",
    "img_014_799x555.png": "moodboard-cuisine.png",
    "img_017_512x304.png": "signature.png",
}

for src_name, dst_name in MAP.items():
    src = SRC / src_name
    if not src.exists():
        print(f"MISSING {src_name}")
        continue
    shutil.copy2(src, DST / dst_name)
    print(f"{src_name} -> {dst_name}")

# Remove working folders and contact sheets
for folder in ("all", "raw", "raw2"):
    path = BASE / "public" / "images" / folder
    if path.exists():
        shutil.rmtree(path, ignore_errors=True)

for sheet in BASE.glob("public/images/_contact*.jpg"):
    sheet.unlink(missing_ok=True)

# Drop the leftover test artefacts from the CDN experiments
for junk in BASE.glob("public/images/raw/*.bin"):
    junk.unlink(missing_ok=True)

print("done")
