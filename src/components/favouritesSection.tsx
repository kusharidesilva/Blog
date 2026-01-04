import Link from "next/link";

const featuredBlogs = [
  {
    title: "TECHNOLOGY BLOG",
    description: "short description",
    image: "/tech-blog.jpg",
    href: "/blog/technology",
    emoji: "💻",
  },
  {
    title: "FOOD BLOG",
    description: "short description",
    image: "/food-blog.jpg",
    href: "/blog/food",
    emoji: "🍳",
  },
];

export default function FavouritesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <div className="flex justify-center mb-12">
          <span className="bg-yellow-400 text-white px-6 py-2 rounded-full text-sm font-medium">
            Favourites
          </span>
        </div>

        {/* Featured Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {featuredBlogs.map((blog) => (
            <div
              key={blog.title}
              className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 flex flex-col sm:flex-row"
            >
              {/* Blog Image */}
              <div className="sm:w-40 h-48 sm:h-auto relative bg-gray-200 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-4xl">{blog.emoji}</span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{blog.title}</h3>
                  <p className="text-gray-500 text-sm">{blog.description}</p>
                </div>
                <Link
                  href={blog.href}
                  className="text-yellow-500 text-sm font-medium hover:text-yellow-600 mt-4 inline-block"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}