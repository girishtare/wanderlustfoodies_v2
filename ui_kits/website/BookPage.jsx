/* Wanderlust Foodies — "The Human Migration" book landing */
function BookPage({ onNav }) {
  const { Button, Badge, StampSeal } = window.WanderlustFoodiesDesignSystem_288b64;
  const wrap = { maxWidth: '72rem', margin: '0 auto', padding: '0 clamp(1rem,4vw,2.5rem)' };
  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'var(--surface-ink)', color: 'var(--paper-100)', overflow: 'hidden' }}>
        <div style={{ ...wrap, display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 48, alignItems: 'center', padding: 'clamp(2.5rem,5vw,4.5rem) clamp(1rem,4vw,2.5rem)' }}>
          {/* Book cover */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 280, aspectRatio: '2 / 3', borderRadius: '4px 10px 10px 4px', background: 'linear-gradient(135deg, var(--espresso-600), var(--espresso-900))', border: '1.5px solid var(--kraft-500)', boxShadow: 'var(--shadow-ink)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '30px 22px', transform: 'rotate(-2deg)' }}>
              <div style={{ position: 'absolute', left: 14, top: 0, bottom: 0, width: 2, background: 'rgba(255,255,255,0.10)' }} />
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--turmeric-300)' }}>A Travel Memoir</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 0.95, fontSize: 40, color: 'var(--paper-100)' }}>The Human Migration</div>
              </div>
              <StampSeal size={92} color="var(--turmeric-300)" topText="HIMALAYA" bottomText="GARHWAL" center="GS" sub="EST · 2025" />
            </div>
          </div>
          {/* Copy */}
          <div>
            <Badge tone="recipe" solid>New · 2025</Badge>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.01em', lineHeight: 0.96, fontSize: 'clamp(2.6rem,5.5vw,4.4rem)', color: 'var(--paper-100)', margin: '16px 0 0' }}>
              The Human<br /><span style={{ color: 'var(--turmeric-500)' }}>Migration</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.1rem,1.7vw,1.3rem)', lineHeight: 1.6, color: 'var(--kraft-300)', maxWidth: '48ch', margin: '20px 0 28px' }}>
              A disarmingly honest journey into the Garhwal Himalayas — from cliff-edge Bolero rides to the thermodynamic betrayal of a sub-zero bucket bath.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg">Get the Book</Button>
              <Button variant="secondary" size="lg" style={{ color: 'var(--paper-100)', borderColor: 'var(--border-on-dark)' }} onClick={() => onNav('blog')}>Read an Excerpt</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote / excerpt */}
      <section style={{ ...wrap, padding: 'clamp(2.5rem,5vw,4.5rem) clamp(1rem,4vw,2.5rem)', textAlign: 'center', maxWidth: '46rem' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.4rem,2.6vw,2rem)', lineHeight: 1.4, color: 'var(--espresso-700)', textWrap: 'balance', margin: 0 }}>
          “The kind of friendships that only get built by people walking uphill together, at altitude.”
        </p>
        <div style={{ width: 60, height: 3, background: 'var(--spice-500)', margin: '28px auto' }} />
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, lineHeight: 1.75, color: 'var(--text-body)', textAlign: 'left' }}>
          With vivid descriptions of the stunning Swargarohini peaks and the ancient Osla village, readers will feel as though they are panting right alongside Girish on the trail — through blistering ascents and the realisation that the hardest trails end in places you cannot quite take with you, but also cannot leave entirely behind.
        </p>
      </section>

      {/* What's inside */}
      <section style={{ background: 'var(--surface-sunk)', borderTop: '1.5px solid var(--border-hairline)' }}>
        <div style={{ ...wrap, padding: 'clamp(2.5rem,5vw,4rem) clamp(1rem,4vw,2.5rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {[
              ['Perilous Ascents', 'Cliff-edge Bolero rides and the unforgiving wild, told without flinching.'],
              ['Friendships at Altitude', 'The bonds you only build walking uphill together, gasping for air.'],
              ['Vivid & Honest', 'Swargarohini peaks, Osla village, and one executive thoroughly out of his depth.'],
            ].map(([t, d]) => (
              <div key={t} style={{ background: 'var(--surface-card)', border: '1.5px solid var(--border-hairline)', borderRadius: 'var(--radius-lg)', padding: 24 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em', fontSize: 18, color: 'var(--text-strong)', margin: '0 0 10px' }}>{t}</h3>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 15.5, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
window.BookPage = BookPage;
