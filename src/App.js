import "./App.css";
import Navbar from "./component/Navbar";
import Slider from "./component/Slider";
import Home from "./component/Home";
function App() {
  return (
    <main className="md:px-32  min-h-screen">
      <Navbar />
      <Home />
    </main>
  );
}

export default App;
