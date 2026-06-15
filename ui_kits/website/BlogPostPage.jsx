/* Wanderlust Foodies — Blog / travel-story article page */
function BlogPostPage({ onNav }) {
  const { Badge, Avatar, Button, ArticleCard } = window.WanderlustFoodiesDesignSystem_288b64;
  const prose = { fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.05rem,1.4vw,1.18rem)', lineHeight: 1.75, color: 'var(--text-body)', margin: '0 0 1.3em' };
  return (
    <article>
      {/* Hero */}
      <div style={{ position: 'relative', height: 'clamp(320px,46vw,520px)', overflow: 'hidden' }}>
        <img src="../../assets/img/trek-sandakphu.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(36,20,5,0.15) 0%, rgba(36,20,5,0.78) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <div style={{ maxWidth: '52rem', margin: '0 auto', padding: '0 clamp(1rem,4vw,2.5rem) clamp(1.5rem,3vw,2.5rem)' }}>
            <Badge tone="trek" solid>Trek</Badge>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.01em', lineHeight: 1, fontSize: 'clamp(2rem,5vw,3.6rem)', color: 'var(--paper-100)', margin: '14px 0 0', textWrap: 'balance' }}>
              Trekking with Friends:<br />Off to Sandakphu!
            </h1>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '42rem', margin: '0 auto', padding: 'clamp(2rem,4vw,3rem) clamp(1rem,4vw,2.5rem)' }}>
        {/* Byline */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingBottom: 22, marginBottom: 28, borderBottom: '1.5px solid var(--border-hairline)' }}>
          <Avatar src="../../assets/img/couple-illustration.jpg" name="Girish" size={48} />
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15, color: 'var(--text-strong)' }}>Girish</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-faint)' }}>Feb 9, 2025 · 26 min read</div>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
            <Badge tone="neutral">Himalayas</Badge>
            <Badge tone="neutral">Friends</Badge>
          </div>
        </div>

        <p style={{ ...prose, fontWeight: 500, fontSize: 'clamp(1.2rem,1.8vw,1.4rem)', color: 'var(--text-strong)' }}>
          The Sandakphu-Phalut trek is a spectacular Himalayan journey that offers a blend of natural beauty, cultural richness and panoramic mountain views you do not forget.
        </p>
        <p style={prose}>
          We set off as six friends and one very optimistic packing list. The first day lulls you into confidence — gentle rhododendron forest, easy switchbacks, the kind of trail that makes you believe you trained enough. You did not. Nobody does.
        </p>
        <blockquote style={{ margin: '2em 0', padding: '4px 0 4px 22px', borderLeft: '4px solid var(--spice-500)' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.25rem,2vw,1.55rem)', lineHeight: 1.4, color: 'var(--espresso-700)', margin: 0 }}>
            The hardest trails end in places you cannot quite take with you, but also cannot leave entirely behind.
          </p>
        </blockquote>
        <p style={prose}>
          By the time Sleeping Buddha — the Kanchenjunga range stretched flat against the dawn — finally appeared, the cold had stopped being a complaint and started being a fact. We stood there, breath ragged, fingers useless, grinning like idiots. Worth every uphill metre.
        </p>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 36, paddingTop: 24, borderTop: '1.5px solid var(--border-hairline)' }}>
          <Button variant="secondary" onClick={() => onNav('home')}>← Back home</Button>
          <Button variant="primary" onClick={() => onNav('recipe')}>What we ate up there →</Button>
        </div>
      </div>

      {/* Related */}
      <section style={{ background: 'var(--surface-sunk)', borderTop: '1.5px solid var(--border-hairline)' }}>
        <div style={{ maxWidth: '78rem', margin: '0 auto', padding: 'clamp(2rem,4vw,3rem) clamp(1rem,4vw,2.5rem)' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', fontSize: 12, color: 'var(--spice-600)' }}>Keep Reading</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22, marginTop: 20 }}>
            <ArticleCard image="../../assets/img/road-aurangabad.png" category="travel" categoryLabel="Travel" title="Mumbai to Aurangabad to Shirdi" excerpt="The ultimate 5-day family road trip across Maharashtra." author="Girish" date="Jan 13" readTime="7 min" onClick={(e)=>{e.preventDefault();onNav('blog');}} />
            <ArticleCard image="../../assets/img/couple-illustration.jpg" category="story" categoryLabel="Story" title="Road Trip Across 3 States" excerpt="Our annual escape, loaded into one very full car." author="Vidya" date="May 3" readTime="23 min" onClick={(e)=>{e.preventDefault();onNav('blog');}} />
            <ArticleCard image="../../assets/img/recipe-pomfret-fry.jpg" category="recipe" categoryLabel="Recipe" title="Pomfret / Paplet Fry" excerpt="The Konkan-coast marinade we make after every coastal trip." author="Vidya" date="Apr 2" readTime="5 min" onClick={(e)=>{e.preventDefault();onNav('recipe');}} />
          </div>
        </div>
      </section>
    </article>
  );
}
window.BlogPostPage = BlogPostPage;
