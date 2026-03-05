// DepartmentsSection.js (8 items per slide: 4 top + 4 bottom)

// =======================
// Data (ضع هنا 14 قسم)
// =======================
const DepartmentsData = [
  { id: 1, name: "معدات دق الخرسانة", icon: "gearBulb" },
  { id: 2, name: "أدوات وبنّاء", icon: "tools" },
  { id: 3, name: "مكائن لحام", icon: "welder" },
  { id: 4, name: "معدات أسفلت", icon: "cone" },
  { id: 5, name: "معدات ميكانيكية", icon: "medkit" },
  { id: 6, name: "معدات سباكة", icon: "printer" },
  { id: 7, name: "معدات هيدروليك", icon: "forklift" },
  { id: 8, name: "تحضير/رمل/قص", icon: "gears" },

  { id: 9, name: "عدد محلات", icon: "axe" },
  { id: 10, name: "سهولة الوصول", icon: "gear" },
  { id: 11, name: "معدات كهرباء", icon: "bolt" },
  { id: 12, name: "معدات سلامة", icon: "shield" },

  // ✅ أضف قسمين (13, 14)
  { id: 13, name: "قسم جديد 13", icon: "gear" },
  { id: 14, name: "قسم جديد 14", icon: "tools" },
];

// =======================
// Icons (نفس اللي عندك)
// =======================
function iconSVG(type) {
  const W = "#ffffff";
  const O = "#f5a623";
  const wrap = (body) => `
    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      ${body}
    </svg>
  `;

  switch (type) {
    case "tools":
      return wrap(`
        <path d="M20 44l10-10M26 48l-8-8" stroke="${W}" stroke-width="4" stroke-linecap="round"/>
        <path d="M44 44L34 34M38 48l8-8" stroke="${W}" stroke-width="4" stroke-linecap="round"/>
        <path d="M22 22l10 10" stroke="${O}" stroke-width="6" stroke-linecap="round"/>
        <path d="M42 22L32 32" stroke="${O}" stroke-width="6" stroke-linecap="round"/>
      `);
    case "welder":
      return wrap(`
        <path d="M20 40c6-10 10-14 24-18" stroke="${W}" stroke-width="4" stroke-linecap="round"/>
        <path d="M38 18l10 10-6 6-10-10 6-6Z" fill="${O}"/>
        <path d="M18 42l10 10" stroke="${W}" stroke-width="4" stroke-linecap="round"/>
      `);
    case "cone":
      return wrap(`
        <path d="M26 14h12l4 32H22l4-32Z" fill="${W}" opacity=".95"/>
        <path d="M24 28h16" stroke="${O}" stroke-width="5" stroke-linecap="round"/>
        <path d="M22 46h20" stroke="${W}" stroke-width="4" stroke-linecap="round"/>
      `);
    case "medkit":
      return wrap(`
        <rect x="16" y="20" width="32" height="26" rx="4" fill="${W}" opacity=".95"/>
        <path d="M32 24v18M23 33h18" stroke="${O}" stroke-width="6" stroke-linecap="round"/>
        <path d="M26 20v-4h12v4" stroke="${W}" stroke-width="4" stroke-linecap="round"/>
      `);
    case "printer":
      return wrap(`
        <rect x="18" y="18" width="28" height="18" rx="3" fill="${W}" opacity=".95"/>
        <rect x="20" y="36" width="24" height="12" rx="2" fill="${O}"/>
        <path d="M24 42h16" stroke="${W}" stroke-width="4" stroke-linecap="round"/>
      `);
    case "forklift":
      return wrap(`
        <path d="M18 40h20v8H18v-8Z" fill="${W}" opacity=".95"/>
        <circle cx="24" cy="50" r="4" fill="${O}"/>
        <circle cx="36" cy="50" r="4" fill="${O}"/>
        <path d="M42 24v26h6" stroke="${W}" stroke-width="4" stroke-linecap="round"/>
        <path d="M20 40V24h14" stroke="${W}" stroke-width="4" stroke-linecap="round"/>
      `);
    case "gears":
      return wrap(`
        <path d="M26 38a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z" stroke="${W}" stroke-width="4"/>
        <path d="M44 46a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" stroke="${O}" stroke-width="5"/>
        <path d="M34 28l4 4" stroke="${W}" stroke-width="4" stroke-linecap="round"/>
      `);
    case "axe":
      return wrap(`
        <path d="M22 42l22-22" stroke="${W}" stroke-width="4" stroke-linecap="round"/>
        <path d="M36 18l10 10" stroke="${O}" stroke-width="6" stroke-linecap="round"/>
        <path d="M20 44l6 6" stroke="${W}" stroke-width="4" stroke-linecap="round"/>
      `);
    case "gearBulb":
      return wrap(`
        <path d="M32 12c7 0 12 5 12 12 0 5-2 8-5 11-2 2-2 4-2 6H27c0-2 0-4-2-6-3-3-5-6-5-11 0-7 5-12 12-12Z" fill="${W}" opacity=".95"/>
        <path d="M26 44h12" stroke="${O}" stroke-width="6" stroke-linecap="round"/>
        <path d="M22 26a10 10 0 1 0 20 0" stroke="${W}" stroke-width="4" opacity=".7"/>
      `);
    case "gear":
      return wrap(`
        <path d="M32 44a12 12 0 1 1 0-24 12 12 0 0 1 0 24Z" stroke="${W}" stroke-width="4"/>
        <path d="M32 28v8M28 32h8" stroke="${O}" stroke-width="5" stroke-linecap="round"/>
      `);
    case "bolt":
      return wrap(`<path d="M34 10L18 36h12l-4 18 20-28H34l0-16Z" fill="${O}"/>`);
    case "shield":
      return wrap(`
        <path d="M32 12l16 6v14c0 12-7 18-16 22-9-4-16-10-16-22V18l16-6Z" fill="${W}" opacity=".95"/>
        <path d="M26 32l4 4 10-12" stroke="${O}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      `);
    default:
      return wrap(`<circle cx="32" cy="32" r="12" fill="${O}"/>`);
  }
}

// =======================
// Slider config
// =======================
const PER_PAGE = 8; // ✅ ثابت: 4 فوق + 4 تحت
let page = 0;
let observer = null;

// =======================
// Helpers
// =======================
function byId(id) { return document.getElementById(id); }

function totalPages() {
  return Math.max(1, Math.ceil(DepartmentsData.length / PER_PAGE));
}

function clampPage() {
  page = Math.max(0, Math.min(page, totalPages() - 1));
}

function sliceForPage() {
  const start = page * PER_PAGE;
  return DepartmentsData.slice(start, start + PER_PAGE);
}

function makeCard(dept, i) {
  const card = document.createElement("div");
  card.className = "dept-card js-reveal";
  card.style.setProperty("--delay", `${220 + i * 50}ms`);
  card.innerHTML = `
    <div class="dept-icon">${iconSVG(dept.icon)}</div>
    <p class="dept-name"></p>
  `;
  card.querySelector(".dept-name").textContent = dept.name;
  return card;
}

function makePlaceholder(i) {
  const ph = document.createElement("div");
  ph.className = "dept-card dept-placeholder";
  ph.style.opacity = "0";
  ph.style.pointerEvents = "none";
  // نخليها تاخذ مكانها بالشبكة بدون ما تبان
  return ph;
}

// =======================
// Render
// =======================
function renderSubtitle() {
  const subtitle = byId("depts-subtitle");
  if (!subtitle) return;
  subtitle.textContent = `يضم المركز ${DepartmentsData.length} قسماً متخصصاً .. كل قسم مستقل ومتخصص في مجال عمل محدد`;
  subtitle.style.setProperty("--delay", "140ms");
}

function renderGrid() {
  const grid = byId("depts-grid");
  if (!grid) return;

  grid.innerHTML = "";

  const items = sliceForPage();

  // render items
  items.forEach((dept, i) => grid.appendChild(makeCard(dept, i)));

  // ✅ إذا الصفحة الأخيرة أقل من 8 عناصر -> نضيف placeholders حتى تبقى 4×2
  const missing = PER_PAGE - items.length;
  for (let i = 0; i < missing; i++) {
    grid.appendChild(makePlaceholder(i));
  }
}

function setArrowState() {
  const prev = byId("depts-prev");
  const next = byId("depts-next");

  if (prev) prev.disabled = (page === 0);
  if (next) next.disabled = (page === totalPages() - 1);
}

function renderAll() {
  clampPage();
  renderSubtitle();
  renderGrid();
  setArrowState();
  revealOnce(true);
}

// =======================
// Arrows
// =======================
function wireArrows() {
  const prev = byId("depts-prev");
  const next = byId("depts-next");

  if (prev) prev.addEventListener("click", () => { page--; renderAll(); });
  if (next) next.addEventListener("click", () => { page++; renderAll(); });
}

// =======================
// Reveal (once)
// =======================
function initObserver() {
  if (!("IntersectionObserver" in window)) return null;
  return new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
}

function revealOnce(reobserveNew = false) {
  const els = Array.from(document.querySelectorAll(".js-reveal"));

  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  if (!observer) observer = initObserver();
  if (!observer) return;

  if (reobserveNew) {
    els.forEach((el) => {
      if (!el.classList.contains("is-visible")) observer.observe(el);
    });
  } else {
    els.forEach((el) => observer.observe(el));
  }
}

// =======================
// Init
// =======================
document.addEventListener("DOMContentLoaded", () => {
  wireArrows();
  renderAll();
});