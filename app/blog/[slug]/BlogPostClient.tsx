'use client'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { ChevronLeft, Clock, Tag, ArrowUpRight, Calendar, User } from 'lucide-react'
import type { BlogPost } from '@/lib/data'
import { blogPosts } from '@/lib/data'

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const related = blogPosts.filter(p => p.slug !== post.slug).slice(0, 2)
  return (
    <>
      <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
        {/* Hero */}
        <div className={`relative pt-24 pb-16 bg-gradient-to-br ${post.gradient}`}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 50%, var(--bg) 100%)' }} />
          <div className="relative max-w-4xl mx-auto px-6 pt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm mb-8 font-display font-bold uppercase tracking-wide text-white/70 hover:text-white transition-colors">
              <ChevronLeft size={14} /> All Articles
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <span className="font-display font-bold text-xs px-2 py-1" style={{ background: 'var(--red)', color: '#fff' }}>{post.category}</span>
              <div className="flex items-center gap-1 text-xs text-white/60"><Clock size={10} /> {post.readTime}</div>
            </div>
            <h1 className="font-display font-black uppercase text-white mb-6 leading-none"
              style={{ fontSize: 'clamp(32px,5vw,64px)', letterSpacing: '-0.02em' }}>{post.title}</h1>
            <p className="text-base text-white/70 max-w-2xl mb-8 leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center gap-5 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 flex items-center justify-center" style={{ background: 'var(--red)' }}><User size={14} color="#fff" /></div>
                <div>
                  <div className="text-sm font-display font-bold uppercase text-white">{post.author}</div>
                  <div className="text-xs text-white/50">{post.authorRole}</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-white/60"><Calendar size={11} /> {post.date}</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-[1fr_200px] gap-12 items-start">
            <article className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
            <aside className="space-y-5 sticky top-24">
              <div className="p-5" style={{ background: 'var(--bg3)', border: '1px solid var(--border2)' }}>
                <h4 className="font-display font-black text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--red)' }}>Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="flex items-center gap-1 text-xs px-2 py-1 font-display font-bold uppercase"
                      style={{ background: 'var(--bg2)', color: 'var(--gray)', border: '1px solid var(--border2)' }}>
                      <Tag size={9} /> {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-5" style={{ background: 'var(--bg3)', border: '1px solid var(--border2)' }}>
                <h4 className="font-display font-black text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--red)' }}>Share</h4>
                <div className="flex flex-wrap gap-2">
                  {['Twitter', 'LinkedIn', 'Copy Link'].map(s => (
                    <button key={s} className="text-xs px-3 py-1.5 font-display font-bold uppercase transition-colors"
                      style={{ background: 'var(--bg2)', color: 'var(--gray)', border: '1px solid var(--border2)' }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--red)')}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border2)')}>{s}</button>
                  ))}
                </div>
              </div>
              <div className="p-5" style={{ background: 'var(--red)' }}>
                <h4 className="font-display font-black text-sm uppercase text-white mb-2">Work With Us</h4>
                <p className="text-xs text-white/80 mb-4">Ready to tell your brand's story?</p>
                <Link href="/#contact" className="btn-outline-white text-xs px-4 py-2 w-full justify-center">
                  GET A QUOTE <ArrowUpRight size={11} />
                </Link>
              </div>
            </aside>
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <div className="divider mb-10" />
              <h3 className="font-display font-black text-2xl uppercase mb-6" style={{ color: 'var(--white)' }}>MORE FROM THE JOURNAL</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {related.map(rpost => (
                  <Link key={rpost.slug} href={`/blog/${rpost.slug}`} className="group block">
                    <article className="blog-card flex gap-4 p-4">
                      <div className={`w-20 h-20 flex-shrink-0 bg-gradient-to-br ${rpost.gradient}`} />
                      <div>
                        <div className="font-display font-bold text-xs uppercase mb-1" style={{ color: 'var(--red)' }}>{rpost.category}</div>
                        <h4 className="font-display font-black text-sm uppercase leading-tight mb-2" style={{ color: 'var(--white)' }}>{rpost.title}</h4>
                        <div className="flex items-center gap-1 font-display font-bold text-xs uppercase" style={{ color: 'var(--red)' }}>
                          READ <ArrowUpRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
