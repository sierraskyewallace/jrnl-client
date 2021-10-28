import React from "react";
import Moods from "./components/moods";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      moods: [],
    };
  }

  // fetch all moods for current user
  getMoods = () => {
    fetch(`http://localhost:3000/api/v1/moods`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          moods: data.moods
        });
      });
  }





  render() {


    return (
      <div className="App">
        <h1>Welcome to JRNL </h1>
     
        
        <Moods moods={this.state.moods} getMoods={this.getMoods} />
        
      </div>
    );
  }
}






export default App;
