import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick(){
    this.setState(prevState =>
      ({count: prevState.count + 1})
      )
  }
  render() { 
    return (
    <div data-test="component-app" className="App">
      <h1 data-test="counter-display">The count is {this.state.count}</h1>
      <button 
      data-test="increment-button"
      onClick= {this.onButtonClick}
      >Increment counter</button>
    </div>
    );
  }
}
class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick(){
    this.setState(prevState =>
      ({count: prevState.count + 1})
      )
  }
  render(){
    const {count} = this.state;
    return (
      <div>
      <h1 data-test="counter-display">The count is {count} </h1>
      <button onClick={this.onButtonClick} data-test="increment-button">Increment counter</button>
      </div>
    )
  }
}

export default App;
