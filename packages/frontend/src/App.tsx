import { Toaster } from "react-hot-toast";
import "./App.css";
import Router from "./routes/Router";
const App = () => {
  return (
    <div>
      <Toaster />
      <Router />
    </div>
  );
};

export default App;
