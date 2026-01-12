// 'use client'

// import { useState } from "react"
// import "../Styles/DevicePopup.css"

// export default function DevicePopup({onSave , onClose}){
//      const [name11111 , setName11111] = useState("");
//      const [description11111 , setDescription11111] = useState("");
//      const [mobile11111 , setMobile11111] = useState("");
//      const [DeviceId , setDeviceId] = useState("");



//      const handleSubmit11111 = (e) => {
//     e.preventDefault();

//     if (!name11111.trim()|| !description11111.trim() || !mobile11111.trim()) {return alert("This is a wrong way")}

//     const dataSaved = {name11111 , description11111 , mobile11111 ,DeviceId  }

//     onSave(dataSaved)

//     setName11111("");
//     setDeviceId("");
//     setDescription11111("");
//     setMobile11111("");
//      }
//     return(
//         <>
        
//                  <div className="main1_DevicePopup">
//                 <div className="container1_DevicePopup">
//                     <div className="row1_DevicePopup">
//                         <div className="col1_DevicePopup">
//                             <h3>Add Device</h3>

//                             <form onSubmit={handleSubmit11111}>
//                                 <div>
//                                     <label htmlFor="Name" >Name</label>

//                                                  <input
//   type="text"
//   value={name11111}
//   placeholder="Device name"
//   onChange={(e) => {
//     const value = e.target.value;

//     const onlyLetters = value.replace(/[0-9]/g, "");

//     setName11111(onlyLetters.toUpperCase());
//   }}
// />

//                                 </div>

//                                 <div>
//                                     <label htmlFor="DeviceId" >Device ID</label>
//                                     <input type="text" value={DeviceId} placeholder="Device ID..." onChange={(e) => setDeviceId(e.target.value)} />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="description" >Description</label>
//                                     <input type="text" value={description11111} placeholder="Description..." onChange={(e) => setDescription11111(e.target.value)} />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="mobile" >Mobile</label>
                               
//                                <input
//   type="text"
//   value={mobile11111}
//   onChange={(e) => {
//     const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
//     setMobile11111(onlyNumbers);
//   }}
//   placeholder="Mobile..."
// />
//                                 </div>

//                                 <div className="btnD">
//                                     <button type="button" onClick={onClose}>Cancel</button>
//                                     <button type="submit" >save</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }




'use client'

import { useState } from "react"
import "../Styles/DevicePopup.css"

export default function DevicePopup({onSave , onClose}){
     const [name11111 , setName11111] = useState("");
     const [description11111 , setDescription11111] = useState("");
     const [mobile11111 , setMobile11111] = useState("");
     const [DeviceId , setDeviceId] = useState("");


  const [mobileError, setMobileError] = useState("")

  const validateMobile = (number) => {
    const regex = /^[6-9]\d{9}$/
    return regex.test(number)
  }



     const handleSubmit11111 = (e) => {
    e.preventDefault();

    if (!name11111.trim()|| !description11111.trim() || !mobile11111.trim()) {return alert("This is a wrong way")}

    const dataSaved = {name11111 , description11111 , mobile11111 ,DeviceId  }

    onSave(dataSaved)

    setName11111("");
    setDeviceId("");
    setDescription11111("");
    setMobile11111("");
     }
    return(
        <>
        
                 <div className="main1_DevicePopup">
                <div className="container1_DevicePopup">
                    <div className="row1_DevicePopup">
                        <div className="col1_DevicePopup">
                            <h3>Add Device</h3>

                            <form onSubmit={handleSubmit11111}>
                                <div>
                                    <label htmlFor="Name" >Name</label>

                                                 <input
  type="text"
  value={name11111}
  placeholder="Device name"
  onChange={(e) => {
    const value = e.target.value;

    const onlyLetters = value.replace(/[0-9]/g, "");

    setName11111(onlyLetters.toUpperCase());
  }}
/>

                                </div>

                                <div>
                                    <label htmlFor="DeviceId" >Device ID</label>
                                    <input type="text" value={DeviceId} placeholder="Device ID..." onChange={(e) => setDeviceId(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="description" >Description</label>
                                    <input type="text" value={description11111} placeholder="Description..." onChange={(e) => setDescription11111(e.target.value)} />
                                </div>
                                {/* <div>
                                    <label htmlFor="mobile" >Mobile</label>
                               
                               <input
  type="text"
  value={mobile11111}
  onChange={(e) => {
    const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
    setMobile11111(onlyNumbers);
  }}
  placeholder="Mobile..."
/>
                                </div> */}


              <div>
                <label>Mobile</label>
                <input
                  type="text"
                  value={mobile11111}
                  placeholder="Mobile..."
                  maxLength={10}
                  onChange={(e) => {
                    const onlyNumbers = e.target.value.replace(/[^0-9]/g, "")
                    setMobile11111(onlyNumbers)
                    setMobileError(
                      validateMobile(onlyNumbers)
                        ? ""
                        : "Enter valid 10-digit Indian mobile number"
                    )
                  }}
                />
                {mobileError && <p style={{ color: "red" }}>{mobileError}</p>}
              </div>



                                <div className="btnD">
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

