(function () {
  var B = '../assets/img/';
  window.WF_DATA = {
    posts: [
      { slug: 'sandakphu', category: 'trek', categoryLabel: 'Trek', title: 'Trekking with Friends: Off to Sandakphu!', excerpt: 'A spectacular Himalayan journey blending natural beauty, cultural richness and panoramic mountain views — told without rose-tinted glasses.', image: B + 'trek-sandakphu.jpg', author: 'Girish', date: 'Feb 9, 2025', readTime: '26 min read', featured: true,
        content: [
          { type: 'lead', text: 'The Sandakphu-Phalut trek is one of the finest in the Indian Himalayas. We set off as six friends and one very optimistic packing list.' },
          { type: 'p', text: 'Day one lulls you into confidence — gentle rhododendron forest, easy switchbacks, the kind of trail that makes you believe you trained enough. You did not. Nobody does.' },
          { type: 'quote', text: 'The hardest trails end in places you cannot quite take with you, but also cannot leave entirely behind.' },
          { type: 'p', text: 'By the time Sleeping Buddha — the Kanchenjunga range stretched flat against the dawn — finally appeared, the cold had stopped being a complaint and started being a fact. We stood there, breath ragged, fingers useless, grinning like idiots.' },
          { type: 'p', text: 'The trail passes through Tumling, Kalipokhri and Bikheybhanjyang before the final steep push to the summit ridge. At 3,636m, Sandakphu offers views of four of the world\'s five highest peaks — Everest, Kangchenjunga, Lhotse and Makalu — all in one morning horizon.' },
        ]
      },
      { slug: 'aurangabad-shirdi', category: 'travel', categoryLabel: 'Travel', title: 'Mumbai to Aurangabad to Shirdi: The Ultimate 5-Day Family Road Trip', excerpt: 'A detailed guide covering the Samruddhi Mahamarg, Ellora Caves, Grishneshwar and Shirdi.', image: B + 'road-aurangabad.png', author: 'Girish', date: 'Jan 13, 2025', readTime: '7 min read', featured: true,
        content: [
          { type: 'lead', text: 'The Samruddhi Mahamarg changed everything. Mumbai to Aurangabad is now a smooth, confident 6-hour drive — no more white-knuckle highway overtakes.' },
          { type: 'p', text: 'We spread it over five days: Mumbai → Aurangabad (Ellora Caves, Grishneshwar, Bibi Ka Maqbara) → Shirdi → home. Family-friendly, deeply worth it.' },
          { type: 'p', text: 'The Ellora Caves alone justify the trip. Cave 16 — the Kailasa Temple, carved top-down from a single basalt rock face — is one of those genuinely jaw-dropping human achievements that resets your sense of what\'s possible.' },
        ]
      },
      { slug: 'ujjain', category: 'travel', categoryLabel: 'Travel', title: 'Ujjain: Temples, Ghats and the Best Poha of Our Lives', excerpt: 'A weekend at the Mahakal temple, a boat at the ghat at dusk, and a poha that made us realise great cooking lives in the simplest bowl.', image: B + 'road-ujjain.png', author: 'Vidya', date: 'Dec 5, 2024', readTime: '9 min read', featured: true,
        content: [
          { type: 'lead', text: 'Ujjain\'s Mahakal temple queue at 5am on a winter morning is not what the tourist brochures lead you to expect. It is an exercise in patience, devotion, and elbows.' },
          { type: 'p', text: 'But the city rewards slowness. The Shipra ghat at dusk, a boat drifting past earthen diyas, the smell of wood smoke and marigolds — you understand why this city has been sacred for three thousand years.' },
          { type: 'p', text: 'The poha we ate from a tiny stall near the temple — flat rice, potato, onion, mustard, curry leaf, a squeeze of lime — was the best version of something ordinary we have ever tasted. We haven\'t stopped thinking about it.' },
        ]
      },
      { slug: 'garhwal-migration', category: 'story', categoryLabel: 'Story', title: 'The Human Migration: What the Garhwal Himalayas Taught Me', excerpt: 'From cliff-edge Bolero rides to sub-zero bucket baths — the honest account that became a book.', image: B + 'hero-himalaya.png', author: 'Girish', date: 'Apr 14, 2025', readTime: '32 min read', featured: false,
        content: [
          { type: 'lead', text: 'I went to the Garhwal Himalayas as a city-dwelling executive who had read enough about mountains to believe he was prepared. I was not.' },
          { type: 'quote', text: 'The kind of friendships that only get built by people walking uphill together, at altitude.' },
          { type: 'p', text: 'What followed became a book — The Human Migration — because some experiences refuse to stay inside you.' },
        ]
      },
      { slug: 'road-trip-3-states', category: 'travel', categoryLabel: 'Travel', title: 'Road Trip Across 3 States: Our Annual Escape', excerpt: 'When the three of us load up the car and set off — playlist ready, snacks packed, no plan beyond the first fuel stop.', image: B + 'couple-illustration.jpg', author: 'Vidya', date: 'May 3, 2025', readTime: '23 min read', featured: false,
        content: [
          { type: 'lead', text: 'Every year, somewhere in April or May, Girish announces that we need to leave. This is not wrong.' },
          { type: 'p', text: 'This year it was a loop through three states — Maharashtra, Karnataka, Goa — over ten days. The kind of trip where the drive becomes the point, not just the means to it.' },
        ]
      },
    ],
    recipes: [
      { slug: 'nachni-bhakri', title: 'Nachni (Ragi) Bhakri', image: B + 'recipe-nachni-bhakri.jpg', time: '20 min', serves: '4', difficulty: 'Easy', tags: ['Gluten-free'], category: 'Breads', blurb: 'The secret technique for perfectly soft, pliable Nachni Bhakri — a powerhouse of calcium and iron.', featured: true,
        intro: 'Tired of ragi bhakri turning out hard or crumbly? The trick is the hot-water method: pour boiling water over the flour, fold off the heat, rest it, then knead while warm.',
        ingredients: ['1 cup Nachni (ragi / finger-millet) flour', '¾ cup hot water, just off the boil', '½ tsp salt', '1 tsp ghee, plus extra for roasting'],
        method: ['Bring water to a rolling boil; stir in salt and ghee.', 'Add flour all at once, fold off the heat until it clumps, cover and rest 5 minutes.', 'Knead the warm dough for 2 minutes until smooth and pliable.', 'Divide into 4 balls; pat each into a round on a damp cloth.', 'Roast on a dry hot tawa, then hold directly over an open flame until it puffs.', 'Apply ghee and serve immediately with pitla or curry.'],
      },
      { slug: 'sabudana-khichdi', title: 'Sabudana Khichdi', image: B + 'recipe-sabudana-khichdi.jpg', time: '10 min', serves: '3', difficulty: 'Easy', tags: ['Navratri', 'Vrat'], category: 'Mains', blurb: 'Instant, fluffy, non-sticky sago pearls — skip the long overnight soak entirely.', featured: true,
        intro: 'The trick to non-sticky sabudana khichdi? Soak in just enough water to coat the pearls — not drown them — for exactly two hours.',
        ingredients: ['1 cup sabudana (sago pearls)', '¾ cup roasted peanuts, coarsely crushed', '2 medium potatoes, boiled and cubed', '2 tbsp ghee', '1 tsp cumin seeds', '2 green chillies, slit', '¼ tsp rock salt', 'Juice of ½ lemon'],
        method: ['Wash sabudana twice, add just enough water to coat by ½cm. Soak 2 hours only.', 'Drain and separate pearls on a wide plate.', 'Heat ghee, add cumin and chillies; once they pop, add potatoes.', 'Add sabudana and peanuts; toss on medium-high heat 5 minutes.', 'Season, squeeze lemon, garnish with coriander and serve.'],
      },
      { slug: 'pomfret-fry', title: 'Pomfret / Paplet Fry', image: B + 'recipe-pomfret-fry.jpg', time: '25 min', serves: '2', difficulty: 'Medium', tags: ['Konkan', 'Seafood'], category: 'Mains', blurb: 'The authentic Konkan-coast marinade that makes every bite mouth-wateringly delicious.', featured: true,
        intro: 'A good pomfret fry is about the marinade sitting in the scored cuts — at least 20 minutes, but overnight in the fridge is the real game-changer.',
        ingredients: ['2 whole pomfret, cleaned and scored', '2 tsp Kashmiri red chilli powder', '1 tsp turmeric', '1½ tsp coriander powder', '2 tsp tamarind paste', '1 tsp ginger-garlic paste', '1 tsp salt', 'Coconut oil for shallow frying'],
        method: ['Mix all spices, tamarind and ginger-garlic into a thick marinade.', 'Score fish 3 times each side; rub marinade deep into the cuts.', 'Marinate at least 20 minutes (overnight is better).', 'Heat coconut oil in a flat pan; lay fish in hot oil.', 'Fry 4–5 min per side on medium-high until edges are crispy.', 'Serve immediately with rice, lime and raw onion.'],
      },
    ],
  };
})();
