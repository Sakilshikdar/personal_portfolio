import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Navbar>
        <Home></Home>
      </Navbar>
      <ToastContainer/>
    </div>
  );
}

export default App;
