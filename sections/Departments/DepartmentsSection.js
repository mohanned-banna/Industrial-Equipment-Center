// DepartmentsSection.js (Swiper version)

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
  { id: 13, name: "قسم جديد 13", icon: "gear" },
  { id: 14, name: "قسم جديد 14", icon: "tools" },
];

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

function makeCard(dept, i) {
  const slide = document.createElement("div");
  slide.className = "swiper-slide dept-slide js-reveal";
  slide.style.setProperty("--delay", `${220 + i * 50}ms`);
  slide.innerHTML = `
    <div class="dept-card">
      <div class="dept-icon">${iconSVG(dept.icon)}</div>
      <p class="dept-name">${dept.name}</p>
    </div>
  `;
  return slide;
}

function renderGrid() {
  const wrapper = document.getElementById("depts-slider-wrapper");
  if (!wrapper) return;
  wrapper.innerHTML = "";
  DepartmentsData.forEach((dept, i) => {
    wrapper.appendChild(makeCard(dept, i));
  });
}

function renderSubtitle() {
  const subtitle = document.getElementById("depts-subtitle");
  if (!subtitle) return;
  subtitle.textContent = `يضم المركز ${DepartmentsData.length} قسماً متخصصاً .. كل قسم مستقل ومتخصص في مجال عمل محدد`;
}

function initSwiper() {
  new Swiper(".deptsSwiper", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: 'row'
    },
    spaceBetween: 20,
    loop: false,
    navigation: {
      nextEl: "#depts-next",
      prevEl: "#depts-prev",
    },
    pagination: {
      el: "#depts-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      400: {
        slidesPerView: 2,
        grid: {
          rows: 1,
          fill: 'row'
        },
      },
      640: {
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: 'row'
        },
      },
      1024: {
        slidesPerView: 3,
        grid: {
          rows: 2,
          fill: 'row'
        },
      },
      1200: {
        slidesPerView: 4,
        grid: {
          rows: 2,
          fill: 'row'
        },
      },
    },
  });
}

function setupReveal() {
  const els = Array.from(document.querySelectorAll(".js-reveal"));
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  renderSubtitle();
  renderGrid();
  initSwiper();
  setupReveal();
});