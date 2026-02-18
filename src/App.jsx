import Service from "./pages/Service";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Footer />
    </>
  );
}

export default App;
