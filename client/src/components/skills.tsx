import { useEffect, useRef } from "react";

interface Skill {
  name: string;
  percentage: number;
}

const technicalSkills: Skill[] = [
  { name: "JavaScript / TypeScript", percentage: 95 },
  { name: "React.js", percentage: 70 },
  { name: "Node.js / Express", percentage: 85 },
  { name: "Python", percentage: 80 },
  { name: "MongoDB / MySQL", percentage: 75 }
];

const tools = [
  {
    name: "Git / GitHub",
    description: "Version control and collaboration",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    bgColor: "bg-blue-100"
  },
  {
    name: "VS Code",
    description: "Primary development environment",
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352z"/>
      </svg>
    ),
    bgColor: "bg-green-100"
  },
  {
    name: "Netlify / Vercel",
    description: "Cloud hosting and deployment",
    icon: (
      <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
      </svg>
    ),
    bgColor: "bg-orange-100"
  },
{
  name: "OpenAI API",
  description: "AI-driven application development",
  icon: (
    <svg
      className="w-6 h-6 text-green-600"
      fill="currentColor"
      viewBox="0 0 256 310"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M140.8 28.6c-9.8-1.5-19.8-1.3-29.4.5C100.7 10.1 77.6-2.1 53.6.2 28.3 2.6 8.4 23.4 7.3 48.7c.1 3.8.5 7.6 1.2 11.3C-8.2 77.5-3.3 110.6 18.4 129.7c-4.7 9.5-7 20-6.7 30.6.3 25.3 19.9 46.6 45 49.4 3.7.4 7.5.5 11.3.3 6.2 11.3 15.6 20.5 27.1 26.2 23 11.2 50.7 6.2 68.1-12.3 10.8 4.5 22.6 5.9 34.1 4.2 25-3.8 43.3-25.6 42.7-50.9.2-3.7-.1-7.5-.8-11.2 21.3-17.6 27.7-48 15.3-72.7-5.8-11-14.5-20.2-25.2-26.4.4-11.6-2.4-23-8.1-33.2-12.8-22.4-39.1-33.3-64-27.2zm-11.3 17.6c18.2-3.7 37.2 4.9 45.9 21.4 4.6 8.2 6.3 17.6 5 26.7l-45.6-26.3V46.2zm-60.4-8.1c14.6-1.4 28.9 6.3 36 19.4 4.6 8.2 6.3 17.6 5 26.7L64.6 58.2c2.5-10.3 9.4-18.9 18.5-24.1zm-31 44.1 45.6 26.3-23.6 40.8c-9-1.5-17.3-5.8-23.7-12.2-13.7-13.7-16.7-35.2-5.9-51.4zm67.8 128.8c-14.6 1.4-28.9-6.3-36-19.4-4.6-8.2-6.3-17.6-5-26.7h52.6v46.1zm3.6-63.7-23.6-40.8h47.2l23.6 40.8h-47.2zm67.8 63.7c-8.6.9-17.2-.9-24.8-5l23.6-40.8 39.5 22.8c-5.5 13.8-17.7 23.7-31.9 23zm-14.1-63.7h47.2c2.5 10.3.9 21.1-4.5 30.2l-39.5-22.8-3.2-7.4zm-15.4-68.1 39.5 22.8-23.6 40.8-39.5-22.8 23.6-40.8z"/>
    </svg>
  ),
  bgColor: "bg-green-100"
}

];

export default function Skills() {
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target as HTMLDivElement;
            const percentage = progressBar.getAttribute('data-percentage');
            if (percentage) {
              progressBar.style.width = percentage + '%';
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    progressRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-blue-600 font-semibold">My Skills</span>
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins mt-2 mb-6">
            Technologies I Work With
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            I'm constantly learning and improving my skills to stay current with the latest technologies and best practices.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div className="space-y-8 reveal">
            <h3 className="text-2xl font-bold font-poppins mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-800">{skill.name}</span>
                    <span className="text-blue-600 font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div 
                      ref={(el) => progressRefs.current[index] = el}
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '0%' }}
                      data-percentage={skill.percentage}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tools & Technologies */}
          <div className="space-y-8 reveal">
            <h3 className="text-2xl font-bold font-poppins mb-6">Tools & Technologies</h3>
            
            <div className="grid grid-cols-2 gap-6">
              {tools.map((tool) => (
                <div key={tool.name} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 ${tool.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    {tool.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">{tool.name}</h4>
                  <p className="text-slate-600 text-sm">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
