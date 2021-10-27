import React from "react";

const Login = ({ loginFormChangeHandler, loginFormSubmitHandler, username, password }) => {
    return (
        <div className="login-container">
                    <h1>Login</h1>
                    <form onSubmit={loginFormSubmitHandler}>
                            <label htmlFor="username">Username</label>
                            <br /><br />
                            <input type="text" name="username" id="username" value={username} onChange={loginFormChangeHandler} />
                            <br /><br />
                            <label htmlFor="password">Password</label>
                            <br /><br />
                            <input type="password" name="password" id="password" value={password} onChange={loginFormChangeHandler} />
                            <br /><br />
                            <small>Password must be at least 6 characters long</small>
                            <br /><br />
                            <button type="submit">Login</button>
                    </form>
                </div>
    );
}

export default Login;