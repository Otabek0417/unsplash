import { createBrowserRouter, RouterProvider } from "react-router-dom";
// !components
import RootLayout from "./layout/RootLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import SinglePage from "./pages/SinglePage";
const roots = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "singlepage/:id",
        element: <SinglePage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={roots} />;
}

export default App;
