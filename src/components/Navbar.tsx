const Navbar = () => {
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
              Education
            </a>
            <a
              href="#experience"
              className="text-l font-medium hover:text-blue-500"
            >
              Experience
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
