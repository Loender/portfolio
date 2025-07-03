const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 bg-gray-800 bg-opacity-50 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#Home" className="text-2xl font-bold text-teal-400">
            Oleksii
          </a>
          <div className="hidden md:flex space-x-4">
            <a
              href="#projects"
              className="text-sm font-medium hover:text-blue-500"
            >
              Projects
            </a>
            <a
              href="#certifications"
              className="text-sm font-medium hover:text-blue-500"
            >
              Certifications
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-blue-500"
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
