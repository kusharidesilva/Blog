import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CategoryHero from "@/components/categoryHero";
import BlogCard from "@/components/blogCard";
import { getPostsByCategory } from "@/lib/mdx";

export default function TechnologyPage() {
  const posts = getPostsByCategory("technology");

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CategoryHero title="Technology Blogs" />

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {posts.length === 0 && (
            <p className="text-center text-gray-500 py-12">
              No blog posts found in this category.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
