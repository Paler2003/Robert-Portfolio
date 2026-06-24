from PIL import Image

def remove_white_bg(input_path, output_path, tolerance=10):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    for item in data:
        if item[0] > 255 - tolerance and item[1] > 255 - tolerance and item[2] > 255 - tolerance:
            new_data.append((255, 255, 255, 0)) # Transparent
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

try:
    remove_white_bg(
        "c:/Users/jkene/Documents/GitHub/Robert-Portfolio/src/assets/robert-bg.png",
        "c:/Users/jkene/Documents/GitHub/Robert-Portfolio/src/assets/robert-bg-nobg.png"
    )
    print("Background removed successfully.")
except Exception as e:
    print(f"Error: {e}")
