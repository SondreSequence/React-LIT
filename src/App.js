import "./App.css";
import LoginPage from "./Components/Pages/LoginPage";
import HomePage from "./Components/Pages/HomePage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import Translate from "./Components/Translate";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavLink className="App-link" to="/home">
            <Button className="btn btn-primary">Home</Button>
          </NavLink>
          <NavLink className="App-link" to="/login">
            <Button className="btn btn-primary">Login</Button>
          </NavLink>
          <NavLink className="App-link" to="/translate">
            <Button className="btn btn-primary">Translate</Button>
          </NavLink>
          <Routes>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/translate" element={<Translate />}></Route>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
