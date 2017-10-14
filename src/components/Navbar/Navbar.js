import React, { Component } from 'react';
import logo from './logo.png';
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <img alt="logo" width={100} src={logo} />
      </nav>
    );
  }
}
