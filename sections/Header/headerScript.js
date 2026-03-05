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
  const header = document.getElementById("site-header");
  const mobileNav = document.getElementById("menu-mobile"); 
  const toggleBtn = document.getElementById("menu-toggle");

  // 1. First, close the mobile menu if it's open
  // This ensures headerHeight calculation is accurate for the "resting" state
  if (mobileNav && mobileNav.classList.contains("open")) {
    mobileNav.classList.remove("open");
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
    const menuIcon = document.getElementById("menu-icon");
    if (menuIcon) menuIcon.textContent = "☰";
  }

  // 2. Now calculate and scroll
  if (el) {
    // Small delay to allow layout to settle after closing menu if necessary, 
    // but usually browser handles this if we read height now
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
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
    
    // Fix: target the inner span if it exists, or the button itself
    const menuIcon = document.getElementById("menu-icon");
    if (menuIcon) {
      menuIcon.textContent = isOpen ? "✕" : "☰";
    } else {
      toggleBtn.textContent = isOpen ? "✕" : "☰";
    }
    
    if (isOpen) updateActiveLink();
  });
}

function updateActiveLink() {
  const sections = document.querySelectorAll("section[id]");
  const navBtns = document.querySelectorAll(".nav-btn");
  const header = document.getElementById("site-header");
  const headerHeight = header ? header.getBoundingClientRect().height : 0;
  
  let currentSectionId = "";
  
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - headerHeight - 10; // offset for better trigger
    if (window.pageYOffset >= sectionTop) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navBtns.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-scroll") === currentSectionId) {
      btn.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  hideHeaderOnAdminRoutes();
  setContactInfo();
  wireNavButtons();
  wireMobileMenu();
  
  // Update active link on load and scroll
  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();
});