import React from 'react'
//import HomeScreen from './Components/HomeScreen';
import "antd/dist/antd.css";
import WorkHome from './Components/WorkHome'
//import GameScreen from './Components/SimpleGame/GameScreen.js'
//import RaceScreen from './Components/OurBuild/RaceScreen';

// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import {DommyScreen, DommyHome, DommySetting} from './Components/TestComp/DommyScreen'
// import HeaderNav from './Components/TestComp/HeaderNav';
// import ProjectRace from './Components/NewProject/ProjectRace';
// import PortFolio from './Components/HeaderBar/PortFolio';
import Main from './ProProfile/Main'

import Mother from './RaceAssessment/Mother'
const App = () => {
    return ( 
      <div>
      <Main/>
      </div>
      // <div>
      //   <PortFolio/>
      // </div>
    /*<Router>
        <HeaderNav/>
      
        <Switch>
          <Route path = '/' exact component = {DommyHome}/>
          <Route path = '/about' exact component = {DommyScreen}/>
          <Route path = '/ProjectRace' exact component = {ProjectRace}/> 
          <Route path = '/work' exact component = {WorkHome}/>
         
        </Switch>
    </Router>*/
    );
};

export default App;