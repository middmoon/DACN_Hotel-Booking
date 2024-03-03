import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import List from "./pages/list/List";
import Hotels from "./pages/hotel/Hotel";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotels />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
