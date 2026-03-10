(function() {
  /* ── Data ── */
  const slides = [
    {
      image: 'assets/first-hero.jpeg',
      title: 'سوق العدد الصناعية',
      subtitle: 'موقع واحد يضم نخبة من موردي العدد الصناعية'
    },
    {
      image: 'assets/second-hero.jpeg',
      title: 'أفضل العدد الصناعية',
      subtitle: 'نوفر لك أحدث العدد وأكثرها كفاءة من أبرز الموردين'
    },
    {
      image: 'assets/first-hero.jpeg',
      title: 'شركاء النجاح الصناعي',
      subtitle: 'نربطك بأفضل موردي العدد الصناعية في المنطقة'
    }
  ];

  /* ── State ── */
  let current = 0;
  let timer;

  /* ── Build DOM ── */
  const hero = document.getElementById('hero');
  const indicators = document.getElementById('indicators');

  if (!hero || !indicators) return;

  slides.forEach((s, i) => {
    /* Slide */
    const slide = document.createElement('div');
    slide.className = 'slide' + (i === 0 ? ' active' : '');
    slide.innerHTML = `
      <div class="slide-bg" style="background-image:url(${s.image})"></div>
      <div class="slide-content">
        <div class="slide-text">
          <h2 class="slide-title">${s.title}</h2>
          <p class="slide-subtitle">${s.subtitle}</p>
          <div class="slide-buttons">
            <button class="btn btn-primary" onclick="scrollToSection('contact')">&#9658; تواصل معنا</button>
            <button class="btn btn-secondary" onclick="scrollToSection('map')">&#9658; اعرف الموقع</button>
          </div>
        </div>
      </div>
    `;
    hero.insertBefore(slide, document.getElementById('prevBtn'));

    /* Dot */
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `الشريحة ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    indicators.appendChild(dot);
  });

  /* ── Helpers ── */
  function getSlides() { return document.querySelectorAll('.slide'); }
  function getDots()   { return document.querySelectorAll('.dot'); }

  function goTo(index) {
    const allSlides = getSlides();
    const allDots = getDots();
    if (!allSlides[current] || !allDots[current]) return;

    allSlides[current].classList.remove('active');
    allDots[current].classList.remove('active');
    
    current = (index + slides.length) % slides.length;
    
    allSlides[current].classList.add('active');
    allDots[current].classList.add('active');
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  /* ── Controls ── */
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (prevBtn) prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    goTo(current - 1);
  });
  
  if (nextBtn) nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    goTo(current + 1);
  });

  /* ── Auto-play ── */
  resetTimer();
})();