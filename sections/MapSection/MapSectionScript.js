(() => {
  const mapData = {
    locationLabel: "المنطقة - الصناعية - المدينة",
    directionsUrl: "https://www.google.com/maps/place/%D8%B3%D9%88%D9%82+%D8%A7%D9%84%D8%B9%D8%AF%D8%AF+%D8%A7%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D9%8A%D8%A9%E2%80%AD/@21.5185334,39.2503431,17z/data=!3m1!4b1!4m6!3m5!1s0x15c3cd0087717f63:0x1e34227044a23ef8!8m2!3d21.5185334!4d39.2503431!16s%2Fg%2F11tcj73zc9!17m2!4m1!1e3!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D",
    buildingImage:
      "assets/image-map.jpg",
      mapEmbedUrl: "https://www.google.com/maps?q=21.5185334,39.2503431&hl=ar&z=17&output=embed"
  };

  function byId(id) {
    return document.getElementById(id);
  }

  function applyContent() {
    const label = byId("map-location-label");
    const button = byId("map-directions-btn");
    const image = byId("map-building-image");
    const iframe = byId('map-iframe')

    if (label) {
      label.innerHTML = `
        <span class="label-arrow">◀</span>
        <span>${mapData.locationLabel}</span>
      `;
    }

    if (button) {
      button.href = mapData.directionsUrl || "#";
    }
    if(iframe){
      iframe.src = mapData.mapEmbedUrl || "#";
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