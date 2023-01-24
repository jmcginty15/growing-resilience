import { useState, useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Landing from "./components/landing/Landing";
// import NavBar from './components/nav/NavBar';
import Home from "./components/home/Home";
// import About from './components/about/About';
// import Staff from './components/about/Staff';
// import GetStarted from './components/getStarted/GetStarted';
// import Services from './components/services/Services';
// import Testimonials from './components/testimonials/Testimonials';
// import Location from './components/location/Location';
// import Disclosure from './components/disclosure/Disclosure';
// import Resources from './components/footer/Resources';
// import Footer from './components/footer/Footer';
import "./App.css";

function App() {
  // const location = useLocation();
  // const [displayLocation, setDisplayLocation] = useState(location);
  // const [transitionStage, setTransitionStage] = useState("slideIn");
  // const [transitionName, setTransitionName] = useState("next");

  return (
    <div className="App">
      {/* <TransitionGroup component={null}>
        <CSSTransition
          key={location.pathname}
          classNames={transitionName}
          timeout={3000}
        > */}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        {/* <Route path={"*"} element={<Navigate to="/" />} /> */}
      </Routes>
      {/* </CSSTransition>
      </TransitionGroup> */}
      {/* <Resources /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
