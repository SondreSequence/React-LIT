import "./App.css";
import LoginPage from "./Components/Pages/LoginPage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Container, Button, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import ProfilePage from "./Components/Pages/ProfilePage";
import TranslatePage from "./Components/Pages/TranslatePage";
import { useSelector } from "react-redux";

function App() {
  return (
    <div className="background">
      <BrowserRouter>
        <Navbar className="bg-dark">
          <Container>
            <Navbar.Brand className="text-light">
              <h2>Translaterizor</h2>
            </Navbar.Brand>
            <Nav>
              <NavLink className="all-buttons" to="/translate">
                <p>Translate</p>
              </NavLink>
              <NavLink className="all-buttons" to="/profile">
                <p>Profile</p>
              </NavLink>
              {useSelector((state) => state.user.userName)}
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/translate" element={<TranslatePage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
