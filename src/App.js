import { Container, Grid } from "@material-ui/core";
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
      <Grid container spacing={7}>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
        >
          <Profile />
        </Grid>
        <Grid item xs style={{ backgroundColor: "#ffcd38" }}>
          <Router>
            {/*  Header msut be within router component due to use of NavLink */}
            <Header />
            <div className="main_content profile_container_shadow">
              <Routes>
                <Route exact path="/" element={<Resume />}  />
                <Route path="/portfolio" element= {<Portfolio />} />
                <Route path="/contact" element= {<Contact />} />
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
