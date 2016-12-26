import React from 'react'
import './greeter.css'

class Greeter extends React.Component {
  render() {
    return <h1 className="greet">Hello {this.props.greeting}!</h1>
  }

}

Greeter.propTypes = {
  greeting: React.PropTypes.string.isRequired
}

export {Greeter}