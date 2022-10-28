import { useState } from "react";
import "./App.css";
import Api from "./Api";
import Errorpage from "./Errorpage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Appspa from "./Appspa";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Api />} />
          <Route path="*" element={<Errorpage />} />
          <Route path="/link/:id" element={<Appspa />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
