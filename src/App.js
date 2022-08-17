import "./App.css";
import About from './component/About';
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Alert from "./component/Alert";

function App() {
  const [mode, setmode] = useState("light");
  const [text, setText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  // const isBackgroundlight = true;
  // const [isBackgroundlight, setIsBackgroundlight] = useState(true)
  const toggleBtn = () => {
    if (mode === "light") {
      // setIsBackgroundlight(false)
      document.body.style.backgroundColor = "#042743";
      setmode("dark");
      setText("Disable Dark Mode");
    } else {
      // setIsBackgroundlight(true)
      document.body.style.backgroundColor = "white";
      setText("Enable Dark Mode");
      setmode("light");
    }
  };

  return (
    <>
      <div>
        <Router>
          <Navbar mode={mode} togglemode={toggleBtn} text={text} />
          <Alert alert={alert}/>
          <Switch>
            <>
            <div className="container my-3">
              <Route path="/about">
              <About mode={mode}/>
              </Route>
              <Route exact path="/">
                <TextForm
                  heading="Enter the text to perform some fuctionality"
                  mode={mode} showAlert={showAlert}/>
              </Route>
              </div>
                  </>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
