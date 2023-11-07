import { createBrowserRouter, RouterProvider } from "react-router-dom";
// !components
import RootLayout from "./layout/RootLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import SinglePage from "./pages/SinglePage";
import LikesImg from "./pages/LikesImg";
import Login from "./pages/Login";

function App() {
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
          path: "likedImages/singlepage/:id",
          element: <SinglePage />,
        },
        {
          path: "likedImages",
          element: <LikesImg />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={roots} />;
}

export default App;
