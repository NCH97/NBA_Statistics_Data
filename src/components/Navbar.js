import { Component } from 'react';
import { Link } from "react-router-dom";
import { StyledLink } from '../styles/Navbar.Style';

import "./navbar.css";

class Navbar extends Component {
  state = {clicked: false};
  handleClick = () =>{
    this.setState({clicked:
    !this.state.clicked})
  }
  render(){
  return (
  <>
    <nav>
      <h3 className="logo">MyNBAapp</h3>

      <div className="navbar">
        <ul id="nav-links"
        className={this.state.clicked ?
        "#nav-links active" : "#nav-links"}>
              <li>
                <StyledLink className="active" to='/'>Home</StyledLink>
              </li>
              <li>
                <StyledLink to='/standing'>Standing</StyledLink>
              </li>
              <li>
                <StyledLink to='teams'>Teams</StyledLink>
              </li>
              <li>
              <StyledLink to='/stats'>Stats</StyledLink>
              </li>
              <li>
                <StyledLink to='/team/roster'>Roster</StyledLink>
              </li>
              <li>
                <StyledLink to='/team/stats'>Team Stats</StyledLink>
              </li>
              <li>
                <StyledLink to='/leaders'>Season Leaders</StyledLink>
              </li>
              <li>
                <StyledLink to='/player'>Player</StyledLink>
              </li>
              
        </ul>
      </div>

      <div className="mobile" 
      onClick={this.handleClick}>
        <i 
          id="bar" 
          className=
          {this.state.clicked ? 
            "fas fa-times" : 
            "fas fa-bars"}>
        </i>
      </div>
    </nav>
  </>
  );
}
}

export default Navbar;
