import { BrowserRouter, Routes, Route } from "react-router-dom";
import Assessment_01 from "../src/components/Assessment_01";
import Assessment_02 from "../src/components/Assessment_02";

export default function App() {
  console.log("assess");
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/ass01" element={<Assessment_01/>} />
          <Route path="/ass02" element={<Assessment_02/>} />
      </Routes>
    </BrowserRouter>
  );
}

