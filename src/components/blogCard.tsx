import Image from "next/image";
import Link from "next/link";
import { BlogMeta } from "@/lib/mdx";
import { resolvePostImagePath } from "@/lib/postImage";

interface BlogCardProps {
  post: BlogMeta;
}

export default function BlogCard({ post }: BlogCardProps) {
  const imageSrc = resolvePostImagePath(post.image, post.category);

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 flex flex-col sm:flex-row hover:shadow-md transition-shadow hover:scale-105 duration-500">
      {/* Image */}
      <div className="relative h-48 w-full sm:h-auto sm:w-52">
        <Image
          src={imageSrc}
          alt={post.title}
          fill
          sizes="(max-width: 700px) 100vw, 208px"
          className="object-cover"
        />
      </div>

      {/* Content */}
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
