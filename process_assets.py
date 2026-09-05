import os
import random
import math
from PIL import Image, ImageDraw, ImageFilter

base_dir = r"c:\skills development\earning related\printpixel"
img_dir = os.path.join(base_dir, "public", "img")
ink_dir = os.path.join(base_dir, "public", "ink")
os.makedirs(img_dir, exist_ok=True)
os.makedirs(ink_dir, exist_ok=True)

# 1. Process and optimize photos
user_photos = {
    "loupe.jpg": r"C:\Users\Latitude 7410\.gemini\antigravity\brain\17728d93-d3e7-4ca2-83a1-b03663e27b76\.user_uploaded\media_1788580576170.png",
    "gallery.jpg": r"C:\Users\Latitude 7410\.gemini\antigravity\brain\17728d93-d3e7-4ca2-83a1-b03663e27b76\.user_uploaded\media_1788580582912.png",
    "poster.jpg": r"C:\Users\Latitude 7410\.gemini\antigravity\brain\17728d93-d3e7-4ca2-83a1-b03663e27b76\.user_uploaded\media_1788580588714.png",
    "prints.jpg": r"C:\Users\Latitude 7410\.gemini\antigravity\brain\17728d93-d3e7-4ca2-83a1-b03663e27b76\.user_uploaded\media_1788580593902.png",
    "forest.jpg": r"C:\Users\Latitude 7410\.gemini\antigravity\brain\17728d93-d3e7-4ca2-83a1-b03663e27b76\.user_uploaded\media_1788580598725.jpg",
    "fern.jpg": r"C:\Users\Latitude 7410\.gemini\antigravity\brain\17728d93-d3e7-4ca2-83a1-b03663e27b76\.user_uploaded\media_1788580684925.jpg",
}

for name, src_path in user_photos.items():
    if os.path.exists(src_path):
        with Image.open(src_path) as im:
            im = im.convert("RGB")
            # Resize proportionally so max dimension is 1400px
            w, h = im.size
            if max(w, h) > 1400:
                scale = 1400 / max(w, h)
                im = im.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)
            out_path = os.path.join(img_dir, name)
            im.save(out_path, "JPEG", quality=85, optimize=True)
            print(f"Saved {name}: {os.path.getsize(out_path) // 1024} KB")

# 2. Generate authentic Ink Assets

# A. public/ink/splat.png (High contrast black ink splatter with droplets on transparent)
splat_w, splat_h = 500, 350
splat = Image.new("RGBA", (splat_w, splat_h), (0, 0, 0, 0))
draw = ImageDraw.Draw(splat)
cx, cy = splat_w // 2, splat_h // 2

# Main blot body (cluster of overlapping organic discs)
random.seed(42)
for _ in range(35):
    ox = random.gauss(0, 35)
    oy = random.gauss(0, 25)
    r = random.uniform(18, 55)
    draw.ellipse([cx + ox - r, cy + oy - r, cx + ox + r, cy + oy + r], fill=(18, 22, 28, 255))

# Tendrils and satellite droplets radiating outward
for angle_deg in range(0, 360, 12):
    angle = math.radians(angle_deg + random.uniform(-6, 6))
    dist = random.uniform(50, 160)
    blob_x = cx + math.cos(angle) * dist
    blob_y = cy + math.sin(angle) * dist * 0.75
    blob_r = random.uniform(2, 12)
    draw.ellipse([blob_x - blob_r, blob_y - blob_r, blob_x + blob_r, blob_y + blob_r], fill=(18, 22, 28, 255))
    # Sub-droplets
    if random.random() > 0.4:
        sub_dist = dist + random.uniform(15, 45)
        sx = cx + math.cos(angle) * sub_dist
        sy = cy + math.sin(angle) * sub_dist * 0.75
        sr = random.uniform(1.5, 5)
        draw.ellipse([sx - sr, sy - sr, sx + sr, sy + sr], fill=(18, 22, 28, 255))

# Add slight organic edge smoothing
splat = splat.filter(ImageFilter.SMOOTH_MORE)
splat.save(os.path.join(ink_dir, "splat.png"), "PNG")
print("Saved public/ink/splat.png")

# B. public/ink/specks.png (Fine horizontal spray of ink flecks)
specks_w, specks_h = 600, 120
specks = Image.new("RGBA", (specks_w, specks_h), (0, 0, 0, 0))
sdraw = ImageDraw.Draw(specks)
random.seed(99)
for _ in range(120):
    px = random.uniform(10, specks_w - 10)
    py = random.gauss(specks_h // 2, 18)
    pr = random.uniform(1, 3.5)
    alpha = random.randint(180, 255)
    sdraw.ellipse([px - pr, py - pr, px + pr, py + pr], fill=(18, 22, 28, alpha))
specks.save(os.path.join(ink_dir, "specks.png"), "PNG")
print("Saved public/ink/specks.png")

# C. public/ink/stroke.png (Rough brush stroke for link sweep underlines)
stroke_w, stroke_h = 300, 30
stroke = Image.new("RGBA", (stroke_w, stroke_h), (0, 0, 0, 0))
kdraw = ImageDraw.Draw(stroke)
random.seed(123)
y_mid = stroke_h // 2
for x in range(5, stroke_w - 5):
    # variable height tapering at ends
    progress = (x - 5) / (stroke_w - 10)
    envelope = math.sin(progress * math.pi) ** 0.6
    thick = envelope * random.uniform(4, 9)
    y_jitter = random.uniform(-1.5, 1.5)
    kdraw.line([(x, y_mid - thick + y_jitter), (x, y_mid + thick + y_jitter)], fill=(18, 22, 28, 255), width=2)
stroke = stroke.filter(ImageFilter.SMOOTH)
stroke.save(os.path.join(ink_dir, "stroke.png"), "PNG")
print("Saved public/ink/stroke.png")

# D. public/ink/grain.png (Seamless paper noise grain texture 520x520)
grain_w, grain_h = 520, 520
grain = Image.new("L", (grain_w, grain_h), 255)
gdata = grain.load()
random.seed(777)
for y in range(grain_h):
    for x in range(grain_w):
        # subtle variation around paper tone
        noise = random.randint(-18, 18)
        val = min(255, max(0, 240 + noise))
        gdata[x, y] = val
grain = grain.filter(ImageFilter.SMOOTH)
grain.save(os.path.join(ink_dir, "grain.png"), "PNG")
print("Saved public/ink/grain.png")
