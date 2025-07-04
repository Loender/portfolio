const certifications = [
  {
    title: "IBM Application Development using Microservices and Serverless",
    image: "portfolio/cert1.jpeg",
    verifyLink:
      "https://www.coursera.org/account/accomplishments/verify/49RLEPM14N1J",
  },
  {
    title: "IBM Back-end Application Development Capstone Project",
    image: "portfolio/cert2.jpeg",
    verifyLink:
      "https://www.credly.com/earner/earned/badge/c4f37ece-cc31-4315-bc19-b6668480ae89",
  },
  {
    title: "IBM Introduction to Containers w/ Docker, Kubernetes & OpenShift",
    image: "portfolio/cert3.jpeg",
    verifyLink:
      "https://www.coursera.org/account/accomplishments/verify/6QEEKFXR3ANW",
  },
  {
    title: "IBM Python for Data Science, AI & Development",
    image: "portfolio/cert4.jpeg",
    verifyLink:
      "https://www.coursera.org/account/accomplishments/verify/GOPDHF6TQI3W",
  },
];

const Certifications = () => {
  return (
    <div className="min-h-screen px-70 py-20 bg-gray-800/50 text-white">
      <h1 className="text-4xl font-bold text-center text-teal-400 mb-10">
        Certifications
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-700/50 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-auto object-cover"
            />
            <div className="p-4 text-white">
              <h2 className="font-semibold text-lg">{cert.title}</h2>
              <a
                href={cert.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify certificate →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
