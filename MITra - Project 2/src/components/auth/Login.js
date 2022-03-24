import React, { useState } from "react";
import Mitra from '../../Images/MITra_Logo.png'
import FB from '../../Images/fb.png'
import './Login.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { useNavigate } from 'react-router-dom';
import * as FireAuth from "../../FireAuth";


// import { auth, provider } from "../../Firebase"
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { Route, Link, BrowserRouter } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    // const handleSignIn = async (e) => {
    //     e.preventDefault()
    //     await signInWithEmailAndPassword(auth, email, password).then((auth) => {
    //         console.log(auth)
    //     }).catch((e) => alert(e.message))
    //     setEmail("")
    //     setPassword("")
    // }

    // const registerSignIn = async (e) => {
    //     e.preventDefault()
    //     await createUserWithEmailAndPassword(auth, email, password).then((auth) => {
    //         if (auth) {
    //             console.log(auth)

    //         }
    //     }
    //     ).catch((e) => alert(e.message))
    // }

    // const signIn = async () => {
    //     await signInWithPopup(auth, provider).catch((e) => alert(e.message));

    //     console.log(auth);
    // }

    // const signInWithGoogle = () => {
    //     const provider = new GoogleAuthProvider();
    //     signInWithPopup(authentication, provider)
    //         .then((result) => {
    //             console.log(result);
    //         }).catch((error) => {
    //             console.log(error)
    //         });
    // }

    async function clickFunctionGoogle() {
        let result = await FireAuth.googleSignIn();
        if (result) {
            navigate("/home");
        }
    }

    async function clickFunctionFacebook() {
        let result = await FireAuth.facebookSignIn();
        if (result) {
            navigate("/home");
        }
    }

    async function clickFunctionSignup(email, password) {
        let result = await FireAuth.signUp(email, password);
        if (result) {
            navigate("/home");
        }
    }

    async function clickFunctionSignin(email, password) {
        let result = await FireAuth.signIn(email, password);
        if (result) {
            navigate("/home");
        }
    }

    return (
        <div className="login">
            <div className="login_container">
                <div className="login_logo">
                    <img src={Mitra} alt="Logo" />
                </div>
                <div className="login_desc">
                    <p style={{ color: "royalblue" }}>Your Friend at MIT!</p>
                </div>

                <div className="login_auth">
                    <div className="login_authOptions">

                        <div className="login_authOption">
                            <img className="login_authGoogle" src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg" alt="Google" />
                            <p onClick={() => clickFunctionGoogle()}>Continue with Google</p>
                        </div>

                        <div className="login_authOption">
                            <img className="login_authGoogle" src={FB} alt="Facebook_Logo" />
                            <span onClick={() => clickFunctionFacebook()}>Continue with Facebook</span>
                        </div>

                        <div className="signUp_WithEmail">
                            <span onClick={() => clickFunctionSignup(email, password)}>
                                Sign Up with Email
                            </span>
                        </div>


                        <div className="login_authDesc">
                            <p>
                                By continuing you indicate that you have read and agree to Quora's
                                <span style={{ color: "blue", cursor: "pointer" }}>
                                    Terms of Service{" "}
                                </span>
                                and {" "}
                                <span style={{ color: "blue", cursor: "pointer" }}>
                                    Privacy Policy
                                </span>
                                .
                            </p>
                        </div>
                    </div>
                    <div className="login_emailPass">

                        <div className="login_inputFields">
                            <div className="login_inputFieldHeading">
                                <h5>Email</h5>
                            </div>
                            <div className="login_inputField">
                                <input
                                    onChange={(e) => { setEmail(e.target.value.toString()); }}

                                    type="text"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="login_inputFieldHeading">
                                <h5>Password</h5>
                            </div>
                            <div className="login_inputField">
                                <input
                                    onChange={(e) => { setPassword(e.target.value.toString()); }}

                                    type="password"
                                    placeholder="Your Password"
                                />
                                <div className="login_label">
                                    <h4>Login</h4>
                                </div>
                            </div>


                        </div>
                        <div className="login_forgetButton">
                            <small>Fogot Password?</small>
                            <div className="login_button">
                                <button onClick={() => clickFunctionSignin(email, password)}>
                                    <p>Login</p>
                                </button>
                            </div>
                            {/* <button onClick={handleSignIn}>Login</button> */}
                        </div>

                        {/* <button onClick={registerSignIn}>Register</button> */}
                    </div>
                </div>
                <div className="login_lang">
                    <p>हिन्दी</p>
                    <ArrowForwardIosIcon fontsize="small" />
                </div>
                <div className="login_footer">
                    <p>About</p>
                    <p>Languages</p>
                    <p>Careers</p>
                    <p>Businesses</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Contact</p>
                    <p>&copy; MITra Inc. 2022</p>
                </div>
            </div>
        </div>
    )
}

export default Login
