import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./pages/Register";
import SignInForm from "./pages/SignInForm";
import Navbar from "./common/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        {/* <div className="App__Aside"></div> */}
        <div className="App__Form">
          <Route exact path="/" component={Register}></Route>
          <Route path="/sign-in" component={SignInForm}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
