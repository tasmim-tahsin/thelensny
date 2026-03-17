export default function Brands() {
  const brands = ['NEXORA', 'BRAVIX', 'CREVOX', 'MARKON', 'LUMIO', 'NOVAX', 'VELOCITY', 'ASTRAFILM', 'GRAVITAS', 'DHAKA THREADS']
  const doubled = [...brands, ...brands]
  return (
    <section style={{ background: 'var(--bg3)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '20px 0' }}>
      <div style={{ marginBottom: 8, textAlign: 'center' }}>
        <span className="font-display font-bold text-xs uppercase tracking-widest" style={{ color: 'var(--red)' }}>
          Trusted By Industry Leaders &amp; Creative Brands
        </span>
      </div>
      <div className="overflow-hidden">
        <div className="marquee-track">
          {doubled.map((b, i) => (
            <div key={i} className="flex items-center gap-12 px-10">
              <span className="font-display font-black text-base uppercase tracking-widest whitespace-nowrap" style={{ color: 'var(--gray2)', opacity: 0.5 }}>
                ⊗ {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
