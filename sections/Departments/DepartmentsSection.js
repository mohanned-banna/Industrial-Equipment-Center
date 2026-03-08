// DepartmentsSection.js (Swiper version)

const DepartmentsData = [
  { id: 1, name: "عدد دق الخرسانة", icon: "assets/icon-one.png" },
  { id: 2, name: "أدوات وبنّاء", icon: "assets/icon-two.png" },
  { id: 3, name: "مكائن لحام", icon: "assets/icon-three.png" },
  { id: 4, name: "عدد أسفلت", icon: "assets/icon-four.png" },
  { id: 5, name: "عدد ميكانيكية", icon: "assets/icon-five.png" },
  { id: 6, name: "عدد سباكة", icon: "assets/icon-sex.png" },
  { id: 7, name: "عدد هيدروليك", icon: "assets/icon-seven.png" },
  { id: 8, name: "تحضير/رمل/قص", icon: "assets/icon-eight.png" },
  { id: 9, name: "عدد محلات", icon: "assets/icon-nine.png" },
  { id: 10, name: "سهولة الوصول", icon: "assets/icon-ten.png" },
  { id: 11, name: "عدد هيدروليك", icon: "assets/icon-seven.png" },
  { id: 12, name: "تحضير/رمل/قص", icon: "assets/icon-eight.png" },
  { id: 13, name: "عدد محلات", icon: "assets/icon-nine.png" },
  { id: 14, name: "سهولة الوصول", icon: "assets/icon-ten.png" },
];

function makeCard(dept, i) {
  const slide = document.createElement("div");
  slide.className = "swiper-slide dept-slide js-reveal";
  slide.style.setProperty("--delay", `${220 + i * 50}ms`);
  slide.innerHTML = `
    <div class="dept-card">
      <img class="dept-icon" src="${dept.icon}" alt="${dept.name}" />
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
  subtitle.textContent = `يضم السوق ${DepartmentsData.length} قسماً متخصصاً .. كل قسم مستقل ومتخصص في مجال عمل محدد`;
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