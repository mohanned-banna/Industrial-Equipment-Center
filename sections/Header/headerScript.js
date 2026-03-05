// headerScript.js

// ✅ مصدر بيانات الهيدر
const headerData = {
  contact: {
    phone: "+966500000000",
    email: "info@example.com",
  },
};

function hideHeaderOnAdminRoutes() {
  const header = document.getElementById("site-header");
  if (!header) return;

  if (window.location.pathname.startsWith("/admin")) {
    header.style.display = "none";
  }
}

function setContactInfo() {
  const phoneLink = document.getElementById("phone-link");
  const phoneText = document.getElementById("phone-text");
  const emailLink = document.getElementById("email-link");
  const emailText = document.getElementById("email-text");

  const phone = headerData?.contact?.phone || "";
  const email = headerData?.contact?.email || "";

  if (phoneLink) phoneLink.href = `tel:${phone}`;
  if (phoneText) phoneText.textContent = phone;

  if (emailLink) emailLink.href = `mailto:${email}`;
  if (emailText) emailText.textContent = email;
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });

  // ✅ أغلق قائمة الموبايل بعد الضغط
  const mobileNav = document.getElementById("menu-mobile"); // <-- مهم
  const toggleBtn = document.getElementById("menu-toggle");

  if (mobileNav && mobileNav.classList.contains("open")) {
    mobileNav.classList.remove("open");
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
    if (toggleBtn) toggleBtn.textContent = "☰";
  }
}

function wireNavButtons() {
  // ✅ استخدم data-scroll الصحيح
  document.querySelectorAll("[data-scroll]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = btn.getAttribute("data-scroll");
      if (id) scrollToSection(id);
    });
  });
}

function wireMobileMenu() {
  const toggleBtn = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("menu-mobile"); // <-- لازم يطابق الـ HTML

  if (!toggleBtn || !mobileNav) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
    toggleBtn.textContent = isOpen ? "✕" : "☰";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  hideHeaderOnAdminRoutes();
  setContactInfo();
  wireNavButtons();
  wireMobileMenu();
});