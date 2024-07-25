import { BrowserRouter, Routes, Route } from "react-router-dom";
import assessment_01 from "";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>  //have to create layout file
          <Route path="assessment_02" element={<assessment_02/>} />
          <Route path="assessment_01" element={<assessment_01 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}