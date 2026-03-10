(() => {
  // aboutScript.js (scoped)

  const dataAbout = {
    title: "نبذة عن السوق",
    paragraphs: [
      "يقدم سوق العدد الصناعية خدمات متكاملة تشمل 14 قسم إلى أسماء.",
      "نهدف لتقديم كل ما يخدم عملاءنا في جهة واحدة، مع أفضل العدد الصناعية.",
      "مما يجعل السوق وجهة آمنة تلبي احتياجات القطاع الصناعي المتنوع.",
    ],
    features: [
        { label: "سهولة الوصول", icon: "assets/about-icon-one.png" },
        { label: "تنظيم واضح", icon: "assets/about-icon-two.png" },
        { label: "تخصصات متعددة", icon: "assets/about-icon-three.png" },
        { label: "موقع واحد", icon: "assets/about-icon-four.png" },
    ],
  };

  function qs(sel) { return document.querySelector(sel); }
  function qsa(sel) { return Array.from(document.querySelectorAll(sel)); }
  function byId(id) { return document.getElementById(id); }

  function renderHeader() {
    const titleEl = byId("about-title");
    if (titleEl) titleEl.textContent = dataAbout.title || "نبذة عن السوق";

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
        <div class="about-icon">
              <img src="${f.icon}" alt="${f.label}" />
        </div>
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