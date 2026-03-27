'use client'
import AnimatedSection from '@/components/AnimatedSection'
import { Play, Circle } from 'lucide-react'

const projects = [
  { title: 'THREADS OF TIME', category: 'Brand Film', client: "Levi's NYC", span: 'col', bg: 'from-neutral-900 to-stone-800', video:'/video2.webm' },
  { title: 'SAVOR THE MOMENT', category: 'Commercial', client: 'Gramercy Tavern', span: '', bg: 'from-emerald-950 to-zinc-900', video:'/video1.webm' },
  { title: 'VOICES OF QUEENS', category: 'Documentary', client: 'NYC Cultural Affairs', span: 'row', bg: 'from-blue-950 to-slate-900', video:'/video1.webm' },
  { title: 'ELEVATE EVERYTHING', category: 'Advertisement', client: 'Nike New York', span: '', bg: 'from-red-950 to-neutral-900', video:'/video1.webm' },
  { title: 'EID ACROSS BOROUGHS', category: 'Cultural Event', client: 'Bangladesh Society NY', span: '', bg: 'from-violet-950 to-zinc-900', video:'/video1.webm' },
  { title: 'SKYLINE SERIES', category: 'Corporate Film', client: 'Hudson Yards', span: '', bg: 'from-sky-950 to-slate-900', video:'/video2.webm' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32" style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-4">
          <div className="section-tag mb-4">Our Work</div>
        </AnimatedSection>

        {/* Giant heading */}
        <AnimatedSection className="mb-16">
          <h2 className="font-display font-black uppercase leading-none text-center"
            style={{ fontSize: 'clamp(56px,10vw,140px)', color: 'var(--bg3)', WebkitTextStroke: '2px var(--white)', letterSpacing: '-0.02em' }}>
            FEATURED<br />
            <span style={{ WebkitTextStroke: '2px var(--gray2)', color: 'transparent' }}>PR</span>
            <span style={{ color: 'var(--red)', WebkitTextStroke: 'none' }}>◉</span>
            <span style={{ WebkitTextStroke: '2px var(--gray2)', color: 'transparent' }}>JECT</span>
          </h2>
        </AnimatedSection>

        {/* Grid: row 1 — big left + small right */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 mb-4">
          {/* Large card */}
          <AnimatedSection>
            <div className="video-card group" style={{ height: 360 }}>
              <div className="w-full h-full relative overflow-hidden">
  <video
    src={projects[0].video}
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
    preload="none"
  />

  {/* overlay */}
  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
</div>
              <div className="mt-3">
                <h3 className="font-display font-black text-xl uppercase" style={{ color: 'var(--white)' }}>{projects[0].title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Circle size={8} fill="var(--red)" style={{ color: 'var(--red)' }} />
                  <span className="font-display font-bold text-xs uppercase tracking-wider" style={{ color: 'var(--red)' }}>{projects[0].category}</span>
                  <span className="text-xs" style={{ color: 'var(--gray2)' }}>{projects[0].client}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Small card */}
          <AnimatedSection delay={100}>
            <div className="video-card group" style={{ height: 360 }}>
              <div className="w-full h-full relative overflow-hidden">
  <video
    src={projects[1].video}
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
    preload="none"
  />

  {/* overlay */}
  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
</div>
              <div className="mt-3">
                <h3 className="font-display font-black text-xl uppercase" style={{ color: 'var(--white)' }}>{projects[1].title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Circle size={8} fill="var(--red)" style={{ color: 'var(--red)' }} />
                  <span className="font-display font-bold text-xs uppercase tracking-wider" style={{ color: 'var(--red)' }}>{projects[1].category}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Row 2 — full width */}
        <AnimatedSection className="mb-4" delay={150}>
          <div className="video-card group">
            <div className="w-full h-full relative overflow-hidden">
  <video
    src={projects[2].video}
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
    preload="none"
  />

  {/* overlay */}
  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
</div>
            <div className="mt-3 flex items-center justify-between">
              <h3 className="font-display font-black text-2xl uppercase" style={{ color: 'var(--white)' }}>{projects[2].title}</h3>
              <div className="flex items-center gap-2">
                <Circle size={8} fill="var(--red)" style={{ color: 'var(--red)' }} />
                <span className="font-display font-bold text-sm uppercase tracking-wider" style={{ color: 'var(--red)' }}>{projects[2].category}</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Row 3 — two equal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.slice(3).map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 80 + 200}>
              <div className="video-card group">
                <div className="w-full h-full relative overflow-hidden">
  <video
    src={p.video}
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
    preload="none"
  />

  {/* overlay */}
  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
</div>
                <div className="mt-3 flex items-start justify-between gap-3">
                  <h3 className="font-display font-black text-lg uppercase" style={{ color: 'var(--white)' }}>{p.title}</h3>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <Circle size={7} fill="var(--red)" style={{ color: 'var(--red)' }} />
                    <span className="font-display font-bold text-xs uppercase" style={{ color: 'var(--red)' }}>{p.category}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
