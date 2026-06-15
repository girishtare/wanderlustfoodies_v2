Vintage-signage call-to-action button — use for primary and secondary page actions; Oswald uppercase label on a stamp-pill shape.

```jsx
<Button variant="primary" size="lg" onClick={book}>Explore Recipes</Button>
<Button variant="secondary">Travel Stories</Button>
<Button variant="trek" iconLeft={<span>▲</span>}>Start the Trek</Button>
<Button variant="ghost" size="sm">Read more</Button>
```

Variants: `primary` (spice terracotta fill — appetite/action), `secondary` (espresso outline on cream), `trek` (pine green, for trail/adventure context), `ghost` (inline text link). Sizes `sm | md | lg`. Pass `as="a"` with `href` to render an anchor. Labels are auto-uppercased — write them in normal case.
