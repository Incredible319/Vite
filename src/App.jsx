import "./App.css";
import Home from "./pages/Home";
import Team from "./pages/Team"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar"; // ✅ Ensure correct path
// import Team from "./pages/Team"; 

function App() {
  return (
    <Router> {/* ✅ Wrap everything inside BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} /> {/* ✅ Route for /team */}
      </Routes>
    </Router>
  );
}

export default App;
