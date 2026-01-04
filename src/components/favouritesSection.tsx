import BlogCard from "./blogCard";
import { getAllPosts } from "@/lib/mdx";

const favouritePostKeys = new Set([
  "technology/future-of-ai",
  "lifestyle/morning-routine",
  "education/online-learning",
  "travel/top-destinations",
]);

export default function FavouritesSection() {
  const favouritePosts = getAllPosts().filter((post) =>
    favouritePostKeys.has(`${post.category}/${post.slug}`)
  );

  return (
    <section className="py-16 bg-gray-50 mb-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <div className="flex justify-center mb-12">
          <span className="bg-blue-900 text-white px-6 py-2 rounded-full text-sm font-medium">
            Favourites
          </span>
        </div>

        {/* Favourites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {favouritePosts.length > 0 ? (
            favouritePosts.map((post) => (
              <BlogCard key={`${post.category}-${post.slug}`} post={post} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No favourites selected yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}