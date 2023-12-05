import { Header } from "./components/Header";
import bgi from "../src/images/bg-pattern.svg";
import { Card } from "./components/Card";

function App() {
  const bgPattern = {
    backgroundImage: `url(${bgi})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "0 -250px",
  };

  return (
    <main className="min-h-screen px-11 pt-[10%] font" style={bgPattern}>
      <Header />
      <Card />
    </main>
  );
}

export default App;
