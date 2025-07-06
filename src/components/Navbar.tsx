import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 bg-gray-800/60 backdrop-blur-sm shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-2xl font-bold !text-teal-400">
            Oleksii Moiseienko
          </a>
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="text-l font-medium hover:text-blue-500">
              Home
            </a>
            <a href="#about" className="text-l font-medium hover:text-blue-500">
              About me
            </a>
            <a
              href="#education"
              className="text-l font-medium hover:text-blue-500"
            >
              Education & Experience
            </a>
            <a
              href="#projects"
              className="text-l font-medium hover:text-blue-500"
            >
              Projects
            </a>
            <a
              href="#certifications"
              className="text-l font-medium hover:text-blue-500"
            >
              Certifications
            </a>
            <a
              href="#contact"
              className="text-l font-medium hover:text-blue-500"
            >
              Contact
            </a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900/50 backdrop-blur-sm px-4 pt-2 pb-4 space-y-2">
          <a
            href="#home"
            className="block text-l font-medium hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-l font-medium hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            About me
          </a>
          <a
            href="#education"
            className="block text-l font-medium hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Education & Experience
          </a>
          <a
            href="#projects"
            className="block text-l font-medium hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#certifications"
            className="block text-l font-medium hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Certifications
          </a>
          <a
            href="#contact"
            className="block text-l font-medium hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
