const activities: {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  href: string;
}[] = [
  {
    title: "The Science of Deep Sleep: What Happens While You Rest",
    date: "2025-06-10",
    category: "Science",
    excerpt:
      "Explore the four stages of sleep and how each contributes to physical recovery, memory consolidation, and emotional regulation.",
    href: "/en/blog/science-of-deep-sleep",
  },
  {
    title: "Designing the Perfect Sleep Sanctuary",
    date: "2025-05-28",
    category: "Design",
    excerpt:
      "Light, temperature, texture, and sound — the four pillars of a bedroom that truly supports restorative rest.",
    href: "/en/blog/perfect-sleep-sanctuary",
  },
  {
    title: "Why Natural Materials Matter for Sleep Quality",
    date: "2025-05-15",
    category: "Materials",
    excerpt:
      "How organic cotton, linen, and wool regulate temperature and humidity better than synthetic alternatives.",
    href: "/en/blog/natural-materials-sleep",
  },
  {
    title: "SOMNI at Milan Design Week 2025",
    date: "2025-04-22",
    category: "Events",
    excerpt:
      "We unveiled our latest collection in Milan. Here is a look at the installation and the response from the design community.",
    href: "/en/blog/somni-milan-2025",
  },
  {
    title: "Morning Routines of the World's Most Productive People",
    date: "2025-04-08",
    category: "Lifestyle",
    excerpt:
      "What CEOs, athletes, and artists do in the first hour of their day — and how it all starts with quality sleep.",
    href: "/en/blog/morning-routines",
  },
  {
    title: "Introducing the SOMNI Weighted Blanket",
    date: "2025-03-20",
    category: "Product",
    excerpt:
      "Two years of R&D, eighteen prototypes, and one goal: the most comfortable weighted blanket ever made.",
    href: "/en/blog/weighted-blanket-launch",
  },
];

export default function ActivitiesPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-dm-serif)] text-amber-400 mb-4">
        Activities
      </h1>
      <p className="text-neutral-400 mb-12 text-lg">
        Stories, events, and insights from the world of SOMNI.
      </p>

      <div className="space-y-8">
        {activities.map((post) => (
          <article
            key={post.href}
            className="border border-neutral-800 rounded-lg p-6 bg-neutral-900/50 hover:border-amber-600/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-medium uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                {post.category}
              </span>
              <span className="text-sm text-neutral-500">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-white mb-2 hover:text-amber-300 transition-colors">
              <a href={post.href}>{post.title}</a>
            </h2>
            <p className="text-neutral-400 leading-relaxed">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
