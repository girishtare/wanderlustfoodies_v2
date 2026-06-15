/* ================================================================
   Wanderlust Foodies — Site Chrome (Header + Footer)
   ================================================================ */

function Header({ route, navigate }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'blog', label: 'Blogs' },
    { id: 'recipes', label: 'Recipes' },
    { id: 'about', label: 'About' },
    { id: 'book', label: 'The Book' },
  ];

  const isHero = (route === 'home');
  const light = isHero && !scrolled;

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      background: scrolled ? 'rgba(247,241,229,0.94)' : (isHero ? 'transparent' : 'var(--surface-page)'),
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '1.5px solid var(--border-hairline)' : '1.5px solid transparent',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      transition: 'all 0.3s var(--ease-standard)',
    }}>
      <div style={{ maxWidth:'78rem', margin:'0 auto', padding:'0 clamp(1.25rem,4vw,2.5rem)', height:68, display:'flex', alignItems:'center', gap:0 }}>
        <a href="#home" onClick={e => { e.preventDefault(); navigate('home'); }}
          style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none', flexShrink:0 }}>
          <img src="../assets/logo/wanderlust-badge.png" alt="Wanderlust Foodies" style={{ height:42, width:'auto' }} />
          <div style={{ lineHeight:1 }}>
            <div style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.03em', fontSize:17, color: light ? '#fff' : 'var(--espresso-700)' }}>Wanderlust</div>
            <div style={{ fontFamily:'var(--font-display)', fontWeight:500, fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color: light ? 'rgba(255,255,255,0.75)' : 'var(--spice-600)', marginTop:2 }}>Foodies</div>
          </div>
        </a>

        <nav style={{ marginLeft:'auto', display:'flex', gap:2, alignItems:'center' }}>
          {links.map(l => (
            <a key={l.id} href={'#' + l.id} onClick={e => { e.preventDefault(); navigate(l.id); }}
              style={{
                fontFamily:'var(--font-display)', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.07em',
                fontSize:12.5, textDecoration:'none', padding:'8px 13px', borderRadius:'var(--radius-pill)',
                transition:'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard)',
                color: route === l.id
                  ? 'var(--spice-600)'
                  : light ? 'rgba(255,255,255,0.88)' : 'var(--espresso-600)',
                background: route === l.id ? 'var(--spice-50)' : 'transparent',
              }}
              onMouseEnter={e => { if (route !== l.id) e.currentTarget.style.background = light ? 'rgba(255,255,255,0.12)' : 'var(--paper-200)'; }}
              onMouseLeave={e => { if (route !== l.id) e.currentTarget.style.background = 'transparent'; }}
            >{l.label}</a>
          ))}
          <button onClick={() => navigate('blog')} aria-label="Subscribe"
            style={{ marginLeft:8, fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.06em', fontSize:11.5, padding:'9px 18px', borderRadius:'var(--radius-pill)', border:'none', cursor:'pointer', background:'var(--accent-primary)', color:'#fff', transition:'filter var(--dur-fast) var(--ease-standard)' }}
            onMouseEnter={e => e.currentTarget.style.filter='brightness(1.1)'}
            onMouseLeave={e => e.currentTarget.style.filter='none'}
          >Subscribe</button>
        </nav>
      </div>
    </header>
  );
}

function Footer({ navigate }) {
  const { StampSeal } = window.WanderlustFoodiesDesignSystem_288b64;
  const nav = [
    { label: 'Home', id: 'home' }, { label: 'Blogs', id: 'blog' },
    { label: 'Recipes', id: 'recipes' }, { label: 'About Us', id: 'about' }, { label: 'The Book', id: 'book' },
  ];
  const socials = ['Facebook', 'Instagram', 'Threads', 'X', 'YouTube', 'WhatsApp'];
  return (
    <footer style={{ background: 'var(--espresso-900)', color: 'var(--kraft-300)' }}>
      <div style={{ maxWidth:'78rem', margin:'0 auto', padding:'clamp(3rem,6vw,4.5rem) clamp(1.25rem,4vw,2.5rem) clamp(2rem,4vw,3rem)', display:'grid', gridTemplateColumns:'1.5fr 1fr 0.8fr 1fr', gap:'clamp(1.5rem,4vw,3rem)' }}>
        <div>
          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
            <img src="../assets/logo/wanderlust-badge.png" alt="" style={{ height:44, width:'auto', filter:'brightness(0) saturate(100%) invert(93%) sepia(8%) saturate(700%) hue-rotate(350deg) brightness(104%)' }} />
            <span style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.04em', fontSize:17, color:'var(--paper-100)', lineHeight:1 }}>Wanderlust<br/><span style={{ fontWeight:500, fontSize:10, letterSpacing:'0.22em', color:'var(--spice-400)' }}>Foodies</span></span>
          </div>
          <p style={{ fontFamily:'var(--font-serif)', fontSize:14.5, lineHeight:1.65, margin:'0 0 20px', maxWidth:'30ch' }}>Exploring the world one bite at a time. Join us as we discover amazing flavours from around the globe.</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
            {socials.map(s => <span key={s} style={{ fontFamily:'var(--font-sans)', fontSize:10.5, fontWeight:600, color:'var(--kraft-400)', border:'1.5px solid rgba(210,190,156,0.25)', borderRadius:'var(--radius-pill)', padding:'4px 11px' }}>{s}</span>)}
          </div>
        </div>
        <div>
          <div style={{ fontFamily:'var(--font-sans)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.14em', fontSize:11, color:'var(--turmeric-300)', marginBottom:16 }}>Explore</div>
          <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:10 }}>
            {nav.map(l => <li key={l.id}><a href={'#'+l.id} onClick={e=>{e.preventDefault();navigate(l.id);}} style={{ fontFamily:'var(--font-sans)', fontSize:14.5, color:'var(--kraft-300)', textDecoration:'none' }} onMouseEnter={e=>e.currentTarget.style.color='var(--paper-0)'} onMouseLeave={e=>e.currentTarget.style.color='var(--kraft-300)'}>{l.label}</a></li>)}
          </ul>
        </div>
        <div>
          <div style={{ fontFamily:'var(--font-sans)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.14em', fontSize:11, color:'var(--turmeric-300)', marginBottom:16 }}>Quick Links</div>
          <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:10 }}>
            {['Privacy Policy', 'Contact', 'Subscribe'].map(l => <li key={l}><a href="#home" onClick={e=>e.preventDefault()} style={{ fontFamily:'var(--font-sans)', fontSize:14.5, color:'var(--kraft-300)', textDecoration:'none' }} onMouseEnter={e=>e.currentTarget.style.color='var(--paper-0)'} onMouseLeave={e=>e.currentTarget.style.color='var(--kraft-300)'}>{l}</a></li>)}
          </ul>
        </div>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-start', gap:18 }}>
          <StampSeal size={90} color="var(--kraft-400)" />
          <p style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:14, lineHeight:1.55, margin:0, color:'var(--kraft-400)' }}>
            "Exploring the world one bite at a time."
          </p>
        </div>
      </div>
      <div style={{ borderTop:'1px solid rgba(210,190,156,0.12)', textAlign:'center', padding:'16px', fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:13, color:'var(--espresso-400)' }}>
        © 2025 Wanderlust Foodies — Made with love. Where travel meets taste.
      </div>
    </footer>
  );
}

Object.assign(window, { Header, Footer });
