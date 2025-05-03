import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner"; // ✅ Import toast provider

import IndexPage from "@/pages/index";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";

function App() {
  return (
    <>
      {/* Global toast notifications */}
      <Toaster richColors position="top-center" />

      {/* App routes */}
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<BlogPage />} path="/blog" />
        <Route element={<AboutPage />} path="/about" />
      </Routes>
    </>
  );
}

export default App;
