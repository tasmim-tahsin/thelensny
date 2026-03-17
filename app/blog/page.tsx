'use client'
import { blogPosts } from '@/lib/data'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { ArrowUpRight, Clock, ChevronLeft } from 'lucide-react'

export default function BlogPage() {
  return (
    <>
      <div className="min-h-screen pt-24 pb-20" style={{ background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm mb-10 font-display font-bold uppercase tracking-wide"
            style={{ color: 'var(--gray)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--red)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--gray)')}>
            <ChevronLeft size={14} /> Back to Home
          </Link>

          <div className="mb-16 text-center">
            <div className="section-tag justify-center mx-auto mb-4">Insights &amp; Ideas</div>
            <h1 className="font-display font-black uppercase" style={{ fontSize: 'clamp(48px,8vw,100px)', color: 'var(--white)', letterSpacing: '-0.02em' }}>
              LATEST INSIGHTS<br />
              IN FILM, <span style={{ color: 'var(--red)' }}>VIDEO</span><br />
              &amp; CREATIVITY
            </h1>
          </div>

          {/* Featured */}
          {blogPosts[0] && (
            <Link href={`/blog/${blogPosts[0].slug}`} className="group block mb-8">
              <article className="blog-card grid lg:grid-cols-[1.3fr_1fr]">
                <div className={`h-64 lg:h-auto bg-gradient-to-br ${blogPosts[0].gradient} relative min-h-[260px]`}>
                  <div className="absolute top-4 left-4">
                    <span className="font-display font-bold text-xs px-2 py-1" style={{ background: 'var(--red)', color: '#fff' }}>FEATURED</span>
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full" style={{ background: 'var(--red)' }} />
                    <span className="font-display font-bold text-xs uppercase tracking-wide" style={{ color: 'var(--red)' }}>{blogPosts[0].category}</span>
                    <span className="font-display font-bold text-xs" style={{ color: 'var(--gray2)' }}>{blogPosts[0].readTime}</span>
                  </div>
                  <h2 className="font-display font-black text-2xl uppercase leading-tight mb-4" style={{ color: 'var(--white)' }}>{blogPosts[0].title}</h2>
                  <p className="text-sm mb-6" style={{ color: 'var(--gray)' }}>{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-display font-bold text-sm uppercase" style={{ color: 'var(--white)' }}>{blogPosts[0].author}</div>
                      <div className="text-xs" style={{ color: 'var(--gray2)' }}>{blogPosts[0].date}</div>
                    </div>
                    <div className="flex items-center gap-1 font-display font-bold text-sm uppercase" style={{ color: 'var(--red)' }}>
                      READ <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          )}

          <div className="grid md:grid-cols-3 gap-5">
            {blogPosts.slice(1).map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                <article className="blog-card h-full flex flex-col">
                  <div className={`h-44 bg-gradient-to-br ${post.gradient} relative flex-shrink-0`}>
                    <div className="absolute bottom-3 left-3">
                      <span className="font-display font-bold text-xs px-2 py-0.5" style={{ background: 'var(--red)', color: '#fff' }}>{post.category}</span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs" style={{ color: 'var(--gray2)' }}>{post.date}</span>
                      <span style={{ color: 'var(--border2)' }}>·</span>
                      <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--gray2)' }}><Clock size={10} /> {post.readTime}</div>
                    </div>
                    <h3 className="font-display font-black text-base uppercase leading-tight mb-3 flex-1" style={{ color: 'var(--white)' }}>{post.title}</h3>
                    <div className="flex items-center gap-1 font-display font-bold text-xs uppercase tracking-wide" style={{ color: 'var(--red)' }}>
                      READ MORE <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
