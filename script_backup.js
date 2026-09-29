

// Portfolio Projects Database
const PROJECTS = [
  {
    id: "nyanja-botanicals",
    title: "Nyanja Botanicals — Organic Herbals",
    category: "Brand Identity",
    client: "Nyanja Botanicals Collective",
    year: "2026",
    image: "images/brand-packaging.jpg",
    summary: "Luxury identity and eco-conscious packaging for Lake Malawi organic tea infusions and botanicals.",
    fullDescription: "Nyanja Botanicals requested an upscale, heritage-conscious brand system celebrating indigenous Malawian wild herbs and lakefront teas. The solution pairs an authentic serif logotype with custom botanical linework, gold-foil foil accents, and earthy warm paper packaging, creating an internationally competitive product line.",
    role: "Lead Brand Designer & Packaging Art Director",
    deliverables: [
      "Bespoke Wordmark & Emblem System",
      "3 Artisanal Canister Packaging Wrappers",
      "Amber Glass Dropper Tincture Labels",
      "Comprehensive Brand Style Guide",
      "Wholesale Catalog & Merchant Collateral"
    ],
    colors: ["#212821", "#D8B467", "#EFE9DD", "#7D4A27"],
    typography: "Instrument Serif / Plus Jakarta Sans",
    metrics: "+160% retail pickup during regional trade showcase"
  },
  {
    id: "kuwala-commerce",
    title: "Kuwala Hub — Merchant Web System",
    category: "UI & Code",
    client: "Mangochi Merchant & Student Initiative",
    year: "2026",
    image: "images/ui-software.jpg",
    summary: "Responsive web portal and design system connecting local artisans with hospitality buyers.",
    fullDescription: "Crafted as both an entrepreneurial initiative and a technical software project, Kuwala is a high-speed web application facilitating wholesale orders between artisanal makers along the Mangochi shoreline and boutique lodge resorts. Built with clean HTML, CSS, and modern JavaScript, focusing on low-bandwidth performance and intuitive visual order tracking.",
    role: "Front-End Engineer & UI/UX Architect",
    deliverables: [
      "Modular Web Component System (45+ UI components)",
      "High-Contrast Mobile Order Dispatcher",
      "Real-Time Inventory & Price Calculator",
      "Full Design System Tokens & Specs",
      "Production-Ready Front-End Codebase"
    ],
    colors: ["#0B0E14", "#F59E0B", "#10B981", "#94A3B8"],
    typography: "Plus Jakarta Sans / JetBrains Mono",
    metrics: "Sub-1.2s load on 3G connections; 18 active regional merchant pilots"
  },
  {
    id: "symphony-exhibition",
    title: "Symphony of Forms — Poster Series",
    category: "Print & Editorial",
    client: "Mangochi Arts & Heritage Council",
    year: "2025",
    image: "images/editorial-poster.jpg",
    summary: "Large-format typographic poster collection exploring contemporary Malawian visual vernacular.",
    fullDescription: "Commissioned for the Southern Region Youth Arts Exhibition, this poster series pairs experimental typography with geometric grids inspired by lakeside boat carvings and traditional woven textures. Hand-printed on heavy cotton rag paper, the works investigate rhythm, negative space, and contemporary cultural pride.",
    role: "Typography Designer & Printmaker",
    deliverables: [
      "3 Large-Format Fine Art Exhibition Posters (A1)",
      "Exhibition Invitation Suite & VIP Badges",
      "Curator Catalogue & Essay Layout",
      "Digital Social Media Motion Posters"
    ],
    colors: ["#121316", "#FAF7F2", "#EA580C", "#71717A"],
    typography: "Instrument Serif / Plus Jakarta Sans",
    metrics: "Official exhibition visual identity; 400+ attendees"
  },
  {
    id: "dmi-innovate",
    title: "DMI Student Innovation Incubator",
    category: "Brand Identity",
    client: "DMI St. John the Baptist University",
    year: "2025",
    image: "images/ui-software.jpg",
    summary: "Visual identity, community guidelines, and showcase deck for student tech founders.",
    fullDescription: "Developed for the campus entrepreneurship incubator at DMI St. John the Baptist University, Mangochi. The visual identity communicates forward-looking academic rigor alongside practical entrepreneurial dynamism, attracting student creators across Computer Science and Business disciplines.",
    role: "Brand Strategist & Identity Designer",
    deliverables: [
      "Campus Incubator Logo System",
      "Annual Hackathon Branding & Banner Systems",
      "Founder Pitch Deck Template Suite",
      "Student Project Showcase Portal Mockups"
    ],
    colors: ["#0C1322", "#3B82F6", "#F3F4F6", "#F97316"],
    typography: "Plus Jakarta Sans / JetBrains Mono",
    metrics: "Official incubator brand; 80+ student members engaged"
  },
  {
    id: "lake-horizon-coffee",
    title: "Lake Horizon Coffee — Specialty Packaging",
    category: "Packaging",
    client: "Lake Horizon Coffee Roasters",
    year: "2025",
    image: "images/brand-packaging.jpg",
    summary: "Earthy kraft paper bags and minimalist typographic labels for fresh-roasted Malawian beans.",
    fullDescription: "A packaging overhaul for a specialty micro-roaster located near Mangochi's scenic peninsula. The labels emphasize origin altitude, roast profile, and tasting notes through strict typographic hierarchy and warm monochrome foil stamping.",
    role: "Packaging Designer",
    deliverables: [
      "250g & 1kg Kraft Gusseted Coffee Bag Labels",
      "Flavor Profile Iconographic Grid",
      "Tasting Card Inserts & Brew Guides",
      "Retail Wooden Display Stand Mockup"
    ],
    colors: ["#291D16", "#C89D66", "#FAF6EE", "#523B2B"],
    typography: "Instrument Serif / Plus Jakarta Sans",
    metrics: "Expanded retail placement into 5 regional resort boutiques"
  },
  {
    id: "renaissance-quarterly",
    title: "Renaissance Quarterly — Editorial Journal",
    category: "Print & Editorial",
    client: "Southern Youth Writers & Designers Guild",
    year: "2025",
    image: "images/editorial-poster.jpg",
    summary: "48-page editorial publication layout showcasing African design criticism and student essays.",
    fullDescription: "An editorial design exploration challenging traditional academic journal layouts. Features asymmetric column rhythms, generous whitespace, pull-quote typographic treatments, and custom photographic pacing that encourages deep, focused reading.",
    role: "Editorial Director & Layout Designer",
    deliverables: [
      "Complete 48-Page Grid & Master Layout",
      "Bespoke Typographic Drop Caps & Numbering",
      "Print-Ready High-Resolution Pre-Flight Files",
      "Interactive Digital PDF Edition"
    ],
    colors: ["#18181B", "#F4EFE6", "#D97706", "#71717A"],
    typography: "Instrument Serif / Plus Jakarta Sans",
    metrics: "2,000+ digital readers across 6 African universities"
  }
];

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderProjects('All');
  setupFilterButtons();
  setupModalEvents();
  setupDesignLab();
  setupQuoteEstimator();
  setupContactForm();
  setupCopyEmailButtons();
  setupMobileNav();
});

// Render Projects into Bento Grid
function renderProjects(filterCategory) {
  const grid = document.getElementById('bento-grid');
  if (!grid) return;

  grid.innerHTML = '';
  const filtered = filterCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filterCategory);

  filtered.forEach((p, index) => {
    const isLarge = (filterCategory === 'All' && index === 0);
    const item = document.createElement('div');
    item.className = `bento-item ${isLarge ? 'large' : ''}`;
    item.onclick = () => openProjectModal(p.id);

    const paletteHtml = p.colors.slice(0, 3)
      .map(c => `<span class="palette-dot" style="background-color: ${c};" title="${c}"></span>`)
      .join('');

    item.innerHTML = `
      <div class="bento-thumb">
        <img src="${p.image}" alt="${p.title}" class="bento-img" loading="lazy" />
      </div>
      <div class="bento-content">
        <div>
          <div class="bento-meta">
            <span style="color: var(--accent); font-weight: 600;">${p.category}</span>
            <span>·</span>
            <span>${p.year}</span>
          </div>
          <h3 class="bento-title">${p.title}</h3>
          <p class="bento-desc">${p.summary}</p>
        </div>
        <div class="bento-footer">
          <div class="palette-dots">${paletteHtml}</div>
          <span style="color: var(--accent); font-weight: 600; display: inline-flex; align-items: center; gap: 4px;">
            View Project Details &rarr;
          </span>
        </div>
      </div>
    `;
    grid.appendChild(item);
  });
}

// Category Filtering Handler
function setupFilterButtons() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-category');
      renderProjects(cat);
    });
  });
}

// Lightbox Modal Controls
function openProjectModal(projectId) {
  const p = PROJECTS.find(item => item.id === projectId);
  if (!p) return;

  const modal = document.getElementById('project-modal');
  const modalImg = document.getElementById('modal-img');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalClient = document.getElementById('modal-client');
  const modalRole = document.getElementById('modal-role');
  const modalDesc = document.getElementById('modal-desc');
  const modalDeliverables = document.getElementById('modal-deliverables');
  const modalPalette = document.getElementById('modal-palette');
  const modalMetric = document.getElementById('modal-metric');

  modalImg.src = p.image;
  modalImg.alt = p.title;
  modalCategory.textContent = `${p.category} · ${p.year}`;
  modalTitle.textContent = p.title;
  modalClient.textContent = p.client;
  modalRole.textContent = p.role;
  modalDesc.textContent = p.fullDescription;
  modalMetric.textContent = p.metrics || "Successfully Delivered";

  modalDeliverables.innerHTML = p.deliverables
    .map(d => `<li style="display: flex; align-items: center; gap: 8px; font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 6px;">
      <span style="color: var(--accent); font-weight: bold;">&#10003;</span> ${d}
    </li>`).join('');

  modalPalette.innerHTML = p.colors
    .map(c => `<div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
      <div style="width: 36px; height: 36px; border-radius: 8px; background-color: ${c}; border: 1px solid rgba(255,255,255,0.2);"></div>
      <span style="font-family: var(--font-mono); font-size: 0.6875rem; color: var(--text-muted);">${c}</span>
    </div>`).join('');

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
  }
}

function setupModalEvents() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) closeBtn.onclick = closeProjectModal;
  if (modal) {
    modal.onclick = (e) => {
      if (e.target === modal) closeProjectModal();
    };
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });
}

// Interactive Design Lab Sandbox
function setupDesignLab() {
  const textInput = document.getElementById('lab-text-input');
  const fontSelect = document.getElementById('lab-font-select');
  const sizeSlider = document.getElementById('lab-size-slider');
  const sizeVal = document.getElementById('lab-size-val');
  const previewText = document.getElementById('lab-preview-text');
  const copyTokensBtn = document.getElementById('copy-tokens-btn');

  function updatePreview() {
    if (previewText) {
      if (textInput && textInput.value) {
        previewText.textContent = textInput.value;
      }
      if (fontSelect) {
        if (fontSelect.value === 'serif') {
          previewText.style.fontFamily = "var(--font-serif)";
          previewText.style.fontStyle = "italic";
        } else if (fontSelect.value === 'mono') {
          previewText.style.fontFamily = "var(--font-mono)";
          previewText.style.fontStyle = "normal";
        } else {
          previewText.style.fontFamily = "var(--font-sans)";
          previewText.style.fontStyle = "normal";
        }
      }
      if (sizeSlider && sizeVal) {
        previewText.style.fontSize = `${sizeSlider.value}px`;
        sizeVal.textContent = `${sizeSlider.value}px`;
      }
    }
  }

  if (textInput) textInput.addEventListener('input', updatePreview);
  if (fontSelect) fontSelect.addEventListener('change', updatePreview);
  if (sizeSlider) sizeSlider.addEventListener('input', updatePreview);

  if (copyTokensBtn) {
    copyTokensBtn.addEventListener('click', () => {
      const code = `/* Esther Julita Masiye — Design System Tokens */\n--theme-font: ${fontSelect ? fontSelect.value : 'serif'};\n--font-size: ${sizeSlider ? sizeSlider.value : 36}px;\n--theme-accent: #f59e0b;\n--theme-surface: #12141a;`;
      navigator.clipboard.writeText(code).then(() => {
        copyTokensBtn.textContent = "Tokens Copied to Clipboard!";
        setTimeout(() => {
          copyTokensBtn.textContent = "Copy CSS Token Manifest";
        }, 2000);
      });
    });
  }
}

// Project Scope & Estimate Calculator
function setupQuoteEstimator() {
  const tierRadios = document.querySelectorAll('input[name="quote-tier"]');
  const addonChecks = document.querySelectorAll('input[name="quote-addon"]');
  const totalDisplay = document.getElementById('quote-total-price');
  const weeksDisplay = document.getElementById('quote-weeks');
  const applyBtn = document.getElementById('apply-quote-btn');
  const messageArea = document.getElementById('contact-message');

  function calculateQuote() {
    let base = 650;
    let weeks = 3;
    let selectedTierName = "Brand Identity & Logomark System";

    tierRadios.forEach(radio => {
      if (radio.checked) {
        base = parseInt(radio.getAttribute('data-price') || '650', 10);
        weeks = parseInt(radio.getAttribute('data-weeks') || '3', 10);
        selectedTierName = radio.getAttribute('data-name') || selectedTierName;
      }
    });

    let addonsSum = 0;
    let selectedAddonNames = [];
    addonChecks.forEach(check => {
      if (check.checked) {
        addonsSum += parseInt(check.getAttribute('data-price') || '0', 10);
        selectedAddonNames.push(check.getAttribute('data-name'));
      }
    });

    const total = base + addonsSum;
    if (totalDisplay) totalDisplay.textContent = `$${total}`;
    if (weeksDisplay) weeksDisplay.textContent = `${weeks} Weeks`;

    return { total, weeks, selectedTierName, selectedAddonNames };
  }

  tierRadios.forEach(r => r.addEventListener('change', calculateQuote));
  addonChecks.forEach(c => c.addEventListener('change', calculateQuote));

  if (applyBtn && messageArea) {
    applyBtn.addEventListener('click', () => {
      const q = calculateQuote();
      const text = `Hello Esther,\n\nI configured this project plan through your portfolio estimator:\n\n- Scope: ${q.selectedTierName}\n- Estimated Investment: ~$${q.total} USD\n- Target Timeline: ~${q.weeks} Weeks\n- Selected Extensions: ${q.selectedAddonNames.join(', ') || 'Standard'}\n\nLooking forward to discussing our project!`;
      messageArea.value = text;
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

// Contact Proposal Form
function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name')?.value || 'Prospective Client';
    const email = document.getElementById('contact-email')?.value || '';
    const discipline = document.getElementById('contact-discipline')?.value || 'Brand Identity';
    const message = document.getElementById('contact-message')?.value || '';

    const subject = encodeURIComponent(`Project Inquiry: ${discipline} - from ${name}`);
    const body = encodeURIComponent(`Hello Esther,\n\nMy name is ${name} (${email}).\n\nDiscipline: ${discipline}\n\nProject Brief:\n${message}\n\nBest regards,\n${name}`);

    // Direct mailto dispatch to esthermasiye64@gmail.com
    window.location.href = `mailto:esthermasiye64@gmail.com?subject=${subject}&body=${body}`;

    const feedback = document.getElementById('contact-feedback');
    if (feedback) {
      feedback.style.display = 'block';
    }
  });
}

// Copy Email Quick Button
function setupCopyEmailButtons() {
  const copyButtons = document.querySelectorAll('.copy-email-trigger');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText('esthermasiye64@gmail.com').then(() => {
        const origText = btn.textContent;
        btn.textContent = "Copied to Clipboard!";
        setTimeout(() => {
          btn.textContent = origText;
        }, 2200);
      });
    });
  });
}

// Mobile Menu Toggle
function setupMobileNav() {
  const toggle = document.getElementById('mobile-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isVisible = nav.style.display === 'flex';
      nav.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '72px';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = '#0e1014';
        nav.style.padding = '1.5rem';
        nav.style.borderBottom = '1px solid #27272a';
      }
    });
  }
}
