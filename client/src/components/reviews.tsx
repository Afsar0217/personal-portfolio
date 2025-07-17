interface Review {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechCorp",
    content: "Henry delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise helped us increase our conversion rate by 40%.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    rating: 5
  },
  {
    id: 2,
    name: "Mike Chen",
    position: "Founder",
    company: "StartupXYZ",
    content: "Working with Henry was a game-changer for our startup. He transformed our idea into a beautiful, functional app that our users absolutely love.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "CTO",
    company: "InnovateCorp",
    content: "Henry's expertise in both frontend and backend development made our project seamless. He's not just a developer, but a true problem solver.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    rating: 5
  }
];

export default function Reviews() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg 
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-blue-600 font-semibold">Testimonials</span>
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins mt-2 mb-6">
            What Clients Say About Me
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            I'm proud to have worked with amazing clients who trusted me with their projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow reveal">
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(review.rating)}
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                "{review.content}"
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src={review.image}
                  alt={`${review.name} - ${review.position} at ${review.company}`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-slate-800">{review.name}</h4>
                  <p className="text-slate-500 text-sm">{review.position} at {review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
