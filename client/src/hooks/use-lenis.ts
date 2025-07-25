import { useEffect } from "react";

declare global {
  interface Window {
    Lenis?: any;
  }
}

export function useLenis() {
  useEffect(() => {
    // Load Lenis from CDN
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@studio-freight/lenis@1.0.33/dist/lenis.min.js";
    script.async = true;
    
    script.onload = () => {
      if (window.Lenis) {
        const lenis = new window.Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Store lenis instance globally for cleanup
        (window as any).lenisInstance = lenis;
      }
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup
      if ((window as any).lenisInstance) {
        (window as any).lenisInstance.destroy();
        delete (window as any).lenisInstance;
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
}
