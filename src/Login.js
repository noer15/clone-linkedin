import React, { useState } from "react";
import Logo from "./assets/logo.png";
import { auth } from "./firebaseDatabase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState("");

  const dispatch = useDispatch();

  const loginApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((resUser) => {
        dispatch(
          login({
            name: resUser.user.displayName,
            uid: resUser.user.uid,
            email: resUser.user.email,
            profile: resUser.user.photoURL,
          })
        );
        console.log("login: ", resUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const register = () => {
    if (!name) {
      alert("Please enter your name");
    }
    // register with firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // update user profile
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: profile,
        });
        dispatch(
          login({
            name: name,
            email: email,
            profile: profile,
          })
        );
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  return (
    <div className="login">
      <img src={Logo} alt="linkedin" />

      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Fullname (required)"
        />
        <input
          type="text"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          placeholder="Profil Url (required)"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" onClick={loginApp} style={{ cursor: "pointer" }}>
          Sign In
        </button>
        <p>
          Not a Member ? {""}
          <span className="login__register" onClick={register}>
            Register Now
          </span>
        </p>
      </form>
    </div>
  );
}
