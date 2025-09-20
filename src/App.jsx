import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App({ routes }) {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
