import HelloWorldTyper from "./HelloWorldTyper";

const Home = () => {
  return (
    <div className="pt-40 flex-col items-center space-y-4 text-center px-4 ">
      <h1 className="text-4xl font-bold">
        Hi! My name is{" "}
        <span className="!text-emerald-400 text-5xl font-bold">Oleksii</span>
      </h1>
      <h2 className="text-2xl">Welcome to my portfolio page</h2>
      <HelloWorldTyper />
    </div>
  );
};
export default Home;
