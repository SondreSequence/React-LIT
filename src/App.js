import "./App.css";
import LoginPage from "./Components/Pages/LoginPage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Container, Button, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import ProfilePage from "./Components/Pages/ProfilePage";
import TranslatePage from "./Components/Pages/TranslatePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar className="App bg-light">
        <Container>
          <Navbar.Brand>Translation App</Navbar.Brand>
          <Nav>
            <Nav.Link>
              <NavLink to="/login">
                <Button variant="dark">Login</Button>
              </NavLink>
            </Nav.Link>
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
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/translate" element={<TranslatePage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
