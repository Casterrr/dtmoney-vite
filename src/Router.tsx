import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Details } from "./pages/details";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}
