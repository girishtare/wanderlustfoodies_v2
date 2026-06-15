/* ================================================================
   Wanderlust Foodies — Detail Pages (Post, Recipe, Book)
   ================================================================ */

function BlogPostPage({ slug, navigate }) {
  const { Badge, Avatar, ArticleCard } = window.WanderlustFoodiesDesignSystem_288b64;
  const { posts } = window.WF_DATA;
  const post = posts.find(p => p.slug === slug) || posts[0];
  const related = posts.filter(p => p.slug !== post.slug).slice(0, 3);
  const container = { maxWidth:'78rem', margin:'0 auto', padding:'0 clamp(1.25rem,4vw,2.5rem)' };

  return (
    <article style={{ paddingTop:68 }}>
      {/* Hero */}
      <div style={{ position:'relative', height:'clamp(360px,52vw,580px)', overflow:'hidden' }}>
        <img src={post.image} alt="" style={{ position:'absolute', top:0, left:0, right:0, bottom:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 30%' }} />
        <div style={{ position:'absolute', top:0, left:0, right:0, bottom:0, background:'linear-gradient(180deg, rgba(36,20,5,0.1) 0%, rgba(36,20,5,0.82) 100%)' }} />
        <div style={{ position:'absolute', bottom:0, left:0, right:0 }}>
          <div style={{ ...container, paddingBottom:'clamp(1.5rem,3vw,2.5rem)' }}>
            <Badge tone={post.category} solid>{post.categoryLabel}</Badge>
            <h1 style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.01em', lineHeight:1, fontSize:'clamp(2rem,5vw,3.8rem)', color:'var(--paper-100)', margin:'14px 0 0', textWrap:'balance', maxWidth:'22ch' }}>{post.title}</h1>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div style={{ ...container, maxWidth:'50rem', padding:'clamp(2rem,4vw,3.5rem) clamp(1.25rem,4vw,2.5rem)' }}>
        {/* Byline */}
        <div style={{ display:'flex', alignItems:'center', gap:12, paddingBottom:24, marginBottom:28, borderBottom:'1.5px solid var(--border-hairline)' }}>
          <Avatar src="../assets/img/couple-illustration.jpg" name={post.author} size={48} />
          <div>
            <div style={{ fontFamily:'var(--font-sans)', fontWeight:600, fontSize:15, color:'var(--text-strong)' }}>{post.author}</div>
            <div style={{ fontFamily:'var(--font-sans)', fontSize:13, color:'var(--text-faint)' }}>{post.date} · {post.readTime}</div>
          </div>
          <button onClick={()=>navigate('blog')} style={{ marginLeft:'auto', fontFamily:'var(--font-display)', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em', fontSize:12, background:'transparent', border:'1.5px solid var(--border-default)', color:'var(--text-muted)', padding:'7px 14px', borderRadius:'var(--radius-pill)', cursor:'pointer' }}>← All Stories</button>
        </div>

        {/* Content blocks */}
        {post.content && post.content.map((block, i) => {
          if (block.type === 'lead') return (
            <p key={i} style={{ fontFamily:'var(--font-serif)', fontWeight:500, fontSize:'clamp(1.15rem,1.8vw,1.35rem)', lineHeight:1.6, color:'var(--text-strong)', margin:'0 0 1.4em' }}>{block.text}</p>
          );
          if (block.type === 'p') return (
            <p key={i} style={{ fontFamily:'var(--font-serif)', fontSize:'clamp(1.05rem,1.4vw,1.18rem)', lineHeight:1.8, color:'var(--text-body)', margin:'0 0 1.3em' }}>{block.text}</p>
          );
          if (block.type === 'quote') return (
            <blockquote key={i} style={{ margin:'2em 0', padding:'4px 0 4px 22px', borderLeft:'4px solid var(--spice-500)' }}>
              <p style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:'clamp(1.25rem,2vw,1.55rem)', lineHeight:1.4, color:'var(--espresso-700)', margin:0 }}>{block.text}</p>
            </blockquote>
          );
          return null;
        })}

        {/* If it's the book-related post, show book CTA */}
        {post.slug === 'garhwal-migration' && (
          <div style={{ background:'var(--paper-200)', border:'1.5px solid var(--border-default)', borderRadius:'var(--radius-lg)', padding:'20px 24px', margin:'2em 0', display:'flex', justifyContent:'space-between', alignItems:'center', gap:16, flexWrap:'wrap' }}>
            <p style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:17, color:'var(--text-body)', margin:0 }}>This story became the memoir <strong>The Human Migration</strong>.</p>
            <button onClick={()=>navigate('book')} style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.07em', fontSize:12, padding:'10px 22px', borderRadius:'var(--radius-pill)', border:'none', cursor:'pointer', background:'var(--spice-500)', color:'#fff', flexShrink:0 }}>Discover the Book →</button>
          </div>
        )}

        <div style={{ display:'flex', gap:10, paddingTop:24, marginTop:32, borderTop:'1.5px solid var(--border-hairline)' }}>
          <button onClick={()=>navigate('blog')} style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.07em', fontSize:12, padding:'11px 22px', borderRadius:'var(--radius-pill)', border:'2px solid var(--espresso-700)', cursor:'pointer', background:'transparent', color:'var(--espresso-700)' }}>← All Stories</button>
          <button onClick={()=>navigate('recipes')} style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.07em', fontSize:12, padding:'11px 22px', borderRadius:'var(--radius-pill)', border:'none', cursor:'pointer', background:'var(--spice-500)', color:'#fff' }}>Explore Recipes →</button>
        </div>
      </div>

      {/* Related */}
      <section style={{ background:'var(--surface-sunk)', borderTop:'1.5px solid var(--border-hairline)', padding:'clamp(2.5rem,5vw,4rem) 0' }}>
        <div style={container}>
          <h2 style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.06em', fontSize:'1.5rem', color:'var(--text-strong)', margin:'0 0 24px' }}>Keep Reading</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:22 }}>
            {related.map(p => <ArticleCard key={p.slug} image={p.image} category={p.category} categoryLabel={p.categoryLabel} title={p.title} excerpt={p.excerpt} author={p.author} date={p.date} readTime={p.readTime} onClick={e=>{e.preventDefault();navigate('post/'+p.slug);}} href="#" />)}
          </div>
        </div>
      </section>
    </article>
  );
}

function RecipeDetailPage({ slug, navigate }) {
  const { Badge } = window.WanderlustFoodiesDesignSystem_288b64;
  const { recipes } = window.WF_DATA;
  const recipe = recipes.find(r => r.slug === slug) || recipes[0];
  const [checked, setChecked] = React.useState({});
  const toggleCheck = i => setChecked(c => ({ ...c, [i]: !c[i] }));
  const container = { maxWidth:'78rem', margin:'0 auto', padding:'0 clamp(1.25rem,4vw,2.5rem)' };

  return (
    <div style={{ paddingTop:68 }}>
      <div style={{ ...container, padding:'clamp(2rem,4vw,3rem) clamp(1.25rem,4vw,2.5rem)' }}>
        {/* Breadcrumb */}
        <button onClick={()=>navigate('recipes')} style={{ background:'none', border:'none', cursor:'pointer', fontFamily:'var(--font-sans)', fontSize:13, color:'var(--text-faint)', padding:0, marginBottom:20 }}>← All Recipes</button>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'clamp(2rem,5vw,4rem)', alignItems:'center', marginBottom:'clamp(2.5rem,5vw,4rem)' }}>
          <div>
            <div style={{ display:'flex', gap:8, marginBottom:16, flexWrap:'wrap' }}>
              {recipe.tags.map(t => <Badge key={t} tone={t==='Gluten-free'?'recipe':t==='Navratri'?'recipe':'neutral'} solid>{t}</Badge>)}
            </div>
            <h1 style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.01em', lineHeight:1, fontSize:'clamp(2.2rem,4.5vw,3.6rem)', color:'var(--text-strong)', margin:'0 0 16px' }}>{recipe.title}</h1>
            <p style={{ fontFamily:'var(--font-serif)', fontSize:18, lineHeight:1.65, color:'var(--text-muted)', marginBottom:24 }}>{recipe.intro}</p>
            <div style={{ display:'flex', gap:24, padding:'18px 0', borderTop:'1.5px solid var(--border-hairline)', borderBottom:'1.5px solid var(--border-hairline)' }}>
              {[['Prep & Cook', recipe.time],['Serves', recipe.serves],['Difficulty', recipe.difficulty]].map(([k,v]) => (
                <div key={k} style={{ textAlign:'center' }}>
                  <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:22, color:'var(--spice-600)' }}>{v}</div>
                  <div style={{ fontFamily:'var(--font-sans)', fontSize:11, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.1em', color:'var(--text-faint)' }}>{k}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderRadius:'var(--radius-xl)', overflow:'hidden', border:'2.5px solid var(--espresso-700)', boxShadow:'var(--shadow-lg)' }}>
            <img src={recipe.image} alt={recipe.title} style={{ width:'100%', aspectRatio:'1', objectFit:'cover', display:'block' }} />
          </div>
        </div>

        {/* Two-col: ingredients + method */}
        <div style={{ display:'grid', gridTemplateColumns:'0.85fr 1.15fr', gap:'clamp(2rem,5vw,4rem)', alignItems:'start' }}>
          <div style={{ background:'var(--surface-card)', border:'1.5px solid var(--border-hairline)', borderRadius:'var(--radius-lg)', padding:26, position:'sticky', top:88 }}>
            <h2 style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.05em', fontSize:20, color:'var(--text-strong)', margin:'0 0 18px' }}>Ingredients</h2>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:13 }}>
              {recipe.ingredients && recipe.ingredients.map((ing, i) => (
                <li key={i} onClick={()=>toggleCheck(i)} style={{ display:'flex', gap:12, alignItems:'flex-start', cursor:'pointer', fontFamily:'var(--font-serif)', fontSize:16, lineHeight:1.4, color: checked[i] ? 'var(--text-faint)' : 'var(--text-body)', textDecoration: checked[i] ? 'line-through' : 'none' }}>
                  <span style={{ width:20, height:20, flexShrink:0, marginTop:2, borderRadius:5, border:'2px solid '+(checked[i]?'var(--spice-500)':'var(--border-default)'), background: checked[i]?'var(--spice-500)':'transparent', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:11, transition:'all var(--dur-fast)' }}>
                    {checked[i]?'✓':''}
                  </span>
                  {ing}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.05em', fontSize:20, color:'var(--text-strong)', margin:'0 0 22px' }}>Method</h2>
            <ol style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:24 }}>
              {recipe.method && recipe.method.map((step, i) => (
                <li key={i} style={{ display:'flex', gap:16, alignItems:'flex-start' }}>
                  <span style={{ flexShrink:0, width:40, height:40, borderRadius:'50%', background:'var(--espresso-700)', color:'var(--paper-100)', fontFamily:'var(--font-display)', fontWeight:700, fontSize:18, display:'flex', alignItems:'center', justifyContent:'center' }}>{i+1}</span>
                  <p style={{ fontFamily:'var(--font-serif)', fontSize:17, lineHeight:1.7, color:'var(--text-body)', margin:0, paddingTop:7 }}>{step}</p>
                </li>
              ))}
            </ol>
            <div style={{ marginTop:32, display:'flex', gap:10 }}>
              <button onClick={()=>navigate('recipes')} style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.07em', fontSize:12, padding:'11px 22px', borderRadius:'var(--radius-pill)', border:'2px solid var(--espresso-700)', cursor:'pointer', background:'transparent', color:'var(--espresso-700)' }}>← All Recipes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookPage({ navigate }) {
  const { Badge, StampSeal } = window.WanderlustFoodiesDesignSystem_288b64;
  const container = { maxWidth:'78rem', margin:'0 auto', padding:'0 clamp(1.25rem,4vw,2.5rem)' };
  const blurbs = [
    ['Perilous Ascents', 'Cliff-edge Bolero rides and the unforgiving wild, told without flinching.'],
    ['Friendships at Altitude', 'The bonds you only build walking uphill together, gasping for air.'],
    ['Vivid & Honest', 'Swargarohini peaks, Osla village, and one executive thoroughly out of his depth.'],
    ['A Memoir that Stays', 'Places you cannot quite take with you but also cannot leave entirely behind.'],
  ];
  return (
    <div style={{ paddingTop:68 }}>
      {/* Book hero */}
      <section style={{ background:'var(--espresso-900)', overflow:'hidden' }}>
        <div style={{ ...container, display:'grid', gridTemplateColumns:'0.85fr 1.15fr', gap:'clamp(2.5rem,6vw,5rem)', alignItems:'center', padding:'clamp(3rem,6vw,5.5rem) clamp(1.25rem,4vw,2.5rem)' }}>
          {/* Book cover mockup */}
          <div style={{ display:'flex', justifyContent:'center' }}>
            <div style={{ width:260, aspectRatio:'2/3', borderRadius:'4px 12px 12px 4px', background:'linear-gradient(145deg, var(--espresso-600), var(--espresso-900))', border:'1.5px solid var(--kraft-500)', boxShadow:'var(--shadow-ink)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between', padding:'28px 20px', transform:'rotate(-2.5deg)', position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', left:12, top:0, bottom:0, width:2, background:'rgba(255,255,255,0.08)' }} />
              <div style={{ fontFamily:'var(--font-sans)', fontSize:10, fontWeight:700, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--turmeric-300)' }}>A Travel Memoir</div>
              <div style={{ textAlign:'center' }}>
                <div style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', lineHeight:0.96, fontSize:38, color:'var(--paper-100)', marginBottom:6 }}>The Human</div>
                <div style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', lineHeight:0.96, fontSize:38, color:'var(--turmeric-300)' }}>Migration</div>
              </div>
              <div>
                <StampSeal size={88} color="var(--turmeric-300)" topText="HIMALAYA" bottomText="GARHWAL" center="GS" sub="2025" />
              </div>
            </div>
          </div>
          {/* Copy */}
          <div>
            <Badge tone="recipe" solid>New · 2025</Badge>
            <h1 style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.01em', lineHeight:0.95, fontSize:'clamp(2.8rem,6vw,5rem)', color:'var(--paper-100)', margin:'18px 0 0' }}>The Human<br /><span style={{ color:'var(--turmeric-500)' }}>Migration</span></h1>
            <p style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:'clamp(1.1rem,1.7vw,1.3rem)', lineHeight:1.6, color:'var(--kraft-300)', maxWidth:'46ch', margin:'20px 0 28px' }}>
              A disarmingly honest journey into the Garhwal Himalayas — from cliff-edge Bolero rides to the thermodynamic betrayal of a sub-zero bucket bath.
            </p>
            <p style={{ fontFamily:'var(--font-serif)', fontSize:16, lineHeight:1.7, color:'var(--espresso-400)', maxWidth:'48ch', marginBottom:28 }}>
              With vivid descriptions of the stunning Swargarohini peaks and the ancient Osla village, readers feel as though they are panting right alongside Girish on the trail.
            </p>
            <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
              <button style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.07em', fontSize:14, padding:'14px 28px', borderRadius:'var(--radius-pill)', border:'none', cursor:'pointer', background:'var(--turmeric-500)', color:'var(--espresso-900)', boxShadow:'var(--shadow-md)' }} onMouseEnter={e=>e.currentTarget.style.filter='brightness(1.08)'} onMouseLeave={e=>e.currentTarget.style.filter='none'}>Get the Book</button>
              <button onClick={()=>navigate('post/garhwal-migration')} style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.07em', fontSize:14, padding:'14px 28px', borderRadius:'var(--radius-pill)', border:'2px solid rgba(210,190,156,0.4)', cursor:'pointer', background:'transparent', color:'var(--paper-100)' }} onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,0.08)';}} onMouseLeave={e=>{e.currentTarget.style.background='transparent';}}>Read an Excerpt →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section style={{ padding:'clamp(3rem,6vw,5rem) 0', background:'var(--surface-page)' }}>
        <div style={{ ...container, maxWidth:'48rem', textAlign:'center' }}>
          <p style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:'clamp(1.5rem,2.8vw,2.2rem)', lineHeight:1.35, color:'var(--espresso-700)', textWrap:'balance', margin:0 }}>
            "The kind of friendships that only get built by people walking uphill together, at altitude."
          </p>
          <div style={{ width:60, height:3, background:'var(--spice-500)', margin:'28px auto' }} />
          <p style={{ fontFamily:'var(--font-serif)', fontSize:'clamp(1.05rem,1.6vw,1.2rem)', lineHeight:1.8, color:'var(--text-body)', textAlign:'left' }}>
            Girish shares an unflinching account of what happens when a city-dwelling executive meets the unforgiving wild. The book offers an unforgettable mix of blistering ascents, the kind of friendships built by people walking uphill together at altitude, and the realisation that the hardest trails end in places you cannot quite take with you but also cannot leave entirely behind.
          </p>
        </div>
      </section>

      {/* What's inside grid */}
      <section style={{ background:'var(--surface-sunk)', borderTop:'1.5px solid var(--border-hairline)', padding:'clamp(2.5rem,5vw,4rem) 0' }}>
        <div style={container}>
          <h2 style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.04em', fontSize:'clamp(1.5rem,2.5vw,2rem)', color:'var(--text-strong)', margin:'0 0 24px', textAlign:'center' }}>What's Inside</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:16 }}>
            {blurbs.map(([t,d]) => (
              <div key={t} style={{ background:'var(--surface-card)', border:'1.5px solid var(--border-hairline)', borderRadius:'var(--radius-lg)', padding:24 }}>
                <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.04em', fontSize:18, color:'var(--text-strong)', margin:'0 0 10px' }}>{t}</h3>
                <p style={{ fontFamily:'var(--font-serif)', fontSize:16, lineHeight:1.65, color:'var(--text-muted)', margin:0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { BlogPostPage, RecipeDetailPage, BookPage });
