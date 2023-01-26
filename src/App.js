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
    <div className="bg-dark test">
      <BrowserRouter>
        <Navbar className="navbar">
          <Container>
            <Navbar.Brand className="text-dark">
              <h2>Translatorizor</h2>
              {/* <img className="w-25 p-3" src={require("./Logo.png")}></img> */}
            </Navbar.Brand>
            <Nav>
              <Nav.Link>
                <NavLink to="/translate">
                  <Button variant="dark">Translate</Button>
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/profile">
                  <Button variant="dark">Profile</Button>
                </NavLink>
              </Nav.Link>
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
