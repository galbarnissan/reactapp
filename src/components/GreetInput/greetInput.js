import React from 'react';
import './greetInput.css'

class GreetInput extends React.Component{
  render () {
    return (
      <div>
        <div>Enter your greeting</div>
        <input type="text" className="input" onChange={this.props.update} />
      </div>
    )
  }
}

GreetInput.propTypes = {
  update: React.PropTypes.func.isRequired
}

export  {GreetInput}