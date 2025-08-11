    // Animazioni scroll-triggered
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Osserva tutti gli elementi con animazione stagger
    document.querySelectorAll('.stagger-animation').forEach(el => {
      observer.observe(el);
    });

    // Smooth scroll per i link
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Parallax effect leggero per l'header
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const header = document.querySelector('header');
      if (header) {
        header.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    });