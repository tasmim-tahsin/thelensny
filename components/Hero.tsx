'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Play, Instagram, Facebook, Youtube, Twitter } from 'lucide-react'

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        let cur = 0; const steps = 60
        const inc = target / steps
        const iv = setInterval(() => {
          cur += inc
          if (cur >= target) { setCount(target); clearInterval(iv) } else setCount(Math.floor(cur))
        }, 2000 / steps)
      }
    }, { threshold: 0.5 })
    obs.observe(el); return () => obs.disconnect()
  }, [target])
  return <span ref={ref}>{count}{suffix}</span>
}

const socials = [
  { Icon: Instagram, href: '#' },
  { Icon: Facebook, href: '#' },
  { Icon: Twitter, href: '#' },
  { Icon: Youtube, href: '#' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden" style={{ background: 'var(--bg)' }}>
      {/* BG overlay image placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full" style={{background: `linear-gradient(135deg,var(--bg) 0%,var(--bg2) 40%,var(--bg3) 100%)`,
          }} />
        {/* Cinematic grain */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
        {/* Red vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 70% 30%, rgba(227,27,35,0.07) 0%, transparent 60%)' }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-8 items-end">
          {/* LEFT: Big headline */}
          <div>
            {/* Top row: avatars + description */}
            <div className="flex items-start gap-6 mb-8">
              <div className="flex -space-x-3">
                {['SC','JO','PA'].map((i, idx) => (
                  <div key={idx} className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-display font-black text-xs"
                    style={{ borderColor: 'var(--red)', background: `hsl(${idx * 40},40%,20%)`, color: '#fff', zIndex: 3 - idx }}>
                    {i}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: 'var(--red)', background: 'var(--red)', color: '#fff', zIndex: 0 }}>
                  <span className="font-display font-black text-xs">+</span>
                </div>
              </div>
              <div>
                <p className="text-sm leading-snug max-w-xs" style={{ color: 'var(--gray)' }}>
                  The Lens is a full-service creative media agency delivering bold visuals and powerful narratives. From commercials to documentaries, we bring your vision to life.
                </p>
              </div>
            </div>

            {/* Giant headline */}
            <h1 className="font-display font-black uppercase leading-none mb-6"
              style={{ fontSize: 'clamp(64px,9vw,120px)', letterSpacing: '-0.02em', color: 'var(--white)' }}>
              OUR LENS<br />
              <span className="text-outline" style={{ fontSize: '0.92em' }}>SEES WHAT</span><br />
              YOUR <span style={{ color: 'var(--red)' }}>HEART</span><br />
              FEELS.
            </h1>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 items-center mt-8">
              <Link href="#portfolio" className="btn-red flex items-center gap-2">
                <Play size={14} fill="white" /> WATCH OUR SHOWREEL
              </Link>
            </div>
          </div>

          {/* RIGHT: Socials + Stats */}
          <div className="flex flex-col items-end gap-8">
            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map(({ Icon, href }, i) => (
                <a key={i} href={href} className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: 'var(--red)', color: '#fff' }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
              {[
                { value: 500, suffix: '+', label: 'Projects' },
                { value: 200, suffix: '+', label: 'Clients' },
                { value: 5, suffix: '+', label: 'Years' },
                { value: 50, suffix: '+', label: 'Awards' },
              ].map(s => (
                <div key={s.label} className="p-4 text-center"
                  style={{ background: 'var(--bg3)', border: '1px solid var(--border2)' }}>
                  <div className="font-display font-black text-4xl" style={{ color: 'var(--red)' }}>
                    <Counter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="font-display font-bold text-xs uppercase tracking-widest mt-1" style={{ color: 'var(--gray2)' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll line */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'var(--border)' }} />
    </section>
  )
}
