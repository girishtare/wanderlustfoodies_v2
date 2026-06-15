/* Wanderlust Foodies — site header / nav */
function Header({ active, onNav }) {
  const { Button } = window.WanderlustFoodiesDesignSystem_288b64;
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'blog', label: 'Blogs' },
    { id: 'recipe', label: 'Recipes' },
    { id: 'book', label: 'The Book' },
  ];
  const [q, setQ] = React.useState(false);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20,
      background: 'rgba(247,241,229,0.86)', backdropFilter: 'blur(10px)',
      borderBottom: '1.5px solid var(--border-hairline)',
    }}>
      <div style={{ maxWidth: '78rem', margin: '0 auto', padding: '12px clamp(1rem,4vw,2.5rem)', display: 'flex', alignItems: 'center', gap: 18 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNav('home'); }} style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none' }}>
          <img src="../../assets/logo/wanderlust-badge.png" alt="Wanderlust Foodies" style={{ height: 46, width: 'auto' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 19, lineHeight: 0.95, color: 'var(--espresso-700)' }}>
            Wanderlust<br /><span style={{ fontWeight: 500, fontSize: 13, letterSpacing: '0.22em', color: 'var(--spice-600)' }}>Foodies</span>
          </span>
        </a>
        <nav style={{ marginLeft: 'auto', display: 'flex', gap: 4, alignItems: 'center' }}>
          {links.map((l) => (
            <a key={l.id} href="#" onClick={(e) => { e.preventDefault(); onNav(l.id); }}
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em',
                fontSize: 13.5, textDecoration: 'none', padding: '8px 14px', borderRadius: 'var(--radius-pill)',
                color: active === l.id ? 'var(--spice-600)' : 'var(--espresso-600)',
                background: active === l.id ? 'var(--spice-50)' : 'transparent',
                transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard)',
              }}
              onMouseEnter={(e) => { if (active !== l.id) e.currentTarget.style.background = 'var(--paper-200)'; }}
              onMouseLeave={(e) => { if (active !== l.id) e.currentTarget.style.background = 'transparent'; }}
            >{l.label}</a>
          ))}
          <button onClick={() => setQ(!q)} aria-label="Search" style={{
            marginLeft: 6, width: 38, height: 38, borderRadius: '50%', border: '1.5px solid var(--border-default)',
            background: 'var(--surface-card)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--espresso-600)',
          }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
          </button>
        </nav>
      </div>
      {q && (
        <div style={{ borderTop: '1.5px solid var(--border-hairline)', background: 'var(--paper-50)' }}>
          <div style={{ maxWidth: '78rem', margin: '0 auto', padding: '12px clamp(1rem,4vw,2.5rem)' }}>
            <input autoFocus placeholder="Search stories & recipes…" style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--text-body)' }} />
          </div>
        </div>
      )}
    </header>
  );
}
window.Header = Header;
