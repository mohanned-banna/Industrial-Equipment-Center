/* ── Data ── */
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80',
      title: 'مركز بيع المعدات الصناعية',
      subtitle: 'موقع واحد يضم نخبة من موردي المعدات الصناعية'
    },
    {
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80',
      title: 'أفضل المعدات الصناعية',
      subtitle: 'نوفر لك أحدث المعدات وأكثرها كفاءة من أبرز الموردين'
    },
    {
      image: 'https://images.unsplash.com/photo-1565793979745-6d2c0a1f9f0b?w=1600&q=80',
      title: 'شركاء النجاح الصناعي',
      subtitle: 'نربطك بأفضل موردي المعدات الصناعية في المنطقة'
    }
  ];

  /* ── State ── */
  let current = 0;
  let timer;

  /* ── Build DOM ── */
  const hero = document.getElementById('hero');
  const indicators = document.getElementById('indicators');

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
            <button class="btn btn-primary" onclick="scrollTo('contact')">&#9658; تواصل معنا</button>
            <button class="btn btn-secondary" onclick="scrollTo('about')">&#9658; اعرت موقفنا</button>
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
    getSlides()[current].classList.remove('active');
    getDots()[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    getSlides()[current].classList.add('active');
    getDots()[current].classList.add('active');
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  /* ── Controls ── */
  document.getElementById('prevBtn').addEventListener('click', () => goTo(current - 1));
  document.getElementById('nextBtn').addEventListener('click', () => goTo(current + 1));

  /* ── Auto-play ── */
  resetTimer();