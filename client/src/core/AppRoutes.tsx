import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { routes } from "./routes";

const Para = lazy(() => import("../pages/PARA/Para"));
const Layout = lazy(import("../components/Layout/Layout").then);
const ConceptFactory = lazy(
  () => import("../pages/ConceptFactory/ConceptFactory")
);
const Error = lazy(() => import("../pages/Error/Error"));
const CodeLab = lazy(() => import("../pages/CodeLab/CodeLab"));
const Home = lazy(() => import("../pages/Home/Home"));
const Test = lazy(() => import("../pages/TestComponents/Test"));
const Authentication = lazy(
  () => import("../pages/Authentication/Authentication")
);
// import("./moduleA")
//   .then(({ moduleA }) => {
//     // Use moduleA
//   })
//   .catch((err) => {
//     // Handle failure
//   });

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: routes.home,
        element: <Home />,
      },
      {
        path: routes.auth,
        element: <Authentication />,
      },
      {
        path: routes.para,
        element: <Para />,
      },
      {
        path: routes.test,
        element: <Test />,
      },
      {
        path: routes.CodeLab,
        element: <CodeLab />,
      },
      {
        path: routes.ConceptFactory,
        element: <ConceptFactory />,
      },
    ],
  },
]);
