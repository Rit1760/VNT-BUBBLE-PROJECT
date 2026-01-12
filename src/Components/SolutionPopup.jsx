'use client'

import { useState } from "react";
import "../Styles/SolutionPopup.css";

export default function SolutionPopup({ onSave, onClose }) {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [description, setDescription] = useState("");
  const [mobile, setMobile] = useState("");

  const [devicesCount, setDevicesCount] = useState(0);
const [outputCount, setOutputCount] = useState(0);


  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !mail.trim()  || !description.trim() ) {
      return alert("Please fill all the fields");
    }


    const newProject11 = { name,  description };

    onSave(newProject11);

    setName("");
    setMail("");
    setDescription("");
    // setMobile("");
  };

  return (
    <div className="main1_SolutionPopup">
      <div className="container1_SolutionPopup">
        <div className="row1_SolutionPopup">
          <div className="col1_SolutionPopup">
            <h3>Add Solution</h3>

            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  value={name}
                  placeholder="Name..."
                  onChange={(e) => setName(e.target.value.toUpperCase())}
                />
              </div>
              <div>
                <label htmlFor="Mail">Mail</label>
                <input
                  type="email"
                  value={mail}
                  placeholder="Mail..."
                  onChange={(e) => setMail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="Description">Description</label>
                <input
                  type="text"
                  value={description}
                  placeholder="Description..."
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>


<div className="container2_Solutions_button">
  <div className="row2_Solutions_button">
    {/* Devices Column */}
    <div className="col1_Solutions_buttons">
      <button type="button" onClick={() => setDevicesCount(devicesCount > 0 ? devicesCount - 1 : 0)}>-</button>
      <p>Devices: {devicesCount}</p>
      <button type="button" onClick={() => setDevicesCount(devicesCount + 1)}>+</button>
    </div>

    {/* Output Column */}
    <div className="col2_Solutions_buttons">
      <button type="button" onClick={() => setOutputCount(outputCount > 0 ? outputCount - 1 : 0)}>-</button>
      <p>Output: {outputCount}</p>
      <button type="button" onClick={() => setOutputCount(outputCount + 1)}>+</button>
    </div>
  </div>
</div>



              </div>

              <div className="btnS">
                <button type="button" onClick={onClose}>Cancel</button>
                <button type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}