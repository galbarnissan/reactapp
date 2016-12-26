import React from 'react'
import './greeter.css'

class Greeter extends React.Component {
  constructor(props) {
  	super(props);
  	console.log("constructor");
  	this.greetings = [
  		"How are you feeling?",
  		"What's up?"
  	]
  	this.state = {
  		greetingsIndex: 0
  	};
  }	

  pickGreeting() {
  	this.setState({greetingsIndex: parseInt(Math.random()*this.greetings.length, 10)});
  }

  componentWillMount() {
  	console.log("componentWillMount");
  }

  componentDidMount() {
  	console.log("componentDidMount");  	
  	this.pickGreeting();
  }

  componentWillReceiveProps(nextProps) {
  	console.log("componentWillReceiveProps");
  	console.log("NextProps. Greeting is " + nextProps.greeting);  	
  	this.pickGreeting();
  }

  componentWillUpdate(){
   	console.log("componentWillUpdate");	
  }

  componentDidUpdate(){
   	console.log("componentDidUpdate");	
  }

  render() {
    return <h1 className="greet">Hello {this.props.greeting}! {this.greetings[this.state.greetingsIndex]}</h1>
  }
}

Greeter.propTypes = {
  greeting: React.PropTypes.string.isRequired
}

export {Greeter}