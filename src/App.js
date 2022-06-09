import { Route, Routes } from "react-router";
import Navbar from "./Pagas/Home/Navbar/Navbar";
import Home from "./Pagas/Home/Home/Home";
import About from "./Pagas/About/About";
import Portfolio from "./Pagas/Portfolio/Portfolio";
import Service from "./Pagas/Service/Service/Service";
import Contact from "./Pagas/Contact/Contact/Contact";
import NotFound from "./Pagas/NotFound/NotFound";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
