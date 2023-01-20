import React from 'react';
import logo from './logo.svg';
import "./styles.css";
import { Nba_table } from './components/Nba_table'
import { Nba_pagination_table } from './components/Nba_pagination_table'
import { Nba_sorting_table} from './components/Nba_sorting_table'
import {Players_Info} from './components/Players_Info'
import SignInSide from '../src/pages/SignInSide';
import SignUp from '../src/pages/SignUpSide';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Routes, Route, Link, Navigate } from 'react-router-dom';
import {Home} from './components/Home'
import {Standing} from './components/Standing'
import { Stats} from './components/Stats'
import { Teams} from './components/Teams'
import {Team_Roster} from './components/Nba_Team_Roster'
import {Team_Stats} from './components/Nba_Team_Stat'
import {Nba_Leaders} from './components/Nba_Leaders'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const user = localStorage.getItem("token");

  const If = ({ condition, children }) => {
    if (condition) {
      return children;
    }
  };

  return (
    <div className="App">
      
      
      
      <Router>

        <If condition={user}>
          <Navbar/>
        </If>

        

        <Routes>
          {user && <Route path="/" element={<Home/>}/>}

          <Route path="/signin" element={<SignInSide/>}/>
          <Route path="/signup" element={<SignUp/>}/>

          <Route path="/" element={<Navigate replace to ="/signin"/>}/>
          
          <Route path="/standing" element={<Standing/>}/>
          <Route path="/stats" element={<Stats/>}/>
          <Route path="/teams" element={<Teams/>}/>
          <Route path="/team/roster" element={<Team_Roster/>}/>
          <Route path="/team/stats" element={<Team_Stats/>}/>
          <Route path="/leaders" element={<Nba_Leaders/>}/>
          <Route path="/player" element={<Players_Info/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;