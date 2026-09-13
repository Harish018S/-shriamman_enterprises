from PIL import Image, ImageDraw
import os

base = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'public', 'images')
os.makedirs(base, exist_ok=True)

def save_webp(name, width, height, draw_fn):
    img = Image.new('RGB', (width, height), '#eef3f1')
    d = ImageDraw.Draw(img)
    draw_fn(d)
    img.save(os.path.join(base, name), format='WEBP', quality=90)

# Wide industrial visual
save_webp('power-solutions-industrial.webp', 1600, 900, lambda d: (
    d.rounded_rectangle((430, 270, 1160, 600), radius=10, fill=(206, 219, 214)),
    d.polygon([(400, 270), (900, 170), (1210, 270)], fill=(138, 150, 145)),
    [d.rounded_rectangle((500 + col * 90, 315 + row, 500 + col * 90 + 70, 315 + row + 120), radius=4, fill=(34, 105, 82)) or d.line((500 + col * 90, 315 + row, 500 + col * 90 + 70, 315 + row + 120), fill=(220, 240, 230), width=2) for row in range(0, 180, 34) for col in range(6)],
    d.rounded_rectangle((1030, 310, 1200, 470), radius=16, fill=(130, 143, 138)),
    [d.rounded_rectangle((315 + i * 180, 525, 420 + i * 180, 680), radius=8, fill=(189, 202, 197)) for i in range(3)],
    [d.line((i, 660, i + 80, 660), fill=(150, 160, 155), width=8) for i in range(0, 1600, 165)]
))

# Solar commercial
save_webp('solar-commercial.webp', 1200, 900, lambda d: (
    d.rectangle((0, 600, 1200, 900), fill=(213, 226, 221)),
    d.polygon([(80, 450), (620, 250), (1110, 450)], fill=(148, 161, 156)),
    d.rounded_rectangle((120, 440, 1050, 720), radius=10, fill=(216, 227, 222)),
    [d.rounded_rectangle((170 + col * 120, 300 + row, 170 + col * 120 + 90, 300 + row + 150), radius=4, fill=(42, 120, 92)) or d.line((170 + col * 120, 300 + row, 260 + col * 120, 450 + row), fill=(214, 233, 228), width=2) for row in range(0, 180, 28) for col in range(6)],
    [d.rounded_rectangle((770 + i * 70, 400, 830 + i * 70, 560), radius=8, fill=(120, 145, 138)) for i in range(3)]
))

# Industrial generator
save_webp('industrial-generator.webp', 1200, 900, lambda d: (
    d.rectangle((0, 680, 1200, 900), fill=(216, 228, 223)),
    d.rounded_rectangle((250, 300, 760, 650), radius=22, fill=(130, 145, 138)),
    d.rounded_rectangle((330, 250, 660, 390), radius=12, fill=(220, 228, 223)),
    d.rounded_rectangle((420, 210, 570, 270), radius=8, fill=(104, 121, 117)),
    [d.rounded_rectangle((x, 370, x + 120, 560), radius=12, fill=(182, 194, 189)) for x in (820, 915)],
    d.rounded_rectangle((480, 415, 640, 555), radius=10, fill=(198, 210, 205)),
    [d.line((i, 645, i + 120, 645), fill=(160, 174, 168), width=7) for i in range(0, 1200, 180)]
))

# Electrical systems
save_webp('electrical-systems.webp', 1200, 900, lambda d: (
    d.rectangle((0, 690, 1200, 900), fill=(216, 228, 223)),
    d.rounded_rectangle((200, 230, 1000, 640), radius=18, fill=(220, 230, 226)),
    d.rounded_rectangle((250, 150, 950, 290), radius=12, fill=(147, 165, 160)),
    [(
        d.rounded_rectangle((260 + i * 140, 320, 370 + i * 140, 540), radius=10, fill=(170, 186, 180)),
        d.line((290 + i * 140, 360, 340 + i * 140, 360), fill=(230, 240, 236), width=8),
        d.line((290 + i * 140, 408, 340 + i * 140, 408), fill=(230, 240, 236), width=8),
        d.line((290 + i * 140, 456, 340 + i * 140, 456), fill=(230, 240, 236), width=8)
    ) for i in range(5)]
))

print('Generated capability image assets in', base)
