import { useEffect } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Work from "@/components/work";
import Reviews from "@/components/reviews";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { useGSAP } from "@/hooks/use-gsap";

export default function Home() {
  useGSAP();

  // Back to top functionality
  useEffect(() => {
    const backToTopBtn = document.querySelector('[data-back-to-top]');
    
    const toggleBackToTop = () => {
      if (window.scrollY > 300) {
        backToTopBtn?.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
        backToTopBtn?.classList.add('opacity-100', 'translate-y-0');
      } else {
        backToTopBtn?.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
        backToTopBtn?.classList.remove('opacity-100', 'translate-y-0');
      }
    };
    
    window.addEventListener('scroll', toggleBackToTop);
    return () => window.removeEventListener('scroll', toggleBackToTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
      
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transform transition-all duration-300 opacity-0 translate-y-10 pointer-events-none z-50"
        data-back-to-top
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
        </svg>
      </button>
    </div>
  );
}
