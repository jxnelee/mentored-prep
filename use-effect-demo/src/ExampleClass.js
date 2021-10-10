import React from 'react'

/**
 * a class that has componentDidMount, componentDidUpdate, and componentWillUnmount
 */
export default class ExampleClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

 //INDIVIDUAL CALLS FOR INIT, UPDATE, DECONSTRUCTION
  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentWillUnmount() {
      alert("bye")
  }

  /* YOU CAN ALSO USE USE EFFECT!
  useEffect() {
    // componentDidMount, componentDidUpdate functionality
    document.title = `You clicked ${this.state.count} times`;

    // componentWillUnmount functionality
    return function cleanup() {
      alert("bye")
    }
  }
  */

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}