(() => {
  const contactData = {
    phone: "050-123.4567",
    email: "info@itm-sa.com",
    addressLabel: "حي النخيل - جده - المملكة العربية السعودية",
    hours: [
      "الأحد - الخميس : 8:00 ص - 8:00 م",
      "السبت : 9:00 ص - 6:00 م",
    ],
  };

  function byId(id) {
    return document.getElementById(id);
  }

  function iconSVG(type) {
    const white = "#f3f6fb";
    const yellow = "#f5b400";

    if (type === "phone") {
      return `
        <svg width="34" height="34" viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <circle cx="32" cy="32" r="24" stroke="${white}" stroke-width="4" opacity=".9"/>
          <path d="M25 18c2 12 9 20 21 28" stroke="${white}" stroke-width="5" stroke-linecap="round"/>
          <path d="M40 39l6 7" stroke="${white}" stroke-width="5" stroke-linecap="round"/>
        </svg>
      `;
    }

    if (type === "mail") {
      return `
        <svg width="34" height="34" viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <rect x="10" y="16" width="44" height="32" fill="${white}" opacity=".95"/>
          <path d="M12 18l20 16 20-16" stroke="#6c7c96" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
    }

    if (type === "pin") {
      return `
        <svg width="34" height="34" viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <path d="M32 10c-8 0-14 6-14 14 0 12 14 26 14 26s14-14 14-26c0-8-6-14-14-14Z" fill="${yellow}" stroke="${white}" stroke-width="3"/>
          <circle cx="32" cy="24" r="5" fill="${white}"/>
        </svg>
      `;
    }

    return `
      <svg width="34" height="34" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <circle cx="32" cy="32" r="24" stroke="${white}" stroke-width="4"/>
        <path d="M32 20v13l10 7" stroke="${white}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
  }

  function renderInfo() {
    const wrap = byId("contact-info");
    if (!wrap) return;

    wrap.innerHTML = `
      <div class="contact-info-item">
      
      <div class="contact-info-value-icon">
        <div class="contact-info-icon">${iconSVG("phone")}</div>
        <div class="contact-info-label">الصم</div>
      </div>
      <div class="contact-info-value-icon" id="contact-phone">
      <div class="contact-info-value">${contactData.phone}</div>
      <div class="contact-info-icon">${iconSVG("phone")}</div>
      </div>

      </div>

      <div class="contact-info-item">
      <div class="contact-info-value-icon">
            <div class="contact-info-icon">${iconSVG("pin")}</div>
      <div class="contact-info-label">${contactData.addressLabel}</div>
      </div>
      <div class="contact-info-value-icon" id="contact-email">
      <div class="contact-info-value">${contactData.email}</div>
      <div class="contact-info-icon">${iconSVG("mail")}</div>
      </div>
      </div>

      <div class="contact-info-item">
      <div class="contact-info-value-icon">
         <div class="contact-info-icon">${iconSVG("time")}</div>
      <div class="contact-info-value small">
      ${contactData.hours.map((h) => `<div>${h}</div>`).join("")}
      </div>
      </div>


      </div>
    `;
  }

  function applyDelays() {
    const title = document.querySelector(".contact-title-row");
    const info = document.querySelector(".contact-info");
    const form = document.querySelector(".contact-form-wrap");

    if (title) title.style.setProperty("--delay", "0ms");
    if (info) info.style.setProperty("--delay", "120ms");
    if (form) form.style.setProperty("--delay", "220ms");
  }

  function setupReveal() {
    const els = Array.from(document.querySelectorAll(".js-reveal"));

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    els.forEach((el) => observer.observe(el));
  }

  function wireForm() {
    const form = byId("contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = byId("contact-name")?.value.trim();
      const subject = byId("contact-subject")?.value.trim();
      const message = byId("contact-message")?.value.trim();

      if (!name || !subject || !message) {
        alert("يرجى تعبئة جميع الحقول");
        return;
      }

      alert("تم إرسال الرسالة بنجاح");
      form.reset();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderInfo();
    applyDelays();
    setupReveal();
    wireForm();
  });
})();