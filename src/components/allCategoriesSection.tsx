import Link from "next/link";

const categories = [
  { name: "Technology", icon: "🔧", bgColor: "bg-purple-100", iconBg: "bg-purple-200" },
  { name: "Lifestyle", icon: "❤️", bgColor: "bg-red-50", iconBg: "bg-red-100" },
  { name: "Education", icon: "📧", bgColor: "bg-teal-100", iconBg: "bg-teal-200" },
  { name: "Travel", icon: "🚶", bgColor: "bg-blue-50", iconBg: "bg-blue-100" },
  { name: "Food", icon: "🍽️", bgColor: "bg-purple-50", iconBg: "bg-purple-100" },
  { name: "News & Trends", icon: "📰", bgColor: "bg-red-50", iconBg: "bg-red-100" },
];

export default function AllCategoriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <div className="flex justify-center mb-12">
          <span className="bg-yellow-400 text-white px-6 py-2 rounded-full text-sm font-medium">
            Top Categories
          </span>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.name.toLowerCase().replace(/ & /g, "-")}`}
              className={`flex items-center gap-4 ${category.bgColor} rounded-full px-6 py-4 transition-transform hover:scale-105`}
            >
              <div className={`${category.iconBg} w-12 h-12 rounded-full flex items-center justify-center text-2xl`}>
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