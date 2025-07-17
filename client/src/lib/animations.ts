// Animation utilities and configurations for the portfolio

export const animationConfig = {
  // GSAP animation settings
  gsap: {
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.1,
  },
  
  // Lenis smooth scroll settings
  lenis: {
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    mouseMultiplier: 1,
    touchMultiplier: 2,
  },
  
  // CSS transition settings
  css: {
    duration: "300ms",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  }
};

export const revealAnimation = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.8,
    ease: "easeOut",
  }
};

export const fadeInUpAnimation = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.6,
    ease: "easeOut",
  }
};

export const slideInLeftAnimation = {
  initial: {
    opacity: 0,
    x: -30,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    duration: 0.6,
    ease: "easeOut",
  }
};

export const slideInRightAnimation = {
  initial: {
    opacity: 0,
    x: 30,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    duration: 0.6,
    ease: "easeOut",
  }
};

// Utility function to add reveal class on scroll
export const addRevealOnScroll = () => {
  const reveals = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  reveals.forEach((reveal) => {
    revealObserver.observe(reveal);
  });

  return () => {
    revealObserver.disconnect();
  };
};

// Progress bar animation utility
export const animateProgressBars = () => {
  const progressBars = document.querySelectorAll('[data-percentage]');
  
  const progressObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target as HTMLElement;
          const percentage = progressBar.getAttribute('data-percentage');
          if (percentage) {
            progressBar.style.width = percentage + '%';
          }
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  progressBars.forEach((bar) => {
    progressObserver.observe(bar);
  });

  return () => {
    progressObserver.disconnect();
  };
};
