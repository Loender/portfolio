const Education = () => {
  return (
    <div className="py-16 px-100">
      <h2 className="text-4xl font-bold mb-16 text-center">
        Education and Experience
      </h2>
      <div className="relative border-l-4 border-teal-400 pl-15 space-y-10">
        <div className="relative ml-4 transition-all duration-700 timeline-entry opacity-100 translate-x-0">
          <div className="absolute -left-8 top-1 w-5 h-5 bg-teal-400 rounded-full border-4 border-teal"></div>
          <h3 className="text-2xl text-white font-semibold">
            Gymnasium 172 "Nyvky"
          </h3>
          <p className="text-teal-650 font-semibold">
            Graduated in 2022 - Math class
          </p>
          <p className="pt-2 text-white">
            Enrolled in a math-focused program and competed in a Kyiv-wide
            mathematics olympiad.
          </p>
        </div>

        <div className="relative ml-4 transition-all duration-700 timeline-entry opacity-100 translate-x-0">
          <div className="absolute -left-8 top-1 w-5 h-5 bg-teal-400 rounded-full border-4 border-teal"></div>
          <h3 className="text-2xl text-white font-semibold">
            Slovenská technická univerzita
          </h3>
          <p className="text-teal-650 font-semibold">
            Years attended: 2022-2023
          </p>
        </div>

        <div className="relative ml-4 transition-all duration-700 timeline-entry opacity-100 translate-x-0">
          <div className="absolute -left-8 top-1 w-5 h-5 bg-teal-400 rounded-full border-4 border-teal"></div>
          <h3 className="text-2xl text-white font-semibold">
            Vilnius Gediminas Technical University
          </h3>
          <p className="text-teal-650 font-semibold">
            B.Sc Information Techology, years 2023-2027
          </p>
        </div>

        <div className="relative ml-4 transition-all duration-700 timeline-entry opacity-100 translate-x-0">
          <div className="absolute -left-8 top-1 w-5 h-5 bg-teal-400 rounded-full border-4 border-teal"></div>
          <h3 className="text-2xl text-white font-semibold">
            English-Russian Interpreter
          </h3>
          <p className="text-teal-650 font-semibold">
            Teleperformance, Oct 2024 - Feb 2025
          </p>
          <p className="pt-2 text-white">
            Real-time Russian-English interpretation, ensuring accurate,
            confidential, and neutral communication. This role strengthened my
            communication skills and required strict adherence to professional
            standards.
          </p>
        </div>

        <div className="relative ml-4 transition-all duration-700 timeline-entry opacity-100 translate-x-0">
          <div className="absolute -left-8 top-1 w-5 h-5 bg-teal-400 rounded-full border-4 border-teal"></div>
          <h3 className="text-2xl text-white font-semibold">
            Part-time Freelance + Studying
          </h3>
          <p className="text-teal-650 font-semibold">
            Software Developer, Jun 2022 - Current
          </p>
          <p className="pt-2 text-white">
            I designed custom API endpoints, built web pages and reusable UI
            components, implemented detailed logging to streamline debugging and
            improve application performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
