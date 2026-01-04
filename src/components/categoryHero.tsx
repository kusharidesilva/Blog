interface CategoryHeroProps {
  title: string;
}

export default function CategoryHero({ title }: CategoryHeroProps) {
  return (
    <section className="relative h-64 md:h-80 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
          {title}
        </h1>
      </div>
    </section>
  );
}
