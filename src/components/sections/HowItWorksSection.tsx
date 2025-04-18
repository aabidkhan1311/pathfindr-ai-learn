
import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Profile Creation",
      description: "We analyze your goals, prior knowledge, and learning preferences through an initial assessment.",
      color: "bg-pathfinder-purple-300"
    },
    {
      number: "02",
      title: "Path Generation",
      description: "Our AI algorithms create a personalized learning journey tailored specifically to you.",
      color: "bg-pathfinder-orange-400"
    },
    {
      number: "03",
      title: "Adaptive Learning",
      description: "As you progress, the system continuously adapts to optimize your learning experience.",
      color: "bg-pathfinder-blue-400"
    },
    {
      number: "04",
      title: "Progress Tracking",
      description: "Advanced analytics monitor your progress and provide actionable insights for improvement.",
      color: "bg-pathfinder-purple-500"
    }
  ];

  return (
    <section id="how-it-works" className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="gradient-text">PathfindrAI</span> Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our reinforcement learning algorithms create a personalized
            education experience that adapts to your needs.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="relative z-10 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="bg-white p-6 rounded-lg shadow-sm border h-full flex flex-col">
                  <div className={`${step.color} text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 font-bold`}>
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 flex-grow">{step.description}</p>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex justify-end mt-4">
                      <ArrowRight className="text-gray-400" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <a href="#" className="inline-flex items-center text-pathfinder-purple-500 hover:text-pathfinder-purple-600 font-medium">
            <span>Learn more about our technology</span>
            <ChevronRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
