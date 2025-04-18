
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, CircleUser, LayoutDashboard, GraduationCap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-pathfinder-purple-100">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Unlock Your <span className="gradient-text">Unique Learning Path</span> with AI
            </h1>
            <p className="text-lg text-gray-600">
              Experience education tailored to your goals, learning style, and pace with our
              advanced reinforcement learning platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-pathfinder-orange-400 hover:bg-orange-500 text-white gap-2">
                Get Started <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="gap-2">
                Learn More <ArrowRight size={18} />
              </Button>
            </div>
          </div>
          
          <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative z-10 bg-white rounded-lg shadow-xl p-6 border border-gray-100">
              <div className="absolute -top-6 -left-6 bg-pathfinder-purple-400 rounded-full p-4 shadow-lg">
                <Brain className="h-8 w-8 text-white" />
              </div>
              
              <div className="space-y-4 mt-6">
                <h3 className="font-semibold text-lg">Your Learning Assistant</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-md">
                    <CircleUser className="h-5 w-5 text-pathfinder-purple-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Progress Analysis</p>
                      <p className="text-xs text-gray-500">Your learning pattern shows high engagement with interactive content</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-pathfinder-purple-100 p-3 rounded-md">
                    <LayoutDashboard className="h-5 w-5 text-pathfinder-purple-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Recommended Next</p>
                      <p className="text-xs text-gray-500">Advanced Data Structures (94% match based on your goals)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-md">
                    <GraduationCap className="h-5 w-5 text-pathfinder-purple-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Learning Path</p>
                      <p className="text-xs text-gray-500">You're 68% complete with your current learning objective</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-pathfinder-orange-400 opacity-20"></div>
            <div className="hidden md:block absolute -top-8 -right-8 w-32 h-32 rounded-full bg-pathfinder-blue-400 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
