import { useEffect } from "react";

declare global {
  interface Window {
    gsap?: any;
    ScrollTrigger?: any;
  }
}

export function useGSAP() {
  useEffect(() => {
    // Load GSAP from CDN
    const gsapScript = document.createElement("script");
    gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    gsapScript.async = true;

    const scrollTriggerScript = document.createElement("script");
    scrollTriggerScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
    scrollTriggerScript.async = true;

    let scriptsLoaded = 0;
    const initializeGSAP = () => {
      scriptsLoaded++;
      if (scriptsLoaded === 2 && window.gsap && window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);
        setupAnimations();
      }
    };

    gsapScript.onload = initializeGSAP;
    scrollTriggerScript.onload = initializeGSAP;

    document.head.appendChild(gsapScript);
    document.head.appendChild(scrollTriggerScript);

    const setupAnimations = () => {
      const { gsap, ScrollTrigger } = window;

      // Reveal animations
      gsap.utils.toArray('.reveal').forEach((element: any) => {
        gsap.fromTo(element, {
          opacity: 0,
          y: 50,
        }, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          }
        });
      });

      // Progress bars animation
      gsap.utils.toArray('[data-percentage]').forEach((element: any) => {
        const percentage = element.getAttribute('data-percentage');
        gsap.fromTo(element, {
          width: '0%',
        }, {
          width: `${percentage}%`,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reset",
          }
        });
      });

      // Hero title animation
      gsap.timeline()
        .fromTo('.hero-title span:first-child', {
          opacity: 0,
          y: 30,
        }, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        })
        .fromTo('.hero-title span:nth-child(2)', {
          opacity: 0,
          y: 30,
        }, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        }, "-=0.4")
        .fromTo('.hero-title span:last-child', {
          opacity: 0,
          y: 30,
        }, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        }, "-=0.4");

      // Floating elements animation
      gsap.utils.toArray('.animate-float').forEach((element: any, index: number) => {
        gsap.to(element, {
          y: -20,
          rotation: 180,
          duration: 6,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
          delay: index * 0.5,
        });
      });

      // Particles animation
      gsap.utils.toArray('.particle').forEach((particle: any, index: number) => {
        gsap.to(particle, {
          y: -30,
          x: Math.random() * 20 - 10,
          rotation: 360,
          duration: 8 + index * 2,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });
      });
    };

    return () => {
      // Cleanup
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
      if (gsapScript.parentNode) {
        gsapScript.parentNode.removeChild(gsapScript);
      }
      if (scrollTriggerScript.parentNode) {
        scrollTriggerScript.parentNode.removeChild(scrollTriggerScript);
      }
    };
  }, []);
}
