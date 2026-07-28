/**
 * STACKLY - Luxury Haute Joaillerie & Fine Jewelry
 * Standalone Interactive Website Scripts & Fallbacks
 * Created & Designed by @stacklykr
 */

// Universal SVG Icon Fallback Registry for Lucide Icons
const SVG_ICONS = {
    'sparkles': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.28 1.28L3 12l5.8 1.9a2 2 0 0 1 1.28 1.28L12 21l1.9-5.8a2 2 0 0 1 1.28-1.28L21 12l-5.8-1.9a2 2 0 0 1-1.28-1.28Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',
    'shield-check': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
    'menu': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
    'search': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
    'heart': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
    'shopping-bag': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
    'crown': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>',
    'arrow-right': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
    'chevron-right': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
    'gem': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9z"/><path d="M11 3 8 9l4 12 4-12-3-6"/><path d="M2 9h20"/></svg>',
    'award': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
    'sparkle': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.28 1.28L3 12l5.8 1.9a2 2 0 0 1 1.28 1.28L12 21l1.9-5.8a2 2 0 0 1 1.28-1.28L21 12l-5.8-1.9a2 2 0 0 1-1.28-1.28Z"/></svg>',
    'star': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#D4AF37" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    'map-pin': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    'phone': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    'mail': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    'clock': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    'quote': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h4c0 2.5-1 4-3 5.5"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h4c0 2.5-1 4-3 5.5"/></svg>',
    'instagram': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',
    'facebook': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
    'twitter': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>',
    'youtube': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>',
    'trash-2': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>'
};

function renderAllIcons() {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    } else {
        document.querySelectorAll('i[data-lucide]').forEach(el => {
            const iconName = el.getAttribute('data-lucide');
            if (SVG_ICONS[iconName]) {
                el.innerHTML = SVG_ICONS[iconName];
                const svg = el.querySelector('svg');
                if (svg) {
                    const classes = el.className;
                    svg.setAttribute('class', classes);
                }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderAllIcons();
    console.log('%c STACKLY Fine Jewelry - Created & Designed by @stacklykr ', 'background: #0B0C0E; color: #D4AF37; font-size: 12px; font-weight: bold; padding: 6px 12px; border-radius: 4px; border: 1px solid #D4AF37;');

    /* ── PRELOADER ────────────────────────────────────────────────────── */
    const preloader = document.getElementById('luxrio-preloader');
    const cancelBtn = document.getElementById('preloader-cancel');

    function dismissPreloader() {
        if (preloader) preloader.classList.add('is-hidden');
    }

    if (preloader) {
        // Auto-dismiss after 2.2 s
        setTimeout(dismissPreloader, 2200);
    }
    if (cancelBtn) {
        cancelBtn.addEventListener('click', dismissPreloader);
    }

    /* ── LUXRIO SLICE SLIDER ──────────────────────────────────────────── */
    const slides       = Array.from(document.querySelectorAll('.luxrio-slide'));
    const prevBtn      = document.getElementById('luxrioPrev');
    const nextBtn      = document.getElementById('luxrioNext');
    const counterEl    = document.getElementById('luxrioCurrentSlide');
    const TOTAL        = slides.length;
    let current        = 0;
    let isAnimating    = false;
    let autoTimer      = null;

    if (!slides.length) return; // hero not present, bail

    function padded(n) { return String(n + 1).padStart(2, '0'); }

    function goToSlide(next) {
        if (isAnimating || next === current) return;
        isAnimating = true;

        const outSlide = slides[current];
        const inSlide  = slides[next];

        // 1. Show out-slide in-place but animate it out (slice exit)
        outSlide.classList.add('is-exiting');

        // 2. After exit anim (500ms), hide out, show in
        setTimeout(() => {
            outSlide.classList.remove('is-active', 'is-exiting');
            inSlide.classList.add('is-active', 'is-entering');

            // Update counter
            current = next;
            if (counterEl) counterEl.textContent = padded(current);

            // 3. Remove entering class after enter anim finishes
            setTimeout(() => {
                inSlide.classList.remove('is-entering');
                isAnimating = false;
            }, 700);
        }, 500);
    }

    function advance(dir) {
        clearAutoAdvance();
        const next = (current + dir + TOTAL) % TOTAL;
        goToSlide(next);
        startAutoAdvance();
    }

    if (prevBtn) prevBtn.addEventListener('click', () => advance(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => advance(1));

    // Keyboard arrows
    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight') advance(1);
        if (e.key === 'ArrowLeft')  advance(-1);
    });

    // Auto-advance every 6 s
    function startAutoAdvance() {
        autoTimer = setTimeout(() => {
            const next = (current + 1) % TOTAL;
            goToSlide(next);
            startAutoAdvance();
        }, 6000);
    }
    function clearAutoAdvance() { clearTimeout(autoTimer); }

    // Start
    startAutoAdvance();
});


// Mobile Menu Drawer Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileDrawer = document.getElementById('mobileDrawer');
if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileDrawer.classList.toggle('hidden');
    });
}

// Hero Slider Controller
let currentSlide = 0;
const slides = [
    {
        title: 'Elegance Forged in <span class="gold-gradient-text italic">Pure Brilliance</span>',
        subtitle: 'Discover rare solitaire diamonds, hand-cut emeralds, and 18K solid gold creations sculpted by Paris & London master jewellers.'
    },
    {
        title: 'Sculpted in <span class="gold-gradient-text italic">18K Solid Gold</span>',
        subtitle: 'Heritage gold bangles and high necklaces crafted with conflict-free diamonds and triple-excellent cut brilliance.'
    },
    {
        title: 'Timeless <span class="gold-gradient-text italic">Solitaire Masterpieces</span>',
        subtitle: 'GIA-certified solitaire engagement rings designed to sparkle for lifetimes and generations.'
    }
];

function setHeroSlide(index) {
    currentSlide = index;
    const heroSlides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');

    heroSlides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });

    dots.forEach((dot, i) => {
        if (i === index) {
            dot.className = 'hero-dot active';
        } else {
            dot.className = 'hero-dot inactive';
        }
    });

    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');
    if (heroTitle) heroTitle.innerHTML = slides[index].title;
    if (heroSubtitle) heroSubtitle.textContent = slides[index].subtitle;
}

// Auto rotate hero slides every 6 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    setHeroSlide(currentSlide);
}, 6000);

// Filter Product Categories
function filterCategory(category) {
    const cards = document.querySelectorAll('.product-card');
    const tabs = document.querySelectorAll('.filter-tab');

    tabs.forEach(tab => {
        if (tab.dataset.filter === category) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Cart & Wishlist State Management
let cartItems = [];
let wishlistCount = 0;
let currentModalItem = null;

function addToWishlist(name) {
    wishlistCount++;
    const countEl = document.getElementById('wishlistCount');
    if (countEl) countEl.textContent = wishlistCount;
    alert(`Added "${name}" to your STACKLY Wishlist`);
}

function openQuickView(title, price, img, desc) {
    currentModalItem = { title, price, img, desc };
    const titleEl = document.getElementById('modalProductTitle');
    const priceEl = document.getElementById('modalProductPrice');
    const imgEl = document.getElementById('modalProductImage');
    const descEl = document.getElementById('modalProductDesc');

    if (titleEl) titleEl.textContent = title;
    if (priceEl) priceEl.textContent = price;
    if (imgEl) imgEl.src = img;
    if (descEl) descEl.textContent = desc;

    const modal = document.getElementById('quickViewModal');
    if (modal) modal.classList.remove('hidden');
}

function closeQuickView() {
    const modal = document.getElementById('quickViewModal');
    if (modal) modal.classList.add('hidden');
}

function addToBagFromModal() {
    if (currentModalItem) {
        addToCart(currentModalItem.title, currentModalItem.price, currentModalItem.img);
        closeQuickView();
    }
}

function addToCart(title, priceStr, img) {
    const price = parseFloat(priceStr.replace('$', '').replace(',', ''));
    cartItems.push({ title, price, priceStr, img });
    updateCartUI();
    toggleCartDrawer(true);
}

function toggleCartDrawer(open) {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartDrawerOverlay');
    if (!drawer || !overlay) return;

    if (open === true || drawer.classList.contains('hidden')) {
        drawer.classList.remove('hidden');
        overlay.classList.remove('hidden');
    } else {
        drawer.classList.add('hidden');
        overlay.classList.add('hidden');
    }
}

function updateCartUI() {
    const cartCountEl = document.getElementById('cartCount');
    const drawerCountEl = document.getElementById('drawerCartCount');
    const count = cartItems.length;

    if (cartCountEl) {
        cartCountEl.textContent = count;
        // Show/hide badge
        if (count === 0) {
            cartCountEl.style.display = 'none';
        } else {
            cartCountEl.style.display = 'flex';
            // Bounce animation on add
            cartCountEl.classList.remove('bump');
            void cartCountEl.offsetWidth; // force reflow
            cartCountEl.classList.add('bump');
            setTimeout(() => cartCountEl.classList.remove('bump'), 300);
        }
    }
    if (drawerCountEl) drawerCountEl.textContent = count;

    const container = document.getElementById('cartDrawerItems');
    if (!container) return;

    if (cartItems.length === 0) {
        container.innerHTML = '<p style="color: var(--text-muted); font-style: italic; text-align: center; margin-top: 3rem;">Your shopping bag is empty.</p>';
        document.getElementById('cartSubtotal').textContent = '$0.00';
        return;
    }

    let html = '';
    let total = 0;
    cartItems.forEach((item, index) => {
        total += item.price;
        html += `
            <div style="display: flex; align-items: center; gap: 1rem; background: rgba(22, 24, 29, 0.85); padding: 0.75rem; border-radius: 12px; border: 1px solid var(--border-gold-subtle); margin-bottom: 0.75rem;">
                <img src="${item.img}" style="width: 54px; height: 54px; object-fit: cover; border-radius: 8px; border: 1px solid var(--border-gold-medium);" alt="${item.title}">
                <div style="flex: 1;">
                    <h4 style="font-size: 13px; font-weight: 600; color: var(--text-white); font-family: var(--font-serif);">${item.title}</h4>
                    <p style="font-size: 12px; color: var(--gold-300); font-weight: 400; margin-top: 2px;">${item.priceStr}</p>
                </div>
                <button onclick="removeFromCart(${index})" style="background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 4px;" title="Remove Item">
                    <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
                </button>
            </div>
        `;
    });

    container.innerHTML = html;
    document.getElementById('cartSubtotal').textContent = '$' + total.toLocaleString('en-US', { minimumFractionDigits: 2 });
    renderAllIcons();
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCartUI();
}

// Event Listeners
const headerCartBtn = document.getElementById('headerCartBtn');
if (headerCartBtn) {
    headerCartBtn.addEventListener('click', () => toggleCartDrawer(true));
}

// Initialize cart badge display
const initialBadge = document.getElementById('cartCount');
if (initialBadge) initialBadge.style.display = 'none';



function handleBoutiqueSubmit(e) {
    e.preventDefault();
    alert('Thank you! Your private boutique appointment request has been received. Our concierge will contact you shortly.');
    e.target.reset();
}

/* ============================================================
   SCROLL ANIMATION ENGINE
   Uses IntersectionObserver — no HTML changes required.
   Tags elements with data-anim / data-anim-i, then observes them.
   ============================================================ */
(function initScrollAnimations() {

    // Wait until DOM is fully ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setup);
    } else {
        setup();
    }

    function setup() {

        // --- Animation map: CSS selector → animation type ---------------
        //   'up'    = fade up from below
        //   'left'  = slide in from left
        //   'right' = slide in from right
        //   'scale' = scale + fade in
        //   'fade'  = simple fade
        // stagger: true → each child in the NodeList gets a sequential delay
        const animMap = [
            // Trust bar stats
            { sel: '.trust-grid > div',                    anim: 'up',    stagger: true  },

            // Category section
            { sel: '#categories .section-header',          anim: 'up'                    },
            { sel: '.category-card',                       anim: 'up',    stagger: true  },

            // Craftsmanship — left/right split
            { sel: '.craftsmanship-gallery-wall',          anim: 'left'                  },
            { sel: '.craftsmanship-story',                 anim: 'right'                 },
            { sel: '.pillar-item',                         anim: 'up',    stagger: true  },


            // Shop by Category section
            { sel: '.sbc-left-banner',                     anim: 'left'                  },
            { sel: '.sbc-right-content',                   anim: 'right'                 },
            { sel: '.sbc-card',                            anim: 'up',    stagger: true  },


            // Products
            { sel: '.products-header-flex',                anim: 'up'                    },
            { sel: '.product-card',                        anim: 'up',    stagger: true  },

            // Section 1: Ring Configurator
            { sel: '.configurator-preview-box',            anim: 'left'                  },
            { sel: '#ring-configurator .configurator-story', anim: 'right'               },

            // Section 2: Gala Runway
            { sel: '#gala-runway .section-header',         anim: 'up'                    },
            { sel: '.runway-card',                         anim: 'up',    stagger: true  },

            // Section 3: Auction Vault
            { sel: '.auction-vault-display',               anim: 'left'                  },
            { sel: '#auction-vault .configurator-story',   anim: 'right'                 },
            { sel: '.timer-unit',                          anim: 'up',    stagger: true  },


            // Boutique — left/right split
            { sel: '.boutique-grid > div:first-child',     anim: 'left'                  },
            { sel: '.boutique-image-wrap',                 anim: 'right'                 },


            // Testimonials
            { sel: '.quote-banner',                        anim: 'scale'                 },
            { sel: '#testimonials .section-header, .testimonials-section .section-header', anim: 'up' },
            { sel: '.review-card',                         anim: 'up',    stagger: true  },

            // Journal
            { sel: '#journal .section-header',             anim: 'up'                    },
            { sel: '.article-card',                        anim: 'up',    stagger: true  },

            // Newsletter
            { sel: '.newsletter-section .container',       anim: 'up'                    },

            // Footer
            { sel: '.footer-grid > div',                   anim: 'up',    stagger: true  },
            { sel: '.footer-bottom',                       anim: 'fade'                  },

            // Feature boxes inside craftsmanship
            { sel: '.feature-box',                         anim: 'up',    stagger: true  },
        ];

        // Track which elements are already tagged to avoid duplication
        const tagged = new WeakSet();

        animMap.forEach(({ sel, anim, stagger }) => {
            const els = document.querySelectorAll(sel);
            els.forEach((el, i) => {
                if (tagged.has(el)) return;
                tagged.add(el);

                el.setAttribute('data-anim', anim);
                if (stagger) {
                    // Cap at 7 to match the CSS delay classes
                    el.setAttribute('data-anim-i', Math.min(i % 8, 7));
                }
            });
        });

        // --- IntersectionObserver ----------------------------------------
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('anim-in');
                    observer.unobserve(entry.target); // fire once only
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe every tagged element
        document.querySelectorAll('[data-anim]').forEach(el => observer.observe(el));

        // --- Apply shimmer to gold-gradient-text headings in sections -----
        document.querySelectorAll(
            '.section-title .gold-gradient-text, .hero-title .gold-gradient-text'
        ).forEach(el => {
            // Hero is already animated by CSS; only add shimmer to section titles
            if (!el.closest('.hero-section')) {
                el.classList.add('anim-heading-shimmer');
            }
        });

        console.log('%c STACKLY Animations Active — @stacklykr ', 'background:#0B0C0E;color:#D4AF37;font-size:11px;padding:4px 10px;border-radius:3px;border:1px solid #D4AF37;');
    }

})();

/* ============================================================
   INTERACTIVE SECTIONS CONTROLLERS
   ============================================================ */

// 1. Bespoke Configurator State
let ringState = {
    metal: 'yellow',
    carat: 1.5,
    basePrice: 5800
};

function selectRingMetal(metal) {
    ringState.metal = metal;
    
    // Update active button state within metal option group only
    document.querySelectorAll('#ring-configurator .option-group:nth-of-type(1) .selector-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.getElementById(`metal-${metal}`);
    if (activeBtn) activeBtn.classList.add('active');

    // Smoothly swap image with opacity cross-fade
    const imgEl = document.getElementById('configuratorRingImg');
    if (imgEl) {
        imgEl.style.opacity = 0;
        imgEl.style.transform = 'scale(0.95)';
        setTimeout(() => {
            if (metal === 'platinum') {
                imgEl.src = 'images/image/ring-platinum.webp';
            } else if (metal === 'rose') {
                imgEl.src = 'images/image/ring-rose-gold.webp';
            } else {
                imgEl.src = 'images/image/ring-yellow-gold.webp';
            }
            imgEl.alt = `Bespoke ${metal.charAt(0).toUpperCase() + metal.slice(1)} Ring`;
            imgEl.style.opacity = 1;
            imgEl.style.transform = 'scale(1)';
        }, 200);
    }
}

function selectRingCarat(carat, price) {
    ringState.carat = carat;
    ringState.basePrice = price;

    // Update active button state within carat option group only
    document.querySelectorAll('#ring-configurator .option-group:nth-of-type(2) .selector-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    let caratId = 'carat-1-5';
    if (carat === 2.5) caratId = 'carat-2-5';
    if (carat === 4.0) caratId = 'carat-4-0';
    
    const activeBtn = document.getElementById(caratId);
    if (activeBtn) activeBtn.classList.add('active');

    // Update estimated valuation text
    const priceEl = document.getElementById('configuratorPrice');
    if (priceEl) {
        priceEl.textContent = `$${price.toLocaleString()}`;
    }
}

function selectAtelierStep(index) {
    const steps = document.querySelectorAll('.atelier-step-card');
    steps.forEach((card, i) => {
        if (i === index) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

function orderBespoke() {
    window.location.href = '404.html';
}

function setBidAmount(amount) {
    const bidInput = document.getElementById('bidAmountInput');
    if (bidInput) {
        bidInput.value = amount;
        bidInput.focus();
    }
}

// 2. Sealed Bid Auction
function placeSealedBid() {
    window.location.href = '404.html';
}

// 3. Live Countdown Timer
(function initAuctionCountdown() {
    const end = new Date();
    end.setDate(end.getDate() + 2); // 2 days from now
    end.setHours(end.getHours() + 14);
    end.setMinutes(end.getMinutes() + 32);

    function updateTimer() {
        const now = new Date();
        const diff = end - now;

        if (diff <= 0) {
            clearInterval(timerInterval);
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        const dEl = document.getElementById('auction-days');
        const hEl = document.getElementById('auction-hours');
        const mEl = document.getElementById('auction-minutes');
        const sEl = document.getElementById('auction-seconds');

        if (dEl) dEl.textContent = String(days).padStart(2, '0');
        if (hEl) hEl.textContent = String(hours).padStart(2, '0');
        if (mEl) mEl.textContent = String(minutes).padStart(2, '0');
        if (sEl) sEl.textContent = String(seconds).padStart(2, '0');
    }

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call
})();

/* ============================================================
   Client Portal Login & Mobile Menu Modal Helpers
   ============================================================ */
function openLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) modal.classList.remove('hidden');
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) modal.classList.add('hidden');
}

function handleLoginSubmit(e) {
    e.preventDefault();
    alert('Welcome to STACKLY VIP Client Portal. Authenticating secure credentials...');
    closeLoginModal();
}

function toggleMobileMenu() {
    const drawer = document.getElementById('mobileDrawer');
    if (drawer) drawer.classList.toggle('hidden');
}

// Global Scroll Restoration for back-navigation (e.g. returning from 404 page)
function restoreScrollFrom404() {
    const comingFrom404 = sessionStorage.getItem('comingFrom404');
    const prevPage = sessionStorage.getItem('prevScrollPage');
    
    if (comingFrom404 === 'true') {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        // Match base filename to handle relative path shifts
        const currentFile = window.location.pathname.split('/').pop() || 'index.html';
        const prevFile = prevPage ? prevPage.split('/').pop() : '';
        
        if (!prevFile || currentFile === prevFile) {
            const sectionId = sessionStorage.getItem('404_sectionId');
            const savedScroll = sessionStorage.getItem('prevScrollY');
            
            if (sectionId) {
                const el = document.getElementById(sectionId);
                if (el) {
                    setTimeout(() => {
                        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        sessionStorage.removeItem('comingFrom404');
                        sessionStorage.removeItem('404_sectionId');
                        if ('scrollRestoration' in history) {
                            history.scrollRestoration = 'auto';
                        }
                    }, 150);
                    return;
                }
            }
            
            if (savedScroll) {
                const targetScroll = parseInt(savedScroll);
                setTimeout(() => {
                    window.scrollTo({
                        top: targetScroll,
                        behavior: 'smooth'
                    });
                    
                    // Retry periodically for up to 1.5s in case layout height expands asynchronously
                    let attempts = 0;
                    const scrollInterval = setInterval(() => {
                        window.scrollTo({
                            top: targetScroll,
                            behavior: 'smooth'
                        });
                        attempts++;
                        if (attempts >= 15 || Math.abs(window.scrollY - targetScroll) < 5) {
                            clearInterval(scrollInterval);
                            sessionStorage.removeItem('comingFrom404');
                            if ('scrollRestoration' in history) {
                                history.scrollRestoration = 'auto';
                            }
                        }
                    }, 100);
                }, 100);
            } else {
                sessionStorage.removeItem('comingFrom404');
                if ('scrollRestoration' in history) {
                    history.scrollRestoration = 'auto';
                }
            }
        } else {
            sessionStorage.removeItem('comingFrom404');
            if ('scrollRestoration' in history) {
                history.scrollRestoration = 'auto';
            }
        }
    }
}

// Run scroll restoration on page show and DOM load
window.addEventListener('pageshow', restoreScrollFrom404);
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(restoreScrollFrom404, 150);
});

// Update scroll position continuously in sessionStorage as the user scrolls (debounced)
let scrollSaveTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollSaveTimeout);
    scrollSaveTimeout = setTimeout(() => {
        sessionStorage.setItem('prevScrollY', window.scrollY);
        sessionStorage.setItem('prevScrollPage', window.location.pathname);
    }, 100);
});

// Backup scroll save on page unload
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('prevScrollY', window.scrollY);
    sessionStorage.setItem('prevScrollPage', window.location.pathname);
});

// Intercept clicks to 404.html to record source details for smart back-navigation
document.addEventListener('click', (e) => {
    const target = e.target.closest('a, button, [onclick]');
    if (target) {
        const href = target.getAttribute('href');
        const onclick = target.getAttribute('onclick');
        const is404 = (href && href.includes('404.html')) || (onclick && onclick.includes('404.html'));
        
        if (is404) {
            // Find the closest ancestor section or container with an ID
            const section = target.closest('section, footer, header, [id]');
            const sectionId = (section && section.id && !section.id.startsWith('lucide')) ? section.id : '';
            
            sessionStorage.setItem('prevScrollY', window.scrollY);
            sessionStorage.setItem('prevScrollPage', window.location.pathname);
            if (sectionId) {
                sessionStorage.setItem('404_sectionId', sectionId);
            } else {
                sessionStorage.removeItem('404_sectionId');
            }
        }
    }
});


