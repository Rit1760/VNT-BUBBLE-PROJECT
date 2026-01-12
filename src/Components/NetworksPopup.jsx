// 'use client'

// import { useState } from "react";
// import "../Styles/NetworksPopup.css";

// export default function NetworksPopup({ onSave, onClose }) {
//   const [name, setName] = useState("");
//   // const [mail, setMail] = useState("");
//   const [description, setDescription] = useState("");
//   // const [mobile, setMobile] = useState("");
//   const [network, setNetwork] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!name || !description.trim() ||!network.trim() ) {
//       return alert("Please fill in all fields before saving!");
//     }


//     const addcontent = { name, mail, description };

//     onSave(addcontent);

//     setName("");
//     setDescription("");
//     setNetwork("");
//   };

//   return (
//     <>
//       <div className="main1_NetworksPopup">
//         <div className="container1_NetworksPopup">
//           <div className="row1_NetworksPopup">
//             <div className="col1_NetworksPopup">
//               <h3>Add Network</h3>

//               <form onSubmit={handleSubmit}>
//                 <div>
//                   <label htmlFor="Name">Name</label>
//                   <input
//                     type="text"
//                     value={name}
//                     placeholder="Name..."
//                     onChange={(e) => setName(e.target.value.toUpperCase())}
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="description">Description</label>
//                   <input
//                     type="text"
//                     value={description}
//                     placeholder="Description..."
//                     onChange={(e) => setDescription(e.target.value)}
//                   />
//                 </div>
//                 <div>
//                   <select value={mobile} onChange={(e) => setMobile(e.target.value)}>
//                     <option value="Model1">LoraWan</option>
//                     <option value="Model2">HTTP</option>
//                     <option value="Model3">HTTPS</option>
//                     <option value="Model3">MQTT</option>
//                     <option value="Model3">Bluetooth</option>
//                   </select>
//                 </div>

//                 <div className="btnN">
//                   <button type="button" onClick={onClose}>
//                     Cancel
//                   </button>
//                   <button type="submit">Save</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

'use client'

import { useState } from "react";
import "../Styles/NetworksPopup.css";

export default function NetworksPopup({ onSave, onClose }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [network, setNetwork] = useState(""); // network select ke liye

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !description.trim() || !network.trim()) {
      return alert("Please fill in all fields before saving!");
    }

    const newNetwork = { name, description, network };

    onSave(newNetwork);

    setName("");
    setDescription("");
    setNetwork("");
  };

  return (
    <div className="main1_NetworksPopup">
      <div className="container1_NetworksPopup">
        <div className="row1_NetworksPopup">
          <div className="col1_NetworksPopup">
            <h3>Add Network</h3>

            <form onSubmit={handleSubmit}>
              <div className="input_group">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  value={name}
                  placeholder="Enter Name..."
                  onChange={(e) => setName(e.target.value.toUpperCase())}
                />
              </div>

              <div className="input_group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  value={description}
                  placeholder="Enter Description..."
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="input_group">
                <label htmlFor="network">Network Type</label>
                <select value={network} onChange={(e) => setNetwork(e.target.value)}>
                  <option value="">Select Network Type</option>
                  <option value="LoraWan">LoraWan</option>
                  <option value="HTTP">HTTP</option>
                  <option value="HTTPS">HTTPS</option>
                  <option value="MQTT">MQTT</option>
                  <option value="Bluetooth">Bluetooth</option>
                </select>
              </div>

              <div className="btnN">
                <button type="button" onClick={onClose} className="cancel_btn">
                  Cancel
                </button>
                <button type="submit" className="save_btn">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
