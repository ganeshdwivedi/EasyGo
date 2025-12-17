import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import InitialLoader from "./components/InitialLoader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <InitialLoader>
        <RouterProvider router={router} />
      </InitialLoader>
    </>
  );
}

export default App;
