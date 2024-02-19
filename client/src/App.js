import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Access from "./pages/Access";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/*" element={<Access />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
