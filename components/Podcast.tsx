'use client'
import AnimatedSection from '@/components/AnimatedSection'
import { Mic, Clock, Calendar, ExternalLink, Play } from 'lucide-react'

const podcasts = [
  { videoId: 'UvH0GUPSw_Q', title: 'হুন্ডি vs বৈধ টাকা পাঠানো — প্রবাসীদের জন্য গুরুত্বপূর্ণ সতর্কতা | Mohammad Malek', desc: 'Learn about the risks and benefits of sending money internationally as a migrant worker.', episode: 12, date: 'March 2026', duration: '30 min' },
  { videoId: 'vOtzS5gJLxU', title: 'Welcome to The Lens New York নিউইয়র্কে বাংলা ভিডিও প্রোডাকশন Official Intro', desc: 'How small businesses can leverage video content to build trust, grow audiences, and compete with larger brands.', episode: 11, date: 'March 2026', duration: '8 min' },
  { videoId: 'DFMKAvlrNl0', title: 'From Struggle to Success | Bobby-Tariq Tutoring Center NY', desc: 'Bobby-Tariq Tutoring Center helps students build strong academic foundations and achieve top scores through expert guidance and structured preparation programs.', episode: 1, date: 'March 2026', duration: '19 min' },
]

export default function Podcast() {
  return (
    <section id="podcast" className="py-24 lg:py-32" style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-16">
          <div className="section-tag mb-4">On The Record</div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="font-display font-black uppercase leading-none"
              style={{ fontSize: 'clamp(36px,5vw,72px)', color: 'var(--white)' }}>
              THE LENS<br /><span style={{ color: 'var(--red)' }}>PODCAST</span>
            </h2>
            <p className="max-w-xs text-sm" style={{ color: 'var(--gray)' }}>
              Deep conversations about visual storytelling, filmmaking craft, and building brands through content.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5">
          {podcasts.map((p, i) => (
            <AnimatedSection key={p.episode} delay={i * 100}>
              <div className="group h-full" style={{ background: 'var(--bg3)', border: '1px solid var(--border2)' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--red)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border2)')}>
                {/* Video area */}
                <div className="relative" style={{ paddingBottom: '56.25%', background: 'var(--bg2)' }}>
                  {p.videoId.startsWith('REPLACE') ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3" style={{ background: '#0d0d0d' }}>
                      <div className="play-btn"><Play size={20} fill="white" style={{ color: '#fff' }} /></div>
                      <span className="text-xs font-display font-bold uppercase" style={{ color: 'var(--gray2)' }}>EP. {String(p.episode).padStart(2,'0')}</span>
                    </div>
                  ) : (
                    <iframe className="absolute inset-0 w-full h-full border-0"
                      src={`https://www.youtube-nocookie.com/embed/${p.videoId}?rel=0`}
                      title={p.title} allowFullScreen />
                  )}
                </div>
                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display font-bold text-xs px-2 py-0.5" style={{ background: 'var(--red)', color: '#fff' }}>
                      EP. {String(p.episode).padStart(2, '0')}
                    </span>
                    <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--gray2)' }}>
                      <Clock size={10} /> {p.duration}
                    </div>
                    <div className="flex items-center gap-1 text-xs ml-auto" style={{ color: 'var(--gray2)' }}>
                      <Calendar size={10} /> {p.date}
                    </div>
                  </div>
                  <h3 className="font-display font-black text-lg uppercase leading-tight mb-2" style={{ color: 'var(--white)' }}>{p.title}</h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--gray)' }}>{p.desc}</p>
                  <a href={`https://youtube.com`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-display font-bold uppercase tracking-wide"
                    style={{ color: 'var(--red)' }}>
                    WATCH ON YOUTUBE <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
