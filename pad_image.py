from PIL import Image

def pad_image_top(input_path, output_path, padding_percent=0.15):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    # Calculate padding based on a percentage of the height
    padding = int(height * padding_percent)
    
    # Create a new transparent image
    new_img = Image.new("RGBA", (width, height + padding), (255, 255, 255, 0))
    
    # Paste the original image at the bottom
    new_img.paste(img, (0, padding))
    
    new_img.save(output_path, "PNG")

try:
    pad_image_top(
        "c:/Users/jkene/Documents/GitHub/Robert-Portfolio/src/assets/robert-bg-nobg.png",
        "c:/Users/jkene/Documents/GitHub/Robert-Portfolio/src/assets/robert-bg-nobg.png",
        0.15 # Add 15% height as transparent space at the top
    )
    print("Image padded successfully.")
except Exception as e:
    print(f"Error: {e}")
