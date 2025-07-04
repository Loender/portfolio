const About = () => {
  return (
    <div className="min-h-screen py-50">
      <div className="bg-gray-800/40 ">
        <div className="pl-50 py-5 flex">
          <div className="w-70 h-70">
            <img
              src="me.png"
              alt="Me"
              className="w-auto h-auto max-w-xs rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            />
          </div>
          <div className="pl-20 flex-col">
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
            <h3>Skills: Java, SpringBoot, Python, Typescript, Docker, </h3>
            <h3 className="pt-2 font-bold text-emerald-400">
              Check out my media:
            </h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <img
                  src="/linkedin.png"
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
                  src="/github.svg"
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
                  href="/cv.pdf"
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
    </div>
  );
};
export default About;
