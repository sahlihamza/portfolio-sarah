"""Extract image bodies from the Chromium disk cache of the in-app browser.

Scans the mavis-browser partition cache for image magic bytes, validates each
candidate with Pillow and writes the decoded pixels to an output folder.
"""

import hashlib
import io
import os
import sys
from pathlib import Path

from PIL import Image

Image.MAX_IMAGE_PIXELS = None

CACHE_DIRS = [
    Path(r"C:\Users\HAMZA-20\AppData\Roaming\MiniMax Agent\Partitions\mavis-browser\Cache\Cache_Data"),
    Path(r"C:\Users\HAMZA-20\AppData\Roaming\MiniMax Agent\Cache\Cache_Data"),
]

OUT_DIR = Path(sys.argv[1] if len(sys.argv) > 1 else "extracted")
MIN_BYTES = 12_000
MIN_SIDE = 260

MAGICS = [
    (b"\xff\xd8\xff", "jpg"),
    (b"\x89PNG\r\n\x1a\n", "png"),
]


def save(img: Image.Image, name: str, out: Path) -> tuple[str, tuple[int, int]]:
    img = img.convert("RGB") if img.mode not in ("RGB", "L") else img
    path = out / name
    img.save(path, quality=92)
    return path.name, img.size


def main() -> None:
    out = OUT_DIR
    out.mkdir(parents=True, exist_ok=True)
    found = 0
    seen: set[str] = set()

    for cache_dir in CACHE_DIRS:
        if not cache_dir.exists():
            continue
        for file in sorted(cache_dir.rglob("*")):
            if not file.is_file():
                continue
            try:
                blob = file.read_bytes()
            except OSError:
                continue
            if len(blob) < MIN_BYTES:
                continue
            for magic, kind in MAGICS:
                start = 0
                while True:
                    idx = blob.find(magic, start)
                    if idx == -1:
                        break
                    start = idx + 4
                    try:
                        with Image.open(io.BytesIO(blob[idx:])) as img:
                            img.load()
                            w, h = img.size
                    except Exception:
                        continue
                    if w < MIN_SIDE or h < MIN_SIDE:
                        continue
                    key = hashlib.sha256(img.tobytes()).hexdigest()
                    if key in seen:
                        continue
                    seen.add(key)
                    found += 1
                    ext = "jpg" if kind == "jpg" else "png"
                    name, size = save(img.copy(), f"img_{found:03d}_{w}x{h}.{ext}", out)
                    print(f"{name}  <- {file.name}")
                    break

    print(f"total: {found} images -> {out.resolve()}")


if __name__ == "__main__":
    main()
