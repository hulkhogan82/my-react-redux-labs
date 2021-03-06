import React, { useState, useEffect } from 'react';
import { store } from '../store/store';
import { actions } from '../store/actions';

export const Login = () => {
    console.log("Login");

    const [showPassword, setShowPassword] = useState(false);
    const [state, setState] = useState(store.getState());

    const onClick = () => setShowPassword(!showPassword);
    console.log('showPassword:' + showPassword);

    function register(e) {
        e.preventDefault();
        console.log("Hello world from Login component");
        store.dispatch(actions.login({
            email: e.target['email'].value,
            password: e.target['password'].value
        }));
    }

    console.log('state.user (Login form):' + state.user);

    return (
        <section style={styles.wrapper} className="mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
                <h1 className="mdl-card__title-text">Login</h1>
            </div>
            <div className="mdl-card__supporting-text">
                <div>
                    <p>First time user? <a href="/account">Register</a></p>
                </div>
                <form onSubmit={(e) => { register(e) }}>

                    <div style={styles.inputDivs}>
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={styles.inputDivs}>
                            <input id="email" className="mdl-textfield__input" />
                            <label className="mdl-textfield__label" htmlFor="email">Email</label>
                        </div>
                    </div>

                    <div style={styles.inputDivs}>
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={styles.inputDivs}>
                            <input id="password" className="mdl-textfield__input" type={showPassword ? 'Text':'password'}/>
                            <label className="mdl-textfield__label" htmlFor="email">Password</label>
                            <input id="showPasswordBtn" type="button" value={showPassword ? 'Hide':'Show'} onClick={onClick}></input>
                        </div>
                    </div>

                    <input type="submit" value="Login" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton} />

                </form>
            </div>
        </section>
    )
}
const styles = {};