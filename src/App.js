import React from 'react';
import {GreetInput} from './components/greetInput';
import {Greeter} from './components/greeter';

// const App = () => <h1>Hello world!</h1>

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      greeting: ''
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