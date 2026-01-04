import Link from "next/link";

const categories = [
  { name: "Technology", slug: "technology", icon: "💻", bgColor: "bg-purple-100", iconBg: "bg-purple-200" },
  { name: "Lifestyle", slug: "lifestyle", icon: "❤️", bgColor: "bg-red-50", iconBg: "bg-red-100" },
  { name: "Education", slug: "education", icon: "📚", bgColor: "bg-teal-100", iconBg: "bg-teal-200" },
  { name: "Travel", slug: "travel", icon: "🚶", bgColor: "bg-blue-50", iconBg: "bg-blue-100" },
  { name: "Food", slug: "food", icon: "🍽️", bgColor: "bg-purple-100", iconBg: "bg-purple-200" },
  { name: "News & Trends", slug: "news&trends", icon: "📰", bgColor: "bg-red-50", iconBg: "bg-red-100" },
];

export default function AllCategoriesSection() {
  return (
    <section id="categories" className="py-4 bg-white mb-12">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <div className="flex justify-center mb-10">
          <span className="bg-blue-900 text-white px-6 py-2 rounded-full text-sm font-medium">
            Top Categories
          </span>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/${category.slug}`}
              className={`flex items-center gap-4 ${category.bgColor} rounded-full px-3 py-2 transition-transform hover:scale-105`}
            >
              <div className={`${category.iconBg} w-15 h-15 rounded-full flex items-center justify-center text-2xl`}>
                {category.icon}
              </div>
              <span className="font-medium text-gray-800">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}