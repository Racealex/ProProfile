
import React from 'react'
import styled from 'styled-components'
import HeaderNav from './HeaderNav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import WorkHome from './WorkHome'
import Homepage from './homepage'
import HomeScreen from './HomeScreen'
import GameScreen from './SimpleGame/GameScreen'
import Racescreen from './OurBuild/RaceScreen'

const Mother = () =>{
    return (
        <Container>
            <Router>
            <HeaderNav />
                <Switch>
                    <Route path="/" exact component={Homepage}></Route>
                    <Route path="/homescreen" exact component={HomeScreen}></Route>
                    <Route path="/workhome" exact component={WorkHome}></Route>
                    <Route path="/gamescreen" exact component={GameScreen}></Route>
                    <Route path="/racescreen p" exact component={Racescreen}></Route>

                </Switch>
            </Router>

            
        </Container>
    )
}
export default Mother
const Container = styled.div``