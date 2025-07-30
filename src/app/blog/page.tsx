import Link from 'next/link';

const blogPosts = [
  {
    slug: 'best-business-banks-for-creators',
    title: 'The Best Business Banks for Content Creators (2024)',
    excerpt: 'Compare Mercury, Novo, and Relay to find the perfect business bank for your creator business. No fees, powerful integrations, and features built for digital entrepreneurs.',
    publishedAt: '2024-07-30',
    readTime: '10 min read',
    category: 'Business Banking'
  },
  {
    slug: 'solo-401k-guide-for-creators',
    title: 'The Complete Solo 401k Guide for Content Creators',
    excerpt: 'Maximize your retirement savings as a creator with this comprehensive guide to Solo 401ks. Learn contribution limits, tax benefits, and setup process.',
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    category: 'Retirement Planning'
  },
  {
    slug: 'llc-vs-s-corp-creators',
    title: 'LLC vs S-Corp: Which Business Structure is Best for Creators?',
    excerpt: 'Choosing the right business entity can save you thousands in taxes. Compare LLC and S-Corp options for your creator business.',
    publishedAt: '2024-01-10',
    readTime: '6 min read',
    category: 'Business Structure'
  },
  {
    slug: 'quarterly-tax-calculator-creators',
    title: 'How to Calculate Quarterly Taxes with Irregular Creator Income',
    excerpt: 'Master quarterly tax payments even with unpredictable YouTube ad revenue and sponsorship income. Includes free calculator.',
    publishedAt: '2024-01-05',
    readTime: '5 min read',
    category: 'Tax Strategy'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Creator Finance Blog
          </h1>
          <p className="text-xl text-gray-600">
            Expert financial advice for content creators and digital entrepreneurs
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">{post.readTime}</span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-green-600">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <time className="text-gray-500 text-sm">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-green-600 font-medium hover:text-green-700 transition-colors"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
