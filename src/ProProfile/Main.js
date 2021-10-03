import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HeroSection from './HeroSection';
import ServiceSection from './ServiceSection';
import VideoSection from  './VideoSection'
import ContactSection from  './ContactSection'
import FooterSection from './FooterSection'
import SumPage from './SumPage'
import HomePage from './HeaderBar/HomePage';

const Main = () => {
    return (
    <Router>
         <HomePage/>
        <SumPage/>
        <Switch>
        <Route path = '/HeroSection' exact component = {HeroSection}/>
        <Route path = '/ServiceSection' exact component = {ServiceSection}/>
        <Route path = '/VideoSection' exact component = {VideoSection}/>
        <Route path = '/ContactSection' exact component = {ContactSection}/>
        <Route path = '/FooterSection' exact component = {FooterSection}/>
        </Switch>
    </Router>
    )
}

export default Main;


