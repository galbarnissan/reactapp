import React from 'react';
import {GreetInput} from './components/GreetInput/greetInput';
import {Greeter} from './components/Greeter/greeter';

// const App = () => <h1>Hello world!</h1>

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      greeting: "world"
    }
  }
  update(event){
    this.setState({greeting: event.target.value})
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