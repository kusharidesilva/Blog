import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-90 via-white to-blue-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:py-2">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Everything worth reading,
              <br />
              in one place
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto lg:mx-0">
              From tech and lifestyle to learning and creativity, BlogNest brings
              you content that matters
            </p>
            <Link
              href="/#categories"
              className="inline-block bg-blue-900 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors"
            >
              Explore the Blog
            </Link>
          </div>

          {/* image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <Image
              src="/hero.png"
              alt="Person working on laptop"
              width={550}
              height={600}
              className="max-w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* Curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L1440 120L1440 60C1440 60 1320 0 720 0C120 0 0 60 0 60L0 120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
