import React from 'react';
import {GreetInput} from './components/GreetInput/greetInput';
import {Greeter} from './components/Greeter/greeter';
import DropboxTeam from 'dropbox/src/team';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';  

// const App = () => <h1>Hello world!</h1>

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      fetchingState: "INIT",
      teamToken: "",
      greeting: null,
    }
  }

  update(event){
    this.getTeamName(event.target.value);    
  }

  getTeamName(teamToken) {   
   const dbx = new DropboxTeam({ accessToken:  teamToken});
   this.setState({fetchingState: "FETCHING"})
   dbx.teamGetInfo()
    .then(function(response) {
        this.setState({greeting: response.name});
        this.setState({fetchingState: "SUCCESS"});       
   }.bind(this));
  }

  renderGreet() {
    if(this.state.fetchingState === "SUCCESS"){
      return <Greeter greeting={this.state.greeting}/>
    }
    else if(this.state.fetchingState === "FETCHING"){
      return <CircularProgress size={60} thickness={7} />
    }
  }

  render () {
    return (
      <div>
        <GreetInput update={this.update.bind(this)}/>        
        {this.renderGreet()}
      </div>
    )
  }
}

  const MuiApp = () => (                                                                             
      <MuiThemeProvider>                                                                               
        <App />                                                                                        
    </MuiThemeProvider>                                                                              
  );                                                                                                 
  
  export default MuiApp;    
