
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Crypo Prediction App",
    description: "A machine learning project that predicts cryptocurrency prices using historical data and time series analysis.",
    image: "https://i.imghippo.com/files/UN1423TGk.jpg",
    category: "web",
    tags: ["Python", "CNN"],
    demoUrl: "https://github.com/Afsar0217/crypto-price-prediction",
    githubUrl: "https://github.com/Afsar0217/crypto-price-prediction"
  },
  {
    id: 2,
    title: "ChatBot with LangChain and OpenAI Integration",
    description: "An interactive chatbot built using LangChain, OpenAI's LLMs, and Streamlit for answering user queries from uploaded documents.",
    image: "https://i.imghippo.com/files/TD1359LI.webp",
    category: "mobile",
    tags: ["Python", "LangChain"],
    demoUrl: "https://github.com/Afsar0217/llm-project",
    githubUrl: "https://github.com/Afsar0217/llm-project"
  },
  {
    id: 3,
    title: "Resto Web App",
    description: "A responsive restaurant web app that allows users to explore, filter, and review various restaurants with a sleek UI.",
    image: "https://i.imghippo.com/files/bb7880Pr.png",
    category: "web",
    tags: ["React.js", "Tailwind CSS"],
    demoUrl: "https://resto-web-app.vercel.app/",
    githubUrl: "https://github.com/Afsar0217/resto-web-app"
  },
  {
    id: 4,
    title: "Todo App",
    description: "A simple and responsive to-do list application built with React for managing daily tasks efficiently.",
    image: "https://i.imghippo.com/files/MwWp1568s.jpg",
    category: "design",
    tags: ["React.js", "Javascript"],
    demoUrl: "https://todo-app1-theta-nine.vercel.app/login.html",
    githubUrl: "https://github.com/Afsar0217/todo-app"
  },
  {
    id: 5,
    title: "Task Management Tool",
    description: "In Progress...",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "web",
    tags: ["Next.js", "Prisma"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "In Progress...",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "mobile",
    tags: ["Flutter", "Dart"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

export default function Work() {

  return (
    <section id="work" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-blue-600 font-semibold">My Work</span>
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins mt-2 mb-6">
            Featured Projects
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating amazing digital experiences.
          </p>
        </div>
        

        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 reveal"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.demoUrl}
                    className="bg-white text-blue-600 p-3 rounded-full hover:bg-slate-100 transition-colors"
                    aria-label="View live demo"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="bg-white text-blue-600 p-3 rounded-full hover:bg-slate-100 transition-colors"
                    aria-label="View source code"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={tag}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        index === 0 
                          ? "bg-blue-100 text-blue-600" 
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold font-poppins mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <a 
                  href={project.demoUrl}
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center space-x-1"
                >
                  <span>View Project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
