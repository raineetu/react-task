import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Mainlayout from "./Layout/Mainlayout";
import Details from "./components/Details";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />

      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Mainlayout />}>
          <Route index element={<HomePage />} />
          <Route path="detail/:id" element={<Details />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
