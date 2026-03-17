'use client'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import { Instagram, Facebook, Twitter, Camera, Film, Pencil, Music } from 'lucide-react'

const members = [
  { name: 'Shamim Al Amin', role: 'Co Founder & Team Lead', Icon: Camera, src: '/image1.png', hue: 200 },
  { name: 'Muhammad Shofiul Alam', role: 'Co Founder', Icon: Film, src: '/image2.png', hue: 140 },
  { name: 'Jayat Rafique', role: 'Co Founder', Icon: Pencil, src: '/image3.png', hue: 30 },
  { name: 'LEO FERNANDEZ', role: 'Cinematographer', Icon: Music, src: '/image4.png', hue: 280 },
]

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-32" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* CTA Banner (red) */}
        <AnimatedSection className="mb-20">
          <div className="relative overflow-hidden p-10 lg:p-14" style={{ background: 'var(--red)' }}>
            {/* Photographer silhouette */}
            <div className="absolute left-0 top-0 bottom-0 w-1/3 opacity-20 flex items-center justify-center">
              <Camera size={160} strokeWidth={0.5} className="text-white" />
            </div>
            <div className="relative grid lg:grid-cols-2 gap-6 items-center">
              <h2 className="font-display font-black uppercase leading-none"
                style={{ fontSize: 'clamp(36px,5vw,80px)', color: '#fff' }}>
                LET'S TURN YOUR<br />
                VISION INTO<br />
                CINEMATIC<br />
                REALITY
              </h2>
              <div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  From concept development to post-production, we craft cinematic experiences that captivate and inspire. Let's create something extraordinary together.
                </p>
                <Link href="#contact" className="btn-outline-white">FREE CONSULTATION</Link>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Team header */}
        <AnimatedSection className="mb-12">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
            <div>
              <h2 className="font-display font-black uppercase leading-none"
                style={{ fontSize: 'clamp(32px,4vw,56px)', color: 'var(--white)' }}>
                MEET THE<br />CREATIVE<br />MINDS<br />BEHIND<br />THE LENS
              </h2>
              <p className="text-sm mt-4 mb-6" style={{ color: 'var(--gray)' }}>
                Our team is a collective of visionary directors, cinematographers, editors, and storytellers who turn concepts into cinematic experiences.
              </p>
              <Link href="#contact" className="btn-red text-sm">VIEW ALL TEAM</Link>
            </div>

            {/* Team grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {members.map((m, i) => {
                const Icon = m.Icon
                return (
                  <AnimatedSection key={m.name} delay={i * 80}>
                    <div className="team-card group" style={{ background: 'var(--bg3)' }}>
                      {/* Photo placeholder */}
                      <div className="relative overflow-hidden" style={{ height: 240 }}>
                        <div className="w-full h-full flex items-center justify-center"
                          style={{ background: `linear-gradient(135deg, hsl(${m.hue},20%,10%) 0%, hsl(${m.hue},30%,18%) 100%)` }}>
                          <img src={`${m.src}`} alt={m.name} className="h-full transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        {/* Socials overlay */}
                        <div className="team-socials">
                          {[Instagram, Facebook, Twitter].map((SI, j) => (
                            <a key={j} href="#" className="w-7 h-7 rounded-full flex items-center justify-center"
                              style={{ background: 'var(--red)', color: '#fff' }}>
                              <SI size={12} />
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-display font-black text-base uppercase" style={{ color: 'var(--white)' }}>{m.name}</h3>
                        <p className="text-xs mt-0.5" style={{ color: 'var(--gray2)' }}>{m.role}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
