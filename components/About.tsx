'use client'
import AnimatedSection from '@/components/AnimatedSection'
import { Film, Camera, Clapperboard, Globe } from 'lucide-react'

const cards = [
  {
    icon: Clapperboard,
    title: 'Creative Film Direction',
    desc: 'Award-winning directors who craft every shot with intention. From pre-production to final delivery, our directorial vision ensures your story is told with cinematic power and precision.',
    red: false,
  },
  {
    icon: Film,
    title: 'Expert Post Production',
    desc: 'Color grading, motion graphics, sound design, subtitles, voice-over — our post-production pipeline transforms raw footage into polished, broadcast-ready masterpieces.',
    red: true,
  },
  {
    icon: Camera,
    title: 'Cinematic Visual Style',
    desc: 'Every frame is composed with the eye of a fine art photographer. We use film-grade lenses, professional lighting, and decades of visual expertise to make your brand unforgettable.',
    red: false,
  },
  {
    icon: Globe,
    title: 'Global Project Reach',
    desc: 'Brands, causes, and stories from New York to Bangladesh. We work across cultures, languages, and platforms to bring your narrative to audiences wherever they are.',
    red: false,
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Top: headline + stamp */}
        <AnimatedSection className="mb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display font-black uppercase leading-none"
                style={{ fontSize: 'clamp(40px,6vw,80px)', color: 'var(--white)' }}>
                CRAFTING STORIES<br />
                THROUGH <span className="text-outline">CINEMATIC</span><br />
                FRAMES
              </h2>
            </div>
            {/* Circular stamp */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 120 120" className="w-full h-full animate-spin" style={{ animationDuration: '12s' }}>
                  <defs>
                    <path id="circle-text" d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" />
                  </defs>
                  <circle cx="60" cy="60" r="55" fill="none" stroke="var(--red)" strokeWidth="1.5" />
                  <text fill="var(--white)" fontSize="8.5" fontFamily="Barlow Condensed" fontWeight="800" letterSpacing="2" textAnchor="middle">
                    <textPath href="#circle-text">
                      • THE LENS NY • FILM AND VIDEO PRODUCTION •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-3xl">✦</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Description */}
        <AnimatedSection className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div />
            <p className="text-base leading-relaxed" style={{ color: 'var(--gray)' }}>
              The Lens New York is a creative media agency based on the belief that every story deserves to be told with power, passion, and precision. Born from the creative vision of three friends, we connect brands with people through authentic visual storytelling — whether it's a commercial, documentary, or branded content. We craft visuals that resonate.
            </p>
          </div>
        </AnimatedSection>

        {/* Cards grid + cameraman image */}
        <div className="grid lg:grid-cols-[360px_1fr] gap-8 items-start">
          {/* Left: Photographer image placeholder */}
          <AnimatedSection>
            <div className="relative overflow-hidden" style={{ background: 'var(--bg3)', minHeight: '400px', border: '1px solid var(--border)' }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4" style={{ background: 'linear-gradient(135deg, #0d0d0d 0%, #1a0a0a 100%)' }}>
                <Camera size={60} strokeWidth={1} style={{ color: 'var(--red)', opacity: 0.4 }} />
                <div className="font-display font-black text-lg uppercase tracking-widest text-center px-6" style={{ color: 'var(--gray2)' }}>
                  Cinematographer<br />at work
                </div>
              </div>
              {/* Red badge */}
              <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: 'var(--red)' }}>
                <div className="font-display font-black text-base uppercase text-white">THE LENS NEW YORK</div>
                <div className="text-xs text-white/70 mt-0.5">Creative Media Agency since 2019</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Feature cards 2x2 */}
          <div className="grid sm:grid-cols-2 gap-4">
            {cards.map((card, i) => {
              const Icon = card.icon
              return (
                <AnimatedSection key={card.title} delay={i * 80}>
                  <div className="p-6 h-full" style={{
                    background: card.red ? 'var(--red)' : 'var(--bg3)',
                    border: `1px solid ${card.red ? 'var(--red)' : 'var(--border2)'}`,
                  }}>
                    <Icon size={28} strokeWidth={1.5} style={{ color: card.red ? '#fff' : 'var(--red)' }} className="mb-4" />
                    <h3 className="font-display font-black text-base uppercase mb-3" style={{ color: card.red ? '#fff' : 'var(--white)' }}>
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: card.red ? 'rgba(255,255,255,0.85)' : 'var(--gray)' }}>
                      {card.desc}
                    </p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
