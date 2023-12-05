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
    <main className="flex flex-col min-h-screen items-center justify-center gap-12 px-6 font-Manrope" style={bgPattern}>
      <Header />
      <Card />
    </main>
  );
}

export default App;
