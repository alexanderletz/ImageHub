import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
import Bottom from "./components/Bottom";
import Upload from "./pages/Upload";
 
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Home/>} />
        <Route path="/upload" element={<Upload/>} />
     </Routes>
    </BrowserRouter>
    <Bottom/>
    </div>
  );
}
 
export default App;