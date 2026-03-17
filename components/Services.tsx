'use client'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const services = [
  { name: 'VIDEO PRODUCTION', num: '01', tags: ['Brand Films', 'Commercials', 'Docs'] },
  { name: 'VIDEO EDITING', num: '02', tags: ['Color Grading', 'VFX', 'Motion'] },
  { name: 'SCRIPT WRITING', num: '03', tags: ['English', 'Bengali', 'Voice-Over'] },
  { name: 'PHOTOGRAPHY', num: '04', tags: ['Editorial', 'Product', 'Events'] },
  { name: 'MOTION GRAPHICS', num: '05', tags: ['Animation', 'Lower Thirds', '3D'] },
  { name: 'SOUND DESIGN', num: '06', tags: ['Music Production', 'Mixing', 'Foley'] },
]

const whyCards = [
  {
    num: '55+', label: 'PROJECTS COMPLETED', desc: 'Across film, ads, cultural events, and branded content.',
    showAvatars: true,
  },
  {
    icon: '', label: 'END TO END SERVICES', desc: 'From scripting to post-production, all in one place — so your workflow stays seamless and your vision stays intact.',
    showAvatars: false,
  },
  {
    icon: '', label: 'CLIENT FOCUSED APPROACH', desc: 'We listen, adapt, and deliver results that exceed expectations. Every project starts with understanding your goals.',
    showAvatars: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <AnimatedSection className="mb-16">
          <div className="grid lg:grid-cols-[1fr_auto_auto] items-end gap-6">
            <div>
              <div className="section-tag mb-4">What We Do Best</div>
              <h2 className="font-display font-black uppercase leading-none"
                style={{ fontSize: 'clamp(36px,5vw,64px)', color: 'var(--white)' }}>
                WHAT WE<br />
                DO <span style={{ color: 'var(--red)' }}>BEST</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm" style={{ color: 'var(--gray)' }}>
              From cinematic storytelling to post-production mastery, discover how we bring your vision to life.
            </p>
            <Link href="#contact" className="btn-red self-end">EXPLORE ALL SERVICES</Link>
          </div>
        </AnimatedSection>

        {/* Giant outlined service list */}
        <div className="mb-20">
          {services.map((s, i) => (
            <AnimatedSection key={s.name} delay={i * 60}>
              <div className="service-row group flex items-center justify-between gap-4 cursor-pointer">
                <div className="flex items-baseline gap-6">
                  <span className="font-display font-bold text-xs" style={{ color: 'var(--gray2)' }}>{s.num}</span>
                  <span className="service-name font-display font-black uppercase transition-all duration-300"
                    style={{ fontSize: 'clamp(28px,5vw,72px)', color: 'var(--white)', letterSpacing: '-0.01em' }}>
                    {s.name}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex gap-2">
                    {s.tags.map(t => (
                      <span key={t} className="text-xs px-2 py-1 font-display font-semibold uppercase tracking-wide"
                        style={{ background: 'var(--bg3)', color: 'var(--gray2)', border: '1px solid var(--border)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight size={22} className="service-arrow flex-shrink-0" style={{ color: 'var(--gray2)' }} />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Why cards */}
        <AnimatedSection>
          <h2 className="font-display font-black uppercase text-right leading-none mb-8"
            style={{ fontSize: 'clamp(28px,4vw,56px)', color: 'var(--white)' }}>
            WHY BRANDS<br />TRUST <span style={{ color: 'var(--red)' }}>THE LENS</span>
          </h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyCards.map((card, i) => (
            <AnimatedSection key={card.label} delay={i * 80}>
              <div className="p-6 h-full flex flex-col justify-between" style={{ background: 'var(--bg3)', border: '1px solid var(--border2)', minHeight: 220 }}>
                {/* Top icons */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 flex items-center justify-center" style={{ border: '1px solid var(--border2)' }}>
                    <div className="w-4 h-4" style={{ background: 'var(--border2)' }} />
                  </div>
                  <div className="text-2xl opacity-40">{card.icon || ''}</div>
                </div>

                {card.num && (
                  <div className="font-display font-black mb-1" style={{ fontSize: 56, color: 'var(--white)', lineHeight: 1 }}>
                    {card.num}
                  </div>
                )}

                <h3 className="font-display font-black text-base uppercase mb-2" style={{ color: 'var(--white)' }}>{card.label}</h3>
                <p className="text-sm" style={{ color: 'var(--gray)' }}>{card.desc}</p>

                {card.showAvatars && (
                  <div className="flex -space-x-2 mt-4">
                    {['SC','JO','PA'].map((ini, idx) => (
                      <div key={idx} className="w-8 h-8 rounded-full border-2 flex items-center justify-center font-display font-black text-xs"
                        style={{ borderColor: 'var(--red)', background: `hsl(${idx*50},30%,20%)`, color: '#fff', zIndex: 3-idx }}>
                        {ini}
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center font-display font-black text-xs"
                      style={{ borderColor: 'var(--red)', background: 'var(--red)', color: '#fff' }}>+</div>
                  </div>
                )}

                <Link href="#contact" className="flex items-center gap-1 text-xs font-display font-bold uppercase tracking-wider mt-4"
                  style={{ color: 'var(--red)' }}>
                  LEARN MORE <ArrowUpRight size={12} />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
