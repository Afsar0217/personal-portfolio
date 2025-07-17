import heroImage from "@assets/My pic 1_1752587762730.png";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen hero-bg overflow-hidden flex items-center">
      {/* Floating Particles */}
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 py-20 pt-32 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white space-y-6 reveal">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>Available for work</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold font-poppins leading-tight hero-title">
              <span className="block text-slate-300">Hello, I'm</span>
              <span className="text-white">Mohammad Afsar</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Full Stack Developer
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
              I create exceptional digital experiences that combine beautiful design with powerful functionality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-center"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className="btn-secondary text-center"
              >
                View My Work
              </button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative reveal">
            <div className="relative">
              <img 
                src={heroImage}
                alt="Mohammad Afsar - Full Stack Developer" 
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full mx-auto border-4 border-white/20"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4 animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">3+</div>
                  <div className="text-sm text-slate-300">Years Into Coding</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4 animate-float" style={{animationDelay: '-3s'}}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-sm text-slate-300">Projects Done</div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-8 bg-cyan-500/20 backdrop-blur-sm rounded-full p-3 animate-float" style={{animationDelay: '-1.5s'}}>
                <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
