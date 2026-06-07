import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Resources from "@/pages/Resources";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
