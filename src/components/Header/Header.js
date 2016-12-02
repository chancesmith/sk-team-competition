import React, { Component } from 'react';
import './Header.css';
import logo from './../../img/sk-logo.png';

export class Header extends Component {

  render() {
    return (
      <div className="App-header">
        <img src={logo} alt="sk logo"/>
        <div className="details">
          <p><strong>December Challenge:</strong></p>
          <p>Team that sells $6,000 in gift cards...</p>
        </div>
        <div className="details">
          <p><strong>Incentive:</strong></p>
          <p>Winning team gets $150/each</p>
          <p>Highest team gets any blue or red <a href="http://smoothiekingstore.com/categories.asp?cat=Retail+Apparel">SK jacket/pull-over</a> of choice.</p>
        </div>
      </div>
    );
  }
}
