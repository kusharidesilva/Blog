import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
  author?: string;
  content: string;
}

export interface BlogMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
  author?: string;
}

// Get all categories
export function getCategories(): string[] {
  const categories = fs.readdirSync(contentDirectory);
  return categories.filter((cat) => fs.statSync(path.join(contentDirectory, cat)).isDirectory());
}

// Get all posts for a specific category
export function getPostsByCategory(category: string): BlogMeta[] {
  const categoryPath = path.join(contentDirectory, category);

  if (!fs.existsSync(categoryPath)) {
    return [];
  }

  const files = fs.readdirSync(categoryPath).filter((file) => file.endsWith(".mdx"));

  const posts = files.map((file) => {
    const filePath = path.join(categoryPath, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: file.replace(".mdx", ""),
      title: data.title || "Untitled",
      description: data.description || "",
      date: data.date || new Date().toISOString(),
      image: data.image || "/placeholder.jpg",
      category: category,
      author: data.author,
    };
  });

  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get a single post by category and slug
export function getPostBySlug(category: string, slug: string): BlogPost | null {
  const filePath = path.join(contentDirectory, category, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || "Untitled",
    description: data.description || "",
    date: data.date || new Date().toISOString(),
    image: data.image || "/placeholder.jpg",
    category: category,
    author: data.author,
    content,
  };
}

// Get all posts across all categories
export function getAllPosts(): BlogMeta[] {
  const categories = getCategories();
  const allPosts: BlogMeta[] = [];

  categories.forEach((category) => {
    const posts = getPostsByCategory(category);
    allPosts.push(...posts);
  });

  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get all slugs for a category (for static generation)
export function getPostSlugs(category: string): string[] {
  const categoryPath = path.join(contentDirectory, category);

  if (!fs.existsSync(categoryPath)) {
    return [];
  }

  const files = fs.readdirSync(categoryPath).filter((file) => file.endsWith(".mdx"));
  return files.map((file) => file.replace(".mdx", ""));
}

// Resolve post image path with fallback
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
