import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { AppLayout } from "./components/Layouts/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/country",
        element: <Country />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
