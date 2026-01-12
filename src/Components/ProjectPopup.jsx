// 'use client'



// import { useState } from "react"
// import "../Styles/ProjectPopup.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

// export default function ProjectPopup({ onSave, onClose }) {
//     const [name, setName] = useState("");
//     const [Solutions, setSolutions] = useState("");
//     // const [description, setDescription] = useState("");
//     // const [mobile, setMobile] = useState("");
//   const [location, setLocation] = useState("");

// const [selectedSolution, setSelectedSolution] = useState("");


//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!name.trim() || !Solutions.trim()  || !location.trim()) {
//             return alert("this is not a right way");
//         }
//         const savedData = { name, mail, description, mobile }

//         onSave(savedData);

//         setName("");
//         setSolutions("");
//         // setDescription("");
//         setLocation("");
//         // setMobile("");
//     }

//   const openInMaps = () => {
//     if (!location.trim()) {
//       alert("Please enter a location first");
//       return;
//     }

//     const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
//     window.open(mapUrl, "_blank");
//   };

    
//     return (
//         <>
//             <div className="main1_ProjectPopup">
//                 <div className="container1_ProjectPopup">
//                     <div className="row1_ProjectPopup">
//                         <div className="col1_ProjectPopup">
//                             <h3>Add new Project</h3>

//                             <form onSubmit={handleSubmit}>
//                                 <div>
//                                     <label htmlFor="Name" >Name</label>
//                                                 <input
//   type="text"
//   value={name}
//   placeholder="Name..."
//   onChange={(e) => {
//     const value = e.target.value;

//     const onlyLetters = value.replace(/[0-9]/g, "");

//     setName(onlyLetters.toUpperCase());
//   }}
// />

//                                 </div>
//                                 <div>
//                                     <label htmlFor="Solutions" >Solutions</label>
//                                <select>
//                                 <option value={Solutions}>Select Solutions</option>
//   <option value="Solution 1">Solution 1</option>
//   <option value="Solution 2">Solution 2</option>
//   <option value="Solution 3">Solution 3</option>
//                                </select>
//                                </div>

//     <div className="inputWrapper">
//       <label>Area</label>

//       <div className="inputWithIcon">
//         <input
//           type="text"
//           placeholder="Enter location..."
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               openInMaps();
//             }
//           }}
//         />

//         <FontAwesomeIcon
//           icon={faLocationCrosshairs}
//           className="inputIcon"
//           onClick={openInMaps}
//           title="Open in Google Maps"
//         />
//       </div>
//     </div>
//                                 <div>

//                                 </div>
//                                 <div className="btnPP">
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
import "../Styles/ProjectPopup.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons"

export default function ProjectPopup({ onSave, onClose }) {

  const [name, setName] = useState("")
  const [solutions, setSolutions] = useState("")
  const [location, setLocation] = useState("")

  // =====================
  // OPEN GOOGLE MAPS
  // =====================
  const openInMaps = () => {
    if (!location.trim()) {
      alert("Please enter a location first")
      return
    }

    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`
    window.open(mapUrl, "_blank")
  }

  // =====================
  // SUBMIT FORM
  // =====================
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name.trim() || !solutions.trim() || !location.trim()) {
      alert("Please fill all fields properly")
      return
    }

    const savedData = {
      name,
      solutions,
      location
    }

    onSave(savedData)

    // reset
    setName("")
    setSolutions("")
    setLocation("")
  }

  return (
    <div className="main1_ProjectPopup">
      <div className="container1_ProjectPopup">
        <div className="col1_ProjectPopup">

          <h3>Add New Project</h3>

          <form onSubmit={handleSubmit}>

            {/* ================= NAME ================= */}
            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Name..."
                value={name}
                onChange={(e) => {
                  const onlyLetters = e.target.value.replace(/[0-9]/g, "")
                  setName(onlyLetters.toUpperCase())
                }}
              />
            </div>

            {/* ================= SOLUTIONS ================= */}
            <div>
              <label>Solutions</label>
              <select
                value={solutions}
                onChange={(e) => setSolutions(e.target.value)}
              >
                <option value="">Select Solutions</option>
                <option value="Solution 1">Solution 1</option>
                <option value="Solution 2">Solution 2</option>
                <option value="Solution 3">Solution 3</option>
              </select>
            </div>

            {/* ================= LOCATION ================= */}
            <div className="inputWrapper">
              <label>Area</label>

              <div className="inputWithIcon">
                <input
                  type="text"
                  placeholder="Enter location..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      openInMaps()
                    }
                  }}
                />

                <FontAwesomeIcon
                  icon={faLocationCrosshairs}
                  className="inputIcon"
                  title="Open in Google Maps"
                  onClick={openInMaps}
                />
              </div>
            </div>


            {/* ================= BUTTONS ================= */}
            <div className="btnPP">
              <button type="button" onClick={onClose}>
                Cancel
              </button>
              <button type="submit">
                Save
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}