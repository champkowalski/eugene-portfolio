import React from "react";
import { Menu, X, LineChart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <LineChart className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Eugene Amoo-Sargon</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600">
              Home
            </a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600">
              Projects
            </a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600">
              Skills
            </a>
            <a href="#education" className="text-gray-600 hover:text-blue-600">
              Education
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#home" className="block text-gray-600 hover:text-blue-600">
              Home
            </a>
            <a href="#projects" className="block text-gray-600 hover:text-blue-600">
              Projects
            </a>
            <a href="#skills" className="block text-gray-600 hover:text-blue-600">
              Skills
            </a>
            <a href="#education" className="block text-gray-600 hover:text-blue-600">
              Education
            </a>
            <a href="#contact" className="block text-gray-600 hover:text-blue-600">
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
