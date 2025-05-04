import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner"; // ✅ Import toast provider

import DefaultLayout from "./layouts/default";

import IndexPage from "@/pages/index";
import Projects from "@/pages/projects";
import BlogPage from "@/pages/blog";

function App() {
  return (
    <>
      {/* Global toast notifications */}
      <Toaster richColors position="top-center" />
      <DefaultLayout>
        {/* App routes */}
        <Routes>
          <Route element={<IndexPage />} path="/" />
          <Route element={<BlogPage />} path="/blog" />
          <Route element={<Projects />} path="/projects" />
        </Routes>
      </DefaultLayout>
    </>
  );
}

export default App;
