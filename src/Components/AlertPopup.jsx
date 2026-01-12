


'use client'

import { useState } from "react"
import "../Styles/AlertsPopup.css"

export default function AlertPopup({ onSave, onClose }) {

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [description, setDescription] = useState("");
    const [Solution, setSolution] = useState("");
    const [Devices, setDevices] = useState("");
    // const [mobile, setMobile] = useState("");
    const [ConditionsType, setConditionsType] = useState("");
    const [Conditions, setConditions] = useState("");
    const [Valuee, setValuee] = useState("");
    const [Rule, setRule] = useState("");
    const [EnterValue, setEnterValue] = useState("");



      const [mobile, setMobile] = useState("")
  const [mobileError, setMobileError] = useState("")



  const validateMobile = (number) => {
    const regex = /^[6-9]\d{9}$/
    return regex.test(number)
  }



    const handleSubmitAT = (e) => {
        e.preventDefault();
        if (!name.trim() || !Solution.trim() || !Devices.trim() || !mobile.trim() || !Conditions.trim() || !ConditionsType.trim() || !Valuee.trim() || !Rule.trim()  || !EnterValue.trim()) { return alert("This is not a right way") }
        const saveDataAT = { name, mail, description, mobile , ConditionsType , Conditions , Valuee  , Rule ,EnterValue }
        onSave(saveDataAT)
        setName("");
        setMail("");
        setSolution("");
        setDescription("");
        setDevices("");
        setMobile("");
        setConditionsType("");
        setConditions("");
        setValuee("");
        setRule("");
        setEnterValue("");
    }
    return (
        <>
            <div className="main1_AlertPopup">
                <div className="container1_AlertPopup">
                    <div className="row1_AlertPopup">
                        <div className="col1_AlertPopup">
                            <h3>Edit Alert</h3>
                            <form onSubmit={handleSubmitAT}>
                                <div>
                                    <label htmlFor="Name" >Alert Name</label>
                                    {/* <input type="text" value={name} placeholder="Name..." onChange={(e) => setName(e.target.value)}/> */}
                                                <input
  type="text"
  value={name}
  placeholder="Name..."
  onChange={(e) => {
    const value = e.target.value;

    const onlyLetters = value.replace(/[0-9]/g, "");

    setName(onlyLetters.toUpperCase());
  }}
/>
                                </div>
                                <div>
                                    <label htmlFor="Solution" >Solution</label>
                                    <input type="text" value={Solution} placeholder="Solution..." onChange={(e) => setSolution(e.target.value)}/>
                                </div>
                                <div>
                                    <h4>Conditions</h4>

<div className="Conditions_Popup">


  <div className="Conditions_Form">

    <div className="Form_Field">
      <label>Select Devices</label>
      <input
        type="text"
        value={Devices}
        placeholder="Description..."
        onChange={(e) => setDevices(e.target.value)}
      />
    </div>

    <div className="Form_Field">
      <label>Conditions Types</label>
      <input
        type="text"
        value={ConditionsType}
        placeholder="Conditions Types..."
        onChange={(e) => setConditionsType(e.target.value)}
      />
    </div>

    <div className="Form_Field">
      <label>Conditions</label>
      <input
        type="text"
        value={Conditions}
        placeholder="Conditions..."
        onChange={(e) => setConditions(e.target.value)}
      />
    </div>

    <div className="Form_Field">
      <label>Value</label>
      {/* <input
        type="text"
        value={Valuee}
        placeholder="Value..."
        onChange={(e) => setValuee(e.target.value)}
      /> */}
                                     <input
  type="text"
  value={Valuee}
  onChange={(e) => {
    const onlyNumbersV = e.target.value.replace(/[^0-9]/g, "");
    setValuee(onlyNumbersV);
  }}
  placeholder="Value..."
/>
    </div>

    <div className="Form_Field">
      <label>Rule</label>
      <input
        type="text"
        value={Rule}
        placeholder="Rule..."
        onChange={(e) => setRule(e.target.value)}
      />
    </div>
    </div>
    </div>
    </div>



                                
                            <h3>No of Reading's Before alert is sent</h3>
                                 <div>
                                    <label htmlFor="Enter Value" >Enter Value</label>
                                    <input type="text" value={EnterValue} placeholder="EnterValue..." onChange={(e) => setEnterValue(e.target.value)}/>
                                </div>

                                <div>
                                    {/* <label htmlFor="mobile" >Mobile</label> */}
                                    {/* <input type="text" value={mobile} placeholder="Mobile..." onChange={(e) => setMobile(e.target.value)}/> */}
                               {/* <input
  type="text"
  value={mobile}
  onChange={(e) => {
    const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
    setMobile(onlyNumbers);
  }}
  placeholder="Mobile..."
/> */}


              <div>
                <label>Mobile</label>
                <input
                  type="text"
                  value={mobile}
                  placeholder="Mobile..."
                  maxLength={10}
                  onChange={(e) => {
                    const onlyNumbers = e.target.value.replace(/[^0-9]/g, "")
                    setMobile(onlyNumbers)
                    setMobileError(
                      validateMobile(onlyNumbers)
                        ? ""
                        : "Enter valid 10-digit Indian mobile number"
                    )
                  }}
                />
                {mobileError && <p style={{ color: "red" }}>{mobileError}</p>}
              </div>

                                </div>
                                <div className="btnAT">
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



