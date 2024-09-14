import { RouterProvider } from "react-router-dom";
import { router } from "./core/AppRoutes";
import { Suspense } from "react";
import LazyLoader from "./core/LazyLoader";

function App() {
  return (
    <Suspense fallback={<LazyLoader show delay={500} />}>
      <RouterProvider router={router}></RouterProvider>;
    </Suspense>
  );
}

export default App;
