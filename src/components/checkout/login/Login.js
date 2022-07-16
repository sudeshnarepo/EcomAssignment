import React from 'react';
import "./Login.css";

const Login = () => {
    return (
        <>
            <div class="login__wrapper">
                <form class="login__form" action="#">
                    <h1 className='login__title'>Login</h1>
                    <div class="login__input">
                        <input type="email" name='email' placeholder="Email" required="" />
                    </div>
                    <div class="login__input">
                        <input type="password" name='password' placeholder="Password" required="" />
                    </div>
                    <button type="submit" class="login__button">LOGIN</button>
                </form>
            </div>
        </>
    );
}

export default Login