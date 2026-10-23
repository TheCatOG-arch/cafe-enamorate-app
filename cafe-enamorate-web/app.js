// 1. SLIDES DEL HERO (01/03, 02/03, 03/03)
const heroSlides = [
  {
    num: "01 / 03",
    badge: "Cosecha Especial de Chanchamayo",
    title: "EL MEJOR CAFÉ Y FRAPPUCCINOS DE PICHANAKI",
    desc: "Granos seleccionados de nuestra Selva Central, leche cremosa y recetas artesanales que puedes personalizar a tu gusto.",
    cta: "Personalizar Frappuccino",
    productId: 1,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80"
  },
  {
    num: "02 / 03",
    badge: "Recién salidos de plancha",
    title: "WAFFLES BELGAS CON FRUTAS Y NUTELLA",
    desc: "Crujientes por fuera y suaves por dentro, coronados con fresas, plátano, helado artesanal y fudge casero.",
    cta: "Pedir Waffle Belga",
    productId: 2,
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=900&q=80"
  },
  {
    num: "03 / 03",
    badge: "Tardes & Noches en Café Enamórate",
    title: "SÁNGUCHES GOURMET, ALITAS Y MOCKTAILS",
    desc: "El punto de encuentro favorito en Pichanaki. Pide por delivery con Yape o reserva tu mesa VIP sin costo.",
    cta: "Ver Club Sandwich",
    productId: 6,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80"
  }
];

// 2. LAS 12 CATEGORÍAS (Cuadrícula 2x6)
const categoriesData = [
  { name: "Frappuccinos", count: "Especialidad", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=300&q=80" },
  { name: "Cafés Calientes", count: "Grano Local", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=300&q=80" },
  { name: "Iced Coffee", count: "Refrescantes", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=300&q=80" },
  { name: "Waffles & Postres", count: "Recién hechos", img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=300&q=80" },
  { name: "Sánguches & Salados", count: "Artesanales", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=300&q=80" },
  { name: "Tortas & Cheesecakes", count: "Repostería", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=300&q=80" },
  { name: "Jugos de la Selva", count: "100% Fruta", img: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=300&q=80" },
  { name: "Mocktails & Sodas", count: "Sin Alcohol", img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=300&q=80" },
  { name: "Desayunos Pichanaki", count: "Desde 8 AM", img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=300&q=80" },
  { name: "Alitas & Snacks", count: "Para compartir", img: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=300&q=80" },
  { name: "Combos Dúo", count: "Ahorro Parejas", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=300&q=80" },
  { name: "Café en Grano", count: "Para llevar", img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=300&q=80" }
];

// 3. CATÁLOGO AMPLIADO DE PRODUCTOS (12 Categorías Cubiertas)
const products = [
  {
    id: 1,
    name: "Frappuccino Enamórate (Oreo & Fudge)",
    category: "Frappuccinos",
    size: "16 oz • 470 ml",
    price: 15.00,
    featuredBento: true,
    desc: "Base de espresso doble de Pichanaki, galleta Oreo triturada, crema chantilly y fudge artesanal.",
    img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Waffle Belga Especial con Nutella y Fresas",
    category: "Waffles & Postres",
    size: "320 g",
    price: 18.00,
    featuredBento: true,
    desc: "Waffle dorado al momento con Nutella original, fresas frescas, plátano y bola de helado de vainilla.",
    img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Cappuccino Artesanal Selva Central",
    category: "Cafés Calientes",
    size: "10 oz • 300 ml",
    price: 10.00,
    featuredBento: true,
    desc: "Espresso 100% arábica de altura con leche texturizada sedosa y toque de cacao orgánico.",
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Cheesecake de Maracuyá Amazónico",
    category: "Tortas & Cheesecakes",
    size: "180 g",
    price: 13.00,
    featuredBento: true,
    desc: "Base crocante de galleta con crema de queso suave y reducción natural de maracuyá de la zona.",
    img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Iced Caramel Macchiato",
    category: "Iced Coffee",
    size: "16 oz • 470 ml",
    price: 14.00,
    featuredBento: false,
    desc: "Capas de leche fría, vainilla, hielo, shot de espresso intenso y salsa de caramelo.",
    img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Club Sandwich Enamórate + Papas Nativas",
    category: "Sánguches & Salados",
    size: "420 g",
    price: 20.00,
    featuredBento: false,
    desc: "Tres capas de pan artesanal con pollo deshilachado, tocino ahumado, queso edam, huevo y palta.",
    img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Alitas BBQ al Café (6 piezas + Papas)",
    category: "Alitas & Snacks",
    size: "380 g",
    price: 22.00,
    featuredBento: false,
    desc: "Alitas crujientes bañadas en nuestra salsa secreta BBQ con reducción de café de Pichanaki.",
    img: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Soda Italiana de Frutos Rojos & Menta",
    category: "Mocktails & Sodas",
    size: "16 oz • 470 ml",
    price: 12.00,
    featuredBento: false,
    desc: "Bebida refrescante gasificada con jarabe artesanal de frutos del bosque y hojas de hierbabuena.",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    name: "Combo Cita Para Dos (2 Frappuccinos + 1 Waffle)",
    category: "Combos Dúo",
    size: "Para 2 personas",
    price: 42.00,
    featuredBento: false,
    desc: "Dos Frappuccinos de 16 oz a elección más un Waffle Belga completo para compartir en pareja.",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    name: "Bolsa de Café Tostado Especialidad (250g)",
    category: "Café en Grano",
    size: "250 g • Grano o Molido",
    price: 25.00,
    featuredBento: false,
    desc: "Café 100% arábica de fincas de Pichanaki (85 puntos SCA), notas a chocolate, panela y cítricos.",
    img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    name: "Jugo Tropical Selva Mía (Maracuyá, Mango y Piña)",
    category: "Jugos de la Selva",
    size: "16 oz • 470 ml",
    price: 11.00,
    featuredBento: false,
    desc: "Combinación natural de frutas frescas cosechadas en Chanchamayo sin azúcar refinada añadida.",
    img: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    name: "Desayuno Pichanaki (Tamalito + Pan con Chicharrón + Café)",
    category: "Desayunos Pichanaki",
    size: "Combo Completo",
    price: 21.00,
    featuredBento: false,
    desc: "Sánguche de chicharrón crocante con camote, salsa criolla y una taza de café pasado de altura.",
    img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 13,
    name: "Frappuccino Mocca & Avellanas",
    category: "Frappuccinos",
    size: "16 oz • 470 ml",
    price: 16.00,
    featuredBento: false,
    desc: "Mezcla cremosa de café espresso, cacao peruano, jarabe de avellanas tostadas y crema batida.",
    img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    name: "Torta Húmeda de Chocolate al 70% Cacao",
    category: "Tortas & Cheesecakes",
    size: "200 g",
    price: 14.00,
    featuredBento: false,
    desc: "Bizcocho húmedo elaborado con cacao orgánico de la zona, relleno de manjar y ganache oscuro.",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
  }
];

// 4. PREGUNTAS FRECUENTES POR CATEGORÍA INTERACTIVA
const faqsData = {
  "Delivery y Envíos": [
    {
      q: "¿Cuánto demora el delivery en Pichanaki y cuánto cuesta?",
      a: "Entregamos en todo el centro de Pichanaki en 20 a 30 minutos (S/ 3.00) y en zonas como Sangani o Santa Rosa en 30 a 40 minutos (S/ 5.00)."
    },
    {
      q: "¿Cómo llegan las bebidas frías y los waffles en el delivery?",
      a: "Usamos envases térmicos sellados antiderrame y empaques ventilados para que los waffles lleguen crujientes y los frappuccinos con su textura ideal."
    }
  ],
  "Yape / Pagos": [
    {
      q: "¿Cómo pago con Yape o Plin desde esta Web App?",
      a: "Al abrir tu carrito verás nuestro código QR oficial y el botón para copiar el número (964 521 890). Realizas el Yape y adjuntas la captura al confirmar por WhatsApp."
    },
    {
      q: "¿Aceptan tarjetas de crédito o débito en delivery?",
      a: "Sí, si eliges la opción 'Tarjeta POS' en tu carrito, nuestro motorizado llevará el POS inalámbrico hasta tu puerta."
    }
  ],
  "Reservas y Cumpleaños": [
    {
      q: "¿Tiene algún costo reservar una mesa en Café Enamórate?",
      a: "No, la reserva estándar es totalmente gratuita desde el botón 'Reservar Mesa'. Solo pedimos puntualidad (15 minutos de tolerancia)."
    },
    {
      q: "¿Pueden decorar la mesa para una sorpresa de cumpleaños o aniversario?",
      a: "¡Por supuesto! En el formulario de reserva indícanos que es una sorpresa y coordinamos globos, cartel personalizado y postre con vela."
    }
  ],
  "Café en Grano": [
    {
      q: "¿De qué fincas proviene el café que sirven en el local?",
      a: "Trabajamos con lotes selectos de caficultores de Pichanaki y el valle del Perené cultivados entre 1,400 y 1,700 m.s.n.m."
    }
  ]
};

// ESTADO GLOBAL DE LA APP (con persistencia en localStorage)
let currentSlide = 0;
let selectedCategory = "Todos";
let currentSort = "featured";
let activeFaqTab = "Delivery y Envíos";
let selectedPayment = "Yape / Plin";
let discountApplied = false;

let cart = JSON.parse(localStorage.getItem("enamorate_cart") || "[]");
let favorites = JSON.parse(localStorage.getItem("enamorate_favs") || "[]");

// Variables temporales del modal de personalización
let currentCustomProduct = null;

// ================= SISTEMA DE NOTIFICACIONES TOAST =================
function showToast(message, icon = "check-circle-2") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "bg-[#18181c] border border-brand-pink/50 text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 text-xs font-bold animate-slide-up pointer-events-auto";
  toast.innerHTML = `
    <i data-lucide="${icon}" class="w-4 h-4 text-brand-pink shrink-0"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  lucide.createIcons();
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// ================= HERO SLIDER =================
function renderHero() {
  const slide = heroSlides[currentSlide];
  const container = document.getElementById("heroSlideContent");

  container.innerHTML = `
    <div class="lg:col-span-6 space-y-5 z-10 text-left">
      <div class="flex items-center gap-3">
        <span class="text-xs font-extrabold tracking-widest text-zinc-300 bg-white/10 px-3 py-1 rounded-full border border-white/15">${slide.num}</span>
        <span class="text-xs font-bold text-amber-400 uppercase tracking-wider">${slide.badge}</span>
      </div>
      <h1 class="text-3xl sm:text-5xl font-extrabold font-display leading-[1.08] tracking-tight text-white">
        ${slide.title}
      </h1>
      <p class="text-sm sm:text-base text-zinc-300 max-w-xl leading-relaxed">
        ${slide.desc}
      </p>
      <div class="pt-2 flex flex-wrap items-center gap-3">
        <button onclick="openCustomizer(${slide.productId})" class="bg-white text-black hover:bg-brand-pink hover:text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-full inline-flex items-center gap-2 transition shadow-xl">
          <span>${slide.cta}</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
        <button onclick="toggleReservationModal()" class="bg-white/[0.07] hover:bg-white/[0.15] text-white border border-white/15 font-bold text-xs sm:text-sm px-5 py-3.5 rounded-full inline-flex items-center gap-2 transition">
          <i data-lucide="calendar-heart" class="w-4 h-4 text-amber-400"></i>
          <span>Reservar Mesa</span>
        </button>
      </div>
    </div>

    <div class="lg:col-span-6 flex justify-center relative">
      <div onclick="openCustomizer(${slide.productId})" class="cursor-pointer w-64 h-64 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-brand-pink/25 group">
        <img src="${slide.image}" alt="${slide.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
      </div>
    </div>
  `;

  // Renderizar puntitos inferiores
  const dotsContainer = document.getElementById("heroDots");
  dotsContainer.innerHTML = heroSlides.map((_, idx) => `
    <button onclick="goToSlide(${idx})" class="h-2 rounded-full transition-all ${
      currentSlide === idx ? "w-8 bg-brand-pink" : "w-2 bg-white/30 hover:bg-white/60"
    }"></button>
  `).join("");

  lucide.createIcons();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % heroSlides.length;
  renderHero();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
  renderHero();
}

function goToSlide(idx) {
  currentSlide = idx;
  renderHero();
}

// ================= TARJETA DE PRODUCTO CON FAVORITOS Y CUSTOMIZER =================
function createProductCardHTML(item) {
  const isFav = favorites.includes(item.id);
  return `
    <div class="bg-[#121215] border border-white/[0.08] rounded-[24px] p-3.5 flex flex-col justify-between card-glow hover:border-white/20 transition group">
      <div>
        <div class="relative h-48 rounded-2xl overflow-hidden bg-zinc-900">
          <img onclick="openCustomizer(${item.id})" src="${item.img}" alt="${item.name}" class="cursor-pointer w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          <span class="absolute bottom-2.5 left-2.5 bg-black/75 backdrop-blur-md text-[11px] font-bold text-zinc-200 px-2.5 py-1 rounded-full">
            ${item.size}
          </span>
          <button onclick="toggleFavorite(${item.id})" class="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center border border-white/10 hover:scale-110 transition">
            <i data-lucide="heart" class="w-4 h-4 ${isFav ? 'text-brand-pink fill-current' : 'text-white'}"></i>
          </button>
        </div>
        <div class="mt-3.5 px-1">
          <span class="text-[10px] font-bold uppercase tracking-wider text-amber-400">${item.category}</span>
          <h4 onclick="openCustomizer(${item.id})" class="cursor-pointer font-extrabold text-sm sm:text-base text-white line-clamp-1 hover:text-brand-pink transition">${item.name}</h4>
          <p class="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">${item.desc}</p>
        </div>
      </div>

      <div class="mt-4 pt-3 border-t border-white/[0.06] px-1 flex items-center justify-between gap-2">
        <div>
          <span class="text-[10px] uppercase text-zinc-500 block font-semibold">Precio</span>
          <span class="text-base sm:text-lg font-extrabold text-white">S/ ${item.price.toFixed(2)}</span>
        </div>
        <div class="flex items-center gap-1.5">
          <button onclick="openCustomizer(${item.id})" class="bg-white/[0.07] hover:bg-white/[0.16] text-zinc-200 text-xs font-bold px-3 py-2.5 rounded-full transition" title="Personalizar opciones">
            Personalizar
          </button>
          <button onclick="quickAddToCart(${item.id})" class="bg-brand-pink hover:bg-rose-600 text-white w-9 h-9 rounded-full flex items-center justify-center transition shadow-md shadow-brand-pink/30" title="Agregar rápido">
            <i data-lucide="plus" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

// ================= FAVORITOS =================
function toggleFavorite(productId) {
  if (favorites.includes(productId)) {
    favorites = favorites.filter(id => id !== productId);
    showToast("Quitado de tus favoritos", "heart");
  } else {
    favorites.push(productId);
    showToast("Guardado en tus favoritos ❤️", "heart");
  }
  localStorage.setItem("enamorate_favs", JSON.stringify(favorites));
  document.getElementById("favCountBadge").textContent = favorites.length;
  renderBentoProducts();
  filterCategory(selectedCategory);
}

function filterFavorites() {
  if (favorites.length === 0) {
    showToast("Aún no tienes favoritos. Toca el corazón ♥ en cualquier producto.", "info");
    return;
  }
  selectedCategory = "Favoritos";
  document.getElementById("activeCategoryTitle").textContent = "TUS PRODUCTOS FAVORITOS ❤️";
  const favProducts = products.filter(p => favorites.includes(p.id));
  document.getElementById("fullCatalogGrid").innerHTML = favProducts.map(createProductCardHTML).join("");
  document.getElementById("catalogo-completo").scrollIntoView({ behavior: "smooth" });
  lucide.createIcons();
}

// ================= MODAL DE PERSONALIZACIÓN (BARISTA CUSTOMIZER) =================
function openCustomizer(productId) {
  currentCustomProduct = products.find(p => p.id === productId);
  if (!currentCustomProduct) return;

  const modal = document.getElementById("customizerModal");
  const content = document.getElementById("customizerContent");

  content.innerHTML = `
    <div class="relative h-48 sm:h-56 w-full shrink-0">
      <img src="${currentCustomProduct.img}" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-[#121215] via-black/40 to-transparent"></div>
      <button onclick="closeCustomizer()" class="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-brand-pink transition">
        <i data-lucide="x" class="w-4 h-4"></i>
      </button>
      <div class="absolute bottom-3 left-5 right-5">
        <span class="text-[10px] font-extrabold uppercase tracking-widest bg-brand-pink text-white px-2.5 py-0.5 rounded-full">${currentCustomProduct.category}</span>
        <h3 class="text-xl font-extrabold font-display text-white mt-1">${currentCustomProduct.name}</h3>
      </div>
    </div>

    <div class="p-5 overflow-y-auto space-y-4 text-xs flex-1">
      <p class="text-zinc-400 leading-relaxed">${currentCustomProduct.desc}</p>

      <!-- Tamaño / Porción -->
      <div>
        <label class="font-extrabold text-white uppercase tracking-wider block mb-2">1. Elige el tamaño / presentación:</label>
        <div class="grid grid-cols-3 gap-2">
          <label class="cursor-pointer border border-white/15 rounded-xl p-2.5 flex flex-col items-center text-center has-[:checked]:border-brand-pink has-[:checked]:bg-brand-pink/15">
            <input type="radio" name="custSize" value="Regular" data-extra="0" checked onchange="recalcCustomPrice()" class="hidden" />
            <span class="font-bold text-white">Regular</span>
            <span class="text-[10px] text-zinc-400">+ S/ 0.00</span>
          </label>
          <label class="cursor-pointer border border-white/15 rounded-xl p-2.5 flex flex-col items-center text-center has-[:checked]:border-brand-pink has-[:checked]:bg-brand-pink/15">
            <input type="radio" name="custSize" value="Grande" data-extra="3" onchange="recalcCustomPrice()" class="hidden" />
            <span class="font-bold text-white">Grande</span>
            <span class="text-[10px] text-amber-400">+ S/ 3.00</span>
          </label>
          <label class="cursor-pointer border border-white/15 rounded-xl p-2.5 flex flex-col items-center text-center has-[:checked]:border-brand-pink has-[:checked]:bg-brand-pink/15">
            <input type="radio" name="custSize" value="Enamórate XL" data-extra="5" onchange="recalcCustomPrice()" class="hidden" />
            <span class="font-bold text-white">Enamórate XL</span>
            <span class="text-[10px] text-amber-400">+ S/ 5.00</span>
          </label>
        </div>
      </div>

      <!-- Adicionales / Toppings -->
      <div>
        <label class="font-extrabold text-white uppercase tracking-wider block mb-2">2. Agregar Toppings o Extras (Opcional):</label>
        <div class="grid grid-cols-2 gap-2">
          <label class="cursor-pointer border border-white/10 rounded-xl p-2.5 flex items-center justify-between has-[:checked]:border-amber-400 has-[:checked]:bg-amber-400/10">
            <div class="flex items-center gap-2">
              <input type="checkbox" name="custExtra" value="Shot Espresso Pichanaki" data-extra="3" onchange="recalcCustomPrice()" class="accent-brand-pink" />
              <span class="text-white font-semibold">Shot Café Extra</span>
            </div>
            <span class="text-amber-400 font-bold">+S/ 3</span>
          </label>
          <label class="cursor-pointer border border-white/10 rounded-xl p-2.5 flex items-center justify-between has-[:checked]:border-amber-400 has-[:checked]:bg-amber-400/10">
            <div class="flex items-center gap-2">
              <input type="checkbox" name="custExtra" value="Bola de Helado" data-extra="3.5" onchange="recalcCustomPrice()" class="accent-brand-pink" />
              <span class="text-white font-semibold">Bola de Helado</span>
            </div>
            <span class="text-amber-400 font-bold">+S/ 3.5</span>
          </label>
          <label class="cursor-pointer border border-white/10 rounded-xl p-2.5 flex items-center justify-between has-[:checked]:border-amber-400 has-[:checked]:bg-amber-400/10">
            <div class="flex items-center gap-2">
              <input type="checkbox" name="custExtra" value="Leche de Almendras" data-extra="2.5" onchange="recalcCustomPrice()" class="accent-brand-pink" />
              <span class="text-white font-semibold">Leche Almendras</span>
            </div>
            <span class="text-amber-400 font-bold">+S/ 2.5</span>
          </label>
          <label class="cursor-pointer border border-white/10 rounded-xl p-2.5 flex items-center justify-between has-[:checked]:border-amber-400 has-[:checked]:bg-amber-400/10">
            <div class="flex items-center gap-2">
              <input type="checkbox" name="custExtra" value="Extra Nutella / Fudge" data-extra="3" onchange="recalcCustomPrice()" class="accent-brand-pink" />
              <span class="text-white font-semibold">Extra Nutella</span>
            </div>
            <span class="text-amber-400 font-bold">+S/ 3</span>
          </label>
        </div>
      </div>

      <!-- Nota especial -->
      <div>
        <label class="font-extrabold text-white uppercase tracking-wider block mb-1">3. Nota para Barista / Cocina:</label>
        <input id="custNote" type="text" placeholder="Ej. Poco hielo, bajo en azúcar, con nombre en el vaso..." class="w-full bg-black/50 border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none focus:border-brand-pink" />
      </div>
    </div>

    <div class="p-4 border-t border-white/10 bg-[#0d0d10] flex items-center justify-between gap-4">
      <div>
        <span class="text-[10px] text-zinc-400 uppercase block font-bold">Total personalizado</span>
        <span id="customLivePrice" class="text-xl font-extrabold text-amber-400">S/ ${currentCustomProduct.price.toFixed(2)}</span>
      </div>
      <button onclick="confirmCustomAdd()" class="flex-1 bg-gradient-to-r from-brand-pink to-orange-500 hover:opacity-95 text-white font-extrabold py-3.5 px-6 rounded-full text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-pink/30 transition">
        <i data-lucide="shopping-bag" class="w-4 h-4"></i>
        <span>Agregar al Pedido</span>
      </button>
    </div>
  `;

  modal.classList.remove("hidden");
  lucide.createIcons();
}

function recalcCustomPrice() {
  if (!currentCustomProduct) return;
  let total = currentCustomProduct.price;
  const sizeInput = document.querySelector('input[name="custSize"]:checked');
  if (sizeInput) total += parseFloat(sizeInput.dataset.extra || 0);

  document.querySelectorAll('input[name="custExtra"]:checked').forEach(chk => {
    total += parseFloat(chk.dataset.extra || 0);
  });

  document.getElementById("customLivePrice").textContent = `S/ ${total.toFixed(2)}`;
  return total;
}

function confirmCustomAdd() {
  if (!currentCustomProduct) return;
  const finalPrice = recalcCustomPrice();
  const sizeVal = document.querySelector('input[name="custSize"]:checked')?.value || "Regular";
  const extras = Array.from(document.querySelectorAll('input[name="custExtra"]:checked')).map(c => c.value);
  const note = document.getElementById("custNote").value.trim();

  const customDetails = [
    `Tamaño: ${sizeVal}`,
    ...(extras.length ? [`Extras: ${extras.join(", ")}`] : []),
    ...(note ? [`Nota: ${note}`] : [])
  ].join(" | ");

  const cartItemKey = `${currentCustomProduct.id}-${customDetails}`;
  const existing = cart.find(i => i.cartKey === cartItemKey);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      ...currentCustomProduct,
      cartKey: cartItemKey,
      price: finalPrice,
      customDetails,
      qty: 1
    });
  }

  saveAndRefreshCart();
  closeCustomizer();
  showToast(`${currentCustomProduct.name} agregado al pedido ☕`);
}

function closeCustomizer() {
  document.getElementById("customizerModal").classList.add("hidden");
}

// ================= RENDERIZADO DE SECCIONES =================
function renderBentoProducts() {
  const bentoGrid = document.getElementById("bentoProductsGrid");
  const featured = products.filter(p => p.featuredBento).slice(0, 4);
  bentoGrid.innerHTML = featured.map(createProductCardHTML).join("");
  lucide.createIcons();
}

function renderCategories() {
  const grid = document.getElementById("categoriesGrid");
  grid.innerHTML = categoriesData.map(cat => `
    <button onclick="filterCategory('${cat.name}'); document.getElementById('catalogo-completo').scrollIntoView({behavior: 'smooth'})" class="bg-[#121215] hover:bg-[#1a1a20] border border-white/[0.08] hover:border-brand-pink/50 rounded-2xl p-3.5 text-left h-36 flex flex-col justify-between relative overflow-hidden group transition">
      <div class="z-10">
        <span class="font-extrabold text-xs sm:text-sm text-white block leading-snug group-hover:text-amber-400 transition">${cat.name}</span>
        <span class="text-[10px] text-zinc-500 font-semibold">${cat.count}</span>
      </div>
      <img src="${cat.img}" alt="${cat.name}" class="w-20 h-20 object-cover rounded-xl self-end group-hover:scale-110 transition duration-500 shadow-lg" />
    </button>
  `).join("");
}

function handleSortChange() {
  currentSort = document.getElementById("sortSelect").value;
  filterCategory(selectedCategory);
}

function filterCategory(catName, searchQuery = "") {
  selectedCategory = catName;
  const titleEl = document.getElementById("activeCategoryTitle");
  titleEl.textContent = catName === "Todos" ? "CARTA COMPLETA • CAFÉ ENAMÓRATE" : `CATEGORÍA: ${catName.toUpperCase()}`;

  let filtered = products.filter(p => {
    const matchesCat = catName === "Todos" || p.category === catName;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (currentSort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  if (currentSort === "price-desc") filtered.sort((a, b) => b.price - a.price);

  const catalogGrid = document.getElementById("fullCatalogGrid");
  if (filtered.length === 0) {
    catalogGrid.innerHTML = `<p class="text-sm text-zinc-400 col-span-full py-8 text-center">No encontramos productos con ese filtro. Prueba con otra categoría.</p>`;
  } else {
    catalogGrid.innerHTML = filtered.map(createProductCardHTML).join("");
  }

  renderCategoryPills();
  lucide.createIcons();
}

function renderCategoryPills() {
  const pillsContainer = document.getElementById("categoryPills");
  const allCats = ["Todos", ...categoriesData.map(c => c.name)];
  pillsContainer.innerHTML = allCats.map(cat => `
    <button onclick="filterCategory('${cat}')" class="text-xs font-bold px-3.5 py-1.5 rounded-full shrink-0 transition ${
      selectedCategory === cat ? "bg-brand-pink text-white" : "bg-white/[0.06] text-zinc-300 hover:bg-white/15"
    }">
      ${cat}
    </button>
  `).join("");
}

// ================= FAQ INTERACTIVO POR PESTAÑAS =================
function renderFAQ() {
  const tabsContainer = document.getElementById("faqTabs");
  const questionsContainer = document.getElementById("faqContainer");
  const tabNames = Object.keys(faqsData);

  tabsContainer.innerHTML = tabNames.map(tab => `
    <button onclick="switchFaqTab('${tab}')" class="text-xs font-bold px-4 py-2 rounded-full transition ${
      activeFaqTab === tab ? "bg-white text-black" : "bg-white/[0.06] text-zinc-300 hover:bg-white/15"
    }">
      ${tab}
    </button>
  `).join("");

  const currentQuestions = faqsData[activeFaqTab] || [];
  questionsContainer.innerHTML = currentQuestions.map((item, idx) => `
    <div class="py-4">
      <button onclick="toggleFaqItem(${idx})" class="w-full flex items-center justify-between text-left font-bold text-sm sm:text-base text-white hover:text-amber-400 transition">
        <span>${item.q}</span>
        <i data-lucide="chevron-down" class="w-4 h-4 shrink-0 text-zinc-400"></i>
      </button>
      <p id="faq-answer-${idx}" class="${idx === 0 ? '' : 'hidden'} text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed">
        ${item.a}
      </p>
    </div>
  `).join("");

  lucide.createIcons();
}

function switchFaqTab(tabName) {
  activeFaqTab = tabName;
  renderFAQ();
}

function toggleFaqItem(idx) {
  document.getElementById(`faq-answer-${idx}`).classList.toggle("hidden");
}

// ================= CARRITO, CUPONES Y YAPE QR =================
function quickAddToCart(productId) {
  const prod = products.find(p => p.id === productId);
  const cartKey = `${prod.id}-estandar`;
  const existing = cart.find(item => item.cartKey === cartKey);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...prod, cartKey, customDetails: "Estándar", qty: 1 });
  }
  saveAndRefreshCart();
  showToast(`${prod.name} agregado al carrito 🛍️`);
}

function changeQty(cartKey, delta) {
  const item = cart.find(i => i.cartKey === cartKey);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.cartKey !== cartKey);
  }
  saveAndRefreshCart();
}

function applyCoupon() {
  const code = document.getElementById("couponInput").value.trim().toUpperCase();
  if (code === "ENAMORATE10" || code === "PICHANAKI") {
    discountApplied = true;
    updateCartUI();
    showToast("¡Cupón del 10% OFF activado con éxito! 🎉", "sparkles");
  } else {
    showToast("Código no válido. Usa ENAMORATE10", "alert-circle");
  }
}

function selectPaymentMethod(method) {
  selectedPayment = method;
  const btnYape = document.getElementById("payBtnYape");
  const btnCard = document.getElementById("payBtnCard");
  const btnCash = document.getElementById("payBtnCash");
  const qrBox = document.getElementById("yapeQrBox");

  [btnYape, btnCard, btnCash].forEach(b => {
    b.className = "py-2 px-2 rounded-xl border border-white/10 bg-black/40 text-zinc-300 font-bold flex items-center justify-center gap-1";
  });

  if (method === "Yape / Plin") {
    btnYape.className = "py-2 px-2 rounded-xl border border-brand-pink bg-brand-pink/15 text-white font-bold flex items-center justify-center gap-1";
    qrBox.classList.remove("hidden");
  } else if (method === "Tarjeta POS") {
    btnCard.className = "py-2 px-2 rounded-xl border border-brand-pink bg-brand-pink/15 text-white font-bold flex items-center justify-center gap-1";
    qrBox.classList.add("hidden");
  } else {
    btnCash.className = "py-2 px-2 rounded-xl border border-brand-pink bg-brand-pink/15 text-white font-bold flex items-center justify-center gap-1";
    qrBox.classList.add("hidden");
  }
  lucide.createIcons();
}

function copyYapeNumber() {
  navigator.clipboard.writeText("964521890");
  showToast("Número Yape/Plin (964 521 890) copiado al portapapeles", "copy");
}

function saveAndRefreshCart() {
  localStorage.setItem("enamorate_cart", JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = discountApplied ? subtotal * 0.10 : 0;

  const orderSelect = document.getElementById("orderType");
  const selectedOption = orderSelect?.options[orderSelect.selectedIndex];
  const deliveryFee = subtotal > 0 ? parseFloat(selectedOption?.dataset.fee || 0) : 0;

  const finalTotal = Math.max(0, subtotal - discount + deliveryFee);

  document.getElementById("headerCartCount").textContent = totalCount;
  document.getElementById("dockCartCount").textContent = totalCount;
  document.getElementById("headerCartTotal").textContent = `S/ ${finalTotal.toFixed(2)}`;
  document.getElementById("summarySubtotal").textContent = `S/ ${subtotal.toFixed(2)}`;
  document.getElementById("summaryDelivery").textContent = `S/ ${deliveryFee.toFixed(2)}`;
  document.getElementById("drawerCartTotal").textContent = `S/ ${finalTotal.toFixed(2)}`;

  const discountRow = document.getElementById("summaryDiscountRow");
  if (discountApplied && subtotal > 0) {
    discountRow.style.display = "flex";
    document.getElementById("summaryDiscount").textContent = `- S/ ${discount.toFixed(2)}`;
  } else {
    discountRow.style.display = "none";
  }

  const container = document.getElementById("cartItemsContainer");
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="h-36 flex flex-col items-center justify-center text-center text-zinc-500 space-y-2">
        <i data-lucide="coffee" class="w-8 h-8 stroke-1"></i>
        <p class="text-xs">Tu carrito está vacío.<br/>Agrega o personaliza tus productos favoritos.</p>
      </div>
    `;
  } else {
    container.innerHTML = cart.map(item => `
      <div class="bg-white/[0.04] border border-white/10 rounded-2xl p-2.5 flex items-center justify-between gap-2.5">
        <img src="${item.img}" class="w-12 h-12 rounded-xl object-cover shrink-0" />
        <div class="flex-1 min-w-0">
          <h5 class="text-xs font-bold text-white truncate">${item.name}</h5>
          <p class="text-[10px] text-zinc-400 truncate">${item.customDetails || "Estándar"}</p>
          <span class="text-xs font-extrabold text-amber-400">S/ ${(item.price * item.qty).toFixed(2)}</span>
        </div>
        <div class="flex items-center gap-2 bg-black/50 rounded-full px-2 py-1 border border-white/10">
          <button onclick="changeQty('${item.cartKey}', -1)" class="text-zinc-300 hover:text-white text-xs font-bold px-1">-</button>
          <span class="text-xs font-extrabold">${item.qty}</span>
          <button onclick="changeQty('${item.cartKey}', 1)" class="text-zinc-300 hover:text-white text-xs font-bold px-1">+</button>
        </div>
      </div>
    `).join("");
  }
  lucide.createIcons();
}

function toggleCart() {
  document.getElementById("cartModal").classList.toggle("hidden");
}

// ================= RESERVAS DE MESA Y ENVÍO WHATSAPP =================
function toggleReservationModal() {
  document.getElementById("reservationModal").classList.toggle("hidden");
}

function sendReservationWhatsApp() {
  const name = document.getElementById("resName").value.trim() || "Cliente";
  const date = document.getElementById("resDate").value || "Hoy";
  const time = document.getElementById("resTime").value || "19:30";
  const guests = document.getElementById("resGuests").value;
  const zone = document.getElementById("resZone").value;
  const notes = document.getElementById("resNotes").value.trim() || "Reserva estándar";

  const msg =
    `¡Hola *Café Enamórate Pichanaki*! ✨☕%0AQuisiera confirmar una *RESERVA DE MESA*:%0A%0A` +
    `👤 *Nombre:* ${name}%0A` +
    `📅 *Fecha:* ${date}%0A` +
    `🕒 *Hora:* ${time}%0A` +
    `👥 *Personas:* ${guests}%0A` +
    `📍 *Zona:* ${zone}%0A` +
    `🎁 *Detalle especial:* ${notes}`;

  window.open(`https://wa.me/51964521890?text=${msg}`, "_blank");
}

function sendOrderWhatsApp() {
  if (cart.length === 0) {
    showToast("Agrega al menos un producto antes de enviar tu pedido", "alert-circle");
    return;
  }

  const name = document.getElementById("customerName").value.trim() || "Cliente";
  const orderSelect = document.getElementById("orderType");
  const modalityText = orderSelect.options[orderSelect.selectedIndex].text;
  const address = document.getElementById("customerAddress").value.trim() || "Por coordinar";

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = discountApplied ? subtotal * 0.10 : 0;
  const deliveryFee = parseFloat(orderSelect.options[orderSelect.selectedIndex].dataset.fee || 0);
  const finalTotal = Math.max(0, subtotal - discount + deliveryFee);

  const lines = cart.map(i => `• ${i.qty}x *${i.name}* [${i.customDetails}] — S/ ${(i.price * i.qty).toFixed(2)}`).join("%0A");

  const message =
    `¡Hola *Café Enamórate Pichanaki*! ☕❤️%0ANuevo pedido desde la Web App:%0A%0A` +
    `👤 *Cliente:* ${name}%0A` +
    `🛵 *Modalidad:* ${modalityText}%0A` +
    `📍 *Dirección / Mesa:* ${address}%0A` +
    `💳 *Método de Pago:* ${selectedPayment}%0A%0A` +
    `*DETALLE DEL PEDIDO:*%0A${lines}%0A%0A` +
    (discountApplied ? `🏷️ *Descuento ENAMORATE10:* -S/ ${discount.toFixed(2)}%0A` : "") +
    `🚚 *Envío:* S/ ${deliveryFee.toFixed(2)}%0A` +
    `💰 *TOTAL A PAGAR: S/ ${finalTotal.toFixed(2)}*`;

  window.open(`https://wa.me/51964521890?text=${message}`, "_blank");
}

// ================= INICIALIZACIÓN =================
document.addEventListener("DOMContentLoaded", () => {
  // Fecha de hoy por defecto en el modal de reservas
  const today = new Date().toISOString().split("T")[0];
  const dateInput = document.getElementById("resDate");
  if (dateInput) dateInput.value = today;

  document.getElementById("favCountBadge").textContent = favorites.length;

  renderHero();
  renderBentoProducts();
  renderCategories();
  filterCategory("Todos");
  renderFAQ();
  updateCartUI();

  // Buscadores en tiempo real (Desktop y Móvil)
  const handleSearch = (e) => {
    filterCategory("Todos", e.target.value);
    if (e.target.value.length === 1) {
      document.getElementById("catalogo-completo").scrollIntoView({ behavior: "smooth" });
    }
  };
  document.getElementById("searchInput").addEventListener("input", handleSearch);
  document.getElementById("mobileSearchInput").addEventListener("input", handleSearch);

  // Atajo de teclado Ctrl+K / Cmd+K para enfocar el buscador
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      document.getElementById("searchInput").focus();
    }
  });

  // Rotación automática del Hero Slider
  setInterval(nextSlide, 6500);
});