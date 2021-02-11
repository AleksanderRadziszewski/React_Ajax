import React, {Component} from 'react';

class App extends Component  {

  state = {
    text: "type a date",
    error: ""
  }

  handleDateChange = (e) => {
    const value = this.refs.number.value;
    fetch(`http://numbersapi.com/${value}/year?json`)
    .then(res => {
      if(res.ok) {
        return res
      }
      throw Error(res.status);
    })
    .then (res => res.json())
    .then(data => this.setState({
      text: data.text
    }))
    .catch(err => {
      this.setState({text: "Something is wrong :(" + err})
    }) 
  }

  render(){
  return (
    <div>
      <input onChange={this.handleDateChange} type="text" ref= "number"/>
  <p>In this year: {this.state.text}</p>
    </div>
  );
}
}

export default App;
