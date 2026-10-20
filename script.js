/* ════════════════════════════════════════
   BLOOD ROSE — script.js
════════════════════════════════════════ */

'use strict';

/* ── PRODUCTS DATA / SUPABASE ── */
/* Mantemos estes dados como fallback enquanto o Supabase não estiver configurado. */
const FALLBACK_PRODUCTS = [

{
    id: 1,
    name: 'Vestido Bordado',
    category: 'Vestidos',
    price: 389,
    oldPrice: 520,
    badge: 'Novo',
    desc: 'Uma dança de sombras e delicadeza, onde renda, laços e curvas se encontram para criar um encanto gótico irresistível.',
    image: 'img/vestido02.jpg',
  },

  {
    id: 2,
    name: 'Vestido Véu Da Noite',
    category: 'Vestidos',
    price: 389,
    oldPrice: 520,
    badge: 'Novo',
    desc: 'Uma sombra de renda negra que parece ter sido costurada com os suspiros de uma lua esquecida.',
    image: 'img/vestido04.png',
  },

{
    id: 3,
    name: 'Vestido Noite Eterna',
    category: 'Vestidos',
    price: 389,
    oldPrice: 520,
    badge: 'Novo',
    desc: 'Veludo profundo com renda vitoriana. Silhueta mítica que beija o chão à meia-noite.',
    image: 'img/vestido01.jpg',
  },

  {
    id: 4,
    name: 'Vestido casual',
    category: 'Vestidos',
    price: 389,
    oldPrice: 520,
    badge: 'Novo',
    desc: 'Vestido preto inspiração gótica, com corpete estruturado e decote quadrado, mangas longas de tule transparente com renda floral e uma saia rodada que cria uma silhueta delicada e dramática.',
    image: 'img/vestido05.jpg',
  },

  {
    id: 5,
    name: 'Vestido Crimson Velvet',
    category: 'Vestidos',
    price: 445,
    badge: 'Exclusivo',
    desc: 'Vermelho sangue em veludo italiano. Para as que não precisam se esconder na sombra.',
    image: 'img/vestido03.jpg',
  },

  {
    id: 6,
    name: 'Botas Naked Wolfe',
    category: 'Botas',
    price: 5.990,
    oldPrice: 380,
    badge: '-21%',
    desc: 'Couro legítimo, plataforma de 7 cm, fivelas prateadas. Cada passo, uma declaração.',
    image: 'img/bota01.webp',
  },
  {
    id: 7,
    name: 'Corset Sombra da Noite',
    category: 'Corsets',
    price: 265,
    desc: 'Um toque de renda e mistério, feito para envolver a silhueta com a delicadeza sombria de uma noite encantada.',
    image: 'img/corset04.webp',
  },
  {
    id: 8,
    name: 'Blusa ',
    category: 'Blusas',
    price: 155,
    oldPrice: 195,
    desc: 'Um sussurro sombrio em forma de seda, marcado por detalhes místicos e mangas que dançam como sombras ao vento.',
    image: 'img/blusa01.jpg',
  },
  {
    id: 9,
    name: 'Saia de Couro Eclipse',
    category: 'Saias',
    price: 200,
    badge: 'Novo',
    desc: 'Couro vegano midi com recortes assimétricos. Poder e fluidez em uma só peça.',
    image:'img/saia04.png',
  },
  {
    id: 10,
    name: 'Casaco Veludo Condessa',
    category: 'Casacos',
    price: 590,
    badge: 'Premium',
    desc: 'Uma sombra envolta em mistério, onde o veludo negro e os detalhes metálicos revelam a presença sombria de quem nasceu para caminhar pela noite.',
    image: 'img/casaco01.jpg',
  },
  {
    id: 11,
    name: 'Jaqueta De Couro',
    category: 'Casacos',
    price: 415,
    desc: 'Um clássico das sombras, onde o couro negro encontra zíperes e detalhes metálicos para criar uma presença rebelde, urbana e irresistivelmente sombria.',
    image: 'img/casaco03.webp',
  },
  {
    id: 12,
    name: 'camisa Y2K',
    category: 'Blusas',
    price: 178,
    badge: 'Novo',
    desc: 'Entre símbolos sombrios e detalhes misteriosos, uma peça que transforma o caos em arte e a escuridão em estilo.',
    image: 'img/blusa02.webp',
  },
  {
    id: 13,
    name: 'Corset ',
    category: 'Corsets',
    price: 310,
    oldPrice: 395,
    desc: 'Um encanto vitoriano banhado em sombras, onde renda, pérolas e ornamentos se unem para vestir a noite com uma beleza proibida.',
    image: 'img/corset01.jpg',
  },
  {
    id: 14,
    name: 'Saia Rosa Negra',
    category: 'Saias',
    price: 280,
    desc: 'Um véu de sombras em camadas de tecido, delicadamente drapeado para envolver a silhueta com um charme gótico e misterioso.',
    image: 'img/saia01.jpg',
  },
  {
    id: 15,
    name: 'Casaco ',
    category: 'Casacos',
    price: 720,
    badge: 'Premium',
    desc: 'Um abraço de inverno envolto em sombras, onde a maciez da pele encontra a atitude sombria para criar um encanto gótico irresistível.',
    image: 'img/casaco02.webp',
  },



   {
    id: 16,
    name: 'Casaco ',
    category: 'Casacos',
    price: 720,
    badge: 'Premium',
    desc: '',
    image: 'img/casaco04.webp',
  },

 {
    id: 17,
    name: 'Casaco',
    category: 'Casacos',
    price: 720,
    badge: 'Premium',
    desc: 'Um toque de mistério e elegância, onde o veludo negro encontra a delicadeza da pele felpuda em uma peça digna de uma noite encantada.',
    image: 'img/casaco05.webp',
  },

{
    id: 18,
    name: 'Saia',
    category: 'Saias',
    price: 720,
    badge: 'Premium',
    desc: 'Entre camadas e sombras, uma saia que dança entre a delicadeza e o mistério de uma noite gótica',
    image: 'img/saia02.jpg',
  },

{
    id: 19,
    name: 'Saia',
    category: 'Saias',
    price: 720,
    badge: 'Premium',
    desc: 'Renda negra que envolve a silhueta como um segredo, revelando uma elegância sombria e irresistível.',
    image: 'img/saia03.webp',
  },


{
    id: 20,
    name: 'Saia',
    category: 'Saias',
    price: 720,
    badge: 'Premium',
    desc: 'Volumes, fivelas e camadas negras se unem em uma peça feita para quem transforma a escuridão em estilo.',
    image: 'img/saia05.webp',
  },

{
    id: 21,
    name: 'Botas',
    category: 'Botas',
    price: 360,
    badge: 'Premium',
    desc: 'Acabamento em preto intenso, tiras com fivelas prateadas e solado elevado que destaca sua presença.',
    image: 'img/bota05.png',
  },

{
    id: 22,
    name: 'Blusa',
    category: 'Blusas',
    price: 720,
    badge: 'Premium',
    desc: 'Uma peça que mistura delicadeza e rebeldia, trazendo o mistério das sombras em um desenho marcante e cheio de personalidade.',
    image: 'img/blusa03.jpg',
  },

{
    id: 23,
    name: 'Blusa',
    category: 'Blusas',
    price: 720,
    badge: 'Premium',
    desc: 'Uma explosão de símbolos e sombras, onde o contraste entre o preto e o branco cria uma estética gótica intensa, ousada e cheia de atitude.',
    image: 'img/blusa04.jpg',
   
  },

{
    id: 24,
    name: 'Blusa',
    category: 'Blusas',
    price: 720,
    badge: 'Premium',
    desc: 'Entre coroas, rosas e ossos, uma peça que transforma a escuridão em elegância e carrega consigo o encanto de um reino esquecido.',
    image: 'img/blusa05.jpg',
   
  },
{
    id: 25,
    name: 'Corset ',
    category: 'Corsets',
    price: 310,
    oldPrice: 395,
    desc: 'Um relicário de mistério e luxo, onde rendas, correntes e detalhes preciosos se entrelaçam para vestir a noite de encanto.',
    image: 'img/corset02.jpg',
  },

{
    id: 26,
    name: 'Corset ',
    category: 'Corsets',
    price: 310,
    oldPrice: 395,
    desc:'Um encanto proibido em renda negra, feito para envolver a silhueta com a sedução sombria de uma criatura da noite.',
    image:'img/corset03.jpg',
  },

{
    id: 27,
    name: 'Corset ',
    category: 'Corsets',
    price: 310,
    oldPrice: 395,
    desc: 'Um corset envolto em sombras, criado para revelar a beleza sombria de quem ousa vestir a própria noite.',
    image: 'img/corset05.webp',
  },


  {
    id: 28,
    name: 'Botas',
    category: 'Botas',
    price: 370,
    badge: 'Premium',
    desc: 'Bota preta envernizada com plataforma robusta, cadarço frontal e fivelas metálicas pontiagudas.',
    image: 'img/bota02.jpg',
  },

{
    id: 28,
    name: 'Botas',
    category: 'Botas',
    price: 450,
    badge: 'Premium',
    desc: 'Bota preta envernizada com salto alto, plataforma robusta, cadarço frontal e fivelas metálicas de morcegos decorativas',
    image: 'img/botas03.avif',
  },


{
    id: 29,
    name: 'Botas',
    category: 'Botas',
    price: 450,
    badge: 'Premium',
    desc: 'Bota preta de cano alto com salto grosso, plataforma frontal, cadarços e múltiplas fivelas metálicas.',
    image: 'img/bota04.jpg',
  },


];;
let PRODUCTS = [];

const supabaseReady = () => {
  const cfg = window.BLOODROSE_SUPABASE || {};
  return Boolean(
    window.supabase?.createClient &&
    cfg.url &&
    cfg.anonKey &&
    !cfg.url.includes('COLE_AQUI') &&
    !cfg.anonKey.includes('COLE_AQUI')
  );
};

let db = null;
if (supabaseReady()) {
  db = window.supabase.createClient(
    window.BLOODROSE_SUPABASE.url,
    window.BLOODROSE_SUPABASE.anonKey
  );
}

function normalizeProduct(p) {
  return {
    id: p.id,
    name: p.name || '',
    category: p.category || 'Outros',
    price: Number(p.price || 0),
    oldPrice: p.old_price == null ? (p.oldPrice == null ? null : Number(p.oldPrice)) : Number(p.old_price),
    badge: p.badge || '',
    desc: p.description == null ? (p.desc || '') : p.description,
    image: p.image_url || p.image || '',
    sizes: Array.isArray(p.sizes) && p.sizes.length ? p.sizes : SIZES
  };
}

async function loadProducts() {
  if (!db) {
    PRODUCTS = FALLBACK_PRODUCTS.map(normalizeProduct);
    return;
  }

  const { data, error } = await db
    .from('products')
    .select('id,name,category,price,old_price,badge,description,image_url,sizes,active,sort_order')
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Erro ao carregar produtos:', error);
    PRODUCTS = FALLBACK_PRODUCTS.map(normalizeProduct);
    showToast('Não foi possível carregar o catálogo.');
    return;
  }

  PRODUCTS = (data || []).map(normalizeProduct);
}


const SIZES = ['XS', 'S', 'M', 'G', 'GG'];

/* ── STATE ── */
let cart = [];
let wishlist = [];
try {
  const savedWishlist = JSON.parse(localStorage.getItem('bloodRoseFavoritos') || '[]');
  wishlist = Array.isArray(savedWishlist) ? savedWishlist : [];
} catch {
  localStorage.removeItem('bloodRoseFavoritos');
}
let activeFilter = 'all';
let searchQuery = '';

/* ── DOM REFS ── */
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);
const wishlistHas = id => wishlist.some(item => String(item) === String(id));

// TEMA COM LOCALSTORAGE
const themeBtn = $('themeBtn');
const temaSalvo = localStorage.getItem('tema');

if (temaSalvo === 'claro') {
  document.body.classList.add('tema-claro');
}

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('tema-claro');
    localStorage.setItem(
      'tema',
      document.body.classList.contains('tema-claro') ? 'claro' : 'escuro'
    );
  });
}

/* ════════════════
   LOADER
════════════════ */
window.addEventListener('load', () => {
  setTimeout(() => $('loader').classList.add('hidden'), 1800);
});

/* ════════════════
   CUSTOM CURSOR
════════════════ */
const cursor = $('cursor');
const trail  = $('cursorTrail');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
  setTimeout(() => {
    trail.style.left = e.clientX + 'px';
    trail.style.top  = e.clientY + 'px';
  }, 80);
});

document.addEventListener('mouseover', e => {
  if (e.target.closest('a, button, .product-card, .cat-card')) {
    cursor.classList.add('hovering');
  }
});
document.addEventListener('mouseout', e => {
  if (e.target.closest('a, button, .product-card, .cat-card')) {
    cursor.classList.remove('hovering');
  }
});

/* ════════════════
   NAVBAR SCROLL
════════════════ */
window.addEventListener('scroll', () => {
  $('navbar').classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── smooth scroll ── */
document.querySelectorAll('[data-scroll]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const href = a.getAttribute('href');
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  });
});

/* ── hamburger ── */
$('hamburger').addEventListener('click', () => {
  $('navLinks').style.display =
    $('navLinks').style.display === 'flex' ? 'none' : 'flex';
  $('navLinks').style.flexDirection = 'column';
  $('navLinks').style.position = 'absolute';
  $('navLinks').style.top = '70px';
  $('navLinks').style.left = '0';
  $('navLinks').style.right = '0';
  $('navLinks').style.background = 'rgba(10,10,10,0.97)';
  $('navLinks').style.padding = '1.5rem 2rem';
  $('navLinks').style.borderBottom = '1px solid rgba(139,0,0,0.3)';
});

/* ════════════════
   BLOOD DROPS
════════════════ */
const dropsContainer = $('bloodDrops');
for (let i = 0; i < 18; i++) {
  const drop = document.createElement('div');
  drop.classList.add('blood-drop');
  const leftPos = Math.random() * 100;
  const height  = 20 + Math.random() * 60;
  const delay   = Math.random() * 6;
  const dur     = 2.5 + Math.random() * 3;
  drop.style.cssText = `
    left: ${leftPos}%;
    top: ${5 + Math.random() * 30}%;
    height: ${height}px;
    animation-delay: ${delay}s;
    animation-duration: ${dur}s;
  `;
  dropsContainer.appendChild(drop);
}

/* ════════════════
   SEARCH
════════════════ */
const searchInput   = $('searchInput');
const searchResults = $('searchResults');
const searchClear   = $('searchClear');
const searchIconBtn = $('searchToggle');

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  searchQuery = q;
  searchClear.classList.toggle('visible', q.length > 0);
  searchIconBtn.classList.toggle('hidden', q.length > 0);
  renderSearchDropdown(q);
  renderProducts();
  if (q) document.querySelector('#colecao')?.scrollIntoView({ behavior: 'smooth' });
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  searchClear.classList.remove('visible');
  searchIconBtn.classList.remove('hidden');
  searchResults.classList.remove('open');
  renderProducts();
});

function renderSearchDropdown(q) {
  if (!q) { searchResults.classList.remove('open'); return; }
  const hits = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
  ).slice(0, 5);
  if (!hits.length) {
    searchResults.innerHTML = '<p class="search-no-results">Nenhuma peça encontrada…</p>';
  } else {
    searchResults.innerHTML = hits.map(p => `
      <div class="search-item" data-id="${p.id}">
        <img src="${p.image}" alt="${p.name}" loading="lazy"/>
        <div class="search-item-info">
          <h4>${highlight(p.name, q)}</h4>
          <span>R$ ${p.price}</span>
        </div>
      </div>
    `).join('');
    searchResults.querySelectorAll('.search-item').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.dataset.id;
        const product = PRODUCTS.find(p => String(p.id) === String(id));
        searchResults.classList.remove('open');
        openModal(product);
      });
    });
  }
  searchResults.classList.add('open');
}

function highlight(text, q) {
  const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(re, '<mark style="background:rgba(139,0,0,0.4);color:#fff">$1</mark>');
}

document.addEventListener('click', e => {
  if (!e.target.closest('.search-wrap')) {
    searchResults.classList.remove('open');
  }
});

/* ════════════════
   CATEGORY FILTER (bento)
════════════════ */
$('categoryBento').querySelectorAll('.cat-card').forEach(card => {
  card.addEventListener('click', () => {
    const f = card.dataset.filter;
    activeFilter = f;
    $$('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === f));
    renderProducts();
    document.querySelector('#colecao').scrollIntoView({ behavior: 'smooth' });
  });
});

/* ── filter buttons ── */
$$('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    activeFilter = btn.dataset.cat;
    $$('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts();
  });
});

/* ════════════════
   RENDER PRODUCTS
════════════════ */
function renderProducts() {
  const grid = $('productsGrid');
  const noRes = $('noResults');

  const filtered = PRODUCTS.filter(p => {
    const matchCat = activeFilter === 'all' || p.category === activeFilter;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  noRes.classList.toggle('hidden', filtered.length > 0);

  grid.innerHTML = filtered.map((p, i) => `
    <div class="product-card" data-id="${p.id}" style="animation-delay:${i * 0.06}s">
      <div class="product-img-wrap">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <img src="${p.image}" alt="${p.name}" loading="lazy"/>
        <div class="product-overlay">
          <button class="btn-add" data-add="${p.id}">Adicionar ao Carrinho</button>
          <div class="btn-row">
            <button class="btn-quick" data-quick="${p.id}">Ver detalhes</button>
            <button class="btn-wish ${wishlistHas(p.id) ? 'active' : ''}" data-wish="${p.id}" aria-label="Favoritar">
              ${wishlistHas(p.id) ? '♥' : '♡'}
            </button>
          </div>
        </div>
      </div>
      <div class="product-meta">
        <p class="product-cat">${p.category}</p>
        <p class="product-name">${p.name}</p>
        <div class="product-price-row">
          <span class="price-now">R$ ${p.price}</span>
          ${p.oldPrice ? `<span class="price-old">R$ ${p.oldPrice}</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  /* bind events */
  grid.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      addToCart(btn.dataset.add);
    });
  });
  grid.querySelectorAll('[data-quick]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const p = PRODUCTS.find(x => String(x.id) === String(btn.dataset.quick));
      openModal(p);
    });
  });
  grid.querySelectorAll('[data-wish]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      toggleWishlist(btn.dataset.wish);
    });
  });
  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const p = PRODUCTS.find(x => String(x.id) === String(card.dataset.id));
      openModal(p);
    });
  });
}

/* ════════════════
   CART
════════════════ */
function renderFavorites() {
  const grid = $('favoritesGrid');
  const empty = $('favoritesEmpty');
  const count = $('navFavCount');
  const clearButton = $('clearFavorites');
  if (!grid || !empty) return;

  const favorites = PRODUCTS.filter(product => wishlistHas(product.id));
  if (count) count.textContent = favorites.length;
  if (clearButton) clearButton.disabled = favorites.length === 0;

  if (!favorites.length) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }

  empty.style.display = 'none';
  grid.innerHTML = favorites.map((p, i) => `
    <div class="product-card" data-id="${p.id}" style="animation-delay:${i * 0.06}s">
      <div class="product-img-wrap">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <img src="${p.image}" alt="${p.name}" loading="lazy"/>
        <div class="product-overlay">
          <button class="btn-add" data-add="${p.id}">Adicionar ao Carrinho</button>
          <div class="btn-row">
            <button class="btn-quick" data-quick="${p.id}">Ver detalhes</button>
            <button class="btn-wish active" data-wish="${p.id}" aria-label="Remover dos favoritos">♥</button>
          </div>
        </div>
      </div>
      <div class="product-meta">
        <p class="product-cat">${p.category}</p>
        <p class="product-name">${p.name}</p>
        <div class="product-price-row">
          <span class="price-now">R$ ${p.price}</span>
          ${p.oldPrice ? `<span class="price-old">R$ ${p.oldPrice}</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('[data-add]').forEach(btn => btn.addEventListener('click', event => {
    event.stopPropagation();
    addToCart(btn.dataset.add);
  }));
  grid.querySelectorAll('[data-quick]').forEach(btn => btn.addEventListener('click', event => {
    event.stopPropagation();
    openModal(PRODUCTS.find(p => String(p.id) === String(btn.dataset.quick)));
  }));
  grid.querySelectorAll('[data-wish]').forEach(btn => btn.addEventListener('click', event => {
    event.stopPropagation();
    toggleWishlist(btn.dataset.wish);
  }));
  grid.querySelectorAll('.product-card').forEach(card => card.addEventListener('click', () => {
    openModal(PRODUCTS.find(p => String(p.id) === String(card.dataset.id)));
  }));
}

function addToCart(id) {
  const product = PRODUCTS.find(p => String(p.id) === String(id));
  const existing = cart.find(i => String(i.id) === String(id));
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  renderCart();
  showToast(`"${product.name}" adicionado ao carrinho`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  renderCart();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else renderCart();
}

function renderCart() {
  const body  = $('cartBody');
  const ft    = $('cartFt');
  const badge = $('cartBadge');
  const count = $('cartCount');
  const total = $('cartTotal');

  const totalCount = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

  badge.textContent = totalCount;
  count.textContent = totalCount;

  if (!cart.length) {
    body.innerHTML = '<p class="cart-empty-msg">Seu carrinho aguarda na escuridão…</p>';
    ft.style.display = 'none';
    return;
  }

  body.innerHTML = cart.map(item => `
    <div class="cart-line">
      <img src="${item.image}" alt="${item.name}" loading="lazy"/>
      <div class="cart-line-info">
        <p class="cart-line-name">${item.name}</p>
        <p class="cart-line-price">R$ ${item.price}</p>
        <div class="cart-qty">
          <button class="qty-btn" data-dec="${item.id}">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" data-inc="${item.id}">+</button>
        </div>
      </div>
      <button class="cart-line-remove" data-rem="${item.id}" aria-label="Remover">✕</button>
    </div>
  `).join('');

  body.querySelectorAll('[data-dec]').forEach(b => b.addEventListener('click', () => changeQty(b.dataset.dec, -1)));
  body.querySelectorAll('[data-inc]').forEach(b => b.addEventListener('click', () => changeQty(b.dataset.inc, +1)));
  body.querySelectorAll('[data-rem]').forEach(b => b.addEventListener('click', () => removeFromCart(b.dataset.rem)));

  total.textContent = `R$ ${totalPrice.toLocaleString('pt-BR')}`;
  ft.style.display = 'block';
}

/* toggle cart sidebar */
$('cartToggle').addEventListener('click', () => {
  $('cartSidebar').classList.add('open');
  $('cartOverlay').classList.add('open');
});
$('cartClose').addEventListener('click', closeCart);
$('cartOverlay').addEventListener('click', closeCart);
function closeCart() {
  $('cartSidebar').classList.remove('open');
  $('cartOverlay').classList.remove('open');
}

/* checkout */
/* ══ CHECKOUT ══ */

$('checkoutBtn').addEventListener('click', () => {
  $('checkoutOverlay').classList.add('open');
});

$('checkoutClose').addEventListener('click', () => {
  $('checkoutOverlay').classList.remove('open');
});

$('checkoutOverlay').addEventListener('click', e => {
  if (e.target === $('checkoutOverlay')) {
    $('checkoutOverlay').classList.remove('open');
  }
});

$('checkoutForm').addEventListener('submit', e => {
  e.preventDefault();

  const nome = $('checkoutName').value.trim();
  const email = $('checkoutEmail').value.trim();
  const telefone = $('checkoutPhone').value.trim();
  const cep = $('checkoutCep').value.trim();
  const endereco = $('checkoutAddress').value.trim();
  const pagamento = $('checkoutPayment').value;

  $('checkoutError').textContent = '';
  $('checkoutSuccess').textContent = '';

  // Nome: somente letras
  if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) {
    $('checkoutError').textContent =
      'O nome deve conter apenas letras e espaços.';
    return;
  }

  // E-mail
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    $('checkoutError').textContent =
      'Digite um endereço de e-mail válido.';
    return;
  }

  // Telefone: 10 ou 11 números
  const telefoneNumeros = telefone.replace(/\D/g, '');

  if (telefoneNumeros.length < 10 || telefoneNumeros.length > 11) {
    $('checkoutError').textContent =
      'Digite um telefone válido com 10 ou 11 números.';
    return;
  }

  // CEP: exatamente 8 números
  const cepNumeros = cep.replace(/\D/g, '');

  if (cepNumeros.length !== 8) {
    $('checkoutError').textContent =
      'O CEP deve possuir exatamente 8 números.';
    return;
  }

  // Endereço
  if (endereco.length < 5) {
    $('checkoutError').textContent =
      'Digite um endereço completo.';
    return;
  }

  // Forma de pagamento
  if (!pagamento) {
    $('checkoutError').textContent =
      'Selecione uma forma de pagamento.';
    return;
  }

  $('checkoutSuccess').textContent =
    'Pedido realizado com sucesso! Obrigado por comprar na Blood Rose.';

  $('checkoutForm').reset();

  setTimeout(() => {
    $('checkoutOverlay').classList.remove('open');
    closeCart();
    $('checkoutSuccess').textContent = '';
  }, 2500);
});

// NOME COMPLETO
$('checkoutName').addEventListener('input', function () {
  const nome = this.value;

  if (/[^A-Za-zÀ-ÿ\s]/.test(nome)) {
    $('nameError').textContent =
      '⚠️ O nome deve conter apenas letras.';
  } else if (nome.trim().length > 0 && nome.trim().length < 3) {
    $('nameError').textContent =
      '⚠️ Digite seu nome completo.';
  } else {
    $('nameError').textContent = '';
  }
});


// E-MAIL
$('checkoutEmail').addEventListener('input', function () {
  const email = this.value;

  if (email.length > 0 &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    $('emailError').textContent =
      '⚠️ Digite um e-mail válido.';
  } else {
    $('emailError').textContent = '';
  }
});


// TELEFONE
$('checkoutPhone').addEventListener('input', function () {
  const telefone = this.value;

  // Verifica se existem letras
  if (/[A-Za-zÀ-ÿ]/.test(telefone)) {
    $('phoneError').textContent =
      '⚠️ O telefone deve conter apenas números.';
    return;
  }

  // Verifica a quantidade de números
  const numeros = telefone.replace(/\D/g, '');

  if (numeros.length > 0 && numeros.length < 10) {
    $('phoneError').textContent =
      '⚠️ O telefone deve ter 10 ou 11 números.';
  } else {
    $('phoneError').textContent = '';
  }
});


// CEP
$('checkoutCep').addEventListener('input', function () {
  const cep = this.value;

  // Verifica se existem letras
  if (/[A-Za-zÀ-ÿ]/.test(cep)) {
    $('cepError').textContent =
      '⚠️ O CEP deve conter apenas números.';
    return;
  }

  // Verifica a quantidade de números
  const numeros = cep.replace(/\D/g, '');

  if (numeros.length > 0 && numeros.length < 8) {
    $('cepError').textContent =
      '⚠️ O CEP deve ter 8 números.';
  } else {
    $('cepError').textContent = '';
  }
});


// ENDEREÇO
$('checkoutAddress').addEventListener('input', function () {
  const endereco = this.value;

  if (endereco.trim().length > 0 &&
      endereco.trim().length < 5) {
    $('addressError').textContent =
      '⚠️ Digite um endereço válido.';
  } else {
    $('addressError').textContent = '';
  }
});


// FORMA DE PAGAMENTO
$('checkoutPayment').addEventListener('change', function () {
  if (this.value === '') {
    $('paymentError').textContent =
      '⚠️ Selecione uma forma de pagamento.';
  } else {
    $('paymentError').textContent = '';
  }
});

/* ════════════════
   WISHLIST
════════════════ */
function toggleWishlist(id) {
  const productId = String(id);
  const idx = wishlist.findIndex(item => String(item) === productId);
  if (idx === -1) {
    wishlist.push(productId);
    showToast('Peça adicionada aos favoritos ♥');
  } else {
    wishlist.splice(idx, 1);
  }
  localStorage.setItem('bloodRoseFavoritos', JSON.stringify(wishlist));
  renderProducts();
  renderFavorites();
}

/* ════════════════
   MODAL
════════════════ */
$('clearFavorites').addEventListener('click', () => {
  if (!wishlist.length) return;
  wishlist = [];
  localStorage.setItem('bloodRoseFavoritos', JSON.stringify(wishlist));
  renderProducts();
  renderFavorites();
  showToast('Todos os favoritos foram removidos');
});

function openModal(p) {
  const inner = $('modalInner');
  inner.innerHTML = `
    <img class="modal-img" src="${p.image}" alt="${p.name}"/>
    <div class="modal-info">
      <p class="modal-cat">${p.category}</p>
      <h2 class="modal-name font-heading">${p.name}</h2>
      <p class="modal-price">R$ ${p.price}</p>
      ${p.oldPrice ? `<p class="modal-price-old">R$ ${p.oldPrice}</p>` : '<div style="margin-bottom:1.5rem"></div>'}
      <p class="modal-desc">${p.desc}</p>
      <div class="modal-sizes">
        ${SIZES.map(s => `<button class="size-btn font-heading">${s}</button>`).join('')}
      </div>
      <button class="btn-primary" style="width:100%;margin-bottom:0.75rem" data-modal-add="${p.id}">
        Adicionar ao Carrinho
      </button>
      <button class="btn-ghost" style="width:100%" data-modal-wish="${p.id}">
        ${wishlistHas(p.id) ? '♥ Nos Favoritos' : '♡ Adicionar aos Favoritos'}
      </button>
    </div>
  `;

  /* size selection */
  inner.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      inner.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  inner.querySelector('[data-modal-add]').addEventListener('click', () => {
    addToCart(p.id);
    closeModal();
  });

  inner.querySelector('[data-modal-wish]').addEventListener('click', () => {
    toggleWishlist(p.id);
    closeModal();
  });

  $('modalOverlay').classList.add('open');
}

$('modalClose').addEventListener('click', closeModal);
$('modalOverlay').addEventListener('click', e => {
  if (e.target === $('modalOverlay')) closeModal();
});
function closeModal() {
  $('modalOverlay').classList.remove('open');
}

/* ════════════════
   TOAST
════════════════ */
let toastTimer;
function showToast(msg) {
  clearTimeout(toastTimer);
  $('toastMsg').textContent = msg;
  $('toast').classList.add('show');
  toastTimer = setTimeout(() => $('toast').classList.remove('show'), 2800);
}

/* ════════════════
   INTERSECTION OBSERVER (fade in)
════════════════ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.cat-card, .footer-col').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  observer.observe(el);
});

/* ════════════════
   INIT
════════════════ */
(async function init() {
  await loadProducts();
  renderProducts();
  renderFavorites();
  renderCart();
})();
// BARRA DE CARREGAMENTO
let progresso = 0;

const loadingProgress = document.getElementById('loadingProgress');
const loadingScreen = document.getElementById('loadingScreen');

const carregamento = setInterval(() => {
  progresso += 5;

  if (progresso >= 100) {
    progresso = 100;
    clearInterval(carregamento);

    setTimeout(() => {
      loadingScreen.classList.add('hidden');
    }, 300);
  }

  loadingProgress.style.width = progresso + '%';
}, 50);
