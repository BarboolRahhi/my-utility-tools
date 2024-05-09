import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddQuoteToText from "./pages/AddQuoteToText.tsx";
import TextToArray from "./pages/TextToArray.tsx";
import JsonFormatter from "./pages/JsonFormatter.tsx";
import TextCompare from "./pages/TextCompare.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/add-quote-to-text",
        element: <AddQuoteToText />,
      },
      {
        path: "/text-to-array",
        element: <TextToArray />,
      },
      {
        path: "/json-format",
        element: <JsonFormatter />,
      },
      {
        path: "/text-compare",
        element: <TextCompare />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
