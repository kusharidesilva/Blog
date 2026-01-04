import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs("food");
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug("food", slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <article className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href="/food"
          className="text-yellow-500 hover:text-yellow-600 text-sm font-medium mb-6 inline-block"
        >
          ← Back to Food
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

        <div className="flex items-center gap-4 text-gray-500 text-sm mb-8">
          {post.author && <span>By {post.author}</span>}
          <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
        </div>

        <div className="relative h-48 md:h-64 rounded-xl overflow-hidden mb-8 bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
          <span className="text-6xl">🍳</span>
        </div>

        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-yellow-500">
          <MDXRemote source={post.content} />
        </div>
      </article>

      <Footer />
    </div>
  );
}
