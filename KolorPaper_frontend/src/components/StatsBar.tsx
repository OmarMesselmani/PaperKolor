const stats = [
  { value: "5,000+", label: "Coloring Pages" },
  { value: "50+",    label: "Categories" },
  { value: "100%",   label: "Free Forever" },
  { value: "1M+",    label: "Downloads" },
];

export default function StatsBar() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-6 mb-14">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center gap-2 py-6 px-4 rounded-2xl bg-white dark:bg-gray-900 border border-black/5 dark:border-white/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
          >
            <span className="text-2xl md:text-3xl font-black bg-gradient-to-br from-purple-600 to-orange-500 bg-clip-text text-transparent">
              {stat.value}
            </span>
            <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
