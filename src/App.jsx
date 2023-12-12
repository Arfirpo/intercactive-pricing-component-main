import { Header } from "./components/Header";
import bgi from "../src/images/bg-pattern.svg";
import { Card } from "./components/Card";

function App() {
  const bgPattern = {
    backgroundImage: `url(${bgi})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "-100px -45vh",
  };

  return (
    <div className="flex flex-col w-full min-h-screen h-[812px] sm:h-[50rem] xl:gap-7 items-center justify-center mbl:gap-5 font-Manrope" style={bgPattern}>
      <Header />
      <Card />
    </div>
  );
}

export default App;
