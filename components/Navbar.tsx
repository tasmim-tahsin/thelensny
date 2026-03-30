'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from '@/components/ThemeProvider'
import { Sun, Moon, Menu, X, CameraIcon } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '#contact', label: 'Contact Us' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      // style={{ background: scrolled ? 'var(--bg2)' : 'transparent', borderBottom: scrolled ? '1px solid var(--border)' : 'none', backdropFilter: scrolled ? 'blur(12px)' : 'none' }}
      style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)', backdropFilter: 'blur(12px)' }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
       

        <Link href="/" className="flex items-center gap-2">
  {theme === 'dark' ? (
    <img src="/logo.webp" alt="The Lens" className="h-8 w-auto" />
  ) : (
    <>
      <img src="/logo2.PNG" alt="The Lens" className="h-8 w-auto" />
      <span className="text-md font-display font-bold uppercase tracking-widest text-[var(--gray2)]">
        THE LENS
      </span>
    </>
  )}
</Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="font-display font-semibold text-sm uppercase tracking-wide transition-colors duration-200"
              style={{ color: 'var(--gray)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--red)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--gray)')}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className="w-9 h-9 flex items-center justify-center rounded-full border transition-colors"
            style={{ border: '1px solid var(--border2)', color: 'var(--gray)' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--red)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border2)')}>
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <Link href="#contact" className="btn-red hidden md:inline-flex text-xs px-5 py-2.5">Get A Quote</Link>
          <button onClick={() => setOpen(!open)} className="md:hidden w-9 h-9 flex items-center justify-center"
            style={{ border: '1px solid var(--border2)', color: 'var(--white)' }}>
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}
        style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div className="px-6 py-5 flex flex-col gap-4">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="font-display font-bold text-base uppercase tracking-wide"
              style={{ color: 'var(--gray)' }}>{l.label}</Link>
          ))}
          <Link href="#contact" onClick={() => setOpen(false)} className="btn-red mt-2 justify-center">Get A Quote</Link>
        </div>
      </div>
    </nav>
  )
}
