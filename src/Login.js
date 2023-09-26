import React, { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "./app/logo.png";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { login } from "./features/userSlice";
import "./login.css";

function Login() {
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then(userAuth => {
      dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profileUrl: userAuth.user.profileURL
      }))
     }).catch(error => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
          photoUrl: profilePic,
        }).then(() => {
          dispatch(
            login({
              email: user.email,
              uid: user.uid,
              displayName: name,
              photoUrl: profilePic,
            })
          );
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <div className="login">
      <img src={logo} alt="linkedin Logo"></img>
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full Name (required if registering)"
          
        ></input>
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          type="text"
          placeholder="Photo pic URL (optional)"
          
        ></input>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email "
          required
        ></input>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
        ></input>
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        New to LinkedIn?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>{" "}
      </p>
    </div>
  );
}

export default Login;
