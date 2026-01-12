'use client'

import { useState } from "react"
import "../Styles/AnyliticsPopup.css"

export default function AnyliticsPopup({ onSave, onClose }) {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [description, setDescription] = useState("");
    const [mobile, setMobile] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!name.trim() || !mail.trim() || !description.trim() || !mobile.trim()) {
            return alert("this is not a right way are you try another way");
        }


        const  saveData = { name, mail, description, mobile };

        onSave(saveData);



        setName("");
        setMail("");
        setDescription("");
        setMobile("");
    }
    return (
        <>
            <div className="main1_AnyliticsPopup">
                <div className="container1_AnyliticsPopup">
                    <div className="row1_AnyliticsPopup">
                        <div className="col1_AnyliticsPopup">
                            <h3>Add new Project</h3>

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="Name" >Name</label>
                                    {/* <input type="text" value={name} placeholder="Name..." onChange={(e) => setName(e.target.value)} /> */}
                                                <input
  type="text"
  value={name}
  placeholder="Report name"
  onChange={(e) => {
    const value = e.target.value;

    const onlyLetters = value.replace(/[0-9]/g, "");

    setName(onlyLetters.toUpperCase());
  }}
/>
                                </div>
                                <div>
                                    <label htmlFor="Mail" >Mail</label>
                                    <input type="email" value={mail} placeholder="Mail..." onChange={(e) => setMail(e.target.value)}  required/>
                                </div>
                                <div>
                                    <label htmlFor="description" >Description</label>
                                    <input type="text" value={description} placeholder="Description..." onChange={(e) => setDescription(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="mobile" >Mobile</label>
                                    {/* <input type="text" value={mobile} placeholder="Mobile..." onChange={(e) => setMobile(e.target.value)} /> */}
                                    <input
  type="text"
  value={mobile}
  onChange={(e) => {
    const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
    setMobile(onlyNumbers);
  }}
  placeholder="Mobile number"
/>
                                </div>

                                <div className="btnRP">
                                    <button type="button" onClick={onClose}>Cancel</button>
                                    <button type="submit" >save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
