import React, { Component } from 'react';
import './App.css';
import teamData from './team.json';
let _ = require('lodash');

// components
import {Header} from './components/Header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        teamMembers: teamData,
        teams: [
          {name:'Jeremy', total: 0, color: "red"},
          {name:'Clayton', total: 0, color: "blue"},
          {name:'Lizzie', total: 0, color: "green"}
        ]
    };
  }

  showHighestTeam(){
    let oldTeamsList = this.state.teams;

    // order by descending
    let sortedTeamsList = _.sortBy(oldTeamsList, 'total', function(n) {
      return Math.sin(n);
    }).reverse();

    // create your components
    let topSalesTeams = sortedTeamsList.map(function(team, i) {
       return(
          <p key={i} className={(i === 0 ? ' first' : ' not-first')}>
            <span className={"team-tag " + (team.color) + "-tag"}> Team {team.name}</span> 
            <span className="total">at ${team.total}</span>
          </p>
       );
    });

    return topSalesTeams;
  }

  storeTeamSalesTotals(){
    let teamsList = this.state.teams;
    let membersList = this.state.teamMembers;

    //loop through teams
    for (let a = teamsList.length - 1; a >= 0; a--) {
      // loop through team members
      for (let b = membersList.length - 1; b >= 0; b--) {
        let salesList = membersList[b].giftcardSales
        // if team member is in same team
        if(teamsList[a].name === membersList[b].team) {
          membersList[b].color = teamsList[a].color;
          // loop through sales of this team member
          for (let c = salesList.length - 1; c >= 0; c--) {
            // add sales up for this team
            teamsList[a].total += salesList[c].giftcardRevenue;
          }
        }
      }
    }
  }

  showLowestSalesTeamMembers(limit){
    let oldMembersList = this.state.teamMembers;

    // order by ascending
    let sortedMembersList = _.sortBy(oldMembersList, 'totalSales', function(n) {
      return Math.sin(n);
    });

    // create your components
    let topSalesMembers = sortedMembersList.slice(0, limit).map(function(member, i) {
       return(
          <p key={i} className="teamMember">
            <span className="red">{member.name} @ ${member.totalSales}</span> 
            <span className={"team-tag " + (member.color) + "-tag"}>Team {member.team}</span>
          </p>
       );
    });

    return topSalesMembers;
  }

  showHighestSalesTeamMembers(limit){
    let oldMembersList = this.state.teamMembers;

    // order by descending
    let sortedMembersList = _.sortBy(oldMembersList, 'totalSales', function(n) {
      return Math.sin(n);
    }).reverse();

    // create your components
    let topSalesMembers = sortedMembersList.slice(0, limit).map(function(member, i) {
       return(
          <p key={i} className="teamMember">
            <span className="green">{member.name} @ ${member.totalSales}</span> 
            <span className={"team-tag " + (member.color) + "-tag"}>Team {member.team}</span>
          </p>
       );
    });

    return topSalesMembers;
  }

  totalTeamMemberSalesTotals(){
    let membersList = this.state.teamMembers;
    // loop through team members
    for (let a = membersList.length - 1; a >= 0; a--) {
      let salesList = membersList[a].giftcardSales
      membersList[a].totalSales = 0;
      // loop through sales of this team member
      for (let b = salesList.length - 1; b >= 0; b--) {
        // add sales up for this team
        membersList[a].totalSales += salesList[b].giftcardRevenue;
      }
    }
  }

  render() {
    //setup state data
    this.storeTeamSalesTotals();
    this.totalTeamMemberSalesTotals();
    return (
      <div className="App">
        <Header />
        <div className="App-intro">
          <h1>Winning Team</h1>
          {this.showHighestTeam()}
          <div className="team-list">
            <h1>Hightest Sales</h1>
            {this.showHighestSalesTeamMembers(3)}
          </div>
          <div className="team-list">
            <h1>Lowest Sales</h1>
            {this.showLowestSalesTeamMembers(3)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
