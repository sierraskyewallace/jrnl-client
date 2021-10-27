import React from "react";
import Login from "./components/login";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      loginForm: {
        username: "",
        password: ""
      }

    };
  }

  loginFormSubmitHandler = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.loginForm)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.error) {
          alert(data.error);
        } else {
          this.setState({
            currentUser: data.user
          });
        }
      }
      );
  };



  loginFormChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      loginForm: {
        ...this.state.loginForm,
        [name]: value
      }
    });
    
  };






  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <h1>Welcome to JRNL </h1>
        <h2>{ currentUser ? `Welcome ${currentUser.data.attributes.username}` : "Login" }</h2>
        <Login
          loginFormSubmitHandler={this.loginFormSubmitHandler}
          loginFormChangeHandler={this.loginFormChangeHandler}
          username={this.state.loginForm.username}
          password={this.state.loginForm.password}
        />
      </div>
    );
  }
}

export default App;
