(() => {
  const mapData = {
    locationLabel: "المنطقة - الصناعية - المدينة",
    directionsUrl: "https://maps.google.com/?q=21.543333,39.172779",
    buildingImage:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1400&q=80",
  };

  function byId(id) {
    return document.getElementById(id);
  }

  function applyContent() {
    const label = byId("map-location-label");
    const button = byId("map-directions-btn");
    const image = byId("map-building-image");

    if (label) {
      label.innerHTML = `
        <span class="label-arrow">◀</span>
        <span>${mapData.locationLabel}</span>
      `;
    }

    if (button) {
      button.href = mapData.directionsUrl || "#";
    }

    if (image && mapData.buildingImage) {
      image.src = mapData.buildingImage;
    }
  }

  function applyDelays() {
    const title = document.querySelector(".map-title-row");
    const card = document.querySelector(".map-card");

    if (title) title.style.setProperty("--delay", "0ms");
    if (card) card.style.setProperty("--delay", "140ms");
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

  document.addEventListener("DOMContentLoaded", () => {
    applyContent();
    applyDelays();
    setupReveal();
  });
})();