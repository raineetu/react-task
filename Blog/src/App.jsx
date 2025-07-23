import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Mainlayout from "./Layout/Mainlayout";
import Details from "./components/Details";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<HomePage />} />
          <Route path="detail/:id" element={<Details />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
