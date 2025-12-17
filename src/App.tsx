import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import InitialLoader from "./components/InitialLoader";

function App() {
  return (
    <>
      <InitialLoader>
        <RouterProvider router={router} />
      </InitialLoader>
    </>
  );
}

export default App;
