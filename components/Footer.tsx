'use client'
import Link from 'next/link'
import { Instagram, Facebook, Youtube, Twitter, Camera } from 'lucide-react'
import { useState } from 'react'

const navLinks = ['Home', 'About Us', 'Services', 'Portfolio', 'Blog', 'Contact']

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer style={{ background: 'var(--red)' }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand col */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Camera size={20} color="#fff" />
              <span className="font-display font-black text-xl uppercase text-white">THE LENS NY</span>
            </div>
            <div className="font-display font-black text-base uppercase text-white mb-1">OUR OFFICE</div>
            <p className="text-sm text-white/80 mb-4 leading-snug">2425 Hc 1, Glennallen<br />Alaska 99588, USA</p>
            <div className="font-display font-black text-base uppercase text-white mb-1">CONTACT US</div>
            <p className="text-sm text-white/80">(646) 874-1735 / (934) 444-8118</p>
            <a href="mailto:thelensny@gmail.com" className="text-sm text-white/80 hover:text-white transition-colors">thelensny@gmail.com</a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-black text-base uppercase text-white mb-5">NAVIGATION</h4>
            <ul className="space-y-2.5">
              {navLinks.map(l => (
                <li key={l}>
                  <Link href={l === 'Home' ? '/' : l === 'Blog' ? '/blog' : `#${l.toLowerCase().replace(' ', '')}`}
                    className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(255,255,255,0.2)' }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-black text-sm uppercase text-white mb-1 leading-tight">
              SUBSCRIBE TO OUR NEWSLETTER<br />FOR THE LATEST UPDATES
            </h4>
            <div className="flex mt-4 mb-6">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="thelensny@gmail.com"
                className="flex-1 text-sm px-4 py-3 outline-none"
                style={{ background: 'rgba(0,0,0,0.25)', color: '#fff', border: 'none' }} />
              <button className="px-4 py-3 font-display font-bold text-xs uppercase tracking-wide"
                style={{ background: '#fff', color: 'var(--red)', whiteSpace: 'nowrap' }}>
                SUBSCRIBE NOW
              </button>
            </div>
            <div className="font-display font-black text-sm uppercase text-white mb-3">SOCIAL MEDIA</div>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: 'rgba(0,0,0,0.25)', color: '#fff' }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Giant brand name */}
        <div className="overflow-hidden -mx-6 -mb-8">
          <div className="font-display font-black uppercase text-center leading-none select-none"
            style={{ fontSize: 'clamp(56px,12vw,160px)', color: 'rgba(255,255,255,0.15)', letterSpacing: '-0.02em', paddingBottom: 0 }}>
            THE LENS NY
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0 24px' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between py-4 mx-8"
            style={{ background: 'rgba(0,0,0,0.3)', padding: '14px 32px', borderRadius: 40 }}>
            <a href="#" className="text-xs text-white/70 hover:text-white transition-colors">Privacy Policy</a>
            <p className="text-xs text-white/70 text-center">© {new Date().getFullYear()} The Lens New York. All Rights Reserved.</p>
            <a href="#" className="text-xs text-white/70 hover:text-white transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
