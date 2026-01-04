import fs from "fs";
import path from "path";

const fallbackImages: Record<string, string> = {
  technology: "/assets/heroes/01.jpg",
  lifestyle: "/assets/heroes/02.jpg",
  education: "/assets/heroes/education-hero.svg",
  travel: "/assets/heroes/travel-hero.svg",
  food: "/assets/heroes/food-hero.svg",
  "news&trends": "/assets/heroes/news-hero.svg",
};

export function resolvePostImagePath(image: string | undefined, category: string): string {
  if (image) {
    const trimmed = image.startsWith("/") ? image.slice(1) : image;
    const filePath = path.join(process.cwd(), "public", trimmed);
    if (fs.existsSync(filePath)) {
      return image;
    }
  }

  return fallbackImages[category] ?? "/hero.png";
}
