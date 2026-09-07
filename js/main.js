/**
 * Pizza Mania - Main JavaScript Engine
 * Handles i18n (IT/EN), Dark/Light mode theme switching, smooth scrolling, and common UI interactions.
 */

// Global Configuration
const CONFIG = {
  phone: "+39030833180",
  phoneDisplay: "030 833180",
  mapsUrl: "https://www.google.com/maps/place/Pizzamania+di+Pellicardi+Lorenzo/@45.6805309,10.1837503,17.91z/data=!4m15!1m8!3m7!1s0x47817c09a7e168e3:0xd55b6e5aed236288!2sPizzamania+di+Pellicardi+Lorenzo!8m2!3d45.6805951!4d10.1856939!16s%2Fg%2F1vxfz06m",
  facebookUrl: "https://www.facebook.com/profile.php?id=100063697536486&locale=it_IT",
  address: "Via Roma 14, Gardone Val Trompia (BS)"
};

// Complete Translation Dictionary
const TRANSLATIONS = {
  it: {
    // Navigation
    nav_experience: "La nostra pizza",
    nav_menu: "Menu",
    nav_gallery: "Gallery",
    nav_visit: "Visita",
    nav_book: "Prenota",
    
    // Hero
    hero_tag: "Gardone Val Trompia · Pizza da asporto",
    hero_title: "L'ARTE DELLA<br>PIZZA.",
    hero_desc: "Impasto morbido ed elastico, ingredienti scelti e un’accoglienza di famiglia.",
    hero_book: "Prenota un tavolo",
    hero_call: "Chiama ora",
    
    // Identity / Esperienza
    identity_tag: "La nostra identità",
    identity_title: "Il gusto vero, senza pose.",
    card_dough_title: "Impasti speciali",
    card_dough_desc: "Alternative stagionali e una base morbida, elastica e ben lavorata.",
    card_open_title: "Fatta a vista",
    card_open_desc: "Una pizza semplice e autentica, preparata davanti ai tuoi occhi.",
    card_family_title: "Gestione familiare",
    card_family_desc: "Cortesia, puntualità e attenzione che si sentono dal primo morso.",
    
    // Menu
    menu_tag: "Menu",
    menu_title: "Una pizza per ogni mania.",
    menu_desc: "La selezione segue la stagione e la disponibilità degli ingredienti. Chiamaci per conoscere il menu aggiornato e ordinare.",
    menu_cta: "Scopri il menu di oggi",
    menu_cat_1: "Pizze rosse",
    menu_cat_2: "Pizze bianche",
    menu_cat_3: "Specialità stagionali",
    menu_cat_4: "Impasti speciali",
    
    // Gallery
    gallery_tag: "Gallery",
    gallery_title: "Prima si guarda.",
    gallery_alt_prefix: "Pizza artigianale Pizza Mania, dettaglio ",
    
    // Reviews
    reviews_tag: "Google reviews",
    reviews_title: "Parola a chi ci sceglie.",
    review_1_text: "“Pizza eccellente, gestione familiare molto affiatata e davvero azzeccata. Ospitalità al top! Sono rimasto davvero soddisfatto! Consigliatissima!”",
    review_2_text: "“Pizza eccellente, impasto morbido ed elastico, condimenti buoni ed equilibrati e ingredienti di prima qualità.”",
    review_3_text: "“Pizza eccellente, ingredienti di prima qualità e sempre super cortesi. Giusto sotto casa mia è il migliore 🔝”",
    review_4_text: "“Pizza buonissima e uso il servizio di consegna a domicilio, arriva sempre bella calda 👌”",
    
    // Visit & Hours
    visit_tag: "Vieni a trovarci",
    visit_street: "Via Roma 14",
    visit_city: "Gardone Val Trompia (BS)",
    visit_directions: "Indicazioni",
    visit_hours_title: "Orari di apertura",
    day_monday: "Lunedì",
    day_tuesday: "Martedì",
    day_wednesday: "Mercoledì",
    day_thursday: "Giovedì",
    day_friday: "Venerdì",
    day_saturday: "Sabato",
    day_sunday: "Domenica",
    status_closed: "Chiuso",
    
    // Footer
    footer_address: "Via Roma 14, Gardone Val Trompia (BS)",
    footer_directions: "Indicazioni",
    footer_book: "Prenota un tavolo",
    footer_admin: "Area amministrativa",
    
    // Prenota Page
    prenota_tag: "Prenotazioni",
    prenota_title: "Il tuo tavolo ti aspetta.",
    prenota_desc: "Compila la richiesta. La prenotazione sarà valida dopo la nostra conferma telefonica.",
    form_fullname: "Nome e cognome",
    form_phone: "Telefono",
    form_email: "Email",
    form_guests: "Numero di persone",
    form_date: "Data",
    form_time: "Ora",
    form_requests: "Richieste speciali",
    form_submit: "Invia prenotazione",
    form_error_generic: "Invio non riuscito. Riprova o chiamaci.",
    thank_you_title: "Grazie!",
    thank_you_desc: "La tua prenotazione è stata inviata. Ti contatteremo presto per confermare.",
    thank_you_back: "Torna alla Home"
  },
  en: {
    // Navigation
    nav_experience: "Our pizza",
    nav_menu: "Menu",
    nav_gallery: "Gallery",
    nav_visit: "Visit",
    nav_book: "Book",
    
    // Hero
    hero_tag: "Gardone Val Trompia · Takeaway Pizza",
    hero_title: "THE ART OF<br>PIZZA.",
    hero_desc: "Soft, elastic dough, carefully selected ingredients and family hospitality.",
    hero_book: "Book a table",
    hero_call: "Call now",
    
    // Identity / Experience
    identity_tag: "Our identity",
    identity_title: "Real flavour, no pretence.",
    card_dough_title: "Special doughs",
    card_dough_desc: "Seasonal alternatives and a soft, elastic, expertly worked base.",
    card_open_title: "Made in the open",
    card_open_desc: "Simple, authentic pizza, prepared right before your eyes.",
    card_family_title: "Family run",
    card_family_desc: "Warmth, punctuality and care you feel from the first bite.",
    
    // Menu
    menu_tag: "Menu",
    menu_title: "A pizza for every craving.",
    menu_desc: "Our selection follows the seasons and ingredient availability. Call for today’s menu and to order.",
    menu_cta: "Discover today’s menu",
    menu_cat_1: "Red pizzas",
    menu_cat_2: "White pizzas",
    menu_cat_3: "Seasonal specials",
    menu_cat_4: "Special doughs",
    
    // Gallery
    gallery_tag: "Gallery",
    gallery_title: "First, feast your eyes.",
    gallery_alt_prefix: "Pizza Mania artisan pizza, detail ",
    
    // Reviews
    reviews_tag: "Google reviews",
    reviews_title: "Loved by locals.",
    review_1_text: "“Excellent pizza, very close-knit family management and really on point. Top hospitality! I was truly satisfied! Highly recommended!”",
    review_2_text: "“Excellent soft, elastic dough, balanced toppings, and top-quality ingredients.”",
    review_3_text: "“Excellent pizza, top quality ingredients and always super courteous. Right under my house it's the best.”",
    review_4_text: "“Very good pizza. Home delivery always arrives nice and hot.”",
    
    // Visit & Hours
    visit_tag: "Come visit",
    visit_street: "Via Roma 14",
    visit_city: "Gardone Val Trompia (BS)",
    visit_directions: "Directions",
    visit_hours_title: "Opening hours",
    day_monday: "Monday",
    day_tuesday: "Tuesday",
    day_wednesday: "Wednesday",
    day_thursday: "Thursday",
    day_friday: "Friday",
    day_saturday: "Saturday",
    day_sunday: "Sunday",
    status_closed: "Closed",
    
    // Footer
    footer_address: "Via Roma 14, Gardone Val Trompia (BS)",
    footer_directions: "Directions",
    footer_book: "Book a table",
    footer_admin: "Admin area",
    
    // Prenota Page
    prenota_tag: "Reservations",
    prenota_title: "Your table awaits.",
    prenota_desc: "Send your request. Your booking is valid after our phone confirmation.",
    form_fullname: "Full name",
    form_phone: "Phone number",
    form_email: "Email",
    form_guests: "Number of guests",
    form_date: "Date",
    form_time: "Time",
    form_requests: "Special requests",
    form_submit: "Send reservation",
    form_error_generic: "Could not send. Try again or call us.",
    thank_you_title: "Thank you!",
    thank_you_desc: "Your reservation has been sent. We will contact you soon to confirm.",
    thank_you_back: "Back to Home"
  }
};

// Global App State
let currentLang = localStorage.getItem('pizzamania_lang') || 'it';
let isDarkMode = localStorage.getItem('pizzamania_theme') === 'dark';

// Sun and Moon SVG Icons
const ICON_SUN = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
const ICON_MOON = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;

/**
 * Apply Theme (Dark / Light)
 */
function applyTheme(isDark) {
  isDarkMode = isDark;
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('pizzamania_theme', isDark ? 'dark' : 'light');
  
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.innerHTML = isDark ? ICON_SUN : ICON_MOON;
    themeToggleBtn.setAttribute('aria-label', isDark ? 'Switch to Light mode' : 'Switch to Dark mode');
  }
}

/**
 * Apply Language (IT / EN)
 */
function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('pizzamania_lang', lang);
  
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.it;
  
  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  
  // Update all elements with data-i18n-html (for markup like <br>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update all gallery image alt attributes
  document.querySelectorAll('[data-gallery-idx]').forEach(el => {
    const idx = el.getAttribute('data-gallery-idx');
    el.setAttribute('alt', `${dict.gallery_alt_prefix}${idx}`);
  });
  
  // Update language toggle button label
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.textContent = lang === 'it' ? 'IT' : 'EN';
  }
}

/**
 * Initialize Event Listeners
 */
document.addEventListener('DOMContentLoaded', () => {
  // Apply initial theme & language
  applyTheme(isDarkMode);
  applyLanguage(currentLang);
  
  // Theme Toggle Button
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      applyTheme(!isDarkMode);
    });
  }
  
  // Language Toggle Button
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      applyLanguage(currentLang === 'it' ? 'en' : 'it');
    });
  }
});
