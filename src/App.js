import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage.tsx";
import Header from "./Components/Header.tsx";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 dark:bg-zinc-900 transition-all duration-700">
        <Header />
        <div className="max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
          {/* <p>Footer</p> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
