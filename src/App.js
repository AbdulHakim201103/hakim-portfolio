import { Route, Routes } from "react-router";
import Navbar from "./Pagas/Home/Navbar/Navbar";
import Home from "./Pagas/Home/Home/Home";
import About from "./Pagas/About/About";
import NotFound from "./Pagas/NotFound/NotFound";
import Blogs from "./Pagas/Blogs/Blogs";
import Details from "./Pagas/Home/Home/Details";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/project/:id" element={<Details></Details>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
