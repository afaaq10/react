
import './App.css';

import Navbar from './components/Navbar'
import UpperCase from './components/UpperCase'
import About from './components/About'
import Alert from './components/Alert'
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {


  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (text, type) => {
    setAlert({
      text: text,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const bgcol = () => {
    if (mode === '#111111') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('#111111');
      document.body.style.backgroundColor = '#111111';
      showAlert("Light mode has been enabled", "success");
    }

  }






  return (
    <>



      <Alert alert={alert} />


      <Router>
        <Navbar title="MyApp" head="Home" mode={mode} bgcol={bgcol} />

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <UpperCase heading="Enter your text here" mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>


      </Router>

    </>



  )
}
export default App;
