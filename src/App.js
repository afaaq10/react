
// import './App.css';

// import Navbar from './components/Navbar'
// import UpperCase from './components/UpperCase'
// import About from './components/About'
// import Alert from './components/Alert'
// import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";




// function App() {


//   const [mode, setMode] = useState('light');
//   const [alert, setAlert] = useState(null);

//   const showAlert = (text, type) => {
//     setAlert({
//       text: text,
//       type: type
//     });
//     setTimeout(() => {
//       setAlert(null)
//     }, 1500);
//   }
//   const removeBg = () => {
//     document.body.classList.remove('bg-primary')
//     document.body.classList.remove('bg-secondary')
//     document.body.classList.remove('bg-danger')
//     document.body.classList.remove('bg-success')

//     // document.body.classList.remove('bg-light')
//     // document.body.classList.remove('bg-dark')
//   }

//   const bgcol = (cls) => {
//     removeBg()
//     document.body.classList.add('bg-' + cls)



//     if (mode === '#111111') {
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       showAlert("Dark mode has been enabled", "success");
//     } else {
//       setMode('#111111');
//       document.body.style.backgroundColor = '#111111';
//       showAlert("Light mode has been enabled", "success");
//     }

//   }






//   return (
//     <>






//       <Router>
//         <Navbar title="MyApp" head="Home" mode={mode} bgcol={bgcol} />
//         <Alert alert={alert} />
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>

//           <Route path="/">
//             <UpperCase heading="Enter your text here" mode={mode} showAlert={showAlert} />
//           </Route>
//         </Switch>


//       </Router>

//     </>



//   )
// }
// export default App;



// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios'
// import { useState, useEffect } from 'react'

// function App() {

//   const [city, setCity] = useState('Pakistan');
//   const [weatherData, setWeatherData] = useState(null);

//   const APIKey = '546b8e7bc2e42c8c92a2572386d39b0a'; // change this to your api key
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;

//   const getData = () => {
//     axios.get(url)
//       .then(res => setWeatherData(res.data))
//       .catch(err => console.log(err))
//   }

//   useEffect(() => {
//     getData();
//     document.getElementById("weatherInput").focus();
//   }, [])

//   const handleChange = (e) => {
//     setCity(e.target.value);
//   }

//   const handleSubmit = () => {
//     getData();
//   }

//   const handleKeypress = e => {
//     //it triggers by pressing the enter key
//     if (e.charCode === 13) {
//       getData();
//     }
//   };

//   const name = weatherData ? weatherData.name : '';
//   const country = weatherData ? weatherData.sys.country : '';
//   const humidity = weatherData ? weatherData.main.humidity : '';
//   const pressure = weatherData ? weatherData.main.pressure : '';
//   const temp = weatherData ? weatherData.main.temp : '';
//   const weather = weatherData ? weatherData.weather[0].description : '';
//   const iconcode = weatherData ? weatherData.weather[0].icon : '#';

//   const d = new Date();

//   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//   const month = new Array();
//   month[0] = "January";
//   month[1] = "February";
//   month[2] = "March";
//   month[3] = "April";
//   month[4] = "May";
//   month[5] = "June";
//   month[6] = "July";
//   month[7] = "August";
//   month[8] = "September";
//   month[9] = "October";
//   month[10] = "November";
//   month[11] = "December";

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div className="weather">
//           <input id="weatherInput" type="text" name="city" placeholde="city name"
//             onChange={handleChange}
//             onKeyPress={handleKeypress}
//           />
//           <button onClick={handleSubmit}>Search</button>
//         </div>

//         <div className="results" style={styles.results}>
//           <div style={{ fontSize: 30 }}>{name}, {country}</div>

//           <div style={{ color: 'darkgrey', fontSize: 18 }}>{days[d.getDay()]}, {month[d.getMonth()]} {d.getDate()}, {d.getFullYear()}</div>

//           <div style={{ fontSize: 54, fontWeight: 'bold' }}>{Math.round(temp)}' C</div>

//           <img src={`http://openweathermap.org/img/w/${iconcode}.png`} alt="Weather icon" />

//           <div style={{ textTransform: 'capitalize', marginBottom: 20 }}>{weather}</div>

//           <div>Humidity : {humidity}%</div>
//           <div>Pressure : {pressure} hPa</div>
//         </div>
//       </header>

//     </div>
//   );
// }

// const styles = {
//   results: {
//     border: '1px solid #111111',
//     borderRadius: 15,
//     backgroundColor: '#111',
//     padding: '2rem',
//     margin: '1rem',
//     boxShadow: 'rgb(84 179 207 / 50%) 3px 3px 2px 0px',
//   }
// }

// export default App;






import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'

import './im.jpeg'


function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Srinagar');

  const getData = () => {
    // const APIKey = '99b72ecbbf458bcf9abee98ce7ca2415';

    const APIKey = '546b8e7bc2e42c8c92a2572386d39b0a'; // change this to your api key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;


    // const url = "https://api.openweathermap.org/data/2.5/weather?city=London&appid='99b72ecbbf458bcf9abee98ce7ca2415'";
    axios.get(url).then((res) => setWeatherData(res.data)).catch((err) => console.log(err))

  }



  const name = weatherData ? weatherData.name : '';
  const desc = weatherData ? weatherData.weather[0].description : '';
  const temp = weatherData ? weatherData.main.temp : '';
  document.body.style = 'background-color:violet '
  document.body.style = 'background-image:url("https://images.news18.com/ibnlive/uploads/2021/07/1627207399_space-1600x1200.jpg") '
 

  const typing = (e) => {
    setCity(e.target.value);
  }
  const click = () => {
    getData();

  }

  useEffect(() => {
    getData();

    document.getElementById('in').focus();

  }, [])



  return (
    <>


      <div className="weather">
      
        {/* <input type="text" onChange={typing} /> */}
        {/* <button onClick={click} >Get weather</button> */}
        <input id="in" class="form-control form-control-lg mt-1" type="text" onChange={typing} placeholder="Enter your city here" aria-label=".form-control-lg example" />
        <div class="text-center">
        <button type="button" onClick={click} class="btn btn-outline-primary mt-3 text-center">Get weather</button>
        {/* <button onClick={click} >Get weather</button> */}
        </div>
      </div>

      <div className="cen">
      <h1>{`City : ${name}`}</h1>
      <h1>  {`Temperature : ${temp} Celsius`}</h1>
      <h1>{`Weather : ${desc}`}</h1>
      </div>



      
    </>

  )
}

export default App
