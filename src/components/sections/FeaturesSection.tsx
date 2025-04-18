
import React from 'react';
import { BarChart, Brain, Clock, Database, LineChart, Target, Zap, Layers } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Adaptive Learning",
      description: "Courses that adjust in real-time to your learning pace, style and preferences.",
      color: "text-pathfinder-purple-400",
      bgColor: "bg-pathfinder-purple-100"
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Progress Tracking",
      description: "Comprehensive analytics that visualize your learning journey and highlight strengths.",
      color: "text-pathfinder-blue-400",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Personalized Paths",
      description: "Unique learning journeys generated specifically for your educational goals.",
      color: "text-pathfinder-orange-400",
      bgColor: "bg-orange-50"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Intelligent Recommendations",
      description: "AI-powered course suggestions based on your interests and career objectives.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Optimized Learning Time",
      description: "Efficiency-focused scheduling that maximizes retention and understanding.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Knowledge Graphs",
      description: "Visual representations of your knowledge domains and connections between concepts.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform combines cutting-edge AI technology with proven educational
            methodologies to deliver an unparalleled learning experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="border rounded-lg p-6 transition-all hover:shadow-md opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className={`${feature.bgColor} rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
                <div className={feature.color}>{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
