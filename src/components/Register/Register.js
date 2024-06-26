import React from 'react'
import styles from "./Register.module.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { registerUser}  from "../../apis/auth"

export default function Register() {
const navigate = useNavigate();
const [formData, setFormData] = useState({
  name:"",
  email:"",
  password:"",
  mobile:"",
});
const [isFormChecked, setIsFormChecked] = useState(false);

const handleChange=(event)=>{
  setFormData({...formData, [event.target.name]:event.target.value})
}

const handleSubmit= async()=>{
  if(
    !formData.email||
    !formData.mobile||
    !formData.name||
    !formData.password
  ){
    alert("Fields can't be empty")
    return;
  }

  if(!isFormChecked){
    alert("Please accept T&C")
    return;
  }
  {
     await registerUser(formData);
  }
}



  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Create an account</h1>
      <h2 className={styles.h2}>Your personal job finder is here</h2>
      <input
        className={styles.input}
        name="name"
        onChange={handleChange}
        type={"text"}
        placeholder="Name"
      ></input>
    
      <input
        className={styles.input}
        name="email"
        onChange={handleChange}
        type={"email"}
        placeholder="Email"
      ></input>
      <input
        className={styles.input}
        name="mobile"
        onChange={handleChange}
        type={"tel"}
        placeholder="Mobile"
      ></input>
      <input
        className={styles.input}
        name="password"
        onChange={handleChange}
        type={"password"}
        placeholder="Password"
      ></input>
      <span>
        <input
          className={styles.grey}
          type="checkbox"
          onChange={(event) =>setIsFormChecked(event.target.checked)}
          name="checkbox"
          id="check1"
        />
        <label
        className ={styles.grey}
        style={{fontSize:"12px"}}
        htmlFor='check1'
        >
          By creating an account, I agree to our terms of use and privacy policy
        </label>
      </span>
      <button
        onClick={handleSubmit}
        className={styles.button}
      >
        Create Account
      </button>
      {/* <Button>Create account</Button> */}
      <p className={styles.footer}>
        Already have an account?
        <span className={styles.underline} onClick={() => navigate("/login")}>
          Sign in
        </span>
      </p>
    </div>
  );
}
