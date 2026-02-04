import { useState } from 'preact/hooks';

interface Post {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  slug: string;
}

interface Props {
  posts: Post[];
  categories: string[];
}

export default function BlogFilter({ posts, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredPosts = activeCategory === 'All'
    ? posts
    : posts.filter(post => post.category === activeCategory);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  return (
    <div>
      {/* Category filters */}
      <div class="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory('All')}
          class={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === 'All'
              ? 'bg-[var(--accent)] text-white'
              : 'bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
          }`}
        >
          All ({posts.length})
        </button>
        {categories.map((category) => {
          const count = posts.filter(p => p.category === category).length;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              class={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-[var(--accent)] text-white'
                  : 'bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
              }`}
            >
              {category} ({count})
            </button>
          );
        })}
      </div>

      {/* Posts grid */}
      <div class="grid md:grid-cols-2 gap-6">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            class="group p-6 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] hover:border-[var(--accent)] transition-colors"
          >
            <div class="flex items-center gap-3 mb-3 text-sm text-[var(--text-muted)]">
              <span class="px-2 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border)]">
                {post.category}
              </span>
              <span>{formatDate(post.date)}</span>
            </div>

            <h3 class="text-lg font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
              <a href={`/blog/${post.slug}`} class="hover:underline">
                {post.title}
              </a>
            </h3>

            <p class="text-[var(--text-muted)] text-sm mb-4">
              {post.excerpt}
            </p>

            <a
              href={`/blog/${post.slug}`}
              class="inline-flex items-center gap-1 text-sm text-[var(--accent)] hover:underline"
            >
              Read more
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </article>
        ))}
      </div>

      {/* No results message */}
      {filteredPosts.length === 0 && (
        <p class="text-center text-[var(--text-muted)] py-12">
          No posts found in this category.
        </p>
      )}
    </div>
  );
}
