import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Charts } from "./pages/charts";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/charts" element={<Charts />} />
    </Routes>
  );
}
