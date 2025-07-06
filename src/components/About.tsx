const backEndLanguages = [
  { name: "Java", exp: "Expert" },
  { name: "C#", exp: "Advanced" },
  { name: "Python", exp: "Advanced" },
  { name: "JavaScript/TypeScript", exp: "Advanced" },
  { name: "C++", exp: "Intermediate" },
];
const webDevLanguages = [
  { name: "React (+ Next.JS)", exp: "Advanced" },
  { name: "Flask", exp: "Intermediate" },
  { name: "Angular", exp: "Beginner" },
  { name: "SCSS", exp: "Intermediate" },
  { name: "Tailwind", exp: "Advanced" },
];
const devTools = [
  { name: "Git", exp: "Expert" },
  { name: "Docker", exp: "Advanced" },
  { name: "Kubernetes", exp: "Intermediate" },
  { name: "npm", exp: "Advanced" },
  { name: "Linux", exp: "Advanced" },
];
const DB = [
  { name: "MySQL", exp: "Expert" },
  { name: "PostgreSQL", exp: "Intermediate" },
  { name: "SQLite", exp: "Advanced" },
  { name: "MongoDB", exp: "Intermediate" },
];
const About = () => {
  return (
    <div className="min-h-screen pt-22">
      <div className="bg-gray-800/40 shadow-lg">
        <div className="py-2 pl-50 flex">
          <div className="flex items-center pr-6">
            <img
              src="me.png"
              alt="Me"
              className="max-w-[290px] h-auto rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            />
          </div>
          <div className="flex-col pl-">
            <h1 className="text-3xl text-teal-400 font-bold">About me</h1>
            <h2 className="pt-4 pr-25">
              I'm a curious, detail-oriented, and persistent Software Developer
              from Ukraine, Kyiv with a passion for continuous learning and
              problem-solving. I believe effective communication is key to
              collaboration and delivering impactful results. For me, growth
              comes from constant practice - there's always something new to
              learn, and the rewarding feeling of progress is what drives my
              motivation.
            </h2>
            <h3 className="pt-6 font-bold text-emerald-400">
              Check out my media:
            </h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <img
                  src="linkedin.png"
                  alt="LinkedIn"
                  className="h-5 w-5 object-contain"
                />
                <a
                  href="https://www.linkedin.com/in/oleksii-moiseienko-7670a7181/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="github.svg"
                  alt="GitHub"
                  className="h-5 w-5 object-contain"
                />
                <a href="https://github.com/Loender" target="_blank">
                  GitHub
                </a>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="file.svg"
                  alt="CV"
                  className="h-5 w-5 object-contain"
                />
                <a
                  href="cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium hover:text-blue-500"
                >
                  View my CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 flex justify-center font-bold text-2xl text-teal-400">
        Main skills
      </div>
      <div className="pt-2 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-250">
          <div className="rounded-lg bg-gray-700/50 shadow-lg transition-transform duration-300 ease-in-out hover:scale-103">
            <div className="pt-2 flex justify-center font-bold bg-gray-700 rounded-lg shadow-lg">
              Back End
            </div>
            <ul className="list-disc pl-6 pt-2 space-y-1">
              {backEndLanguages.map((lang) => (
                <li key={lang.name}>
                  <h3 className="text-lg text-white font-semibold">
                    {lang.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{lang.exp}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-gray-700/50 shadow-lg transition-transform duration-300 ease-in-out hover:scale-103">
            <div className="pt-2 flex justify-center font-bold bg-gray-700 rounded-lg shadow-lg">
              Web Development
            </div>
            <ul className="list-disc pl-6 pt-2 space-y-1">
              {webDevLanguages.map((lang) => (
                <li key={lang.name}>
                  <h3 className="text-lg text-white font-semibold">
                    {lang.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{lang.exp}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-gray-700/50 shadow-lg transition-transform duration-300 ease-in-out hover:scale-103">
            <div className="pt-2 flex justify-center font-bold bg-gray-700 rounded-lg shadow-lg">
              Databases
            </div>
            <ul className="list-disc pl-6 pt-2 space-y-1">
              {DB.map((lang) => (
                <li key={lang.name}>
                  <h3 className="text-lg text-white font-semibold">
                    {lang.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{lang.exp}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-gray-700/50 shadow-lg transition-transform duration-300 ease-in-out hover:scale-103">
            <div className="pt-2 flex justify-center font-bold bg-gray-700 rounded-lg shadow-lg">
              Dev Tools & Tech
            </div>
            <ul className="list-disc pl-6 pt-2 space-y-1">
              {devTools.map((lang) => (
                <li key={lang.name}>
                  <h3 className="text-lg text-white font-semibold">
                    {lang.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{lang.exp}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
