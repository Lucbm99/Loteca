import React from 'react';
import Login from "../components/login";
import Register from "../components/register";
import ForgotPassword from "../components/forgot_password";

function Login() {

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/forgotpassword">
                        <ForgotPassword />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>

    );
}

export default Login;
