'use client'
import AnimatedSection from '@/components/AnimatedSection'

const testimonials = [
  {
    company: 'MARKO – DIGITAL MARKETING AGENCY',
    quote: 'Working with The Lens was a seamless process from start to finish, delivering exceptional visuals that exceeded our creative expectations perfectly.',
    name: 'Alex Morgan', role: 'Marketing Director', initials: 'AM', hue: 200,
  },
  {
    company: 'NOVAX – STARTUP ACCELERATOR',
    quote: 'The Lens turned a complex script into a visually engaging production that not only met our vision, but also added layers of depth, story, and clarity we hadn\'t imagined.',
    name: 'Chloe Ramirez', role: 'Brand Lead', initials: 'CR', hue: 140,
  },
  {
    company: 'VELOCITY – SPORTS BRAND',
    quote: 'Impressed by their dedication and storytelling. The Lens crafted visuals that matched our goals and resonated strongly with our audience base.',
    name: 'Ethan Brooks', role: 'CMO', initials: 'EB', hue: 30,
  },
  {
    company: 'LUMIO – CREATIVE AGENCY',
    quote: 'The Lens production team delivered stunning work, showing clear attention to detail and an incredible ability to capture the message effectively.',
    name: 'Jamie Carter', role: 'Creative Director', initials: 'JC', hue: 280,
  },
  {
    company: 'DHAKA THREADS NYC',
    quote: 'As a Bangladeshi-owned brand, we needed a team that understood both our culture and the global stage. The Lens brought both — the bilingual scriptwriting was flawless.',
    name: 'Rahul Islam', role: 'Brand Director', initials: 'RI', hue: 60,
  },
  {
    company: 'GRAVITAS – TECH MEDIA GROUP',
    quote: 'Every shot, every transition, every frame — The Lens brought cinematic brilliance with unmatched precision and style that made our brand shine.',
    name: 'Nicole Adams', role: 'Head of Content', initials: 'NA', hue: 320,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: 'var(--bg)' }}>
      {/* Full-width banner */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0505 50%, #0a0a0a 100%)',
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display font-black uppercase"
              style={{ fontSize: 'clamp(32px,5vw,72px)', color: 'var(--white)', lineHeight: 1 }}>
              TRUSTED BY CREATIVE AGENCIES,<br />
              <span style={{ color: 'var(--red)' }}>BRANDS &amp; STORYTELLERS.</span>
            </h2>
          </AnimatedSection>
        </div>
      </div>

      {/* 6 testimonial cards */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 70}>
              <div className="testi-card h-full flex flex-col justify-between">
                {/* Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-2xl font-display font-black leading-none" style={{ color: 'var(--red)' }}>"</div>
                  <span className="font-display font-black text-xs uppercase tracking-wide" style={{ color: 'var(--red)' }}>
                    {t.company}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: 'var(--gray)' }}>
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-display font-black text-sm flex-shrink-0"
                    style={{ background: `hsl(${t.hue},40%,22%)`, color: `hsl(${t.hue},70%,70%)` }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm uppercase" style={{ color: 'var(--white)' }}>{t.name}</div>
                    <div className="text-xs" style={{ color: 'var(--gray2)' }}>{t.role}</div>
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
