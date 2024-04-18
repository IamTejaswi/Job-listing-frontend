import React from 'react'
import Login from '../../components/Login/Login'
import authBG from "../../assests/images/authBG.png"
export default function LoginPage() {
  return (
    <div style={{ display: "flex", maxHeight: "100vh", maxWidth: "100vw" }}>
      <Login />
      <div style={{ display: "flex", flexDirection: "coloumn" }}>
        <img
          src={authBG}
          style={{
            position: "absolute",
            maxHeight: "100vh",
            width: "50vw",
            zIndex: 0,
          }}
          alt="Register Cover"
        />
        <h1
          style={{
            position: "relative",
            left: "50%",
            zIndex: 1,
            color: "white",
          }}
        >
          {" "}
          Your personal Job finder
        </h1>
      </div>
    </div>
  );
}

