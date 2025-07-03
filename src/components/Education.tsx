const Education = () => {
  return (
    <div className="py-60 px-100">
      <h2 className="text-4xl font-bold text-teal-100 mb-16 text-center">
        Education History
      </h2>
      <div className="relative border-l-4 border-teal-400 pl-15 space-y-14">
        <div className="relative ml-4 transition-all duration-700 timeline-entry opacity-100 translate-x-0">
          <div className="absolute -left-8 top-1 w-5 h-5 bg-teal-400 rounded-full border-4 border-teal"></div>
          <h3 className="text-2xl text-white font-semibold">
            Gymnasium 172 "Nyvky"
          </h3>
          <p className="text-teal-650 font-semibold">
            Graduated in 2022 - Math class
          </p>
          <p className="pt-2">
            {" "}
            Was enrolled in a Math-prevalent class, a competitor in a Kyiv-wide
            Math olympiad
          </p>
        </div>

        <div className="relative ml-4 transition-all duration-700 timeline-entry opacity-100 translate-x-0">
          <div className="absolute -left-8 top-1 w-5 h-5 bg-teal-400 rounded-full border-4 border-teal"></div>
          <h3 className="text-2xl text-white font-semibold">
            Slovenská technická univerzita
          </h3>
          <p className="text-white">years attended: 2022-2023</p>
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
      </div>
    </div>
  );
};

export default Education;
