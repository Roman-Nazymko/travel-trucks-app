import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
