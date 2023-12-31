import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import Hotel1 from "./pages/hotel1/Hotel1";
import List from "./pages/list/List";
import ListCar from "./pages/listCar/listCar"
import Login from "./pages/login/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/cars" element={<ListCar/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/hotel1" element={<Hotel1/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
