/* @ds-bundle: {"format":3,"namespace":"WanderlustFoodiesDesignSystem_288b64","components":[{"name":"StampSeal","sourcePath":"components/brand/StampSeal.jsx"},{"name":"ArticleCard","sourcePath":"components/content/ArticleCard.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"RecipeCard","sourcePath":"components/content/RecipeCard.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"}],"sourceHashes":{"components/brand/StampSeal.jsx":"2bc4c488cffe","components/content/ArticleCard.jsx":"6d7313685f42","components/content/Badge.jsx":"e6274cb19d9a","components/content/RecipeCard.jsx":"ee0ef0528d45","components/content/Stat.jsx":"59e55a5f605a","components/core/Avatar.jsx":"784e392a1a76","components/core/Button.jsx":"c0b9e8e62e0f","components/core/Input.jsx":"fa405085ec92","data.js":"947804e265b9","docs/data.js":"947804e265b9","ui_kits/website/BlogPostPage.jsx":"094816e8ad2c","ui_kits/website/BookPage.jsx":"d351c336e495","ui_kits/website/Footer.jsx":"e889b6593255","ui_kits/website/Header.jsx":"6c72cae8d7db","ui_kits/website/HomePage.jsx":"1cef33c49e3b","ui_kits/website/RecipePage.jsx":"846acd4840a7","website/chrome.jsx":"bc4be124e18e","website/content.jsx":"8f4446ffc7d8","website/data.js":"947804e265b9","website/detail.jsx":"10390fc0c58c","website/home.jsx":"ba8c10ed59e3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WanderlustFoodiesDesignSystem_288b64 = window.WanderlustFoodiesDesignSystem_288b64 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/StampSeal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wanderlust Foodies — StampSeal
 * The brand's signature device: a vintage circular rubber-stamp with
 * arced top & bottom text around a center mark. Pure type + rings (no
 * illustration). Echoes the "GLOBAL ADVENTURES · LOCAL FLAVOURS" badge.
 */
function StampSeal({
  topText = 'GLOBAL ADVENTURES',
  bottomText = 'LOCAL FLAVOURS',
  center = 'WF',
  sub = 'EST · 2025',
  size = 200,
  color = 'var(--espresso-700)',
  background = 'transparent',
  style,
  ...rest
}) {
  const uid = React.useId().replace(/:/g, '');
  const r = 86; // text path radius within 0..200 viewBox
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 200",
    width: size,
    height: size,
    role: "img",
    "aria-label": `${topText} ${center} ${bottomText}`
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    id: `top-${uid}`,
    d: `M ${100 - r},100 A ${r},${r} 0 0 1 ${100 + r},100`
  }), /*#__PURE__*/React.createElement("path", {
    id: `bot-${uid}`,
    d: `M ${100 - r},100 A ${r},${r} 0 0 0 ${100 + r},100`
  })), background !== 'transparent' && /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "100",
    r: "98",
    fill: background
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "100",
    r: "96",
    fill: "none",
    stroke: color,
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "100",
    r: "78",
    fill: "none",
    stroke: color,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("text", {
    fill: color,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '15px',
      letterSpacing: '3px'
    }
  }, /*#__PURE__*/React.createElement("textPath", {
    href: `#top-${uid}`,
    startOffset: "50%",
    textAnchor: "middle"
  }, topText)), /*#__PURE__*/React.createElement("text", {
    fill: color,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '15px',
      letterSpacing: '3px'
    }
  }, /*#__PURE__*/React.createElement("textPath", {
    href: `#bot-${uid}`,
    startOffset: "50%",
    textAnchor: "middle"
  }, bottomText)), /*#__PURE__*/React.createElement("text", {
    x: "13",
    y: "105",
    fill: color,
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '14px'
    },
    textAnchor: "middle"
  }, "\u2605"), /*#__PURE__*/React.createElement("text", {
    x: "187",
    y: "105",
    fill: color,
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '14px'
    },
    textAnchor: "middle"
  }, "\u2605"), /*#__PURE__*/React.createElement("text", {
    x: "100",
    y: "98",
    fill: color,
    textAnchor: "middle",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '40px',
      letterSpacing: '1px'
    }
  }, center), sub && /*#__PURE__*/React.createElement("text", {
    x: "100",
    y: "122",
    fill: color,
    textAnchor: "middle",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '11px',
      letterSpacing: '3px'
    }
  }, sub)));
}
Object.assign(__ds_scope, { StampSeal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StampSeal.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wanderlust Foodies — Badge
 * Category tag / pill. `tone` maps to the blog taxonomy colors
 * (travel / trek / recipe / story) or status hues.
 */
function Badge({
  children,
  tone = 'travel',
  solid = false,
  size = 'md',
  style,
  ...rest
}) {
  const tones = {
    travel: {
      c: 'var(--tag-travel)',
      bg: 'var(--spice-50)'
    },
    trek: {
      c: 'var(--tag-trek)',
      bg: 'var(--pine-50)'
    },
    recipe: {
      c: 'var(--tag-recipe)',
      bg: 'var(--turmeric-50)'
    },
    story: {
      c: 'var(--tag-story)',
      bg: 'var(--sky-100)'
    },
    neutral: {
      c: 'var(--espresso-600)',
      bg: 'var(--paper-200)'
    },
    success: {
      c: 'var(--status-success)',
      bg: 'var(--status-success-bg)'
    },
    warning: {
      c: 'var(--status-warning)',
      bg: 'var(--status-warning-bg)'
    },
    danger: {
      c: 'var(--status-danger)',
      bg: 'var(--status-danger-bg)'
    }
  };
  const t = tones[tone] || tones.travel;
  const sizes = {
    sm: {
      fontSize: '10px',
      padding: '3px 9px'
    },
    md: {
      fontSize: '11px',
      padding: '5px 12px'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      color: solid ? '#fff' : t.c,
      background: solid ? t.c : t.bg,
      border: solid ? `var(--border-width) solid ${t.c}` : `var(--border-width) solid transparent`,
      ...sizes[size],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/ArticleCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wanderlust Foodies — ArticleCard
 * Blog/travel-story card: full-bleed photo, floating category badge,
 * editorial serif title, byline + meta. Lifts and zooms on hover.
 */
function ArticleCard({
  image,
  category = 'travel',
  categoryLabel,
  title,
  excerpt,
  author,
  date,
  readTime,
  href = '#',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      textDecoration: 'none',
      background: 'var(--surface-card)',
      border: 'var(--border-width) solid var(--border-hairline)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16 / 10',
      overflow: 'hidden',
      background: 'var(--paper-200)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.06)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: category,
    solid: true
  }, categoryLabel || category))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      textTransform: 'none',
      letterSpacing: '-0.01em',
      fontSize: '1.3rem',
      lineHeight: 1.2,
      color: 'var(--text-strong)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, title), excerpt && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '0.95rem',
      lineHeight: 1.55,
      color: 'var(--text-muted)',
      margin: 0,
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, excerpt), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-sans)',
      fontSize: '12.5px',
      color: 'var(--text-faint)'
    }
  }, author && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, author), author && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true
  }, "\xB7"), date && /*#__PURE__*/React.createElement("span", null, date), readTime && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true
  }, "\xB7"), readTime && /*#__PURE__*/React.createElement("span", null, readTime))));
}
Object.assign(__ds_scope, { ArticleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ArticleCard.jsx", error: String((e && e.message) || e) }); }

// components/content/RecipeCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wanderlust Foodies — RecipeCard
 * Square food photo + Oswald recipe name, short blurb, optional
 * meta chips (time, diet) and a "View recipe" affordance.
 */
function RecipeCard({
  image,
  title,
  blurb,
  time,
  tags = [],
  href = '#',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      gap: '16px',
      textDecoration: 'none',
      background: 'var(--surface-card)',
      border: 'var(--border-width) solid var(--border-hairline)',
      borderRadius: 'var(--radius-lg)',
      padding: '14px',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transition: 'box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 104,
      height: 104,
      flexShrink: 0,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--paper-200)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
      fontSize: '1.15rem',
      lineHeight: 1.1,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title), (tags.length > 0 || time) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
      alignItems: 'center'
    }
  }, time && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "recipe",
    size: "sm"
  }, time), tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: t,
    tone: "neutral",
    size: "sm"
  }, t))), blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '0.9rem',
      lineHeight: 1.5,
      color: 'var(--text-muted)',
      margin: 0,
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, blurb), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 'auto',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontSize: '12px',
      color: hover ? 'var(--accent-primary-press)' : 'var(--text-link)'
    }
  }, "View recipe \u2192")));
}
Object.assign(__ds_scope, { RecipeCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/RecipeCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wanderlust Foodies — Stat
 * Big Oswald number with caption, for the "25+ Destinations" trio.
 */
function Stat({
  value,
  label,
  description,
  align = 'left',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1,
      letterSpacing: '0.01em',
      color: 'var(--accent-primary)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontSize: '0.95rem',
      color: 'var(--text-strong)',
      marginTop: '8px'
    }
  }, label), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '0.9375rem',
      lineHeight: 1.5,
      color: 'var(--text-muted)',
      margin: '8px 0 0',
      maxWidth: '22ch',
      marginLeft: align === 'center' ? 'auto' : 0,
      marginRight: align === 'center' ? 'auto' : 0
    }
  }, description));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wanderlust Foodies — Avatar
 * Round portrait with espresso ring, for author bylines.
 * Falls back to monogram initials on the kraft tint.
 */
function Avatar({
  src,
  alt = '',
  name,
  size = 44,
  ring = true,
  style,
  ...rest
}) {
  const initials = (name || alt || '').split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      flexShrink: 0,
      background: 'var(--kraft-300)',
      color: 'var(--espresso-700)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: size * 0.4,
      letterSpacing: '0.02em',
      boxShadow: ring ? '0 0 0 2px var(--surface-card), 0 0 0 3.5px var(--espresso-700)' : 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wanderlust Foodies — Button
 * Vintage-signage CTA: Oswald uppercase label, stamp-pill shape,
 * spice-terracotta primary. Grounded press (no bounce).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  as = 'button',
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '12px',
      gap: '7px'
    },
    md: {
      padding: '12px 24px',
      fontSize: '14px',
      gap: '9px'
    },
    lg: {
      padding: '16px 32px',
      fontSize: '16px',
      gap: '11px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--accent-primary)',
      color: 'var(--text-on-spice)',
      border: 'var(--border-width) solid var(--accent-primary)',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: 'var(--border-width) solid var(--border-strong)',
      boxShadow: 'none'
    },
    trek: {
      background: 'var(--accent-trek)',
      color: 'var(--text-on-dark)',
      border: 'var(--border-width) solid var(--accent-trek)',
      boxShadow: 'var(--shadow-sm)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-link)',
      border: 'var(--border-width) solid transparent',
      boxShadow: 'none'
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === 'button' ? disabled : undefined,
    "data-variant": variant,
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: sizes[size].gap,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      textDecoration: 'none',
      lineHeight: 1,
      padding: sizes[size].padding,
      fontSize: sizes[size].fontSize,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'transform var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard), filter var(--dur-fast) var(--ease-standard)',
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = 'var(--accent-primary-hover)';
      if (variant === 'secondary') e.currentTarget.style.background = 'var(--surface-sunk)';
      if (variant === 'trek') e.currentTarget.style.filter = 'brightness(1.12)';
      if (variant === 'ghost') e.currentTarget.style.background = 'var(--spice-50)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = variants[variant].background;
      e.currentTarget.style.filter = 'none';
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(1px) scale(0.985)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'none';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wanderlust Foodies — Input
 * Cream field with confident hairline; turmeric focus ring.
 * Supports optional label, helper / error text and leading icon.
 */
function Input({
  label,
  helper,
  error,
  iconLeft,
  id,
  type = 'text',
  style,
  ...rest
}) {
  const inputId = id || (label ? 'wf-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: '12px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: 'var(--surface-raised)',
      border: `var(--border-width) solid ${error ? 'var(--status-danger)' : focused ? 'var(--accent-primary)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '11px 14px',
      boxShadow: focused ? '0 0 0 var(--ring-width) var(--turmeric-100)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--text-faint)'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      color: 'var(--text-body)',
      ...style
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      color: error ? 'var(--status-danger)' : 'var(--text-faint)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// data.js
try { (() => {
(function () {
  var B = '../assets/img/';
  window.WF_DATA = {
    posts: [{
      slug: 'sandakphu',
      category: 'trek',
      categoryLabel: 'Trek',
      title: 'Trekking with Friends: Off to Sandakphu!',
      excerpt: 'A spectacular Himalayan journey blending natural beauty, cultural richness and panoramic mountain views — told without rose-tinted glasses.',
      image: B + 'trek-sandakphu.jpg',
      author: 'Girish',
      date: 'Feb 9, 2025',
      readTime: '26 min read',
      featured: true,
      content: [{
        type: 'lead',
        text: 'The Sandakphu-Phalut trek is one of the finest in the Indian Himalayas. We set off as six friends and one very optimistic packing list.'
      }, {
        type: 'p',
        text: 'Day one lulls you into confidence — gentle rhododendron forest, easy switchbacks, the kind of trail that makes you believe you trained enough. You did not. Nobody does.'
      }, {
        type: 'quote',
        text: 'The hardest trails end in places you cannot quite take with you, but also cannot leave entirely behind.'
      }, {
        type: 'p',
        text: 'By the time Sleeping Buddha — the Kanchenjunga range stretched flat against the dawn — finally appeared, the cold had stopped being a complaint and started being a fact. We stood there, breath ragged, fingers useless, grinning like idiots.'
      }, {
        type: 'p',
        text: 'The trail passes through Tumling, Kalipokhri and Bikheybhanjyang before the final steep push to the summit ridge. At 3,636m, Sandakphu offers views of four of the world\'s five highest peaks — Everest, Kangchenjunga, Lhotse and Makalu — all in one morning horizon.'
      }]
    }, {
      slug: 'aurangabad-shirdi',
      category: 'travel',
      categoryLabel: 'Travel',
      title: 'Mumbai to Aurangabad to Shirdi: The Ultimate 5-Day Family Road Trip',
      excerpt: 'A detailed guide covering the Samruddhi Mahamarg, Ellora Caves, Grishneshwar and Shirdi.',
      image: B + 'road-aurangabad.png',
      author: 'Girish',
      date: 'Jan 13, 2025',
      readTime: '7 min read',
      featured: true,
      content: [{
        type: 'lead',
        text: 'The Samruddhi Mahamarg changed everything. Mumbai to Aurangabad is now a smooth, confident 6-hour drive — no more white-knuckle highway overtakes.'
      }, {
        type: 'p',
        text: 'We spread it over five days: Mumbai → Aurangabad (Ellora Caves, Grishneshwar, Bibi Ka Maqbara) → Shirdi → home. Family-friendly, deeply worth it.'
      }, {
        type: 'p',
        text: 'The Ellora Caves alone justify the trip. Cave 16 — the Kailasa Temple, carved top-down from a single basalt rock face — is one of those genuinely jaw-dropping human achievements that resets your sense of what\'s possible.'
      }]
    }, {
      slug: 'ujjain',
      category: 'travel',
      categoryLabel: 'Travel',
      title: 'Ujjain: Temples, Ghats and the Best Poha of Our Lives',
      excerpt: 'A weekend at the Mahakal temple, a boat at the ghat at dusk, and a poha that made us realise great cooking lives in the simplest bowl.',
      image: B + 'road-ujjain.png',
      author: 'Vidya',
      date: 'Dec 5, 2024',
      readTime: '9 min read',
      featured: true,
      content: [{
        type: 'lead',
        text: 'Ujjain\'s Mahakal temple queue at 5am on a winter morning is not what the tourist brochures lead you to expect. It is an exercise in patience, devotion, and elbows.'
      }, {
        type: 'p',
        text: 'But the city rewards slowness. The Shipra ghat at dusk, a boat drifting past earthen diyas, the smell of wood smoke and marigolds — you understand why this city has been sacred for three thousand years.'
      }, {
        type: 'p',
        text: 'The poha we ate from a tiny stall near the temple — flat rice, potato, onion, mustard, curry leaf, a squeeze of lime — was the best version of something ordinary we have ever tasted. We haven\'t stopped thinking about it.'
      }]
    }, {
      slug: 'garhwal-migration',
      category: 'story',
      categoryLabel: 'Story',
      title: 'The Human Migration: What the Garhwal Himalayas Taught Me',
      excerpt: 'From cliff-edge Bolero rides to sub-zero bucket baths — the honest account that became a book.',
      image: B + 'hero-himalaya.png',
      author: 'Girish',
      date: 'Apr 14, 2025',
      readTime: '32 min read',
      featured: false,
      content: [{
        type: 'lead',
        text: 'I went to the Garhwal Himalayas as a city-dwelling executive who had read enough about mountains to believe he was prepared. I was not.'
      }, {
        type: 'quote',
        text: 'The kind of friendships that only get built by people walking uphill together, at altitude.'
      }, {
        type: 'p',
        text: 'What followed became a book — The Human Migration — because some experiences refuse to stay inside you.'
      }]
    }, {
      slug: 'road-trip-3-states',
      category: 'travel',
      categoryLabel: 'Travel',
      title: 'Road Trip Across 3 States: Our Annual Escape',
      excerpt: 'When the three of us load up the car and set off — playlist ready, snacks packed, no plan beyond the first fuel stop.',
      image: B + 'couple-illustration.jpg',
      author: 'Vidya',
      date: 'May 3, 2025',
      readTime: '23 min read',
      featured: false,
      content: [{
        type: 'lead',
        text: 'Every year, somewhere in April or May, Girish announces that we need to leave. This is not wrong.'
      }, {
        type: 'p',
        text: 'This year it was a loop through three states — Maharashtra, Karnataka, Goa — over ten days. The kind of trip where the drive becomes the point, not just the means to it.'
      }]
    }],
    recipes: [{
      slug: 'nachni-bhakri',
      title: 'Nachni (Ragi) Bhakri',
      image: B + 'recipe-nachni-bhakri.jpg',
      time: '20 min',
      serves: '4',
      difficulty: 'Easy',
      tags: ['Gluten-free'],
      category: 'Breads',
      blurb: 'The secret technique for perfectly soft, pliable Nachni Bhakri — a powerhouse of calcium and iron.',
      featured: true,
      intro: 'Tired of ragi bhakri turning out hard or crumbly? The trick is the hot-water method: pour boiling water over the flour, fold off the heat, rest it, then knead while warm.',
      ingredients: ['1 cup Nachni (ragi / finger-millet) flour', '¾ cup hot water, just off the boil', '½ tsp salt', '1 tsp ghee, plus extra for roasting'],
      method: ['Bring water to a rolling boil; stir in salt and ghee.', 'Add flour all at once, fold off the heat until it clumps, cover and rest 5 minutes.', 'Knead the warm dough for 2 minutes until smooth and pliable.', 'Divide into 4 balls; pat each into a round on a damp cloth.', 'Roast on a dry hot tawa, then hold directly over an open flame until it puffs.', 'Apply ghee and serve immediately with pitla or curry.']
    }, {
      slug: 'sabudana-khichdi',
      title: 'Sabudana Khichdi',
      image: B + 'recipe-sabudana-khichdi.jpg',
      time: '10 min',
      serves: '3',
      difficulty: 'Easy',
      tags: ['Navratri', 'Vrat'],
      category: 'Mains',
      blurb: 'Instant, fluffy, non-sticky sago pearls — skip the long overnight soak entirely.',
      featured: true,
      intro: 'The trick to non-sticky sabudana khichdi? Soak in just enough water to coat the pearls — not drown them — for exactly two hours.',
      ingredients: ['1 cup sabudana (sago pearls)', '¾ cup roasted peanuts, coarsely crushed', '2 medium potatoes, boiled and cubed', '2 tbsp ghee', '1 tsp cumin seeds', '2 green chillies, slit', '¼ tsp rock salt', 'Juice of ½ lemon'],
      method: ['Wash sabudana twice, add just enough water to coat by ½cm. Soak 2 hours only.', 'Drain and separate pearls on a wide plate.', 'Heat ghee, add cumin and chillies; once they pop, add potatoes.', 'Add sabudana and peanuts; toss on medium-high heat 5 minutes.', 'Season, squeeze lemon, garnish with coriander and serve.']
    }, {
      slug: 'pomfret-fry',
      title: 'Pomfret / Paplet Fry',
      image: B + 'recipe-pomfret-fry.jpg',
      time: '25 min',
      serves: '2',
      difficulty: 'Medium',
      tags: ['Konkan', 'Seafood'],
      category: 'Mains',
      blurb: 'The authentic Konkan-coast marinade that makes every bite mouth-wateringly delicious.',
      featured: true,
      intro: 'A good pomfret fry is about the marinade sitting in the scored cuts — at least 20 minutes, but overnight in the fridge is the real game-changer.',
      ingredients: ['2 whole pomfret, cleaned and scored', '2 tsp Kashmiri red chilli powder', '1 tsp turmeric', '1½ tsp coriander powder', '2 tsp tamarind paste', '1 tsp ginger-garlic paste', '1 tsp salt', 'Coconut oil for shallow frying'],
      method: ['Mix all spices, tamarind and ginger-garlic into a thick marinade.', 'Score fish 3 times each side; rub marinade deep into the cuts.', 'Marinate at least 20 minutes (overnight is better).', 'Heat coconut oil in a flat pan; lay fish in hot oil.', 'Fry 4–5 min per side on medium-high until edges are crispy.', 'Serve immediately with rice, lime and raw onion.']
    }]
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "data.js", error: String((e && e.message) || e) }); }

// docs/data.js
try { (() => {
(function () {
  var B = '../assets/img/';
  window.WF_DATA = {
    posts: [{
      slug: 'sandakphu',
      category: 'trek',
      categoryLabel: 'Trek',
      title: 'Trekking with Friends: Off to Sandakphu!',
      excerpt: 'A spectacular Himalayan journey blending natural beauty, cultural richness and panoramic mountain views — told without rose-tinted glasses.',
      image: B + 'trek-sandakphu.jpg',
      author: 'Girish',
      date: 'Feb 9, 2025',
      readTime: '26 min read',
      featured: true,
      content: [{
        type: 'lead',
        text: 'The Sandakphu-Phalut trek is one of the finest in the Indian Himalayas. We set off as six friends and one very optimistic packing list.'
      }, {
        type: 'p',
        text: 'Day one lulls you into confidence — gentle rhododendron forest, easy switchbacks, the kind of trail that makes you believe you trained enough. You did not. Nobody does.'
      }, {
        type: 'quote',
        text: 'The hardest trails end in places you cannot quite take with you, but also cannot leave entirely behind.'
      }, {
        type: 'p',
        text: 'By the time Sleeping Buddha — the Kanchenjunga range stretched flat against the dawn — finally appeared, the cold had stopped being a complaint and started being a fact. We stood there, breath ragged, fingers useless, grinning like idiots.'
      }, {
        type: 'p',
        text: 'The trail passes through Tumling, Kalipokhri and Bikheybhanjyang before the final steep push to the summit ridge. At 3,636m, Sandakphu offers views of four of the world\'s five highest peaks — Everest, Kangchenjunga, Lhotse and Makalu — all in one morning horizon.'
      }]
    }, {
      slug: 'aurangabad-shirdi',
      category: 'travel',
      categoryLabel: 'Travel',
      title: 'Mumbai to Aurangabad to Shirdi: The Ultimate 5-Day Family Road Trip',
      excerpt: 'A detailed guide covering the Samruddhi Mahamarg, Ellora Caves, Grishneshwar and Shirdi.',
      image: B + 'road-aurangabad.png',
      author: 'Girish',
      date: 'Jan 13, 2025',
      readTime: '7 min read',
      featured: true,
      content: [{
        type: 'lead',
        text: 'The Samruddhi Mahamarg changed everything. Mumbai to Aurangabad is now a smooth, confident 6-hour drive — no more white-knuckle highway overtakes.'
      }, {
        type: 'p',
        text: 'We spread it over five days: Mumbai → Aurangabad (Ellora Caves, Grishneshwar, Bibi Ka Maqbara) → Shirdi → home. Family-friendly, deeply worth it.'
      }, {
        type: 'p',
        text: 'The Ellora Caves alone justify the trip. Cave 16 — the Kailasa Temple, carved top-down from a single basalt rock face — is one of those genuinely jaw-dropping human achievements that resets your sense of what\'s possible.'
      }]
    }, {
      slug: 'ujjain',
      category: 'travel',
      categoryLabel: 'Travel',
      title: 'Ujjain: Temples, Ghats and the Best Poha of Our Lives',
      excerpt: 'A weekend at the Mahakal temple, a boat at the ghat at dusk, and a poha that made us realise great cooking lives in the simplest bowl.',
      image: B + 'road-ujjain.png',
      author: 'Vidya',
      date: 'Dec 5, 2024',
      readTime: '9 min read',
      featured: true,
      content: [{
        type: 'lead',
        text: 'Ujjain\'s Mahakal temple queue at 5am on a winter morning is not what the tourist brochures lead you to expect. It is an exercise in patience, devotion, and elbows.'
      }, {
        type: 'p',
        text: 'But the city rewards slowness. The Shipra ghat at dusk, a boat drifting past earthen diyas, the smell of wood smoke and marigolds — you understand why this city has been sacred for three thousand years.'
      }, {
        type: 'p',
        text: 'The poha we ate from a tiny stall near the temple — flat rice, potato, onion, mustard, curry leaf, a squeeze of lime — was the best version of something ordinary we have ever tasted. We haven\'t stopped thinking about it.'
      }]
    }, {
      slug: 'garhwal-migration',
      category: 'story',
      categoryLabel: 'Story',
      title: 'The Human Migration: What the Garhwal Himalayas Taught Me',
      excerpt: 'From cliff-edge Bolero rides to sub-zero bucket baths — the honest account that became a book.',
      image: B + 'hero-himalaya.png',
      author: 'Girish',
      date: 'Apr 14, 2025',
      readTime: '32 min read',
      featured: false,
      content: [{
        type: 'lead',
        text: 'I went to the Garhwal Himalayas as a city-dwelling executive who had read enough about mountains to believe he was prepared. I was not.'
      }, {
        type: 'quote',
        text: 'The kind of friendships that only get built by people walking uphill together, at altitude.'
      }, {
        type: 'p',
        text: 'What followed became a book — The Human Migration — because some experiences refuse to stay inside you.'
      }]
    }, {
      slug: 'road-trip-3-states',
      category: 'travel',
      categoryLabel: 'Travel',
      title: 'Road Trip Across 3 States: Our Annual Escape',
      excerpt: 'When the three of us load up the car and set off — playlist ready, snacks packed, no plan beyond the first fuel stop.',
      image: B + 'couple-illustration.jpg',
      author: 'Vidya',
      date: 'May 3, 2025',
      readTime: '23 min read',
      featured: false,
      content: [{
        type: 'lead',
        text: 'Every year, somewhere in April or May, Girish announces that we need to leave. This is not wrong.'
      }, {
        type: 'p',
        text: 'This year it was a loop through three states — Maharashtra, Karnataka, Goa — over ten days. The kind of trip where the drive becomes the point, not just the means to it.'
      }]
    }],
    recipes: [{
      slug: 'nachni-bhakri',
      title: 'Nachni (Ragi) Bhakri',
      image: B + 'recipe-nachni-bhakri.jpg',
      time: '20 min',
      serves: '4',
      difficulty: 'Easy',
      tags: ['Gluten-free'],
      category: 'Breads',
      blurb: 'The secret technique for perfectly soft, pliable Nachni Bhakri — a powerhouse of calcium and iron.',
      featured: true,
      intro: 'Tired of ragi bhakri turning out hard or crumbly? The trick is the hot-water method: pour boiling water over the flour, fold off the heat, rest it, then knead while warm.',
      ingredients: ['1 cup Nachni (ragi / finger-millet) flour', '¾ cup hot water, just off the boil', '½ tsp salt', '1 tsp ghee, plus extra for roasting'],
      method: ['Bring water to a rolling boil; stir in salt and ghee.', 'Add flour all at once, fold off the heat until it clumps, cover and rest 5 minutes.', 'Knead the warm dough for 2 minutes until smooth and pliable.', 'Divide into 4 balls; pat each into a round on a damp cloth.', 'Roast on a dry hot tawa, then hold directly over an open flame until it puffs.', 'Apply ghee and serve immediately with pitla or curry.']
    }, {
      slug: 'sabudana-khichdi',
      title: 'Sabudana Khichdi',
      image: B + 'recipe-sabudana-khichdi.jpg',
      time: '10 min',
      serves: '3',
      difficulty: 'Easy',
      tags: ['Navratri', 'Vrat'],
      category: 'Mains',
      blurb: 'Instant, fluffy, non-sticky sago pearls — skip the long overnight soak entirely.',
      featured: true,
      intro: 'The trick to non-sticky sabudana khichdi? Soak in just enough water to coat the pearls — not drown them — for exactly two hours.',
      ingredients: ['1 cup sabudana (sago pearls)', '¾ cup roasted peanuts, coarsely crushed', '2 medium potatoes, boiled and cubed', '2 tbsp ghee', '1 tsp cumin seeds', '2 green chillies, slit', '¼ tsp rock salt', 'Juice of ½ lemon'],
      method: ['Wash sabudana twice, add just enough water to coat by ½cm. Soak 2 hours only.', 'Drain and separate pearls on a wide plate.', 'Heat ghee, add cumin and chillies; once they pop, add potatoes.', 'Add sabudana and peanuts; toss on medium-high heat 5 minutes.', 'Season, squeeze lemon, garnish with coriander and serve.']
    }, {
      slug: 'pomfret-fry',
      title: 'Pomfret / Paplet Fry',
      image: B + 'recipe-pomfret-fry.jpg',
      time: '25 min',
      serves: '2',
      difficulty: 'Medium',
      tags: ['Konkan', 'Seafood'],
      category: 'Mains',
      blurb: 'The authentic Konkan-coast marinade that makes every bite mouth-wateringly delicious.',
      featured: true,
      intro: 'A good pomfret fry is about the marinade sitting in the scored cuts — at least 20 minutes, but overnight in the fridge is the real game-changer.',
      ingredients: ['2 whole pomfret, cleaned and scored', '2 tsp Kashmiri red chilli powder', '1 tsp turmeric', '1½ tsp coriander powder', '2 tsp tamarind paste', '1 tsp ginger-garlic paste', '1 tsp salt', 'Coconut oil for shallow frying'],
      method: ['Mix all spices, tamarind and ginger-garlic into a thick marinade.', 'Score fish 3 times each side; rub marinade deep into the cuts.', 'Marinate at least 20 minutes (overnight is better).', 'Heat coconut oil in a flat pan; lay fish in hot oil.', 'Fry 4–5 min per side on medium-high until edges are crispy.', 'Serve immediately with rice, lime and raw onion.']
    }]
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "docs/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/BlogPostPage.jsx
try { (() => {
/* Wanderlust Foodies — Blog / travel-story article page */
function BlogPostPage({
  onNav
}) {
  const {
    Badge,
    Avatar,
    Button,
    ArticleCard
  } = window.WanderlustFoodiesDesignSystem_288b64;
  const prose = {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(1.05rem,1.4vw,1.18rem)',
    lineHeight: 1.75,
    color: 'var(--text-body)',
    margin: '0 0 1.3em'
  };
  return /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 'clamp(320px,46vw,520px)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/trek-sandakphu.jpg",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(36,20,5,0.15) 0%, rgba(36,20,5,0.78) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '52rem',
      margin: '0 auto',
      padding: '0 clamp(1rem,4vw,2.5rem) clamp(1.5rem,3vw,2.5rem)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "trek",
    solid: true
  }, "Trek"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      lineHeight: 1,
      fontSize: 'clamp(2rem,5vw,3.6rem)',
      color: 'var(--paper-100)',
      margin: '14px 0 0',
      textWrap: 'balance'
    }
  }, "Trekking with Friends:", /*#__PURE__*/React.createElement("br", null), "Off to Sandakphu!")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '42rem',
      margin: '0 auto',
      padding: 'clamp(2rem,4vw,3rem) clamp(1rem,4vw,2.5rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      paddingBottom: 22,
      marginBottom: 28,
      borderBottom: '1.5px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: "../../assets/img/couple-illustration.jpg",
    name: "Girish",
    size: 48
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, "Girish"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-faint)'
    }
  }, "Feb 9, 2025 \xB7 26 min read")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Himalayas"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Friends"))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...prose,
      fontWeight: 500,
      fontSize: 'clamp(1.2rem,1.8vw,1.4rem)',
      color: 'var(--text-strong)'
    }
  }, "The Sandakphu-Phalut trek is a spectacular Himalayan journey that offers a blend of natural beauty, cultural richness and panoramic mountain views you do not forget."), /*#__PURE__*/React.createElement("p", {
    style: prose
  }, "We set off as six friends and one very optimistic packing list. The first day lulls you into confidence \u2014 gentle rhododendron forest, easy switchbacks, the kind of trail that makes you believe you trained enough. You did not. Nobody does."), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: '2em 0',
      padding: '4px 0 4px 22px',
      borderLeft: '4px solid var(--spice-500)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'clamp(1.25rem,2vw,1.55rem)',
      lineHeight: 1.4,
      color: 'var(--espresso-700)',
      margin: 0
    }
  }, "The hardest trails end in places you cannot quite take with you, but also cannot leave entirely behind.")), /*#__PURE__*/React.createElement("p", {
    style: prose
  }, "By the time Sleeping Buddha \u2014 the Kanchenjunga range stretched flat against the dawn \u2014 finally appeared, the cold had stopped being a complaint and started being a fact. We stood there, breath ragged, fingers useless, grinning like idiots. Worth every uphill metre."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      marginTop: 36,
      paddingTop: 24,
      borderTop: '1.5px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNav('home')
  }, "\u2190 Back home"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNav('recipe')
  }, "What we ate up there \u2192"))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunk)',
      borderTop: '1.5px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '78rem',
      margin: '0 auto',
      padding: 'clamp(2rem,4vw,3rem) clamp(1rem,4vw,2.5rem)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      fontSize: 12,
      color: 'var(--spice-600)'
    }
  }, "Keep Reading"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 22,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(ArticleCard, {
    image: "../../assets/img/road-aurangabad.png",
    category: "travel",
    categoryLabel: "Travel",
    title: "Mumbai to Aurangabad to Shirdi",
    excerpt: "The ultimate 5-day family road trip across Maharashtra.",
    author: "Girish",
    date: "Jan 13",
    readTime: "7 min",
    onClick: e => {
      e.preventDefault();
      onNav('blog');
    }
  }), /*#__PURE__*/React.createElement(ArticleCard, {
    image: "../../assets/img/couple-illustration.jpg",
    category: "story",
    categoryLabel: "Story",
    title: "Road Trip Across 3 States",
    excerpt: "Our annual escape, loaded into one very full car.",
    author: "Vidya",
    date: "May 3",
    readTime: "23 min",
    onClick: e => {
      e.preventDefault();
      onNav('blog');
    }
  }), /*#__PURE__*/React.createElement(ArticleCard, {
    image: "../../assets/img/recipe-pomfret-fry.jpg",
    category: "recipe",
    categoryLabel: "Recipe",
    title: "Pomfret / Paplet Fry",
    excerpt: "The Konkan-coast marinade we make after every coastal trip.",
    author: "Vidya",
    date: "Apr 2",
    readTime: "5 min",
    onClick: e => {
      e.preventDefault();
      onNav('recipe');
    }
  })))));
}
window.BlogPostPage = BlogPostPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BlogPostPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BookPage.jsx
try { (() => {
/* Wanderlust Foodies — "The Human Migration" book landing */
function BookPage({
  onNav
}) {
  const {
    Button,
    Badge,
    StampSeal
  } = window.WanderlustFoodiesDesignSystem_288b64;
  const wrap = {
    maxWidth: '72rem',
    margin: '0 auto',
    padding: '0 clamp(1rem,4vw,2.5rem)'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-ink)',
      color: 'var(--paper-100)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 48,
      alignItems: 'center',
      padding: 'clamp(2.5rem,5vw,4.5rem) clamp(1rem,4vw,2.5rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280,
      aspectRatio: '2 / 3',
      borderRadius: '4px 10px 10px 4px',
      background: 'linear-gradient(135deg, var(--espresso-600), var(--espresso-900))',
      border: '1.5px solid var(--kraft-500)',
      boxShadow: 'var(--shadow-ink)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '30px 22px',
      transform: 'rotate(-2deg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 14,
      top: 0,
      bottom: 0,
      width: 2,
      background: 'rgba(255,255,255,0.10)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--turmeric-300)'
    }
  }, "A Travel Memoir"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      lineHeight: 0.95,
      fontSize: 40,
      color: 'var(--paper-100)'
    }
  }, "The Human Migration")), /*#__PURE__*/React.createElement(StampSeal, {
    size: 92,
    color: "var(--turmeric-300)",
    topText: "HIMALAYA",
    bottomText: "GARHWAL",
    center: "GS",
    sub: "EST \xB7 2025"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "recipe",
    solid: true
  }, "New \xB7 2025"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      lineHeight: 0.96,
      fontSize: 'clamp(2.6rem,5.5vw,4.4rem)',
      color: 'var(--paper-100)',
      margin: '16px 0 0'
    }
  }, "The Human", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--turmeric-500)'
    }
  }, "Migration")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'clamp(1.1rem,1.7vw,1.3rem)',
      lineHeight: 1.6,
      color: 'var(--kraft-300)',
      maxWidth: '48ch',
      margin: '20px 0 28px'
    }
  }, "A disarmingly honest journey into the Garhwal Himalayas \u2014 from cliff-edge Bolero rides to the thermodynamic betrayal of a sub-zero bucket bath."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Get the Book"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: {
      color: 'var(--paper-100)',
      borderColor: 'var(--border-on-dark)'
    },
    onClick: () => onNav('blog')
  }, "Read an Excerpt"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: 'clamp(2.5rem,5vw,4.5rem) clamp(1rem,4vw,2.5rem)',
      textAlign: 'center',
      maxWidth: '46rem'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'clamp(1.4rem,2.6vw,2rem)',
      lineHeight: 1.4,
      color: 'var(--espresso-700)',
      textWrap: 'balance',
      margin: 0
    }
  }, "\u201CThe kind of friendships that only get built by people walking uphill together, at altitude.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 3,
      background: 'var(--spice-500)',
      margin: '28px auto'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      lineHeight: 1.75,
      color: 'var(--text-body)',
      textAlign: 'left'
    }
  }, "With vivid descriptions of the stunning Swargarohini peaks and the ancient Osla village, readers will feel as though they are panting right alongside Girish on the trail \u2014 through blistering ascents and the realisation that the hardest trails end in places you cannot quite take with you, but also cannot leave entirely behind.")), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunk)',
      borderTop: '1.5px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: 'clamp(2.5rem,5vw,4rem) clamp(1rem,4vw,2.5rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, [['Perilous Ascents', 'Cliff-edge Bolero rides and the unforgiving wild, told without flinching.'], ['Friendships at Altitude', 'The bonds you only build walking uphill together, gasping for air.'], ['Vivid & Honest', 'Swargarohini peaks, Osla village, and one executive thoroughly out of his depth.']].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-hairline)',
      borderRadius: 'var(--radius-lg)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.03em',
      fontSize: 18,
      color: 'var(--text-strong)',
      margin: '0 0 10px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, d)))))));
}
window.BookPage = BookPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BookPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* Wanderlust Foodies — site footer */
function Footer({
  onNav
}) {
  const {
    StampSeal
  } = window.WanderlustFoodiesDesignSystem_288b64;
  const socials = ['Facebook', 'Instagram', 'Threads', 'X', 'YouTube', 'WhatsApp'];
  const cols = [{
    h: 'Explore',
    items: ['Home', 'Blogs', 'Recipes', 'The Book']
  }, {
    h: 'Quick Links',
    items: ['About Us', 'Privacy Policy', 'Subscribe']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-ink)',
      color: 'var(--kraft-300)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '78rem',
      margin: '0 auto',
      padding: 'clamp(2.5rem,5vw,4rem) clamp(1rem,4vw,2.5rem)',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1.4fr',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.03em',
      fontSize: 22,
      color: 'var(--paper-100)'
    }
  }, "Wanderlust Foodies"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      lineHeight: 1.6,
      marginTop: 12,
      maxWidth: '34ch'
    }
  }, "Exploring the world one bite at a time. Join us on our culinary adventures and discover flavours from around the globe.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      fontSize: 12,
      color: 'var(--turmeric-300)',
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14.5,
      color: 'var(--kraft-300)',
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--paper-0)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--kraft-300)'
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StampSeal, {
    size: 104,
    color: "var(--turmeric-300)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 7
    }
  }, socials.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--kraft-300)',
      border: '1.5px solid var(--border-on-dark)',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 10px'
    }
  }, s))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-on-dark)',
      textAlign: 'center',
      padding: '16px',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 13.5,
      color: 'var(--kraft-500)'
    }
  }, "\xA9 2025. Made with love by Wanderlust Foodies. Where travel meets taste."));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* Wanderlust Foodies — site header / nav */
function Header({
  active,
  onNav
}) {
  const {
    Button
  } = window.WanderlustFoodiesDesignSystem_288b64;
  const links = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'blog',
    label: 'Blogs'
  }, {
    id: 'recipe',
    label: 'Recipes'
  }, {
    id: 'book',
    label: 'The Book'
  }];
  const [q, setQ] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(247,241,229,0.86)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1.5px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '78rem',
      margin: '0 auto',
      padding: '12px clamp(1rem,4vw,2.5rem)',
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/wanderlust-badge.png",
    alt: "Wanderlust Foodies",
    style: {
      height: 46,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      fontSize: 19,
      lineHeight: 0.95,
      color: 'var(--espresso-700)'
    }
  }, "Wanderlust", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 13,
      letterSpacing: '0.22em',
      color: 'var(--spice-600)'
    }
  }, "Foodies"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 4,
      alignItems: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(l.id);
    },
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      fontSize: 13.5,
      textDecoration: 'none',
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      color: active === l.id ? 'var(--spice-600)' : 'var(--espresso-600)',
      background: active === l.id ? 'var(--spice-50)' : 'transparent',
      transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard)'
    },
    onMouseEnter: e => {
      if (active !== l.id) e.currentTarget.style.background = 'var(--paper-200)';
    },
    onMouseLeave: e => {
      if (active !== l.id) e.currentTarget.style.background = 'transparent';
    }
  }, l.label)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQ(!q),
    "aria-label": "Search",
    style: {
      marginLeft: 6,
      width: 38,
      height: 38,
      borderRadius: '50%',
      border: '1.5px solid var(--border-default)',
      background: 'var(--surface-card)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--espresso-600)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  }))))), q && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1.5px solid var(--border-hairline)',
      background: 'var(--paper-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '78rem',
      margin: '0 auto',
      padding: '12px clamp(1rem,4vw,2.5rem)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    placeholder: "Search stories & recipes\u2026",
    style: {
      width: '100%',
      border: 'none',
      background: 'transparent',
      outline: 'none',
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: 'var(--text-body)'
    }
  }))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Wanderlust Foodies — Home page */
function HomePage({
  onNav
}) {
  const DS = window.WanderlustFoodiesDesignSystem_288b64;
  const {
    Button,
    Badge,
    ArticleCard,
    RecipeCard,
    Stat,
    Input
  } = DS;
  const wrap = {
    maxWidth: '78rem',
    margin: '0 auto',
    padding: '0 clamp(1rem,4vw,2.5rem)'
  };
  const eyebrow = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.16em',
    fontSize: 12,
    color: 'var(--spice-600)'
  };
  const h2 = {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.01em',
    fontSize: 'clamp(1.7rem,3vw,2.4rem)',
    color: 'var(--text-strong)',
    margin: '10px 0 0',
    lineHeight: 1.05
  };
  const posts = [{
    image: '../../assets/img/road-aurangabad.png',
    category: 'travel',
    categoryLabel: 'Travel',
    title: 'Mumbai to Aurangabad to Shirdi: The Ultimate 5-Day Family Road Trip',
    excerpt: 'A detailed 5-day guide covering the Samruddhi Mahamarg, Ellora Caves, Grishneshwar and Shirdi.',
    author: 'Girish',
    date: 'Jan 13',
    readTime: '7 min read'
  }, {
    image: '../../assets/img/trek-sandakphu.jpg',
    category: 'trek',
    categoryLabel: 'Trek',
    title: 'Trekking with Friends: Off to Sandakphu!',
    excerpt: 'A spectacular Himalayan journey blending natural beauty, cultural richness and panoramic mountains.',
    author: 'Girish',
    date: 'Feb 9, 2025',
    readTime: '26 min read'
  }, {
    image: '../../assets/img/couple-illustration.jpg',
    category: 'story',
    categoryLabel: 'Story',
    title: 'Road Trip Across 3 States: Our Annual Escape',
    excerpt: 'When the three of us load up the car and set off on our annual adventure across state lines.',
    author: 'Vidya',
    date: 'May 3, 2025',
    readTime: '23 min read'
  }];
  const recipes = [{
    image: '../../assets/img/recipe-nachni-bhakri.jpg',
    title: 'Nachni (Ragi) Bhakri',
    time: '20 min',
    tags: ['Gluten-free'],
    blurb: 'The secret technique for perfectly soft, pliable, easy-to-digest Nachni Bhakri every single time.'
  }, {
    image: '../../assets/img/recipe-sabudana-khichdi.jpg',
    title: 'Sabudana Khichdi',
    time: '10 min',
    tags: ['Navratri'],
    blurb: 'Instant, fluffy, non-sticky sago pearls — skip the long overnight soak entirely.'
  }, {
    image: '../../assets/img/recipe-pomfret-fry.jpg',
    title: 'Pomfret / Paplet Fry',
    time: '25 min',
    tags: ['Konkan'],
    blurb: 'The authentic Konkan-coast marinade that coats the fish and makes every bite delicious.'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 40,
      alignItems: 'center',
      padding: 'clamp(2.5rem,5vw,4.5rem) clamp(1rem,4vw,2.5rem)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: eyebrow
  }, "Travel \xB7 Food \xB7 Stories"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.005em',
      lineHeight: 0.95,
      fontSize: 'clamp(2.8rem,6vw,4.6rem)',
      color: 'var(--text-strong)',
      margin: '12px 0 0'
    }
  }, "Global Adventures.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--spice-500)'
    }
  }, "Local Flavours.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'clamp(1.05rem,1.6vw,1.3rem)',
      lineHeight: 1.55,
      color: 'var(--text-muted)',
      maxWidth: '46ch',
      margin: '20px 0 26px'
    }
  }, "Exploring the world one bite at a time. Honest travel tales, hard-won trails and the home-cooked recipes we carry back."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('blog')
  }, "Travel Stories"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('recipe')
  }, "Explore Recipes"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      border: '2.5px solid var(--espresso-700)',
      boxShadow: 'var(--shadow-lg)',
      transform: 'rotate(-1.5deg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/trek-sandakphu.jpg",
    alt: "Himalayan trail map",
    style: {
      width: '100%',
      height: 380,
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -18,
      left: -18,
      background: 'var(--turmeric-500)',
      color: 'var(--espresso-900)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      fontSize: 14,
      padding: '10px 16px',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-md)',
      transform: 'rotate(-3deg)'
    }
  }, "Garhwal Himalayas \u2192")))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: 'clamp(2rem,4vw,3.5rem) clamp(1rem,4vw,2.5rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: eyebrow
  }, "Travel Tales"), /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "Discover the World Through Our Stories")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNav('blog')
  }, "View all destinations \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 22,
      marginTop: 26
    }
  }, posts.map((p, i) => /*#__PURE__*/React.createElement(ArticleCard, _extends({
    key: i
  }, p, {
    onClick: e => {
      e.preventDefault();
      onNav('blog');
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunk)',
      borderTop: '1.5px solid var(--border-hairline)',
      borderBottom: '1.5px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: 'clamp(2rem,4vw,3.5rem) clamp(1rem,4vw,2.5rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: eyebrow
  }, "From Our Kitchen"), /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "Join Us on a Flavourful Journey")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNav('recipe')
  }, "All recipes \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 16,
      marginTop: 26
    }
  }, recipes.map((r, i) => /*#__PURE__*/React.createElement(RecipeCard, _extends({
    key: i
  }, r, {
    onClick: e => {
      e.preventDefault();
      onNav('recipe');
    }
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: 'clamp(2.5rem,5vw,4rem) clamp(1rem,4vw,2.5rem)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...eyebrow,
      display: 'block'
    }
  }, "Meet Wanderlust Foodies"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'clamp(1.1rem,1.8vw,1.35rem)',
      lineHeight: 1.6,
      color: 'var(--text-body)',
      maxWidth: '60ch',
      margin: '14px auto 0'
    }
  }, "We are passionate travellers and food enthusiasts who believe the best way to understand a culture is through its cuisine."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 'clamp(2rem,6vw,5rem)',
      marginTop: 36,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "25+",
    label: "Destinations",
    description: "Across five continents.",
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "50+",
    label: "Recipes",
    description: "From markets & family kitchens.",
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "\u221E",
    label: "Stories",
    description: "Every dish has a memory.",
    align: "center"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: 'clamp(2.5rem,5vw,4rem) clamp(1rem,4vw,2.5rem)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2,
      color: 'var(--paper-100)',
      margin: 0
    }
  }, "Join the Adventure"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--kraft-300)',
      marginTop: 14,
      maxWidth: '42ch'
    }
  }, "Subscribe for weekly travel stories, seasonal recipes and insider tips \u2014 straight to your inbox.")), /*#__PURE__*/React.createElement(NewsletterForm, {
    Input: Input,
    Button: Button
  }))));
}
function NewsletterForm({
  Input,
  Button
}) {
  const [done, setDone] = React.useState(false);
  if (done) return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 18,
      color: 'var(--turmeric-300)',
      textAlign: 'center'
    }
  }, "You're on the trail with us \u2014 see you on Sunday. \uD83E\uDD7E");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "First name"
  }), /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "Email address"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    onClick: () => setDone(true)
  }, "Subscribe")));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/RecipePage.jsx
try { (() => {
/* Wanderlust Foodies — Recipe page */
function RecipePage({
  onNav
}) {
  const {
    Badge,
    Button
  } = window.WanderlustFoodiesDesignSystem_288b64;
  const [checked, setChecked] = React.useState({});
  const ingredients = ['1 cup Nachni (ragi / finger-millet) flour', '¾ cup hot water, just off the boil', '½ tsp salt', '1 tsp ghee, plus more for roasting', 'A pinch of warmth and patience'];
  const steps = ['Bring the water to a rolling boil; stir in salt and ghee.', 'Add the flour all at once, fold off the heat until it clumps, then rest covered 5 minutes.', 'Knead the warm dough until smooth and pliable — this is the whole secret.', 'Pat into a round on a damp cloth; roast on a hot tawa, then over an open flame until it puffs.'];
  const wrap = {
    maxWidth: '64rem',
    margin: '0 auto',
    padding: '0 clamp(1rem,4vw,2.5rem)'
  };
  const metaItem = (k, v) => /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--spice-600)'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--text-faint)'
    }
  }, k));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingTop: 'clamp(1.5rem,3vw,2.5rem)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('recipe'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-faint)',
      padding: 0,
      marginBottom: 16
    }
  }, "Recipes / Breads & Rotis"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 36,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "recipe",
    solid: true
  }, "Gluten-free"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Easy")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      lineHeight: 1,
      fontSize: 'clamp(2.2rem,4vw,3.4rem)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Nachni (Ragi) Bhakri"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      marginTop: 16
    }
  }, "Tired of ragi bhakri turning out hard, dry or crumbly? Here is the secret technique for perfectly soft, pliable, easy-to-digest bhakri \u2014 a powerhouse of calcium and iron."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginTop: 24,
      padding: '16px 0',
      borderTop: '1.5px solid var(--border-hairline)',
      borderBottom: '1.5px solid var(--border-hairline)'
    }
  }, metaItem('Prep', '10m'), metaItem('Cook', '10m'), metaItem('Makes', '4'))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      border: '2.5px solid var(--espresso-700)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/recipe-nachni-bhakri.jpg",
    alt: "Nachni Bhakri",
    style: {
      width: '100%',
      height: 360,
      objectFit: 'cover'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingTop: 'clamp(2rem,4vw,3rem)',
      paddingBottom: 'clamp(2.5rem,5vw,4rem)',
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-hairline)',
      borderRadius: 'var(--radius-lg)',
      padding: 24,
      position: 'sticky',
      top: 88
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      fontSize: 20,
      color: 'var(--text-strong)',
      margin: '0 0 16px'
    }
  }, "Ingredients"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, ingredients.map((ing, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    onClick: () => setChecked(c => ({
      ...c,
      [i]: !c[i]
    })),
    style: {
      display: 'flex',
      gap: 11,
      alignItems: 'flex-start',
      cursor: 'pointer',
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      lineHeight: 1.4,
      color: checked[i] ? 'var(--text-faint)' : 'var(--text-body)',
      textDecoration: checked[i] ? 'line-through' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 19,
      height: 19,
      flexShrink: 0,
      marginTop: 2,
      borderRadius: 5,
      border: '2px solid ' + (checked[i] ? 'var(--spice-500)' : 'var(--border-default)'),
      background: checked[i] ? 'var(--spice-500)' : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 12
    }
  }, checked[i] ? '✓' : ''), ing)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      fontSize: 20,
      color: 'var(--text-strong)',
      margin: '0 0 20px'
    }
  }, "Method"), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      counterReset: 'step',
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: 'var(--espresso-700)',
      color: 'var(--paper-100)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, i + 1), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      margin: 0,
      paddingTop: 6
    }
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNav('recipe')
  }, "Print recipe"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNav('home')
  }, "\u2190 Home")))));
}
window.RecipePage = RecipePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/RecipePage.jsx", error: String((e && e.message) || e) }); }

// website/chrome.jsx
try { (() => {
/* ================================================================
   Wanderlust Foodies — Site Chrome (Header + Footer)
   ================================================================ */

function Header({
  route,
  navigate
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, {
      passive: true
    });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const links = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'blog',
    label: 'Blogs'
  }, {
    id: 'recipes',
    label: 'Recipes'
  }, {
    id: 'about',
    label: 'About'
  }, {
    id: 'book',
    label: 'The Book'
  }];
  const isHero = route === 'home';
  const light = isHero && !scrolled;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 200,
      background: scrolled ? 'rgba(247,241,229,0.94)' : isHero ? 'transparent' : 'var(--surface-page)',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '1.5px solid var(--border-hairline)' : '1.5px solid transparent',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      transition: 'all 0.3s var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '78rem',
      margin: '0 auto',
      padding: '0 clamp(1.25rem,4vw,2.5rem)',
      height: 68,
      display: 'flex',
      alignItems: 'center',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    onClick: e => {
      e.preventDefault();
      navigate('home');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo/wanderlust-badge.png",
    alt: "Wanderlust Foodies",
    style: {
      height: 42,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.03em',
      fontSize: 17,
      color: light ? '#fff' : 'var(--espresso-700)'
    }
  }, "Wanderlust"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 10,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: light ? 'rgba(255,255,255,0.75)' : 'var(--spice-600)',
      marginTop: 2
    }
  }, "Foodies"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 2,
      alignItems: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: '#' + l.id,
    onClick: e => {
      e.preventDefault();
      navigate(l.id);
    },
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      fontSize: 12.5,
      textDecoration: 'none',
      padding: '8px 13px',
      borderRadius: 'var(--radius-pill)',
      transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard)',
      color: route === l.id ? 'var(--spice-600)' : light ? 'rgba(255,255,255,0.88)' : 'var(--espresso-600)',
      background: route === l.id ? 'var(--spice-50)' : 'transparent'
    },
    onMouseEnter: e => {
      if (route !== l.id) e.currentTarget.style.background = light ? 'rgba(255,255,255,0.12)' : 'var(--paper-200)';
    },
    onMouseLeave: e => {
      if (route !== l.id) e.currentTarget.style.background = 'transparent';
    }
  }, l.label)), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigate('blog'),
    "aria-label": "Subscribe",
    style: {
      marginLeft: 8,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      fontSize: 11.5,
      padding: '9px 18px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--accent-primary)',
      color: '#fff',
      transition: 'filter var(--dur-fast) var(--ease-standard)'
    },
    onMouseEnter: e => e.currentTarget.style.filter = 'brightness(1.1)',
    onMouseLeave: e => e.currentTarget.style.filter = 'none'
  }, "Subscribe"))));
}
function Footer({
  navigate
}) {
  const {
    StampSeal
  } = window.WanderlustFoodiesDesignSystem_288b64;
  const nav = [{
    label: 'Home',
    id: 'home'
  }, {
    label: 'Blogs',
    id: 'blog'
  }, {
    label: 'Recipes',
    id: 'recipes'
  }, {
    label: 'About Us',
    id: 'about'
  }, {
    label: 'The Book',
    id: 'book'
  }];
  const socials = ['Facebook', 'Instagram', 'Threads', 'X', 'YouTube', 'WhatsApp'];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--espresso-900)',
      color: 'var(--kraft-300)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '78rem',
      margin: '0 auto',
      padding: 'clamp(3rem,6vw,4.5rem) clamp(1.25rem,4vw,2.5rem) clamp(2rem,4vw,3rem)',
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr 0.8fr 1fr',
      gap: 'clamp(1.5rem,4vw,3rem)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo/wanderlust-badge.png",
    alt: "",
    style: {
      height: 44,
      width: 'auto',
      filter: 'brightness(0) saturate(100%) invert(93%) sepia(8%) saturate(700%) hue-rotate(350deg) brightness(104%)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      fontSize: 17,
      color: 'var(--paper-100)',
      lineHeight: 1
    }
  }, "Wanderlust", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 10,
      letterSpacing: '0.22em',
      color: 'var(--spice-400)'
    }
  }, "Foodies"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 14.5,
      lineHeight: 1.65,
      margin: '0 0 20px',
      maxWidth: '30ch'
    }
  }, "Exploring the world one bite at a time. Join us as we discover amazing flavours from around the globe."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 7
    }
  }, socials.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      fontWeight: 600,
      color: 'var(--kraft-400)',
      border: '1.5px solid rgba(210,190,156,0.25)',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 11px'
    }
  }, s)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      fontSize: 11,
      color: 'var(--turmeric-300)',
      marginBottom: 16
    }
  }, "Explore"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, nav.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.id
  }, /*#__PURE__*/React.createElement("a", {
    href: '#' + l.id,
    onClick: e => {
      e.preventDefault();
      navigate(l.id);
    },
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14.5,
      color: 'var(--kraft-300)',
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--paper-0)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--kraft-300)'
  }, l.label))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      fontSize: 11,
      color: 'var(--turmeric-300)',
      marginBottom: 16
    }
  }, "Quick Links"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, ['Privacy Policy', 'Contact', 'Subscribe'].map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14.5,
      color: 'var(--kraft-300)',
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--paper-0)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--kraft-300)'
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(StampSeal, {
    size: 90,
    color: "var(--kraft-400)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 14,
      lineHeight: 1.55,
      margin: 0,
      color: 'var(--kraft-400)'
    }
  }, "\"Exploring the world one bite at a time.\""))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(210,190,156,0.12)',
      textAlign: 'center',
      padding: '16px',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 13,
      color: 'var(--espresso-400)'
    }
  }, "\xA9 2025 Wanderlust Foodies \u2014 Made with love. Where travel meets taste."));
}
Object.assign(window, {
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website/chrome.jsx", error: String((e && e.message) || e) }); }

// website/content.jsx
try { (() => {
/* ================================================================
   Wanderlust Foodies — Content Listings (Blog + Recipes)
   ================================================================ */

function BlogPage({
  navigate
}) {
  const {
    ArticleCard,
    Badge
  } = window.WanderlustFoodiesDesignSystem_288b64;
  const {
    posts
  } = window.WF_DATA;
  const [filter, setFilter] = React.useState('all');
  const cats = ['all', 'travel', 'trek', 'story'];
  const visible = filter === 'all' ? posts : posts.filter(p => p.category === filter);
  const container = {
    maxWidth: '78rem',
    margin: '0 auto',
    padding: '0 clamp(1.25rem,4vw,2.5rem)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 68
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--espresso-900)',
      padding: 'clamp(3rem,6vw,5rem) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      fontSize: 11,
      color: 'var(--turmeric-300)',
      display: 'block',
      marginBottom: 14
    }
  }, "Travel \xB7 Trek \xB7 Story"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      fontSize: 'clamp(2.8rem,6vw,5rem)',
      color: 'var(--paper-100)',
      lineHeight: 0.96,
      margin: 0
    }
  }, "Our Stories"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 18,
      color: 'var(--kraft-300)',
      marginTop: 14
    }
  }, "Road trips, mountain trails and everything in between."))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1.5px solid var(--border-hairline)',
      position: 'sticky',
      top: 68,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      height: 54,
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setFilter(c),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontSize: 12,
      padding: '7px 16px',
      borderRadius: 'var(--radius-pill)',
      border: '1.5px solid',
      cursor: 'pointer',
      transition: 'all var(--dur-fast)',
      background: filter === c ? 'var(--spice-500)' : 'transparent',
      color: filter === c ? '#fff' : 'var(--text-muted)',
      borderColor: filter === c ? 'var(--spice-500)' : 'var(--border-hairline)'
    }
  }, c === 'all' ? 'All' : c.charAt(0).toUpperCase() + c.slice(1))), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-faint)'
    }
  }, visible.length, " ", visible.length === 1 ? 'story' : 'stories'))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'clamp(2.5rem,5vw,4rem) 0',
      minHeight: 400
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, visible.map((p, i) => /*#__PURE__*/React.createElement(ArticleCard, {
    key: p.slug,
    image: p.image,
    category: p.category,
    categoryLabel: p.categoryLabel,
    title: p.title,
    excerpt: p.excerpt,
    author: p.author,
    date: p.date,
    readTime: p.readTime,
    onClick: e => {
      e.preventDefault();
      navigate('post/' + p.slug);
    },
    href: "#"
  }))), visible.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '4rem 0',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 18,
      color: 'var(--text-faint)'
    }
  }, "No stories in this category yet \u2014 check back soon."))));
}
function RecipesPage({
  navigate
}) {
  const {
    RecipeCard,
    Badge
  } = window.WanderlustFoodiesDesignSystem_288b64;
  const {
    recipes
  } = window.WF_DATA;
  const [filter, setFilter] = React.useState('all');
  const allTags = ['all', ...Array.from(new Set(recipes.flatMap(r => r.tags)))];
  const visible = filter === 'all' ? recipes : recipes.filter(r => r.tags.includes(filter));
  const container = {
    maxWidth: '78rem',
    margin: '0 auto',
    padding: '0 clamp(1.25rem,4vw,2.5rem)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 68
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pine-800)',
      padding: 'clamp(3rem,6vw,5rem) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      fontSize: 11,
      color: 'var(--turmeric-300)',
      display: 'block',
      marginBottom: 14
    }
  }, "From Our Kitchen"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      fontSize: 'clamp(2.8rem,6vw,5rem)',
      color: 'var(--paper-100)',
      lineHeight: 0.96,
      margin: 0
    }
  }, "Recipes"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 18,
      color: 'var(--pine-300)',
      marginTop: 14
    }
  }, "Home cooking from the kitchens we've visited and the meals we keep recreating."))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1.5px solid var(--border-hairline)',
      position: 'sticky',
      top: 68,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      height: 54,
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, allTags.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setFilter(t),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontSize: 12,
      padding: '7px 16px',
      borderRadius: 'var(--radius-pill)',
      border: '1.5px solid',
      cursor: 'pointer',
      transition: 'all var(--dur-fast)',
      background: filter === t ? 'var(--pine-700)' : 'transparent',
      color: filter === t ? '#fff' : 'var(--text-muted)',
      borderColor: filter === t ? 'var(--pine-700)' : 'var(--border-hairline)'
    }
  }, t === 'all' ? 'All Recipes' : t)))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'clamp(2.5rem,5vw,4rem) 0',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 16
    }
  }, visible.map(r => /*#__PURE__*/React.createElement(RecipeCard, {
    key: r.slug,
    image: r.image,
    title: r.title,
    time: r.time,
    tags: r.tags,
    blurb: r.blurb,
    onClick: e => {
      e.preventDefault();
      navigate('recipe/' + r.slug);
    },
    href: "#"
  }))), visible.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '4rem 0',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 18,
      color: 'var(--text-faint)',
      maxWidth: '78rem',
      margin: '0 auto'
    }
  }, "No recipes found \u2014 more coming soon.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-sunk)',
      borderTop: '1.5px solid var(--border-hairline)',
      padding: 'clamp(2.5rem,5vw,4rem) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      textAlign: 'center',
      maxWidth: '48rem'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
      fontSize: 'clamp(1.6rem,3vw,2.4rem)',
      color: 'var(--text-strong)',
      margin: '0 0 12px'
    }
  }, "Have a Recipe to Share?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--text-muted)',
      marginBottom: 24
    }
  }, "We're always looking for home cooks whose recipes deserve a wider audience. Get in touch."), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigate('about'),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      fontSize: 13,
      padding: '12px 26px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--spice-500)',
      color: '#fff'
    }
  }, "Contact Us"))));
}
Object.assign(window, {
  BlogPage,
  RecipesPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website/content.jsx", error: String((e && e.message) || e) }); }

// website/data.js
try { (() => {
(function () {
  var B = '../assets/img/';
  window.WF_DATA = {
    posts: [{
      slug: 'sandakphu',
      category: 'trek',
      categoryLabel: 'Trek',
      title: 'Trekking with Friends: Off to Sandakphu!',
      excerpt: 'A spectacular Himalayan journey blending natural beauty, cultural richness and panoramic mountain views — told without rose-tinted glasses.',
      image: B + 'trek-sandakphu.jpg',
      author: 'Girish',
      date: 'Feb 9, 2025',
      readTime: '26 min read',
      featured: true,
      content: [{
        type: 'lead',
        text: 'The Sandakphu-Phalut trek is one of the finest in the Indian Himalayas. We set off as six friends and one very optimistic packing list.'
      }, {
        type: 'p',
        text: 'Day one lulls you into confidence — gentle rhododendron forest, easy switchbacks, the kind of trail that makes you believe you trained enough. You did not. Nobody does.'
      }, {
        type: 'quote',
        text: 'The hardest trails end in places you cannot quite take with you, but also cannot leave entirely behind.'
      }, {
        type: 'p',
        text: 'By the time Sleeping Buddha — the Kanchenjunga range stretched flat against the dawn — finally appeared, the cold had stopped being a complaint and started being a fact. We stood there, breath ragged, fingers useless, grinning like idiots.'
      }, {
        type: 'p',
        text: 'The trail passes through Tumling, Kalipokhri and Bikheybhanjyang before the final steep push to the summit ridge. At 3,636m, Sandakphu offers views of four of the world\'s five highest peaks — Everest, Kangchenjunga, Lhotse and Makalu — all in one morning horizon.'
      }]
    }, {
      slug: 'aurangabad-shirdi',
      category: 'travel',
      categoryLabel: 'Travel',
      title: 'Mumbai to Aurangabad to Shirdi: The Ultimate 5-Day Family Road Trip',
      excerpt: 'A detailed guide covering the Samruddhi Mahamarg, Ellora Caves, Grishneshwar and Shirdi.',
      image: B + 'road-aurangabad.png',
      author: 'Girish',
      date: 'Jan 13, 2025',
      readTime: '7 min read',
      featured: true,
      content: [{
        type: 'lead',
        text: 'The Samruddhi Mahamarg changed everything. Mumbai to Aurangabad is now a smooth, confident 6-hour drive — no more white-knuckle highway overtakes.'
      }, {
        type: 'p',
        text: 'We spread it over five days: Mumbai → Aurangabad (Ellora Caves, Grishneshwar, Bibi Ka Maqbara) → Shirdi → home. Family-friendly, deeply worth it.'
      }, {
        type: 'p',
        text: 'The Ellora Caves alone justify the trip. Cave 16 — the Kailasa Temple, carved top-down from a single basalt rock face — is one of those genuinely jaw-dropping human achievements that resets your sense of what\'s possible.'
      }]
    }, {
      slug: 'ujjain',
      category: 'travel',
      categoryLabel: 'Travel',
      title: 'Ujjain: Temples, Ghats and the Best Poha of Our Lives',
      excerpt: 'A weekend at the Mahakal temple, a boat at the ghat at dusk, and a poha that made us realise great cooking lives in the simplest bowl.',
      image: B + 'road-ujjain.png',
      author: 'Vidya',
      date: 'Dec 5, 2024',
      readTime: '9 min read',
      featured: true,
      content: [{
        type: 'lead',
        text: 'Ujjain\'s Mahakal temple queue at 5am on a winter morning is not what the tourist brochures lead you to expect. It is an exercise in patience, devotion, and elbows.'
      }, {
        type: 'p',
        text: 'But the city rewards slowness. The Shipra ghat at dusk, a boat drifting past earthen diyas, the smell of wood smoke and marigolds — you understand why this city has been sacred for three thousand years.'
      }, {
        type: 'p',
        text: 'The poha we ate from a tiny stall near the temple — flat rice, potato, onion, mustard, curry leaf, a squeeze of lime — was the best version of something ordinary we have ever tasted. We haven\'t stopped thinking about it.'
      }]
    }, {
      slug: 'garhwal-migration',
      category: 'story',
      categoryLabel: 'Story',
      title: 'The Human Migration: What the Garhwal Himalayas Taught Me',
      excerpt: 'From cliff-edge Bolero rides to sub-zero bucket baths — the honest account that became a book.',
      image: B + 'hero-himalaya.png',
      author: 'Girish',
      date: 'Apr 14, 2025',
      readTime: '32 min read',
      featured: false,
      content: [{
        type: 'lead',
        text: 'I went to the Garhwal Himalayas as a city-dwelling executive who had read enough about mountains to believe he was prepared. I was not.'
      }, {
        type: 'quote',
        text: 'The kind of friendships that only get built by people walking uphill together, at altitude.'
      }, {
        type: 'p',
        text: 'What followed became a book — The Human Migration — because some experiences refuse to stay inside you.'
      }]
    }, {
      slug: 'road-trip-3-states',
      category: 'travel',
      categoryLabel: 'Travel',
      title: 'Road Trip Across 3 States: Our Annual Escape',
      excerpt: 'When the three of us load up the car and set off — playlist ready, snacks packed, no plan beyond the first fuel stop.',
      image: B + 'couple-illustration.jpg',
      author: 'Vidya',
      date: 'May 3, 2025',
      readTime: '23 min read',
      featured: false,
      content: [{
        type: 'lead',
        text: 'Every year, somewhere in April or May, Girish announces that we need to leave. This is not wrong.'
      }, {
        type: 'p',
        text: 'This year it was a loop through three states — Maharashtra, Karnataka, Goa — over ten days. The kind of trip where the drive becomes the point, not just the means to it.'
      }]
    }],
    recipes: [{
      slug: 'nachni-bhakri',
      title: 'Nachni (Ragi) Bhakri',
      image: B + 'recipe-nachni-bhakri.jpg',
      time: '20 min',
      serves: '4',
      difficulty: 'Easy',
      tags: ['Gluten-free'],
      category: 'Breads',
      blurb: 'The secret technique for perfectly soft, pliable Nachni Bhakri — a powerhouse of calcium and iron.',
      featured: true,
      intro: 'Tired of ragi bhakri turning out hard or crumbly? The trick is the hot-water method: pour boiling water over the flour, fold off the heat, rest it, then knead while warm.',
      ingredients: ['1 cup Nachni (ragi / finger-millet) flour', '¾ cup hot water, just off the boil', '½ tsp salt', '1 tsp ghee, plus extra for roasting'],
      method: ['Bring water to a rolling boil; stir in salt and ghee.', 'Add flour all at once, fold off the heat until it clumps, cover and rest 5 minutes.', 'Knead the warm dough for 2 minutes until smooth and pliable.', 'Divide into 4 balls; pat each into a round on a damp cloth.', 'Roast on a dry hot tawa, then hold directly over an open flame until it puffs.', 'Apply ghee and serve immediately with pitla or curry.']
    }, {
      slug: 'sabudana-khichdi',
      title: 'Sabudana Khichdi',
      image: B + 'recipe-sabudana-khichdi.jpg',
      time: '10 min',
      serves: '3',
      difficulty: 'Easy',
      tags: ['Navratri', 'Vrat'],
      category: 'Mains',
      blurb: 'Instant, fluffy, non-sticky sago pearls — skip the long overnight soak entirely.',
      featured: true,
      intro: 'The trick to non-sticky sabudana khichdi? Soak in just enough water to coat the pearls — not drown them — for exactly two hours.',
      ingredients: ['1 cup sabudana (sago pearls)', '¾ cup roasted peanuts, coarsely crushed', '2 medium potatoes, boiled and cubed', '2 tbsp ghee', '1 tsp cumin seeds', '2 green chillies, slit', '¼ tsp rock salt', 'Juice of ½ lemon'],
      method: ['Wash sabudana twice, add just enough water to coat by ½cm. Soak 2 hours only.', 'Drain and separate pearls on a wide plate.', 'Heat ghee, add cumin and chillies; once they pop, add potatoes.', 'Add sabudana and peanuts; toss on medium-high heat 5 minutes.', 'Season, squeeze lemon, garnish with coriander and serve.']
    }, {
      slug: 'pomfret-fry',
      title: 'Pomfret / Paplet Fry',
      image: B + 'recipe-pomfret-fry.jpg',
      time: '25 min',
      serves: '2',
      difficulty: 'Medium',
      tags: ['Konkan', 'Seafood'],
      category: 'Mains',
      blurb: 'The authentic Konkan-coast marinade that makes every bite mouth-wateringly delicious.',
      featured: true,
      intro: 'A good pomfret fry is about the marinade sitting in the scored cuts — at least 20 minutes, but overnight in the fridge is the real game-changer.',
      ingredients: ['2 whole pomfret, cleaned and scored', '2 tsp Kashmiri red chilli powder', '1 tsp turmeric', '1½ tsp coriander powder', '2 tsp tamarind paste', '1 tsp ginger-garlic paste', '1 tsp salt', 'Coconut oil for shallow frying'],
      method: ['Mix all spices, tamarind and ginger-garlic into a thick marinade.', 'Score fish 3 times each side; rub marinade deep into the cuts.', 'Marinate at least 20 minutes (overnight is better).', 'Heat coconut oil in a flat pan; lay fish in hot oil.', 'Fry 4–5 min per side on medium-high until edges are crispy.', 'Serve immediately with rice, lime and raw onion.']
    }]
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "website/data.js", error: String((e && e.message) || e) }); }

// website/detail.jsx
try { (() => {
/* ================================================================
   Wanderlust Foodies — Detail Pages (Post, Recipe, Book)
   ================================================================ */

function BlogPostPage({
  slug,
  navigate
}) {
  const {
    Badge,
    Avatar,
    ArticleCard
  } = window.WanderlustFoodiesDesignSystem_288b64;
  const {
    posts
  } = window.WF_DATA;
  const post = posts.find(p => p.slug === slug) || posts[0];
  const related = posts.filter(p => p.slug !== post.slug).slice(0, 3);
  const container = {
    maxWidth: '78rem',
    margin: '0 auto',
    padding: '0 clamp(1.25rem,4vw,2.5rem)'
  };
  return /*#__PURE__*/React.createElement("article", {
    style: {
      paddingTop: 68
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 'clamp(360px,52vw,580px)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: post.image,
    alt: "",
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 30%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(180deg, rgba(36,20,5,0.1) 0%, rgba(36,20,5,0.82) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      paddingBottom: 'clamp(1.5rem,3vw,2.5rem)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: post.category,
    solid: true
  }, post.categoryLabel), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      lineHeight: 1,
      fontSize: 'clamp(2rem,5vw,3.8rem)',
      color: 'var(--paper-100)',
      margin: '14px 0 0',
      textWrap: 'balance',
      maxWidth: '22ch'
    }
  }, post.title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      maxWidth: '50rem',
      padding: 'clamp(2rem,4vw,3.5rem) clamp(1.25rem,4vw,2.5rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      paddingBottom: 24,
      marginBottom: 28,
      borderBottom: '1.5px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: "../assets/img/couple-illustration.jpg",
    name: post.author,
    size: 48
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, post.author), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-faint)'
    }
  }, post.date, " \xB7 ", post.readTime)), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigate('blog'),
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontSize: 12,
      background: 'transparent',
      border: '1.5px solid var(--border-default)',
      color: 'var(--text-muted)',
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer'
    }
  }, "\u2190 All Stories")), post.content && post.content.map((block, i) => {
    if (block.type === 'lead') return /*#__PURE__*/React.createElement("p", {
      key: i,
      style: {
        fontFamily: 'var(--font-serif)',
        fontWeight: 500,
        fontSize: 'clamp(1.15rem,1.8vw,1.35rem)',
        lineHeight: 1.6,
        color: 'var(--text-strong)',
        margin: '0 0 1.4em'
      }
    }, block.text);
    if (block.type === 'p') return /*#__PURE__*/React.createElement("p", {
      key: i,
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(1.05rem,1.4vw,1.18rem)',
        lineHeight: 1.8,
        color: 'var(--text-body)',
        margin: '0 0 1.3em'
      }
    }, block.text);
    if (block.type === 'quote') return /*#__PURE__*/React.createElement("blockquote", {
      key: i,
      style: {
        margin: '2em 0',
        padding: '4px 0 4px 22px',
        borderLeft: '4px solid var(--spice-500)'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
        fontSize: 'clamp(1.25rem,2vw,1.55rem)',
        lineHeight: 1.4,
        color: 'var(--espresso-700)',
        margin: 0
      }
    }, block.text));
    return null;
  }), post.slug === 'garhwal-migration' && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper-200)',
      border: '1.5px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px 24px',
      margin: '2em 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 17,
      color: 'var(--text-body)',
      margin: 0
    }
  }, "This story became the memoir ", /*#__PURE__*/React.createElement("strong", null, "The Human Migration"), "."), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigate('book'),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      fontSize: 12,
      padding: '10px 22px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--spice-500)',
      color: '#fff',
      flexShrink: 0
    }
  }, "Discover the Book \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      paddingTop: 24,
      marginTop: 32,
      borderTop: '1.5px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => navigate('blog'),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      fontSize: 12,
      padding: '11px 22px',
      borderRadius: 'var(--radius-pill)',
      border: '2px solid var(--espresso-700)',
      cursor: 'pointer',
      background: 'transparent',
      color: 'var(--espresso-700)'
    }
  }, "\u2190 All Stories"), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigate('recipes'),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      fontSize: 12,
      padding: '11px 22px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--spice-500)',
      color: '#fff'
    }
  }, "Explore Recipes \u2192"))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunk)',
      borderTop: '1.5px solid var(--border-hairline)',
      padding: 'clamp(2.5rem,5vw,4rem) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      fontSize: '1.5rem',
      color: 'var(--text-strong)',
      margin: '0 0 24px'
    }
  }, "Keep Reading"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 22
    }
  }, related.map(p => /*#__PURE__*/React.createElement(ArticleCard, {
    key: p.slug,
    image: p.image,
    category: p.category,
    categoryLabel: p.categoryLabel,
    title: p.title,
    excerpt: p.excerpt,
    author: p.author,
    date: p.date,
    readTime: p.readTime,
    onClick: e => {
      e.preventDefault();
      navigate('post/' + p.slug);
    },
    href: "#"
  }))))));
}
function RecipeDetailPage({
  slug,
  navigate
}) {
  const {
    Badge
  } = window.WanderlustFoodiesDesignSystem_288b64;
  const {
    recipes
  } = window.WF_DATA;
  const recipe = recipes.find(r => r.slug === slug) || recipes[0];
  const [checked, setChecked] = React.useState({});
  const toggleCheck = i => setChecked(c => ({
    ...c,
    [i]: !c[i]
  }));
  const container = {
    maxWidth: '78rem',
    margin: '0 auto',
    padding: '0 clamp(1.25rem,4vw,2.5rem)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 68
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      padding: 'clamp(2rem,4vw,3rem) clamp(1.25rem,4vw,2.5rem)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => navigate('recipes'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-faint)',
      padding: 0,
      marginBottom: 20
    }
  }, "\u2190 All Recipes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(2rem,5vw,4rem)',
      alignItems: 'center',
      marginBottom: 'clamp(2.5rem,5vw,4rem)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 16,
      flexWrap: 'wrap'
    }
  }, recipe.tags.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: t === 'Gluten-free' ? 'recipe' : t === 'Navratri' ? 'recipe' : 'neutral',
    solid: true
  }, t))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      lineHeight: 1,
      fontSize: 'clamp(2.2rem,4.5vw,3.6rem)',
      color: 'var(--text-strong)',
      margin: '0 0 16px'
    }
  }, recipe.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      lineHeight: 1.65,
      color: 'var(--text-muted)',
      marginBottom: 24
    }
  }, recipe.intro), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      padding: '18px 0',
      borderTop: '1.5px solid var(--border-hairline)',
      borderBottom: '1.5px solid var(--border-hairline)'
    }
  }, [['Prep & Cook', recipe.time], ['Serves', recipe.serves], ['Difficulty', recipe.difficulty]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--spice-600)'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--text-faint)'
    }
  }, k))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      border: '2.5px solid var(--espresso-700)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: recipe.image,
    alt: recipe.title,
    style: {
      width: '100%',
      aspectRatio: '1',
      objectFit: 'cover',
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: 'clamp(2rem,5vw,4rem)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-hairline)',
      borderRadius: 'var(--radius-lg)',
      padding: 26,
      position: 'sticky',
      top: 88
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      fontSize: 20,
      color: 'var(--text-strong)',
      margin: '0 0 18px'
    }
  }, "Ingredients"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 13
    }
  }, recipe.ingredients && recipe.ingredients.map((ing, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    onClick: () => toggleCheck(i),
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      cursor: 'pointer',
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      lineHeight: 1.4,
      color: checked[i] ? 'var(--text-faint)' : 'var(--text-body)',
      textDecoration: checked[i] ? 'line-through' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flexShrink: 0,
      marginTop: 2,
      borderRadius: 5,
      border: '2px solid ' + (checked[i] ? 'var(--spice-500)' : 'var(--border-default)'),
      background: checked[i] ? 'var(--spice-500)' : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 11,
      transition: 'all var(--dur-fast)'
    }
  }, checked[i] ? '✓' : ''), ing)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      fontSize: 20,
      color: 'var(--text-strong)',
      margin: '0 0 22px'
    }
  }, "Method"), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, recipe.method && recipe.method.map((step, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--espresso-700)',
      color: 'var(--paper-100)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, i + 1), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      margin: 0,
      paddingTop: 7
    }
  }, step)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => navigate('recipes'),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      fontSize: 12,
      padding: '11px 22px',
      borderRadius: 'var(--radius-pill)',
      border: '2px solid var(--espresso-700)',
      cursor: 'pointer',
      background: 'transparent',
      color: 'var(--espresso-700)'
    }
  }, "\u2190 All Recipes"))))));
}
function BookPage({
  navigate
}) {
  const {
    Badge,
    StampSeal
  } = window.WanderlustFoodiesDesignSystem_288b64;
  const container = {
    maxWidth: '78rem',
    margin: '0 auto',
    padding: '0 clamp(1.25rem,4vw,2.5rem)'
  };
  const blurbs = [['Perilous Ascents', 'Cliff-edge Bolero rides and the unforgiving wild, told without flinching.'], ['Friendships at Altitude', 'The bonds you only build walking uphill together, gasping for air.'], ['Vivid & Honest', 'Swargarohini peaks, Osla village, and one executive thoroughly out of his depth.'], ['A Memoir that Stays', 'Places you cannot quite take with you but also cannot leave entirely behind.']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 68
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--espresso-900)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: 'clamp(2.5rem,6vw,5rem)',
      alignItems: 'center',
      padding: 'clamp(3rem,6vw,5.5rem) clamp(1.25rem,4vw,2.5rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260,
      aspectRatio: '2/3',
      borderRadius: '4px 12px 12px 4px',
      background: 'linear-gradient(145deg, var(--espresso-600), var(--espresso-900))',
      border: '1.5px solid var(--kraft-500)',
      boxShadow: 'var(--shadow-ink)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '28px 20px',
      transform: 'rotate(-2.5deg)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 12,
      top: 0,
      bottom: 0,
      width: 2,
      background: 'rgba(255,255,255,0.08)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--turmeric-300)'
    }
  }, "A Travel Memoir"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      lineHeight: 0.96,
      fontSize: 38,
      color: 'var(--paper-100)',
      marginBottom: 6
    }
  }, "The Human"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      lineHeight: 0.96,
      fontSize: 38,
      color: 'var(--turmeric-300)'
    }
  }, "Migration")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StampSeal, {
    size: 88,
    color: "var(--turmeric-300)",
    topText: "HIMALAYA",
    bottomText: "GARHWAL",
    center: "GS",
    sub: "2025"
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "recipe",
    solid: true
  }, "New \xB7 2025"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      lineHeight: 0.95,
      fontSize: 'clamp(2.8rem,6vw,5rem)',
      color: 'var(--paper-100)',
      margin: '18px 0 0'
    }
  }, "The Human", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--turmeric-500)'
    }
  }, "Migration")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'clamp(1.1rem,1.7vw,1.3rem)',
      lineHeight: 1.6,
      color: 'var(--kraft-300)',
      maxWidth: '46ch',
      margin: '20px 0 28px'
    }
  }, "A disarmingly honest journey into the Garhwal Himalayas \u2014 from cliff-edge Bolero rides to the thermodynamic betrayal of a sub-zero bucket bath."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--espresso-400)',
      maxWidth: '48ch',
      marginBottom: 28
    }
  }, "With vivid descriptions of the stunning Swargarohini peaks and the ancient Osla village, readers feel as though they are panting right alongside Girish on the trail."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      fontSize: 14,
      padding: '14px 28px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--turmeric-500)',
      color: 'var(--espresso-900)',
      boxShadow: 'var(--shadow-md)'
    },
    onMouseEnter: e => e.currentTarget.style.filter = 'brightness(1.08)',
    onMouseLeave: e => e.currentTarget.style.filter = 'none'
  }, "Get the Book"), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigate('post/garhwal-migration'),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      fontSize: 14,
      padding: '14px 28px',
      borderRadius: 'var(--radius-pill)',
      border: '2px solid rgba(210,190,156,0.4)',
      cursor: 'pointer',
      background: 'transparent',
      color: 'var(--paper-100)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
    }
  }, "Read an Excerpt \u2192"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'clamp(3rem,6vw,5rem) 0',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      maxWidth: '48rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'clamp(1.5rem,2.8vw,2.2rem)',
      lineHeight: 1.35,
      color: 'var(--espresso-700)',
      textWrap: 'balance',
      margin: 0
    }
  }, "\"The kind of friendships that only get built by people walking uphill together, at altitude.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 3,
      background: 'var(--spice-500)',
      margin: '28px auto'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'clamp(1.05rem,1.6vw,1.2rem)',
      lineHeight: 1.8,
      color: 'var(--text-body)',
      textAlign: 'left'
    }
  }, "Girish shares an unflinching account of what happens when a city-dwelling executive meets the unforgiving wild. The book offers an unforgettable mix of blistering ascents, the kind of friendships built by people walking uphill together at altitude, and the realisation that the hardest trails end in places you cannot quite take with you but also cannot leave entirely behind."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunk)',
      borderTop: '1.5px solid var(--border-hairline)',
      padding: 'clamp(2.5rem,5vw,4rem) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      fontSize: 'clamp(1.5rem,2.5vw,2rem)',
      color: 'var(--text-strong)',
      margin: '0 0 24px',
      textAlign: 'center'
    }
  }, "What's Inside"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 16
    }
  }, blurbs.map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-hairline)',
      borderRadius: 'var(--radius-lg)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      fontSize: 18,
      color: 'var(--text-strong)',
      margin: '0 0 10px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, d)))))));
}
Object.assign(window, {
  BlogPostPage,
  RecipeDetailPage,
  BookPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website/detail.jsx", error: String((e && e.message) || e) }); }

// website/home.jsx
try { (() => {
/* ================================================================
   Wanderlust Foodies — Home Page & About Page
   ================================================================ */

function HomePage({
  navigate
}) {
  const DS = window.WanderlustFoodiesDesignSystem_288b64;
  const {
    Badge,
    Stat,
    ArticleCard,
    RecipeCard
  } = DS;
  const {
    posts,
    recipes
  } = window.WF_DATA;
  const featured = posts.filter(p => p.featured).slice(0, 3);
  const featuredRecipes = recipes.filter(r => r.featured).slice(0, 3);
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);
  const gutter = 'clamp(1.25rem,4vw,2.5rem)';
  const container = {
    maxWidth: '78rem',
    margin: '0 auto',
    padding: `0 ${gutter}`
  };
  const eyebrow = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.16em',
    fontSize: 11.5,
    color: 'var(--spice-500)',
    display: 'block',
    marginBottom: 10
  };
  const h2Style = {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.01em',
    fontSize: 'clamp(1.9rem,3.2vw,2.8rem)',
    color: 'var(--text-strong)',
    lineHeight: 1.0,
    margin: 0
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: '100vh',
      minHeight: 600,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 68,
      background: 'var(--espresso-900)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/img/trek-sandakphu.jpg",
    alt: "Himalayan trail",
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 30%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(160deg, rgba(36,20,5,0.25) 0%, rgba(36,20,5,0.82) 65%, rgba(36,20,5,0.96) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      ...container,
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 48,
      alignItems: 'center',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      fontSize: 11,
      color: 'rgba(240,203,107,0.9)',
      marginBottom: 18,
      display: 'block'
    }
  }, "Travel \xB7 Food \xB7 Stories"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.005em',
      lineHeight: 0.94,
      fontSize: 'clamp(3rem,7vw,6rem)',
      color: 'var(--paper-50)',
      margin: '0 0 20px',
      textWrap: 'balance'
    }
  }, "Global", /*#__PURE__*/React.createElement("br", null), "Adventures.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--spice-400)'
    }
  }, "Local Flavours.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'clamp(1.1rem,1.7vw,1.35rem)',
      lineHeight: 1.55,
      color: 'rgba(239,230,211,0.88)',
      maxWidth: '44ch',
      margin: '0 0 32px'
    }
  }, "Honest travel tales, hard-won trails and the home-cooked recipes we carry back from every journey."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => navigate('blog'),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      fontSize: 14,
      padding: '14px 28px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--spice-500)',
      color: '#fff',
      boxShadow: 'var(--shadow-md)',
      transition: 'filter var(--dur-fast)'
    },
    onMouseEnter: e => e.currentTarget.style.filter = 'brightness(1.1)',
    onMouseLeave: e => e.currentTarget.style.filter = 'none'
  }, "Travel Stories"), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigate('recipes'),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      fontSize: 14,
      padding: '14px 28px',
      borderRadius: 'var(--radius-pill)',
      border: '2px solid rgba(239,230,211,0.5)',
      cursor: 'pointer',
      background: 'transparent',
      color: 'var(--paper-100)',
      transition: 'border-color var(--dur-fast), background var(--dur-fast)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = 'var(--paper-100)';
      e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = 'rgba(239,230,211,0.5)';
      e.currentTarget.style.background = 'transparent';
    }
  }, "Explore Recipes"))), /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 0.12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo/wanderlust-badge.png",
    alt: "",
    style: {
      width: 260,
      filter: 'brightness(10)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 32,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.5)'
    }
  }, "Scroll"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 40,
      background: 'rgba(255,255,255,0.25)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1.5px solid var(--border-hairline)',
      borderTop: '1.5px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      height: 56,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, [['travel', 'Travel', '\u2708'], ['trek', 'Trek', '\u25b2'], ['recipe', 'Recipes', '\u2605'], ['story', 'Story', '\u2665']].map(([id, label, icon]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => navigate(id === 'recipe' ? 'recipes' : 'blog'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontSize: 12.5,
      padding: '7px 16px',
      borderRadius: 'var(--radius-pill)',
      border: '1.5px solid var(--border-hairline)',
      background: 'transparent',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      transition: 'all var(--dur-fast)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--spice-50)';
      e.currentTarget.style.color = 'var(--spice-600)';
      e.currentTarget.style.borderColor = 'var(--spice-200)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = 'var(--text-muted)';
      e.currentTarget.style.borderColor = 'var(--border-hairline)';
    }
  }, /*#__PURE__*/React.createElement("span", null, icon), label)))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'clamp(3rem,6vw,5rem) 0',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 32,
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: eyebrow
  }, "Travel Tales"), /*#__PURE__*/React.createElement("h2", {
    style: h2Style
  }, "Discover the World", /*#__PURE__*/React.createElement("br", null), "Through Our Stories")), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigate('blog'),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontSize: 12,
      background: 'transparent',
      border: 'none',
      color: 'var(--text-link)',
      cursor: 'pointer',
      padding: 0
    }
  }, "View All Stories \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, featured.map((p, i) => /*#__PURE__*/React.createElement(ArticleCard, {
    key: i,
    image: p.image,
    category: p.category,
    categoryLabel: p.categoryLabel,
    title: p.title,
    excerpt: p.excerpt,
    author: p.author,
    date: p.date,
    readTime: p.readTime,
    onClick: e => {
      e.preventDefault();
      navigate('post/' + p.slug);
    },
    href: "#"
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--espresso-800)',
      padding: 'clamp(3rem,6vw,5rem) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      gap: 'clamp(2rem,5vw,4rem)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      ...eyebrow,
      color: 'var(--turmeric-300)'
    }
  }, "From Our Kitchen"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2Style,
      color: 'var(--paper-100)',
      marginBottom: 16
    }
  }, "Join Us on a Flavourful Journey"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      lineHeight: 1.7,
      color: 'var(--kraft-300)',
      marginBottom: 28,
      maxWidth: '38ch'
    }
  }, "Recipes from the kitchens we've cooked in, the markets we've wandered through, and the meals we keep coming back to."), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigate('recipes'),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      fontSize: 13,
      padding: '12px 26px',
      borderRadius: 'var(--radius-pill)',
      border: '2px solid var(--kraft-400)',
      background: 'transparent',
      color: 'var(--kraft-300)',
      cursor: 'pointer',
      transition: 'all var(--dur-fast)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--kraft-300)';
      e.currentTarget.style.color = 'var(--espresso-900)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = 'var(--kraft-300)';
    }
  }, "All Recipes \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, featuredRecipes.map((r, i) => /*#__PURE__*/React.createElement(RecipeCard, {
    key: i,
    image: r.image,
    title: r.title,
    time: r.time,
    tags: r.tags,
    blurb: r.blurb,
    onClick: e => {
      e.preventDefault();
      navigate('recipe/' + r.slug);
    },
    href: "#",
    style: {
      background: 'rgba(78,50,28,0.4)',
      borderColor: 'rgba(210,190,156,0.15)'
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'clamp(3rem,6vw,5rem) 0',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(2rem,5vw,4rem)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      border: '2.5px solid var(--espresso-700)',
      boxShadow: 'var(--shadow-lg)',
      transform: 'rotate(-1.2deg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/img/couple-illustration.jpg",
    alt: "Girish & Vidya",
    style: {
      width: '100%',
      aspectRatio: '1',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -16,
      right: -16,
      background: 'var(--turmeric-500)',
      color: 'var(--espresso-900)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      fontSize: 13,
      padding: '10px 18px',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-md)',
      transform: 'rotate(2deg)'
    }
  }, "Girish & Vidya")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: eyebrow
  }, "Meet Wanderlust Foodies"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2Style,
      marginBottom: 18
    }
  }, "Passionate About the World on a Plate"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'clamp(1.05rem,1.5vw,1.2rem)',
      lineHeight: 1.75,
      color: 'var(--text-body)',
      marginBottom: 14
    }
  }, "We are a family of travellers and food enthusiasts \u2014 Girish, Vidya and our son Devansh. We believe the best way to understand a culture is through its cuisine."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'clamp(1.05rem,1.5vw,1.2rem)',
      lineHeight: 1.75,
      color: 'var(--text-body)',
      marginBottom: 28
    }
  }, "Every trip leaves us with a story and a recipe. This is where we share both \u2014 honestly, and with a reasonable amount of self-deprecation."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'clamp(1.5rem,4vw,3rem)',
      flexWrap: 'wrap'
    }
  }, [['25+', 'Destinations'], ['50+', 'Recipes'], ['∞', 'Stories']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '2.6rem',
      lineHeight: 1,
      color: 'var(--spice-500)'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontSize: 11,
      color: 'var(--text-muted)',
      marginTop: 5
    }
  }, l))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pine-800)',
      padding: 'clamp(3rem,6vw,4.5rem) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      maxWidth: '56rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...eyebrow,
      color: 'var(--turmeric-300)'
    }
  }, "Stay in the Loop"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2Style,
      color: 'var(--paper-100)',
      marginBottom: 14
    }
  }, "Join the Adventure"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--pine-300)',
      marginBottom: 32
    }
  }, "Subscribe for weekly travel stories, seasonal recipes and insider tips \u2014 straight to your inbox. No spam, only stories."), subscribed ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 20,
      color: 'var(--turmeric-300)'
    }
  }, "You're on the trail with us \u2014 see you on Sunday.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      maxWidth: '36rem',
      margin: '0 auto',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: email,
    onChange: e => setEmail(e.target.value),
    type: "email",
    placeholder: "your@email.com",
    style: {
      flex: 1,
      minWidth: 200,
      padding: '13px 18px',
      borderRadius: 'var(--radius-pill)',
      border: '1.5px solid rgba(126,154,130,0.4)',
      background: 'rgba(255,255,255,0.08)',
      color: 'var(--paper-100)',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      outline: 'none'
    },
    onFocus: e => e.target.style.borderColor = 'var(--turmeric-300)',
    onBlur: e => e.target.style.borderColor = 'rgba(126,154,130,0.4)'
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      if (email) setSubscribed(true);
    },
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      fontSize: 13,
      padding: '13px 26px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--turmeric-500)',
      color: 'var(--espresso-900)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'filter var(--dur-fast)'
    },
    onMouseEnter: e => e.currentTarget.style.filter = 'brightness(1.1)',
    onMouseLeave: e => e.currentTarget.style.filter = 'none'
  }, "Subscribe")))));
}
function AboutPage({
  navigate
}) {
  const container = {
    maxWidth: '78rem',
    margin: '0 auto',
    padding: '0 clamp(1.25rem,4vw,2.5rem)'
  };
  const h2Style = {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.01em',
    fontSize: 'clamp(1.9rem,3.2vw,2.8rem)',
    color: 'var(--text-strong)',
    lineHeight: 1.0,
    margin: '0 0 18px'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 68
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--espresso-900)',
      padding: 'clamp(3rem,6vw,5rem) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      fontSize: 11,
      color: 'var(--turmeric-300)',
      display: 'block',
      marginBottom: 14
    }
  }, "Our Story"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      fontSize: 'clamp(2.8rem,6vw,5rem)',
      color: 'var(--paper-100)',
      lineHeight: 0.96,
      margin: 0
    }
  }, "About Us"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'clamp(3rem,6vw,5rem) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(2.5rem,6vw,5rem)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 88
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      border: '2.5px solid var(--espresso-700)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/img/couple-illustration.jpg",
    alt: "Girish and Vidya",
    style: {
      width: '100%',
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: h2Style
  }, "Welcome to Wanderlust Foodies"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      lineHeight: 1.75,
      color: 'var(--text-body)',
      marginBottom: 18
    }
  }, "We are Girish and Vidya \u2014 and our son Devansh, who has been dragged along on enough road trips to have opinions about all of them. Wanderlust Foodies is where we document those adventures: honestly, with photographs that are taken by whoever isn't complaining about the altitude, and recipes that we test until they work on a normal weeknight kitchen."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      lineHeight: 1.75,
      color: 'var(--text-body)',
      marginBottom: 18
    }
  }, "We started this blog because we believe the best way to understand a culture is through its cuisine. A temple tells you what people revere. A kitchen tells you how they live."), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: '28px 0',
      padding: '4px 0 4px 22px',
      borderLeft: '4px solid var(--spice-500)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'clamp(1.2rem,2vw,1.5rem)',
      lineHeight: 1.4,
      color: 'var(--espresso-700)',
      margin: 0
    }
  }, "\"Exploring the world one bite at a time.\"")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      lineHeight: 1.75,
      color: 'var(--text-body)',
      marginBottom: 28
    }
  }, "Girish recently wrote ", /*#__PURE__*/React.createElement("em", null, "The Human Migration"), " \u2014 a memoir about trekking the Garhwal Himalayas that is more honest about what it feels like to be deeply unprepared than most travel writing allows itself to be. Vidya handles the recipes. Devansh handles the complaints."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => navigate('blog'),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      fontSize: 13,
      padding: '12px 24px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--spice-500)',
      color: '#fff'
    }
  }, "Read Our Stories"), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigate('book'),
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      fontSize: 13,
      padding: '12px 24px',
      borderRadius: 'var(--radius-pill)',
      border: '2px solid var(--espresso-700)',
      cursor: 'pointer',
      background: 'transparent',
      color: 'var(--espresso-700)'
    }
  }, "The Book \u2192"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-sunk)',
      borderTop: '1.5px solid var(--border-hairline)',
      borderBottom: '1.5px solid var(--border-hairline)',
      padding: 'clamp(2rem,4vw,3rem) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      display: 'flex',
      justifyContent: 'center',
      gap: 'clamp(2.5rem,7vw,6rem)',
      flexWrap: 'wrap'
    }
  }, [['25+', 'Destinations explored'], ['50+', 'Recipes documented'], ['3', 'Active travellers'], ['2025', 'The memoir published']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1,
      color: 'var(--spice-500)'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontSize: 11,
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, l))))));
}
Object.assign(window, {
  HomePage,
  AboutPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website/home.jsx", error: String((e && e.message) || e) }); }

__ds_ns.StampSeal = __ds_scope.StampSeal;

__ds_ns.ArticleCard = __ds_scope.ArticleCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.RecipeCard = __ds_scope.RecipeCard;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

})();
