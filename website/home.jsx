/* ================================================================
   Wanderlust Foodies — Home Page & About Page
   ================================================================ */

function HomePage({ navigate }) {
  const DS = window.WanderlustFoodiesDesignSystem_288b64;
  const { Badge, Stat, ArticleCard, RecipeCard } = DS;
  const { posts, recipes } = window.WF_DATA;
  const featured = posts.filter(p => p.featured).slice(0, 3);
  const featuredRecipes = recipes.filter(r => r.featured).slice(0, 3);
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const gutter = 'clamp(1.25rem,4vw,2.5rem)';
  const container = { maxWidth:'78rem', margin:'0 auto', padding:`0 ${gutter}` };
  const eyebrow = { fontFamily:'var(--font-sans)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.16em', fontSize:11.5, color:'var(--spice-500)', display:'block', marginBottom:10 };
  const h2Style = { fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.01em', fontSize:'clamp(1.9rem,3.2vw,2.8rem)', color:'var(--text-strong)', lineHeight:1.0, margin:0 };

  return (
    <div>
      {/* ── HERO ────────────────────────────────────── */}
      <section style={{ position:'relative', height:'100vh', minHeight:600, overflow:'hidden', display:'flex', alignItems:'center', paddingTop:68, background:'var(--espresso-900)' }}>
        <img src="../assets/img/trek-sandakphu.jpg" alt="Himalayan trail" style={{ position:'absolute', top:0, left:0, right:0, bottom:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 30%' }} />
        <div style={{ position:'absolute', top:0, left:0, right:0, bottom:0, background:'linear-gradient(160deg, rgba(36,20,5,0.25) 0%, rgba(36,20,5,0.82) 65%, rgba(36,20,5,0.96) 100%)' }} />
        <div style={{ position:'relative', zIndex:2, ...container, display:'grid', gridTemplateColumns:'1fr auto', gap:48, alignItems:'center', width:'100%' }}>
          <div>
            <span style={{ fontFamily:'var(--font-sans)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.2em', fontSize:11, color:'rgba(240,203,107,0.9)', marginBottom:18, display:'block' }}>Travel · Food · Stories</span>
            <h1 style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.005em', lineHeight:0.94, fontSize:'clamp(3rem,7vw,6rem)', color:'var(--paper-50)', margin:'0 0 20px', textWrap:'balance' }}>
              Global<br/>Adventures.<br/><span style={{ color:'var(--spice-400)' }}>Local Flavours.</span>
            </h1>
            <p style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:'clamp(1.1rem,1.7vw,1.35rem)', lineHeight:1.55, color:'rgba(239,230,211,0.88)', maxWidth:'44ch', margin:'0 0 32px' }}>
              Honest travel tales, hard-won trails and the home-cooked recipes we carry back from every journey.
            </p>
            <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
              <button onClick={() => navigate('blog')} style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.07em', fontSize:14, padding:'14px 28px', borderRadius:'var(--radius-pill)', border:'none', cursor:'pointer', background:'var(--spice-500)', color:'#fff', boxShadow:'var(--shadow-md)', transition:'filter var(--dur-fast)' }} onMouseEnter={e=>e.currentTarget.style.filter='brightness(1.1)'} onMouseLeave={e=>e.currentTarget.style.filter='none'}>Travel Stories</button>
              <button onClick={() => navigate('recipes')} style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.07em', fontSize:14, padding:'14px 28px', borderRadius:'var(--radius-pill)', border:'2px solid rgba(239,230,211,0.5)', cursor:'pointer', background:'transparent', color:'var(--paper-100)', transition:'border-color var(--dur-fast), background var(--dur-fast)' }} onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--paper-100)';e.currentTarget.style.background='rgba(255,255,255,0.1)';}} onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(239,230,211,0.5)';e.currentTarget.style.background='transparent';}}>Explore Recipes</button>
            </div>
          </div>
          {/* Badge watermark */}
          <div style={{ opacity:0.12, flexShrink:0 }}>
            <img src="../assets/logo/wanderlust-badge.png" alt="" style={{ width:260, filter:'brightness(10)' }} />
          </div>
        </div>
        {/* Scroll cue */}
        <div style={{ position:'absolute', bottom:32, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
          <span style={{ fontFamily:'var(--font-sans)', fontSize:10, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(255,255,255,0.5)' }}>Scroll</span>
          <div style={{ width:1, height:40, background:'rgba(255,255,255,0.25)' }} />
        </div>
      </section>

      {/* ── CATEGORY STRIP ──────────────────────────── */}
      <div style={{ background:'var(--surface-card)', borderBottom:'1.5px solid var(--border-hairline)', borderTop:'1.5px solid var(--border-hairline)' }}>
        <div style={{ ...container, height:56, display:'flex', alignItems:'center', gap:8 }}>
          {[['travel','Travel','\u2708'],['trek','Trek','\u25b2'],['recipe','Recipes','\u2605'],['story','Story','\u2665']].map(([id, label, icon]) => (
            <button key={id} onClick={()=>navigate(id==='recipe'?'recipes':'blog')} style={{ display:'flex', alignItems:'center', gap:7, fontFamily:'var(--font-display)', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.1em', fontSize:12.5, padding:'7px 16px', borderRadius:'var(--radius-pill)', border:'1.5px solid var(--border-hairline)', background:'transparent', color:'var(--text-muted)', cursor:'pointer', transition:'all var(--dur-fast)' }} onMouseEnter={e=>{e.currentTarget.style.background='var(--spice-50)';e.currentTarget.style.color='var(--spice-600)';e.currentTarget.style.borderColor='var(--spice-200)';}} onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color='var(--text-muted)';e.currentTarget.style.borderColor='var(--border-hairline)';}}>
              <span>{icon}</span>{label}
            </button>
          ))}
        </div>
      </div>

      {/* ── TRAVEL TALES ────────────────────────────── */}
      <section style={{ padding:'clamp(3rem,6vw,5rem) 0', background:'var(--surface-page)' }}>
        <div style={container}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:32, flexWrap:'wrap', gap:16 }}>
            <div>
              <span style={eyebrow}>Travel Tales</span>
              <h2 style={h2Style}>Discover the World<br/>Through Our Stories</h2>
            </div>
            <button onClick={()=>navigate('blog')} style={{ fontFamily:'var(--font-display)', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em', fontSize:12, background:'transparent', border:'none', color:'var(--text-link)', cursor:'pointer', padding:0 }}>View All Stories →</button>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
            {featured.map((p,i) => (
              <ArticleCard key={i} image={p.image} category={p.category} categoryLabel={p.categoryLabel} title={p.title} excerpt={p.excerpt} author={p.author} date={p.date} readTime={p.readTime} onClick={e=>{e.preventDefault();navigate('post/'+p.slug);}} href="#" />
            ))}
          </div>
        </div>
      </section>

      {/* ── RECIPES ─────────────────────────────────── */}
      <section style={{ background:'var(--espresso-800)', padding:'clamp(3rem,6vw,5rem) 0' }}>
        <div style={{ ...container, display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:'clamp(2rem,5vw,4rem)', alignItems:'center' }}>
          <div>
            <span style={{ ...eyebrow, color:'var(--turmeric-300)' }}>From Our Kitchen</span>
            <h2 style={{ ...h2Style, color:'var(--paper-100)', marginBottom:16 }}>Join Us on a Flavourful Journey</h2>
            <p style={{ fontFamily:'var(--font-serif)', fontSize:17, lineHeight:1.7, color:'var(--kraft-300)', marginBottom:28, maxWidth:'38ch' }}>Recipes from the kitchens we've cooked in, the markets we've wandered through, and the meals we keep coming back to.</p>
            <button onClick={()=>navigate('recipes')} style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.07em', fontSize:13, padding:'12px 26px', borderRadius:'var(--radius-pill)', border:'2px solid var(--kraft-400)', background:'transparent', color:'var(--kraft-300)', cursor:'pointer', transition:'all var(--dur-fast)' }} onMouseEnter={e=>{e.currentTarget.style.background='var(--kraft-300)';e.currentTarget.style.color='var(--espresso-900)';}} onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color='var(--kraft-300)';}}>All Recipes →</button>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
            {featuredRecipes.map((r,i) => (
              <RecipeCard key={i} image={r.image} title={r.title} time={r.time} tags={r.tags} blurb={r.blurb} onClick={e=>{e.preventDefault();navigate('recipe/'+r.slug);}} href="#" style={{ background:'rgba(78,50,28,0.4)', borderColor:'rgba(210,190,156,0.15)' }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET THE FOODIES ────────────────────────── */}
      <section style={{ padding:'clamp(3rem,6vw,5rem) 0', background:'var(--surface-page)' }}>
        <div style={{ ...container, display:'grid', gridTemplateColumns:'1fr 1fr', gap:'clamp(2rem,5vw,4rem)', alignItems:'center' }}>
          <div style={{ position:'relative' }}>
            <div style={{ borderRadius:'var(--radius-xl)', overflow:'hidden', border:'2.5px solid var(--espresso-700)', boxShadow:'var(--shadow-lg)', transform:'rotate(-1.2deg)' }}>
              <img src="../assets/img/couple-illustration.jpg" alt="Girish & Vidya" style={{ width:'100%', aspectRatio:'1', objectFit:'cover', display:'block' }} />
            </div>
            <div style={{ position:'absolute', bottom:-16, right:-16, background:'var(--turmeric-500)', color:'var(--espresso-900)', fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.05em', fontSize:13, padding:'10px 18px', borderRadius:'var(--radius-pill)', boxShadow:'var(--shadow-md)', transform:'rotate(2deg)' }}>Girish &amp; Vidya</div>
          </div>
          <div>
            <span style={eyebrow}>Meet Wanderlust Foodies</span>
            <h2 style={{ ...h2Style, marginBottom:18 }}>Passionate About the World on a Plate</h2>
            <p style={{ fontFamily:'var(--font-serif)', fontSize:'clamp(1.05rem,1.5vw,1.2rem)', lineHeight:1.75, color:'var(--text-body)', marginBottom:14 }}>We are a family of travellers and food enthusiasts — Girish, Vidya and our son Devansh. We believe the best way to understand a culture is through its cuisine.</p>
            <p style={{ fontFamily:'var(--font-serif)', fontSize:'clamp(1.05rem,1.5vw,1.2rem)', lineHeight:1.75, color:'var(--text-body)', marginBottom:28 }}>Every trip leaves us with a story and a recipe. This is where we share both — honestly, and with a reasonable amount of self-deprecation.</p>
            <div style={{ display:'flex', gap:'clamp(1.5rem,4vw,3rem)', flexWrap:'wrap' }}>
              {[['25+','Destinations'],['50+','Recipes'],['∞','Stories']].map(([v,l]) => (
                <div key={l}>
                  <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'2.6rem', lineHeight:1, color:'var(--spice-500)' }}>{v}</div>
                  <div style={{ fontFamily:'var(--font-sans)', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.1em', fontSize:11, color:'var(--text-muted)', marginTop:5 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ──────────────────────────────── */}
      <section style={{ background:'var(--pine-800)', padding:'clamp(3rem,6vw,4.5rem) 0' }}>
        <div style={{ ...container, maxWidth:'56rem', textAlign:'center' }}>
          <span style={{ ...eyebrow, color:'var(--turmeric-300)' }}>Stay in the Loop</span>
          <h2 style={{ ...h2Style, color:'var(--paper-100)', marginBottom:14 }}>Join the Adventure</h2>
          <p style={{ fontFamily:'var(--font-serif)', fontSize:18, lineHeight:1.6, color:'var(--pine-300)', marginBottom:32 }}>Subscribe for weekly travel stories, seasonal recipes and insider tips — straight to your inbox. No spam, only stories.</p>
          {subscribed ? (
            <p style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:20, color:'var(--turmeric-300)' }}>You're on the trail with us — see you on Sunday.</p>
          ) : (
            <div style={{ display:'flex', gap:10, maxWidth:'36rem', margin:'0 auto', flexWrap:'wrap' }}>
              <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="your@email.com" style={{ flex:1, minWidth:200, padding:'13px 18px', borderRadius:'var(--radius-pill)', border:'1.5px solid rgba(126,154,130,0.4)', background:'rgba(255,255,255,0.08)', color:'var(--paper-100)', fontFamily:'var(--font-sans)', fontSize:15, outline:'none' }} onFocus={e=>e.target.style.borderColor='var(--turmeric-300)'} onBlur={e=>e.target.style.borderColor='rgba(126,154,130,0.4)'} />
              <button onClick={()=>{ if(email) setSubscribed(true); }} style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.07em', fontSize:13, padding:'13px 26px', borderRadius:'var(--radius-pill)', border:'none', cursor:'pointer', background:'var(--turmeric-500)', color:'var(--espresso-900)', boxShadow:'var(--shadow-sm)', transition:'filter var(--dur-fast)' }} onMouseEnter={e=>e.currentTarget.style.filter='brightness(1.1)'} onMouseLeave={e=>e.currentTarget.style.filter='none'}>Subscribe</button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function AboutPage({ navigate }) {
  const container = { maxWidth:'78rem', margin:'0 auto', padding:'0 clamp(1.25rem,4vw,2.5rem)' };
  const h2Style = { fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.01em', fontSize:'clamp(1.9rem,3.2vw,2.8rem)', color:'var(--text-strong)', lineHeight:1.0, margin:'0 0 18px' };
  return (
    <div style={{ paddingTop:68 }}>
      {/* Page header */}
      <div style={{ background:'var(--espresso-900)', padding:'clamp(3rem,6vw,5rem) 0' }}>
        <div style={{ ...container, textAlign:'center' }}>
          <span style={{ fontFamily:'var(--font-sans)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.18em', fontSize:11, color:'var(--turmeric-300)', display:'block', marginBottom:14 }}>Our Story</span>
          <h1 style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.01em', fontSize:'clamp(2.8rem,6vw,5rem)', color:'var(--paper-100)', lineHeight:0.96, margin:0 }}>About Us</h1>
        </div>
      </div>

      {/* Main content */}
      <section style={{ padding:'clamp(3rem,6vw,5rem) 0' }}>
        <div style={{ ...container, display:'grid', gridTemplateColumns:'1fr 1fr', gap:'clamp(2.5rem,6vw,5rem)', alignItems:'start' }}>
          <div style={{ position:'sticky', top:88 }}>
            <div style={{ borderRadius:'var(--radius-xl)', overflow:'hidden', border:'2.5px solid var(--espresso-700)', boxShadow:'var(--shadow-lg)' }}>
              <img src="../assets/img/couple-illustration.jpg" alt="Girish and Vidya" style={{ width:'100%', display:'block' }} />
            </div>
          </div>
          <div>
            <h2 style={h2Style}>Welcome to Wanderlust Foodies</h2>
            <p style={{ fontFamily:'var(--font-serif)', fontSize:18, lineHeight:1.75, color:'var(--text-body)', marginBottom:18 }}>
              We are Girish and Vidya — and our son Devansh, who has been dragged along on enough road trips to have opinions about all of them. Wanderlust Foodies is where we document those adventures: honestly, with photographs that are taken by whoever isn't complaining about the altitude, and recipes that we test until they work on a normal weeknight kitchen.
            </p>
            <p style={{ fontFamily:'var(--font-serif)', fontSize:18, lineHeight:1.75, color:'var(--text-body)', marginBottom:18 }}>
              We started this blog because we believe the best way to understand a culture is through its cuisine. A temple tells you what people revere. A kitchen tells you how they live.
            </p>
            <blockquote style={{ margin:'28px 0', padding:'4px 0 4px 22px', borderLeft:'4px solid var(--spice-500)' }}>
              <p style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:'clamp(1.2rem,2vw,1.5rem)', lineHeight:1.4, color:'var(--espresso-700)', margin:0 }}>
                "Exploring the world one bite at a time."
              </p>
            </blockquote>
            <p style={{ fontFamily:'var(--font-serif)', fontSize:18, lineHeight:1.75, color:'var(--text-body)', marginBottom:28 }}>
              Girish recently wrote <em>The Human Migration</em> — a memoir about trekking the Garhwal Himalayas that is more honest about what it feels like to be deeply unprepared than most travel writing allows itself to be. Vidya handles the recipes. Devansh handles the complaints.
            </p>
            <div style={{ display:'flex', gap:12 }}>
              <button onClick={()=>navigate('blog')} style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.07em', fontSize:13, padding:'12px 24px', borderRadius:'var(--radius-pill)', border:'none', cursor:'pointer', background:'var(--spice-500)', color:'#fff' }}>Read Our Stories</button>
              <button onClick={()=>navigate('book')} style={{ fontFamily:'var(--font-display)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.07em', fontSize:13, padding:'12px 24px', borderRadius:'var(--radius-pill)', border:'2px solid var(--espresso-700)', cursor:'pointer', background:'transparent', color:'var(--espresso-700)' }}>The Book →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <div style={{ background:'var(--surface-sunk)', borderTop:'1.5px solid var(--border-hairline)', borderBottom:'1.5px solid var(--border-hairline)', padding:'clamp(2rem,4vw,3rem) 0' }}>
        <div style={{ ...container, display:'flex', justifyContent:'center', gap:'clamp(2.5rem,7vw,6rem)', flexWrap:'wrap' }}>
          {[['25+','Destinations explored'],['50+','Recipes documented'],['3','Active travellers'],['2025','The memoir published']].map(([v,l]) => (
            <div key={l} style={{ textAlign:'center' }}>
              <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'3rem', lineHeight:1, color:'var(--spice-500)' }}>{v}</div>
              <div style={{ fontFamily:'var(--font-sans)', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.1em', fontSize:11, color:'var(--text-muted)', marginTop:6 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { HomePage, AboutPage });
