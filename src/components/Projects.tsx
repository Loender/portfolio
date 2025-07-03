const Projects = () => {
  return (
    <div className="min-h-screen py-40 px-20 flex justify-center items-center">
      <div className="flex items-center gap-7">
        <div className="w-100 h-130 bg-gray-700/50 rounded-md shadow-md">
          <div className="pt-6 bg-gray-600/50 rounded-md border-b border-black ">
            <h1 className="pb-4 flex justify-center font-bold text-2xl">
              High school
            </h1>
          </div>
          <div className="px-5 py-5 flex-col items-center text-center font-bold text-l">
            Gymnasium 172 "Nyvky" <p>years attended: 2020-2022</p>
          </div>
          <div className="px-5">
            <li>Graduated top of the class with a GPA of 10.5/12</li>
            <li>Attended Informatics </li>
          </div>
        </div>
        <div className="w-100 h-130 bg-gray-700/50 rounded-md shadow-md">
          <div className="pt-6 bg-gray-600/50 rounded-md border-b border-black ">
            <h1 className="pb-4 flex justify-center font-bold text-2xl">
              University
            </h1>
          </div>
          <div className="flex justify-center">
            <img src="/stu.png" className="pt-2 rounded-md" />
          </div>
        </div>
        <div className="w-100 h-130 bg-gray-700/50 rounded-md shadow-md">
          <div className="pt-6 bg-gray-600/50 rounded-md border-b border-black ">
            <h1 className="pb-4 flex justify-center font-bold text-2xl">
              University
            </h1>
          </div>
          <div className="flex justify-center">
            <img
              src="/vgtu.png"
              className="pt-2 h-25 w-70 object-contain rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
