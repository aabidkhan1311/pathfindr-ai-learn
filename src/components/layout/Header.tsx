
import React from 'react';
import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="h-8 w-8 text-pathfinder-purple-400" />
          <span className="text-xl font-display font-bold">PathfindrAI</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-medium hover:text-pathfinder-purple-400 transition-colors">
            About Us
          </a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-pathfinder-purple-400 transition-colors">
            How It Works
          </a>
          <a href="#features" className="text-sm font-medium hover:text-pathfinder-purple-400 transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-pathfinder-purple-400 transition-colors">
            Testimonials
          </a>
          <Button className="bg-pathfinder-orange-400 hover:bg-orange-500">Get Started</Button>
        </nav>
        
        <button 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg">
          <nav className="container flex flex-col py-4 gap-4">
            <a 
              href="#about" 
              className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#how-it-works" 
              className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#features" 
              className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <Button className="bg-pathfinder-orange-400 hover:bg-orange-500">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
