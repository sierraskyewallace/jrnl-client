import React from "react";

const Login = ({ loginFormChangeHandler, loginFormSubmitHandler, username, password }) => {
    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={loginFormSubmitHandler}>
                <input type="text" placeholder="Username" onChange={loginFormChangeHandler} value={username}/>
            <br />
                <input type="password" placeholder="Password" onChange={loginFormChangeHandler} value={password}/>
            <br />
            <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default Login;