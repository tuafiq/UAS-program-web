import MyNavbar from "./components/Navbar";
import Footer from "./componets/Footer";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <MyNavbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </MyNavbar>
    </Router>
  );
}

export default App;
