(() => {
  // aboutScript.js (scoped)

  const dataAbout = {
    title: "نبذة عن المركز",
    paragraphs: [
      "يقدم مركز ربيع المعدات الصناعية خدمات متكاملة تشمل 12 قسم إلى أسماء.",
      "نهدف لتقديم كل ما يخدم عملاءنا في جهة واحدة، مع أفضل المعدات الصناعية.",
      "مما يجعل المركز وجهة آمنة تلبي احتياجات القطاع الصناعي المتنوع.",
    ],
    features: [
        { label: "سهولة الوصول", icon: "access" },
        { label: "تنظيم واضح", icon: "support" },
        { label: "تخصصات متعددة", icon: "clipboard" },
        { label: "موقع واحد", icon: "location" },
    ],
  };

  function iconSVG(type) {
    const blue = "#1e3a5f";
    const orange = "#f5a623";

    const icons = {
      location: `
        <svg width="46" height="46" viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <path d="M10 36c7 0 12-6 12-6s5 6 10 6 10-6 10-6 5 6 12 6" stroke="${blue}" stroke-width="3" stroke-linecap="round"/>
          <path d="M32 10c-8 0-14 6-14 14 0 12 14 26 14 26s14-14 14-26c0-8-6-14-14-14Z" fill="${orange}" stroke="${blue}" stroke-width="3"/>
          <circle cx="32" cy="24" r="5" fill="white" stroke="${blue}" stroke-width="3"/>
        </svg>
      `,
      clipboard: `
        <svg width="46" height="46" viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <rect x="16" y="14" width="32" height="40" rx="4" fill="white" stroke="${blue}" stroke-width="3"/>
          <rect x="24" y="10" width="16" height="10" rx="3" fill="${orange}" stroke="${blue}" stroke-width="3"/>
          <path d="M22 30h20M22 38h20M22 46h14" stroke="${blue}" stroke-width="3" stroke-linecap="round"/>
        </svg>
      `,
      support: `
        <svg width="46" height="46" viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <path d="M20 30c0-8 5-14 12-14s12 6 12 14" stroke="${blue}" stroke-width="3" stroke-linecap="round"/>
          <path d="M18 30h-2c-3 0-5 2-5 5v4c0 3 2 5 5 5h2V30Z" fill="${orange}" stroke="${blue}" stroke-width="3"/>
          <path d="M46 30h2c3 0 5 2 5 5v4c0 3-2 5-5 5h-2V30Z" fill="${orange}" stroke="${blue}" stroke-width="3"/>
          <path d="M26 46c2 3 6 6 10 6 6 0 10-4 10-10" stroke="${blue}" stroke-width="3" stroke-linecap="round"/>
        </svg>
      `,
      access: `
        <svg width="46" height="46" viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <path d="M18 40c0 8 6 14 14 14s14-6 14-14-6-14-14-14" stroke="${blue}" stroke-width="3" stroke-linecap="round"/>
          <path d="M32 26h10" stroke="${blue}" stroke-width="3" stroke-linecap="round"/>
          <circle cx="46" cy="26" r="10" fill="${orange}" stroke="${blue}" stroke-width="3"/>
          <path d="M42 26l3 3 6-6" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `,
    };

    return icons[type] || icons.access;
  }

  function qs(sel) { return document.querySelector(sel); }
  function qsa(sel) { return Array.from(document.querySelectorAll(sel)); }
  function byId(id) { return document.getElementById(id); }

  function renderHeader() {
    const titleEl = byId("about-title");
    if (titleEl) titleEl.textContent = dataAbout.title || "نبذة عن المركز";

    const paras = Array.isArray(dataAbout.paragraphs)
      ? dataAbout.paragraphs
      : [dataAbout.description || "", "", ""];

    const p1 = byId("about-p1");
    const p2 = byId("about-p2");
    const p3 = byId("about-p3");

    if (p1) p1.textContent = paras[0] || "";
    if (p2) p2.textContent = paras[1] || "";
    if (p3) p3.textContent = paras[2] || "";
  }

  function renderFeatures() {
    const bar = byId("about-bar");
    if (!bar) return;

    bar.innerHTML = "";
    (dataAbout.features || []).slice(0, 4).forEach((f) => {
      const item = document.createElement("div");
      item.className = "about-item";
      item.innerHTML = `
        <div class="about-icon">${iconSVG(f.icon)}</div>
        <p class="about-label"></p>
      `;
      item.querySelector(".about-label").textContent = f.label || "";
      bar.appendChild(item);
    });
  }

  function applyDelays() {
    const titleWrap = qs(".about-title-wrap");
    const desc = qs(".about-desc");
    const bar = qs("#about-bar");

    if (titleWrap) titleWrap.style.setProperty("--delay", "0ms");
    if (desc) desc.style.setProperty("--delay", "120ms");
    if (bar) bar.style.setProperty("--delay", "220ms");

    const items = qsa("#about-bar .about-item");
    items.forEach((item, i) => {
      item.classList.add("js-reveal");
      item.style.setProperty("--delay", `${300 + i * 100}ms`);
    });
  }

  let aboutObserver = null;

  function initObserver() {
    if (!("IntersectionObserver" in window)) return null;
    return new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          aboutObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
  }

  function revealOnce() {
    const all = qsa(".js-reveal");

    if (!("IntersectionObserver" in window)) {
      all.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    if (!aboutObserver) aboutObserver = initObserver();
    if (!aboutObserver) return;

    all.forEach((el) => {
      if (!el.classList.contains("is-visible")) aboutObserver.observe(el);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    renderFeatures();
    applyDelays();
    revealOnce();
  });
})();