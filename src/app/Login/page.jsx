"use client";
import { useState } from "react";
import "../../Styles/Login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.id]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Login Data:", formData);
  // };

    const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token);
      alert("Login Successful!");
      window.location.href = "/dashboard";
    } else {
      alert(data.error);
    }
  };


  return (
    <div className="main1_Login">
      <div className="overlay_Login"></div>
      <div className="container1_Login">
        <div className="col1_Login">
          <h2>Login Here</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ fontFamily: 'Lato , sans-serif'}}>Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="password" style={{ fontFamily: 'Lato , sans-serif'}}>Password</label>
            <input type="password" name="password" id="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />

            <button type="submit" >Log In</button>
            <p className="forget_Link" style={{ fontFamily: 'Lato , sans-serif'}}>Forgot Password?</p>
            <h4 style={{ fontFamily: 'Lato , sans-serif' , fontWeight:400}}> Don't have an account <a href="/Register" style={{textDecoration:"none" , color:"#ff6600"}}>Register</a></h4>
          </form>
        </div>
      </div>
    </div>
  );
}
