import React from "react";
import Login from "./components/login";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      loginForm: {
        username: "",
        password: ""
      }

    };
  }

  loginFormSubmitHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      loginForm: {
        ...this.state.loginForm,
        [name]: value

      }
    });
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
    return (
      <div className="App">
        <h1>hello </h1>
        <Login
          loginFormSubmitHandler={this.loginFormSubmitHandler}
          username={this.state.loginForm.username}
          loginFormChangeHandler={this.loginFormChangeHandler}
          password={this.state.loginForm.password}
        />
      </div>
    );
  }
}

export default App;
