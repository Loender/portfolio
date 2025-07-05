const Contact = () => {
  return (
    <div className="min-h-screen py-12 flex justify-center items-center">
      <div className="bg-gray-800/70 rounded-lg p-10 max-w-md w-full text-center text-white shadow-lg">
        <h1 className="font-bold text-4xl text-teal-400 mb-6">
          Let's get in touch
        </h1>
        <h2 className="mb-8 text-gray-300">
          Open to projects, collabs, or a quick hello — reach out anytime!
        </h2>

        <p className="mb-4">
          <strong>Email: </strong>
          <a
            href="mailto:loendera@gmail.com"
            className="text-teal-400 hover:underline"
          >
            loendera@gmail.com
          </a>
        </p>

        <p className="mb-4">
          <strong>Phone: </strong>
          <a href="tel:+37066160798" className="text-teal-400 hover:underline">
            +370 661 60 798
          </a>
        </p>

        <p className="mb-4">
          <strong>LinkedIn: </strong>
          <a
            href="https://www.linkedin.com/in/oleksii-moiseienko-7670a7181/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            Click me
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
