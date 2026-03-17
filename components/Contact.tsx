'use client'
import { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true)
    await new Promise(r => setTimeout(r, 1400)); setLoading(false); setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 lg:py-32" style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-16">
          <div className="section-tag mb-4">Get In Touch</div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="font-display font-black uppercase leading-none"
              style={{ fontSize: 'clamp(36px,5vw,72px)', color: 'var(--white)' }}>
              LET'S CREATE<br /><span style={{ color: 'var(--red)' }}>SOMETHING</span><br />EXTRAORDINARY
            </h2>
            <p className="max-w-xs text-sm" style={{ color: 'var(--gray)' }}>
              Tell us about your project. We respond within 24 hours.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-[1fr_360px] gap-10">
          {/* Form */}
          <AnimatedSection>
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-20 text-center"
                style={{ border: '1px solid var(--border2)', background: 'var(--bg3)' }}>
                <div className="w-16 h-16 flex items-center justify-center" style={{ background: 'var(--red)' }}>
                  <CheckCircle size={28} color="#fff" />
                </div>
                <h3 className="font-display font-black text-2xl uppercase" style={{ color: 'var(--white)' }}>Message Sent!</h3>
                <p className="text-sm max-w-xs" style={{ color: 'var(--gray)' }}>Thank you. Our team will get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="btn-outline-white mt-2">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 space-y-4" style={{ background: 'var(--bg3)', border: '1px solid var(--border2)' }}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-display font-bold text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--gray)' }}>Full Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="lens-input" />
                  </div>
                  <div>
                    <label className="block font-display font-bold text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--gray)' }}>Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className="lens-input" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-display font-bold text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--gray)' }}>Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (000) 000-0000" className="lens-input" />
                  </div>
                  <div>
                    <label className="block font-display font-bold text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--gray)' }}>Service Needed</label>
                    <select name="service" value={form.service} onChange={handleChange} className="lens-input">
                      <option value="">Select a service</option>
                      {['Videography','Photography','Advertisements','Documentary','Post-Production','Content Creation'].map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block font-display font-bold text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--gray)' }}>Budget Range</label>
                  <select name="budget" value={form.budget} onChange={handleChange} className="lens-input">
                    <option value="">Select budget range</option>
                    <option>Under $2,000</option>
                    <option>$2,000 – $5,000</option>
                    <option>$5,000 – $10,000</option>
                    <option>$10,000 – $25,000</option>
                    <option>$25,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block font-display font-bold text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--gray)' }}>Tell Us About Your Project *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Describe your vision, timeline, and any requirements..." className="lens-input resize-none" />
                </div>
                <button type="submit" disabled={loading} className="btn-red w-full justify-center text-sm">
                  {loading ? (
                    <><div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" /> SENDING...</>
                  ) : (
                    <><Send size={14} /> SEND MESSAGE</>
                  )}
                </button>
              </form>
            )}
          </AnimatedSection>

          {/* Sidebar */}
          <div className="space-y-4">
            {[
              { Icon: MapPin, label: 'OUR OFFICE', lines: ['2425 Hc 1, Glennallen', 'Alaska 99588, USA'] },
              { Icon: Phone, label: 'PHONE', lines: ['(646) 874-1735', '(934) 444-8118'] },
              { Icon: Mail, label: 'EMAIL', lines: ['thelensny@gmail.com'] },
            ].map(({ Icon, label, lines }, i) => (
              <AnimatedSection key={label} delay={i * 80}>
                <div className="flex gap-4 p-5" style={{ background: 'var(--bg3)', border: '1px solid var(--border2)' }}>
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ background: 'var(--red)' }}>
                    <Icon size={16} color="#fff" />
                  </div>
                  <div>
                    <div className="font-display font-black text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--red)' }}>{label}</div>
                    {lines.map(l => <div key={l} className="text-sm" style={{ color: 'var(--white)' }}>{l}</div>)}
                  </div>
                </div>
              </AnimatedSection>
            ))}

            <AnimatedSection delay={300}>
              <div className="p-5" style={{ background: 'var(--bg3)', border: '1px solid var(--border2)' }}>
                <div className="font-display font-black text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--red)' }}>STUDIO HOURS</div>
                {[
                  { d: 'Monday – Friday', t: '9:00 AM – 6:00 PM' },
                  { d: 'Saturday', t: '10:00 AM – 4:00 PM' },
                  { d: 'Sunday', t: 'By Appointment' },
                ].map(h => (
                  <div key={h.d} className="flex justify-between py-2 text-sm border-b last:border-0" style={{ borderColor: 'var(--border)', color: 'var(--gray)' }}>
                    <span>{h.d}</span>
                    <span style={{ color: 'var(--white)' }}>{h.t}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
