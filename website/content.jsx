/* ================================================================
   Wanderlust Foodies — Content Listings (Blog + Recipes)
   ================================================================ */

function BlogPage({ navigate }) {
  const { ArticleCard, Badge } = window.WanderlustFoodiesDesignSystem_288b64;
  const { posts } = window.WF_DATA;
  const [filter, setFilter] = React.useState('all');
  const cats = ['all','travel','trek','story'];
  const visible = filter === 'all' ? posts : posts.filter(p => p.category === filter);
  const container = { maxWidth:'78rem', margin:'0 auto', padding:'0 clamp(1.25rem,4vw,2.5rem)' };

  return (
    <div style={{ paddingTop:68 }}>
      {/* Header */}
      <div style={{ background:'var(--espresso-900)', padding:'clamp(3rem,6vw,5rem) 0' }}>
        <div style={{ ...container, textAlign:'center' }}>
          <span style={{ fontFamily:'var(--font-sans)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.18em', fontSize:11, color:'var(--turmeric-300)', display:'block', marginBottom:14 }}>Travel · Trek · Story</span>
          <h1 style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.01em', fontSize:'clamp(2.8rem,6vw,5rem)', color:'var(--paper-100)', lineHeight:0.96, margin:0 }}>Our Stories</h1>
          <p style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:18, color:'var(--kraft-300)', marginTop:14 }}>Road trips, mountain trails and everything in between.</p>
        </div>
      </div>

      {/* Filters */}
      <div style={{ background:'var(--surface-card)', borderBottom:'1.5px solid var(--border-hairline)', position:'sticky', top:68, zIndex:10 }}>
        <div style={{ ...container, height:54, display:'flex', gap:8, alignItems:'center' }}>
          {cats.map(c => (
            <button key={c} onClick={()=>setFilter(c)} style={{ fontFamily:'var(--font-display)', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.1em', fontSize:12, padding:'7px 16px', borderRadius:'var(--radius-pill)', border:'1.5px solid', cursor:'pointer', transition:'all var(--dur-fast)', background: filter===c ? 'var(--spice-500)' : 'transparent', color: filter===c ? '#fff' : 'var(--text-muted)', borderColor: filter===c ? 'var(--spice-500)' : 'var(--border-hairline)' }}>
              {c === 'all' ? 'All' : c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
          <span style={{ marginLeft:'auto', fontFamily:'var(--font-sans)', fontSize:13, color:'var(--text-faint)' }}>{visible.length} {visible.length === 1 ? 'story' : 'stories'}</span>
        </div>
      </div>

      {/* Grid */}
      <section style={{ padding:'clamp(2.5rem,5vw,4rem) 0', minHeight:400 }}>
        <div style={container}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
            {visible.map((p,i) => (
              <ArticleCard key={p.slug} image={p.image} category={p.category} categoryLabel={p.categoryLabel} title={p.title} excerpt={p.excerpt} author={p.author} date={p.date} readTime={p.readTime} onClick={e=>{e.preventDefault();navigate('post/'+p.slug);}} href="#" />
            ))}
          </div>
          {visible.length === 0 && (
            <div style={{ textAlign:'center', padding:'4rem 0', fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:18, color:'var(--text-faint)' }}>No stories in this category yet — check back soon.</div>
          )}
        </div>
      </section>
    </div>
  );
}

function RecipesPage({ navigate }) {
  const { RecipeCard, Badge } = window.WanderlustFoodiesDesignSystem_288b64;
  const { recipes } = window.WF_DATA;
  const [filter, setFilter] = React.useState('all');
  const allTags = ['all', ...Array.from(new Set(recipes.flatMap(r => r.tags)))];
  const visible = filter === 'all' ? recipes : recipes.filter(r => r.tags.includes(filter));
  const container = { maxWidth:'78rem', margin:'0 auto', padding:'0 clamp(1.25rem,4vw,2.5rem)' };

  return (
    <div style={{ paddingTop:68 }}>
      {/* Header */}
      <div style={{ background:'var(--pine-800)', padding:'clamp(3rem,6vw,5rem) 0' }}>
        <div style={{ ...container, textAlign:'center' }}>
          <span style={{ fontFamily:'var(--font-sans)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.18em', fontSize:11, color:'var(--turmeric-300)', display:'block', marginBottom:14 }}>From Our Kitchen</span>
          <h1 style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.01em', fontSize:'clamp(2.8rem,6vw,5rem)', color:'var(--paper-100)', lineHeight:0.96, margin:0 }}>Recipes</h1>
          <p style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:18, color:'var(--pine-300)', marginTop:14 }}>Home cooking from the kitchens we've visited and the meals we keep recreating.</p>
        </div>
      </div>

      {/* Filters */}
      <div style={{ background:'var(--surface-card)', borderBottom:'1.5px solid var(--border-hairline)', position:'sticky', top:68, zIndex:10 }}>
        <div style={{ ...container, height:54, display:'flex', gap:8, alignItems:'center' }}>
          {allTags.map(t => (
            <button key={t} onClick={()=>setFilter(t)} style={{ fontFamily:'var(--font-display)', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.1em', fontSize:12, padding:'7px 16px', borderRadius:'var(--radius-pill)', border:'1.5px solid', cursor:'pointer', transition:'all var(--dur-fast)', background: filter===t ? 'var(--pine-700)' : 'transparent', color: filter===t ? '#fff' : 'var(--text-muted)', borderColor: filter===t ? 'var(--pine-700)' : 'var(--border-hairline)' }}>
              {t === 'all' ? 'All Recipes' : t}
            </button>
          ))}
        </div>
      </div>

      {/* Recipe grid */}
      <section style={{ padding:'clamp(2.5rem,5vw,4rem) 0', background:'var(--surface-page)' }}>
        <div style={{ ...container, display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:16 }}>
          {visible.map(r => (
            <RecipeCard key={r.slug} image={r.image} title={r.title} time={r.time} tags={r.tags} blurb={r.blurb} onClick={e=>{e.preventDefault();navigate('recipe/'+r.slug);}} href="#" />
          ))}
        </div>
        {visible.length === 0 && (
          <div style={{ textAlign:'center', padding:'4rem 0', fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:18, color:'var(--text-faint)', maxWidth:'78rem', margin:'0 auto' }}>No recipes found — more coming soon.</div>
        )}
      </section>

      {/* CTA band */}
      <div style={{ background:'var(--surface-sunk)', borderTop:'1.5px solid var(--border-hairline)', padding:'clamp(2.5rem,5vw,4rem) 0' }}>
        <div style={{ ...container, textAlign:'center', maxWidth:'48rem' }}>
          <h2 style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.02em', fontSize:'clamp(1.6rem,3vw,2.4rem)', color:'var(--text-strong)', margin:'0 0 12px' }}>Have a Recipe to Share?</h2>
          <p style={{ fontFamily:'var(--font-serif)', fontSize:17, lineHeight:1.65, color:'var(--text-muted)', marginBottom:24 }}>We're always looking for home cooks whose recipes deserve a wider audience. Get in touch.</p>
          <button onClick={()=>navigate('about')} style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.07em', fontSize:13, padding:'12px 26px', borderRadius:'var(--radius-pill)', border:'none', cursor:'pointer', background:'var(--spice-500)', color:'#fff' }}>Contact Us</button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { BlogPage, RecipesPage });
