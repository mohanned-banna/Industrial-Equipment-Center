(() => {
  const galleryData = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
      alt: "المعرض 1",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80",
      alt: "المعرض 2",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      alt: "المعرض 3",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
      alt: "المعرض 4",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80",
      alt: "المعرض 5",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
      alt: "المعرض 6",
    },
  ];

  const track = document.getElementById("gallery-track");
  const prevBtn = document.getElementById("gallery-prev");
  const nextBtn = document.getElementById("gallery-next");

  let currentIndex = 0;
  let autoplayId = null;

  function slidesToShow() {
    const w = window.innerWidth;
    if (w <= 640) return 1;
    if (w <= 1024) return 2;
    return 3;
  }

  function buildSlides() {
    if (!track) return;

    track.innerHTML = "";

    galleryData.forEach((image) => {
      const slide = document.createElement("div");
      slide.className = "gallery-slide";
      slide.innerHTML = `
        <div class="gallery-card">
          <img class="gallery-image" src="${image.url}" alt="${image.alt}">
        </div>
      `;
      track.appendChild(slide);
    });
  }

  function maxIndex() {
    return Math.max(0, galleryData.length - slidesToShow());
  }

  function updateSlider() {
    if (!track) return;

    if (currentIndex < 0) currentIndex = maxIndex();
    if (currentIndex > maxIndex()) currentIndex = 0;

    const show = slidesToShow();
    const percent = 100 / show;
    track.style.transform = `translateX(${currentIndex * percent}%)`;
  }

  function nextSlide() {
    currentIndex += 1;
    if (currentIndex > maxIndex()) currentIndex = 0;
    updateSlider();
  }

  function prevSlide() {
    currentIndex -= 1;
    if (currentIndex < 0) currentIndex = maxIndex();
    updateSlider();
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayId = setInterval(nextSlide, 3000);
  }

  function stopAutoplay() {
    if (autoplayId) {
      clearInterval(autoplayId);
      autoplayId = null;
    }
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

  function bindEvents() {
    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);

    const sliderWrap = document.querySelector(".gallery-slider-wrap");
    if (sliderWrap) {
      sliderWrap.addEventListener("mouseenter", stopAutoplay);
      sliderWrap.addEventListener("mouseleave", startAutoplay);
    }

    window.addEventListener("resize", () => {
      if (currentIndex > maxIndex()) currentIndex = maxIndex();
      updateSlider();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    buildSlides();
    updateSlider();
    bindEvents();
    setupReveal();
    startAutoplay();
  });
})();