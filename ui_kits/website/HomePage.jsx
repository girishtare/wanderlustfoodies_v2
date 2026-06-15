/* Wanderlust Foodies — Home page */
function HomePage({ onNav }) {
  const DS = window.WanderlustFoodiesDesignSystem_288b64;
  const { Button, Badge, ArticleCard, RecipeCard, Stat, Input } = DS;
  const wrap = { maxWidth: '78rem', margin: '0 auto', padding: '0 clamp(1rem,4vw,2.5rem)' };
  const eyebrow = { fontFamily: 'var(--font-sans)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', fontSize: 12, color: 'var(--spice-600)' };
  const h2 = { fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.01em', fontSize: 'clamp(1.7rem,3vw,2.4rem)', color: 'var(--text-strong)', margin: '10px 0 0', lineHeight: 1.05 };

  const posts = [
    { image: '../../assets/img/road-aurangabad.png', category: 'travel', categoryLabel: 'Travel', title: 'Mumbai to Aurangabad to Shirdi: The Ultimate 5-Day Family Road Trip', excerpt: 'A detailed 5-day guide covering the Samruddhi Mahamarg, Ellora Caves, Grishneshwar and Shirdi.', author: 'Girish', date: 'Jan 13', readTime: '7 min read' },
    { image: '../../assets/img/trek-sandakphu.jpg', category: 'trek', categoryLabel: 'Trek', title: 'Trekking with Friends: Off to Sandakphu!', excerpt: 'A spectacular Himalayan journey blending natural beauty, cultural richness and panoramic mountains.', author: 'Girish', date: 'Feb 9, 2025', readTime: '26 min read' },
    { image: '../../assets/img/couple-illustration.jpg', category: 'story', categoryLabel: 'Story', title: 'Road Trip Across 3 States: Our Annual Escape', excerpt: 'When the three of us load up the car and set off on our annual adventure across state lines.', author: 'Vidya', date: 'May 3, 2025', readTime: '23 min read' },
  ];
  const recipes = [
    { image: '../../assets/img/recipe-nachni-bhakri.jpg', title: 'Nachni (Ragi) Bhakri', time: '20 min', tags: ['Gluten-free'], blurb: 'The secret technique for perfectly soft, pliable, easy-to-digest Nachni Bhakri every single time.' },
    { image: '../../assets/img/recipe-sabudana-khichdi.jpg', title: 'Sabudana Khichdi', time: '10 min', tags: ['Navratri'], blurb: 'Instant, fluffy, non-sticky sago pearls — skip the long overnight soak entirely.' },
    { image: '../../assets/img/recipe-pomfret-fry.jpg', title: 'Pomfret / Paplet Fry', time: '25 min', tags: ['Konkan'], blurb: 'The authentic Konkan-coast marinade that coats the fish and makes every bite delicious.' },
  ];

  return (
    <div>
      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ ...wrap, display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 40, alignItems: 'center', padding: 'clamp(2.5rem,5vw,4.5rem) clamp(1rem,4vw,2.5rem)' }}>
          <div>
            <span style={eyebrow}>Travel · Food · Stories</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.005em', lineHeight: 0.95, fontSize: 'clamp(2.8rem,6vw,4.6rem)', color: 'var(--text-strong)', margin: '12px 0 0' }}>
              Global Adventures.<br /><span style={{ color: 'var(--spice-500)' }}>Local Flavours.</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.05rem,1.6vw,1.3rem)', lineHeight: 1.55, color: 'var(--text-muted)', maxWidth: '46ch', margin: '20px 0 26px' }}>
              Exploring the world one bite at a time. Honest travel tales, hard-won trails and the home-cooked recipes we carry back.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" onClick={() => onNav('blog')}>Travel Stories</Button>
              <Button variant="secondary" size="lg" onClick={() => onNav('recipe')}>Explore Recipes</Button>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '2.5px solid var(--espresso-700)', boxShadow: 'var(--shadow-lg)', transform: 'rotate(-1.5deg)' }}>
              <img src="../../assets/img/trek-sandakphu.jpg" alt="Himalayan trail map" style={{ width: '100%', height: 380, objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', bottom: -18, left: -18, background: 'var(--turmeric-500)', color: 'var(--espresso-900)', fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 14, padding: '10px 16px', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-md)', transform: 'rotate(-3deg)' }}>Garhwal Himalayas →</div>
          </div>
        </div>
      </section>

      {/* TRAVEL TALES */}
      <section style={{ ...wrap, padding: 'clamp(2rem,4vw,3.5rem) clamp(1rem,4vw,2.5rem)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <span style={eyebrow}>Travel Tales</span>
            <h2 style={h2}>Discover the World Through Our Stories</h2>
          </div>
          <Button variant="ghost" onClick={() => onNav('blog')}>View all destinations →</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22, marginTop: 26 }}>
          {posts.map((p, i) => <ArticleCard key={i} {...p} onClick={(e) => { e.preventDefault(); onNav('blog'); }} />)}
        </div>
      </section>

      {/* RECIPES */}
      <section style={{ background: 'var(--surface-sunk)', borderTop: '1.5px solid var(--border-hairline)', borderBottom: '1.5px solid var(--border-hairline)' }}>
        <div style={{ ...wrap, padding: 'clamp(2rem,4vw,3.5rem) clamp(1rem,4vw,2.5rem)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
            <div>
              <span style={eyebrow}>From Our Kitchen</span>
              <h2 style={h2}>Join Us on a Flavourful Journey</h2>
            </div>
            <Button variant="ghost" onClick={() => onNav('recipe')}>All recipes →</Button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16, marginTop: 26 }}>
            {recipes.map((r, i) => <RecipeCard key={i} {...r} onClick={(e) => { e.preventDefault(); onNav('recipe'); }} />)}
          </div>
        </div>
      </section>

      {/* MEET / STATS */}
      <section style={{ ...wrap, padding: 'clamp(2.5rem,5vw,4rem) clamp(1rem,4vw,2.5rem)', textAlign: 'center' }}>
        <span style={{ ...eyebrow, display: 'block' }}>Meet Wanderlust Foodies</span>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.1rem,1.8vw,1.35rem)', lineHeight: 1.6, color: 'var(--text-body)', maxWidth: '60ch', margin: '14px auto 0' }}>
          We are passionate travellers and food enthusiasts who believe the best way to understand a culture is through its cuisine.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(2rem,6vw,5rem)', marginTop: 36, flexWrap: 'wrap' }}>
          <Stat value="25+" label="Destinations" description="Across five continents." align="center" />
          <Stat value="50+" label="Recipes" description="From markets & family kitchens." align="center" />
          <Stat value="∞" label="Stories" description="Every dish has a memory." align="center" />
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ background: 'var(--surface-ink)' }}>
        <div style={{ ...wrap, padding: 'clamp(2.5rem,5vw,4rem) clamp(1rem,4vw,2.5rem)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
          <div>
            <h2 style={{ ...h2, color: 'var(--paper-100)', margin: 0 }}>Join the Adventure</h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 1.6, color: 'var(--kraft-300)', marginTop: 14, maxWidth: '42ch' }}>Subscribe for weekly travel stories, seasonal recipes and insider tips — straight to your inbox.</p>
          </div>
          <NewsletterForm Input={Input} Button={Button} />
        </div>
      </section>
    </div>
  );
}

function NewsletterForm({ Input, Button }) {
  const [done, setDone] = React.useState(false);
  if (done) return <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--turmeric-300)', textAlign: 'center' }}>You're on the trail with us — see you on Sunday. 🥾</div>;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
      <Input placeholder="First name" />
      <Input type="email" placeholder="Email address" />
      <div style={{ gridColumn: '1 / -1' }}>
        <Button variant="primary" fullWidth onClick={() => setDone(true)}>Subscribe</Button>
      </div>
    </div>
  );
}
window.HomePage = HomePage;
