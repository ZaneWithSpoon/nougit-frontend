import React from 'react';
import './App.css';
import Post from './Post';

class App extends React.Component {

  constructor(props) {
    super(props);

    //GraphQL Fetch posting data (example)
    fetch('https://NOUGIT.lp.gql.zone/graphql', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      query: JSON.stringify({ query: '{ posts { user { name bio } name description pledged pledgeGoal pledgeCount codeSubmissions comments } }' }),
    })
      .then(res => res.json())
      .then(res => console.log("Add data to state"));

    //Setting the state to some made up data anyway
    this.state = {"postData": {
      "userName" : "Mohammad Ayyash",
      "userBio": "Chief Technology Officer",
      "projectName": "Private Encrypted Direct Messaging",
      "projectDescription": "Project description this where all of the description of the project will go in small font that will wrap around until it is finished",
      "pledged": 5000,
      "pledgeGoal": 8000,
      "pledgeCount": 400,
      "codeSubmissions": 4,
      "comments": 10
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Feed
          </p>
          <br />
          <Post data={this.state.postData}/>
          <Post data={this.state.postData}/>
        </header>
        
      </div>
    );
  }
}

export default App;
