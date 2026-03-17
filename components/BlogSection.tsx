'use client'
import AnimatedSection from '@/components/AnimatedSection'
import { blogPosts } from '@/lib/data'
import Link from 'next/link'
import { ArrowUpRight, Clock } from 'lucide-react'

export default function BlogSection() {
  const posts = blogPosts.slice(0, 3)
  return (
    <section id="blog" className="py-24 lg:py-32" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-16 text-center">
          <div className="section-tag mx-auto justify-center mb-4">From the Journal</div>
          <h2 className="font-display font-black uppercase" style={{ fontSize: 'clamp(32px,5vw,64px)', color: 'var(--white)' }}>
            LATEST INSIGHTS IN FILM,<br />
            <span style={{ color: 'var(--red)' }}>VIDEO &amp; CREATIVITY</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 80}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <article className="blog-card h-full flex flex-col">
                  {/* Image */}
                  <div className="overflow-hidden" style={{ height: 220 }}>
                    <div className={`blog-img w-full h-full bg-gradient-to-br ${post.gradient}`} />
                  </div>
                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'var(--red)' }} />
                      <span className="text-xs font-display font-bold uppercase tracking-wide" style={{ color: 'var(--red)' }}>
                        {post.date}
                      </span>
                      <span className="text-xs font-display font-bold uppercase tracking-wide ml-auto" style={{ color: 'var(--gray2)' }}>
                        {post.category}
                      </span>
                    </div>
                    <h3 className="font-display font-black text-base uppercase leading-tight mb-3 flex-1"
                      style={{ color: 'var(--white)', lineHeight: 1.2 }}>
                      {post.title}
                    </h3>
                    <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--gray)' }}>
                      {post.excerpt.slice(0, 100)}...
                    </p>
                    <div className="flex items-center gap-1 text-xs font-display font-bold uppercase tracking-wide"
                      style={{ color: 'var(--red)' }}>
                      READ MORE <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
