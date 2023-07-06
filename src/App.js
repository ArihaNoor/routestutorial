import "./App.css";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Info from "./pages/Info/Info";
import Contact from "../src/pages/Contact";
import AddInfo from "./pages/Info/AddInfo";
import UpdateInfo from "./pages/Info/UpdateInfo";
import DeleteInfo from "./pages/Info/DeleteInfo";
import Services from "./pages/Services/Services";
import AddService  from "./pages/Services/AddService";
import DeleteService from "./pages/Services/DeleteService";
import UpdateService from "./pages/Services/UpdateServices";
import { Routes, Route , Link} from "react-router-dom";

function App() {
  return (
    <>
     <nav className="navbar navbar-default navbar-dark">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                React Routes
              </a>
            </div>
            <ul className="nav navbar-nav">
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="about">About</Link>
              </li>
              <li>
              <Link to="info">Info</Link>
              </li>
              <li>
              <Link to="contact">Contact</Link>
              </li>
              <li>
              <Link to="services">Services</Link>
              </li>
            </ul>
          </div>
        </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/info">
      <Route index element={< Info />} />
        <Route path="addinfo" element={< AddInfo />} />
        <Route path="deleteinfo" element={< DeleteInfo />} />
        <Route path="updateinfo" element={< UpdateInfo />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="/services">
      <Route index element={< Services />} />
        <Route path="addservice" element={< AddService />} />
        <Route path="deleteservice" element={< DeleteService />} />
        <Route path="updateservice" element={< UpdateService />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
