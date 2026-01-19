import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export function getMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="mt-8 mb-6 text-4xl font-bold tracking-tight text-gray-900">{children}</h1>,
    h2: ({ children }) => <h2 className="mt-10 mb-4 text-2xl font-semibold text-gray-800 border-b pb-2">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-700">{children}</h3>,
    p: ({ children }) => <p className="mb-5 leading-7 text-gray-700">{children}</p>,
    ul: ({ children }) => <ul className="mb-5 ml-6 list-disc space-y-2 text-gray-700">{children}</ul>,
    ol: ({ children }) => <ol className="mb-5 ml-6 list-decimal space-y-2 text-gray-700">{children}</ol>,
    li: ({ children }) => <li className="leading-7">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 italic text-gray-700">{children}</blockquote>
    ),
    a: ({ href, children }) => (
      <a href={href} className="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-800">{children}</a>
    ),
    code: ({ children }) => <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-800">{children}</code>,
    pre: ({ children }) => <pre className="my-6 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">{children}</pre>,
    hr: () => <hr className="my-10 border-t border-gray-300" />,
    img: ({ src, alt }) => (
      <div className="my-8 rounded-xl shadow-md overflow-hidden">
        <Image src={src ?? ""} alt={alt ?? ""} width={800} height={500} className="w-full h-auto object-cover" />
      </div>
    ),
    table: ({ children }) => (
      <div className="my-8 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">{children}</table>
      </div>
    ),
    th: ({ children }) => <th className="border border-gray-300 bg-gray-100 px-4 py-2 text-left font-semibold text-gray-800">{children}</th>,
    td: ({ children }) => <td className="border border-gray-300 px-4 py-2 text-gray-700">{children}</td>,
    ...components,
  };
}

export const mdxComponents = getMDXComponents();

// Backwards-compatible alias
export { getMDXComponents as useMDXComponents };
