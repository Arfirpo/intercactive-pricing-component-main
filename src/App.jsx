import { Header } from "./components/Header";
import bgi from '../src/images/bg-pattern.svg'

function App() {
  const bgPattern = {
    backgroundImage: `url(${bgi})`,
    bacgroundPosition: '0 50%',
  };

  return (
    <main className="min-h-screen bg-no-repeat px-11" style={bgPattern}>
      <Header />
    </main>
  );
}

export default App;
