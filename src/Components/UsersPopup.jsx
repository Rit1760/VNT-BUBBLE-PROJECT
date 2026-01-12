'use client'

import { useState } from "react"
import "../Styles/UsersPopup.css"

export default function UsersPopup({ onSave, onClose }) {

    const [name, setName] = useState("");
    const [Pname, psetName] = useState("");
    const [mail, setMail] = useState("");
    // const [description, setDescription] = useState("");
    const [mobile, setMobile] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !Pname.trim() || !mail.trim() || !mobile.trim()) { 
            return alert("this is not a right way");
         }

        const saveData = { name, mail, mobile , Pname };

        onSave(saveData)

        setName("");
        psetName("");
        setMail("");
        // setDescription("");
        setMobile("");
    }
    return (
        <>
            <div className="main1_UsersPopup">
                <div className="container1_UsersPopup">
                    <div className="row1_UsersPopup">
                        <div className="col1_UsersPopup">
                            <h3>Add new Project</h3>

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="Name" >Name</label>
                                    <input type="text" value={name} placeholder="Name..." onChange={(e) => setName(e.target.value.toUpperCase())} />
                                </div>
                                                                <div>
                                    <label htmlFor="Name" >Project Name</label>
                                    <input type="text" value={Pname} placeholder="Project Name..." onChange={(e) => psetName(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="Mail" >Mail</label>
                                    <input type="email" value={mail} placeholder="Mail..." onChange={(e) => setMail(e.target.value)} required />
                                </div>
                                {/* <div>
                                    <label htmlFor="description" >Description</label>
                                    <input type="text" value={description} placeholder="Description..." onChange={(e) => setDescription(e.target.value)} />
                                </div> */}
                                <div>
                                    <label htmlFor="mobile" >Mobile</label>
                                    {/* <input type="text" value={mobile} placeholder="Mobile..." onChange={(e) => setMobile(e.target.value)} />
                                     */}

                                     <input
  type="text"
  value={mobile}
  onChange={(e) => {
    const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
    setMobile(onlyNumbers);
  }}
  placeholder="Mobile..."
/>

                                </div>

                                <div className="btnU">
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


