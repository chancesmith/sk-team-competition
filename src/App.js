import React, { Component } from 'react';
import './App.css';
import teamData from './team.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        teamMembers: teamData,
        teams: [
          {name:'Jeremy', total: 0},
          {name:'Clayton', total: 0},
          {name:'Lizzie', total: 0}
        ]
    };
  }

  showHighestTeam(){
    // There's no real number bigger than plus Infinity
    let highest = Number.NEGATIVE_INFINITY,
        teams = this.state.teams,
        tmp,
        winningTeam;
    for (let i=teams.length-1; i>=0; i--) {
      tmp = teams[i].total;
      if (tmp > highest) {
        winningTeam = teams[i].name;
        highest = tmp;
      }
    }
    return "Winning team: " + winningTeam + " at $" + highest.toFixed(2);
  }

  showLowest(){
    // There's no real number bigger than plus Infinity
    // var lowest = Number.POSITIVE_INFINITY;
    // var tmp;
    // for (var i=myArray.length-1; i>=0; i--) {
    // tmp = myArray[i].Cost;
    //   if (tmp < lowest) lowest = tmp;
    // }
    // console.log(lowest);

    return "Jeremy";
  }

  showTeams(){
    let teamsList = this.state.teams;
    let membersList = this.state.teamMembers;

    //loop through teams
    for (var a = teamsList.length - 1; a >= 0; a--) {
      // loop through team members
      for (var b = membersList.length - 1; b >= 0; b--) {
        let salesList = membersList[b].giftcardSales
        // if team member is in same team
        if(teamsList[a].name === membersList[b].team) {
          // loop through sales of this team member
          for (var c = salesList.length - 1; c >= 0; c--) {
            // add sales up for this team
            teamsList[a].total += salesList[c].giftcardRevenue;
          }
        }
      }
    }    
  }

  totalTeam(){

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>SKJackson Teams</h2>
        </div>
        <p className="App-intro">
          {this.showTeams()}
          {this.showHighestTeam()}
        </p>
      </div>
    );
  }
}

export default App;
