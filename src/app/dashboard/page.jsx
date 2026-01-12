'use client'


import DownNav from "@/Components/DownNav"
import "../../Styles/dashboard.css"
import gsap from "gsap"
import { useEffect } from "react"

export default function dashboard(){

  
useEffect(() => {
  const heading = document.querySelector(".col1_dashboard h3");

  const letters = heading.innerText.split("");
  heading.innerHTML = letters
    .map(letter =>
      letter === " "
        ? `<span class="letter space">&nbsp;</span>`
        : `<span class="letter">${letter}</span>`
    )
    .join("");

  gsap.fromTo(
    ".col1_dashboard .letter",
    {
      y: 40,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.35,
      stagger: 0.06,     
      ease: "power3.out",
      repeat: -1,        
      repeatDelay: 2,
      yoyo: true,
    }
  );
}, []);
    return(
        <>
        <div className="main1_dashboard">
            <div className="container1_dashboard">
                <div className="row1_dashboard">
                    <div className="col1_dashboard">
                          <h3>Welcome to Dash-Board</h3>
                    </div>
                    <DownNav />
                </div>
            </div>
        </div>
      
        </>
    )
}
