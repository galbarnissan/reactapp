import React from 'react';
import {GreetInput} from './components/GreetInput/greetInput';
import {Greeter} from './components/Greeter/greeter';
import DropboxTeam from 'dropbox/src/team';

// const App = () => <h1>Hello world!</h1>

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      teamToken: "",
      greeting: "world"
    }
  }

  update(event){
    this.getTeamName(event.target.value);    
  }

  getTeamName(teamToken) {   
   const dbx = new DropboxTeam({ accessToken:  teamToken});
   dbx.teamGetInfo()
    .then(function(response) {
       this.setState({greeting: response.name});
   }.bind(this));
  }

  render () {
    return (
      <div>
        <GreetInput update={this.update.bind(this)}/>
        <Greeter greeting={this.state.greeting}/>
      </div>
    )
  }
}

export default App
