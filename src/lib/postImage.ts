import fs from "fs";
import path from "path";

export function resolvePostImagePath(image: string | undefined, category: string): string {
  if (image) {
    const trimmed = image.startsWith("/") ? image.slice(1) : image;
    const filePath = path.join(process.cwd(), "public", trimmed);
    if (fs.existsSync(filePath)) {
      return image;
    }
  }

  return "/hero.png";
}
