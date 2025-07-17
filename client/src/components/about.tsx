export default function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Images */}
          <div className="relative reveal">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Developer workspace" 
                className="rounded-2xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Technology and coding" 
                className="rounded-2xl shadow-lg mt-8"
              />
            </div>
            
            {/* Floating skill icons */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-float">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
              </svg>
            </div>
            
            <div className="absolute bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg animate-float" style={{animationDelay: '-2s'}}>
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
          
          {/* About Content */}
          <div className="space-y-6 reveal">
            <div>
              <span className="text-blue-600 font-semibold">About Me</span>
              <h2 className="text-3xl lg:text-4xl font-bold font-poppins mt-2 mb-6">
                Passionate Developer Who Loves Creating Amazing Digital Experiences
              </h2>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              I'm a full-stack developer with over 3 years of coding experience creating web applications that users love. 
              I specialize in React, Node.js, and modern web technologies to build scalable, performant solutions.
            </p>
            
            <p className="text-slate-600 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, 
              or sharing knowledge with the developer community through blog posts and tutorials.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-slate-600">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-slate-600">Programming Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">3+</div>
                <div className="text-slate-600">Years Coding Experience</div>
              </div>
            </div>
            
            <button
              onClick={() => scrollToSection('work')}
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold"
            >
              <span>View My Portfolio</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
