import { Container, Grid } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume/Resume";
import Footer from "./components/Footer/Footer";

import "./App.css";
function App() {
  return (
    <Container className="top">
      <Grid container spacing={7} style={{ minHeight: "100vh" }}>
        <Grid className="profile_container" item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid className="content_container" item xs>
          <Router>
            <Header />
            <div className="main_content profile_container_shadow">
              <Routes>
                <Route exact path="/" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
