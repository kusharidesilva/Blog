import Link from "next/link";
import { BlogMeta } from "@/lib/mdx";

interface BlogCardProps {
  post: BlogMeta;
}

// Generate consistent color based on title
function getGradient(title: string): string {
  const gradients = [
    "from-blue-400 to-purple-500",
    "from-green-400 to-teal-500",
    "from-orange-400 to-red-500",
    "from-pink-400 to-purple-500",
    "from-indigo-400 to-blue-500",
    "from-yellow-400 to-orange-500",
  ];
  const index = title.length % gradients.length;
  return gradients[index];
}

// Get emoji based on category
function getCategoryEmoji(category: string): string {
  const emojis: Record<string, string> = {
    technology: "💻",
    lifestyle: "✨",
    education: "📚",
    travel: "✈️",
    food: "🍳",
    other: "📝",
  };
  return emojis[category] || "📄";
}

export default function BlogCard({ post }: BlogCardProps) {
  const gradient = getGradient(post.title);
  const emoji = getCategoryEmoji(post.category);

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 flex flex-col sm:flex-row hover:shadow-md transition-shadow">
      {/* Blog Image Placeholder */}
      <div className={`sm:w-40 h-48 sm:h-auto relative flex-shrink-0 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
        <span className="text-5xl">{emoji}</span>
      </div>

      {/* Blog Content */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-bold text-gray-900 mb-2 uppercase">{post.title}</h3>
          <p className="text-gray-500 text-sm line-clamp-2">{post.description}</p>
        </div>
        <Link
          href={`/${post.category}/${post.slug}`}
          className="text-yellow-500 text-sm font-medium hover:text-yellow-600 mt-4 inline-block"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
