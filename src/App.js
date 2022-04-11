import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { logout, login } from "./features/userSlice";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./firebaseDatabase";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  // auth state change firebase
  useEffect(() => {
    onAuthStateChanged(auth, (resUser) => {
      if (resUser) {
        dispatch(
          login({
            name: resUser.displayName,
            uid: resUser.uid,
            email: resUser.email,
            profile: resUser.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {/* header */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
