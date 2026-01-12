"use client";

import { useState } from "react";

import "../../Styles/Register.css";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Registration successful!");
      window.location.href = "/Login";
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="main1_Register">
      <div className="overlay_Register"></div>
      <div className="container1_Register">
        <div className="col1_Register">

          <h2>Create Your Account</h2>

          <form onSubmit={handleSubmit}>

            <label htmlFor="username" style={{ fontFamily: 'Lato , sans-serif'}}>Username</label>
            <input type="text" name="username"  id="username" placeholder="Enter your username" value={formData.username} onChange={handleChange} required />

            <label htmlFor="email" style={{ fontFamily: 'Lato , sans-serif'}}>Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="password"  style={{ fontFamily: 'Lato , sans-serif'}}>Password</label>
            <input type="password" name="password" id="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />

            <label htmlFor="confirmPassword" style={{ fontFamily: 'Lato , sans-serif'}}>Confirm Password</label>
            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} required
            />

            <button type="submit">Register</button>
          </form>

            <h4 style={{ fontFamily: 'Lato , sans-serif' , fontWeight:400}}> Don't have an account <a href="/Login" style={{textDecoration:"none" , color:"#ff6600"}}>Login</a></h4>

        </div>
      </div>
    </div>
  );
}