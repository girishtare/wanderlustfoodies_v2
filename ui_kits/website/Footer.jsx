/* Wanderlust Foodies — site footer */
function Footer({ onNav }) {
  const { StampSeal } = window.WanderlustFoodiesDesignSystem_288b64;
  const socials = ['Facebook', 'Instagram', 'Threads', 'X', 'YouTube', 'WhatsApp'];
  const cols = [
    { h: 'Explore', items: ['Home', 'Blogs', 'Recipes', 'The Book'] },
    { h: 'Quick Links', items: ['About Us', 'Privacy Policy', 'Subscribe'] },
  ];
  return (
    <footer style={{ background: 'var(--surface-ink)', color: 'var(--kraft-300)' }}>
      <div style={{ maxWidth: '78rem', margin: '0 auto', padding: 'clamp(2.5rem,5vw,4rem) clamp(1rem,4vw,2.5rem)', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.4fr', gap: 36 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em', fontSize: 22, color: 'var(--paper-100)' }}>Wanderlust Foodies</div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 15, lineHeight: 1.6, marginTop: 12, maxWidth: '34ch' }}>Exploring the world one bite at a time. Join us on our culinary adventures and discover flavours from around the globe.</p>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: 12, color: 'var(--turmeric-300)', marginBottom: 14 }}>{c.h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {c.items.map((i) => (
                <li key={i}><a href="#" onClick={(e) => e.preventDefault()} style={{ fontFamily: 'var(--font-sans)', fontSize: 14.5, color: 'var(--kraft-300)', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--paper-0)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--kraft-300)'}>{i}</a></li>
              ))}
            </ul>
          </div>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>
          <StampSeal size={104} color="var(--turmeric-300)" />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
            {socials.map((s) => (
              <span key={s} style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, color: 'var(--kraft-300)', border: '1.5px solid var(--border-on-dark)', borderRadius: 'var(--radius-pill)', padding: '4px 10px' }}>{s}</span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--border-on-dark)', textAlign: 'center', padding: '16px', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 13.5, color: 'var(--kraft-500)' }}>
        © 2025. Made with love by Wanderlust Foodies. Where travel meets taste.
      </div>
    </footer>
  );
}
window.Footer = Footer;
