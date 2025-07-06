const Projects = () => {
  return (
    <div className="min-h-screen py-30 px-6 lg:px-20">
      <h1 className="flex justify-center pb-10 font-bold text-4xl">
        My projects
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-7">
        <div className="w-full lg:w-100 h-130 bg-gray-700/50 rounded-md shadow-md transition-transform duration-300 ease-in-out hover:scale-101 hover:shadow-lg">
          <div className="pt-6 bg-gray-600/50 rounded-md border-b border-black ">
            <h1 className="pb-4 flex justify-center font-bold text-2xl">
              Bukovel System
            </h1>
          </div>
          <div className="px-5 pt-5 text-white">
            <h1>
              Designed as an internal application for Bukovel employees in
              Ukraine. Developed and containerized a production-ready Next.js
              app with secure authentication, dynamic routing, and internal APIs
              using TypeScript.
            </h1>
            <h1 className="pt-5 font-semibold text-teal-200">
              Technologies used:
            </h1>
            <ul className="list-disc pl-6 pt-2 font-semibold">
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>SCSS</li>
              <li>MySQL (via Prisma ORM)</li>
              <li>Docker</li>
            </ul>

            <div className="pt-5 flex justify-center items-center text-xl">
              <a
                href="https://github.com/chibriki/next-website"
                target="_blank"
                className="mt-5 px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-400 transition"
              >
                view on github →
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-100 h-130 bg-gray-700/50 rounded-md shadow-md transition-transform duration-300 ease-in-out hover:scale-101 hover:shadow-lg">
          <div className="pt-6 bg-gray-600/50 rounded-md border-b border-black ">
            <h1 className="pb-4 flex justify-center font-bold text-2xl">
              Discord Bot
            </h1>
          </div>
          <div className="px-5 pt-5 text-white">
            <h1>
              A fun discord bot for others to use. It was built with Java, JDA,
              and Lavaplayer, integrated with a Flask-based AI agent for intent
              detection and tool mapping. Connected to external APIs and
              implemented async operations.
            </h1>
            <h1 className="pt-5 font-semibold text-teal-200">
              Technologies used:
            </h1>
            <ul className="list-disc pl-6 pt-2 font-semibold">
              <li>Java</li>
              <li>Gradle</li>
              <li>JDA</li>
              <li>Lavaplayer</li>
              <li>Python - Flask</li>
            </ul>

            <div className="pt-5 flex justify-center items-center text-xl">
              <a
                href="https://github.com/Loender/discord-bot"
                target="_blank"
                className="mt-5 px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-400 transition"
              >
                view on github →
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-100 h-130 bg-gray-700/50 rounded-md shadow-md transition-transform duration-300 ease-in-out hover:scale-101 hover:shadow-lg">
          <div className="pt-6 bg-gray-600/50 rounded-md border-b border-black ">
            <h1 className="pb-4 flex justify-center font-bold text-2xl">
              Book Exchange
            </h1>
          </div>
          <div className="px-5 pt-5 text-white">
            <h1>
              Intended as a Social Media platform for book lovers, developed
              with a Spring Boot backend and JavaFX UI, using Hibernate and
              MySQL for data persistence. Implemented robust validation and
              error handling for a smooth user experience.
            </h1>
            <h1 className="pt-5 font-semibold text-teal-200">
              Technologies used:
            </h1>
            <ul className="list-disc pl-6 pt-2 font-semibold">
              <li>Java</li>
              <li>Spring Boot</li>
              <li>JavaFX</li>
              <li>MySQL (via Hibernate ORM)</li>
            </ul>

            <div className="pt-5 flex justify-center items-center text-xl">
              <a
                href="https://github.com/Loender/Book-Exchange"
                target="_blank"
                className="mt-5 px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-400 transition"
              >
                view on github →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
