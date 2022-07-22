import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home/home.container";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default App;
