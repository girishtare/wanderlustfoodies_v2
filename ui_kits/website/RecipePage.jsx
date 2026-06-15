/* Wanderlust Foodies — Recipe page */
function RecipePage({ onNav }) {
  const { Badge, Button } = window.WanderlustFoodiesDesignSystem_288b64;
  const [checked, setChecked] = React.useState({});
  const ingredients = [
    '1 cup Nachni (ragi / finger-millet) flour',
    '¾ cup hot water, just off the boil',
    '½ tsp salt', '1 tsp ghee, plus more for roasting',
    'A pinch of warmth and patience',
  ];
  const steps = [
    'Bring the water to a rolling boil; stir in salt and ghee.',
    'Add the flour all at once, fold off the heat until it clumps, then rest covered 5 minutes.',
    'Knead the warm dough until smooth and pliable — this is the whole secret.',
    'Pat into a round on a damp cloth; roast on a hot tawa, then over an open flame until it puffs.',
  ];
  const wrap = { maxWidth: '64rem', margin: '0 auto', padding: '0 clamp(1rem,4vw,2.5rem)' };
  const metaItem = (k, v) => (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--spice-600)' }}>{v}</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-faint)' }}>{k}</div>
    </div>
  );
  return (
    <div>
      <div style={{ ...wrap, paddingTop: 'clamp(1.5rem,3vw,2.5rem)' }}>
        <button onClick={() => onNav('recipe')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-faint)', padding: 0, marginBottom: 16 }}>Recipes / Breads & Rotis</button>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
              <Badge tone="recipe" solid>Gluten-free</Badge>
              <Badge tone="success">Easy</Badge>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.01em', lineHeight: 1, fontSize: 'clamp(2.2rem,4vw,3.4rem)', color: 'var(--text-strong)', margin: 0 }}>Nachni (Ragi) Bhakri</h1>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, lineHeight: 1.6, color: 'var(--text-muted)', marginTop: 16 }}>
              Tired of ragi bhakri turning out hard, dry or crumbly? Here is the secret technique for perfectly soft, pliable, easy-to-digest bhakri — a powerhouse of calcium and iron.
            </p>
            <div style={{ display: 'flex', gap: 28, marginTop: 24, padding: '16px 0', borderTop: '1.5px solid var(--border-hairline)', borderBottom: '1.5px solid var(--border-hairline)' }}>
              {metaItem('Prep', '10m')}{metaItem('Cook', '10m')}{metaItem('Makes', '4')}
            </div>
          </div>
          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '2.5px solid var(--espresso-700)', boxShadow: 'var(--shadow-lg)' }}>
            <img src="../../assets/img/recipe-nachni-bhakri.jpg" alt="Nachni Bhakri" style={{ width: '100%', height: 360, objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      <div style={{ ...wrap, paddingTop: 'clamp(2rem,4vw,3rem)', paddingBottom: 'clamp(2.5rem,5vw,4rem)', display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 40, alignItems: 'start' }}>
        {/* Ingredients */}
        <div style={{ background: 'var(--surface-card)', border: '1.5px solid var(--border-hairline)', borderRadius: 'var(--radius-lg)', padding: 24, position: 'sticky', top: 88 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 20, color: 'var(--text-strong)', margin: '0 0 16px' }}>Ingredients</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {ingredients.map((ing, i) => (
              <li key={i} onClick={() => setChecked((c) => ({ ...c, [i]: !c[i] }))} style={{ display: 'flex', gap: 11, alignItems: 'flex-start', cursor: 'pointer', fontFamily: 'var(--font-serif)', fontSize: 16, lineHeight: 1.4, color: checked[i] ? 'var(--text-faint)' : 'var(--text-body)', textDecoration: checked[i] ? 'line-through' : 'none' }}>
                <span style={{ width: 19, height: 19, flexShrink: 0, marginTop: 2, borderRadius: 5, border: '2px solid ' + (checked[i] ? 'var(--spice-500)' : 'var(--border-default)'), background: checked[i] ? 'var(--spice-500)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12 }}>{checked[i] ? '✓' : ''}</span>
                {ing}
              </li>
            ))}
          </ul>
        </div>
        {/* Method */}
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: 20, color: 'var(--text-strong)', margin: '0 0 20px' }}>Method</h2>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, counterReset: 'step', display: 'flex', flexDirection: 'column', gap: 22 }}>
            {steps.map((s, i) => (
              <li key={i} style={{ display: 'flex', gap: 16 }}>
                <span style={{ flexShrink: 0, width: 38, height: 38, borderRadius: '50%', background: 'var(--espresso-700)', color: 'var(--paper-100)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 1.65, color: 'var(--text-body)', margin: 0, paddingTop: 6 }}>{s}</p>
              </li>
            ))}
          </ol>
          <div style={{ marginTop: 30, display: 'flex', gap: 10 }}>
            <Button variant="primary" onClick={() => onNav('recipe')}>Print recipe</Button>
            <Button variant="ghost" onClick={() => onNav('home')}>← Home</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
window.RecipePage = RecipePage;
