
import React from 'react';
import { Brain, Sparkles, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">PathfindrAI</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing education through the power of reinforcement learning,
            creating truly personalized learning experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 border shadow-sm opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-pathfinder-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <Brain className="text-pathfinder-purple-500 h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">Reinforcement Learning</h3>
            <p className="text-gray-600">
              Our AI learns from your interactions, progress, and feedback, continuously refining
              your learning path to maximize knowledge acquisition and retention.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 border shadow-sm opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-pathfinder-orange-400 bg-opacity-20 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <Sparkles className="text-pathfinder-orange-400 h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">Data-Driven Insights</h3>
            <p className="text-gray-600">
              We analyze learning patterns across millions of data points to identify the most
              effective methods and materials for your specific learning style.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 border shadow-sm opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="bg-pathfinder-blue-400 bg-opacity-20 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <Zap className="text-pathfinder-blue-400 h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">Continuous Adaptation</h3>
            <p className="text-gray-600">
              As you learn, our platform evolves with you, adjusting difficulty, pace, and content
              delivery methods to ensure optimal learning efficiency.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-gray-500 italic">
            "Education is not one-size-fits-all. Each learner deserves a path as unique as they are."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
