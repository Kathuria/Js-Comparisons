import React, { Component } from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {isToggleOn: false}

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render() {

    let menuActive = this.state.isToggleOn ? 'is-active' : '';
    return (
      <div className="navbar has-shadow">
      <div className="container">
        <div className="navbar-left">
          <a className="navbar-item">
            <img src={require("../../assets/AkLogo.png")} alt="Ak" />
        </a>
        </div>

        <a role="button" className={`navbar-burger ${menuActive}`} aria-label="menu" aria-expanded="false" onClick={this.handleClick}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

        <div className={`navbar-right navbar-menu ${menuActive}`}>
            <Link to="/" className="navbar-item r-item">Home</Link>
            <Link to="/faq" className="navbar-item r-item">Features</Link>
            <Link to="/faq" className="navbar-item r-item">About</Link>
            <Link to="/faq" className="navbar-item r-item">FAQ</Link>


          <div className="navbar-item">
            <p className="control">
              <a className="button is-primary is-outlined">
                <span className="icon">
                  <i className="fa fa-download"></i>
                </span>
                <span>Join Now</span>
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
    );
  }
}

export default Header;
