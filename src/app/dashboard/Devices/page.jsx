'use client'

import { useState } from "react"
import "../../../Styles/Devices.css"
import DevicePopup from "@/Components/DevicePopup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faAngleUp, faDownLong , faFile , faCalendarDays , faBars } from "@fortawesome/free-solid-svg-icons"
faDownLong
FontAwesomeIcon
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";





export default function Devices() {
    const [search, setSearch] = useState("");
    const [projectD, setProjectsD] = useState([]);
    const [showPopupD, setShowPopupD] = useState(false);

      const [editIndexD, setEditIndexD] = useState(null);
const [editDataD, setEditDataD] = useState(null);


const [deleteIndexD, setDeleteIndexD] = useState(null);
const [deleteTextD, setDeleteTextD] = useState("");
const [showDeletePopupD, setShowDeletePopupD] = useState(false);

    const router = useRouter();









    
  const filteredProjectsD = projectD.filter((p) =>
  p.name11111.toLowerCase().includes(search.toLowerCase())
);
           const [activeData , setActiveData] = useState(true)

    const clickData = () => {
        setActiveData(!activeData)
    }


const handleEditProjectD = (index) => {
  setEditIndexD(index);
  setEditDataD(projectD[index]);
  setShowPopupD(true);
};



const handleDeleteClickD = (index) => {
  setDeleteIndexD(index);
  setDeleteTextD("");
  setShowDeletePopupD(true);
};




const confirmDeleteProject = () => {
  if (deleteTextD !== "DELETE") return;

  const updated = projectD.filter((_, i) => i !== deleteIndexD);

  setProjectsD(updated);
  localStorage.setItem("hardwareProjects", JSON.stringify(updated));

  setShowDeletePopupD(false);
};




const handleAddProjectD = (projectDD) => {
  const newProjectD = {
    ...projectDD,
    id: uuidv4(),        
    deviceId: uuidv4(),   
    date: new Date().toLocaleDateString(),
    isActive: false,
  };

  const updatedProjectsD = [...projectD, newProjectD];

  setProjectsD(updatedProjectsD);
  localStorage.setItem("Devices", JSON.stringify(updatedProjectsD));
  setShowPopupD(false);
};








const handleCloneProjectD = (index) => {
  const projectToClone = projectD[index];

  const baseName = projectToClone.name.replace(/\s\(Copy.*\)$/i, "");

  const copyCount = projectD.filter((p) =>
    p.name.startsWith(baseName + " (Copy")
  ).length;



  const clonedProjectD = {
  ...projectToClone,
  id: Date.now(),
  name: `${baseName} (Copy ${copyCount + 1})`,
  date: new Date().toLocaleDateString(),
  isActive: false,
};

  setProjectsD((prev) => [...prev, clonedProjectD]);
};




    return (
        <>
            <div className="main1_Devices">
                <div className="container1_Devices">
                    <div className="row1_Devices">
                        <div className="col1_Devices">
              <input
  type="text"
  placeholder="Search Devices..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>





                            <button onClick={() => setShowPopupD(true)}>
                                + Add Device
                            </button>
                        </div>

                        <div className="projects_list_Devices">
                            {projectD.length === 0 ? (
                                <p>No Devices yet</p>
                            ) : (
                              filteredProjectsD.map((p, i) => (
                                    <div key={i} className="project_item_Devices">

                                              <div className="clone_Devices_item" style={{display:"flex" , alignItems:"center"}}>
        <div className="col1_clone_Devices" style={{width:"50%"}}>
                                  <span className="Devices_avatar">
  {p.name?.charAt(0).toUpperCase()}
</span>
        </div>

                                              <div className="col2_clone_Devices" style={{ width: "50%" }}>
  <h3>
    {p.name11111.length > 5 ? p.name11111.slice(0, 5) + "..." : p.name11111}
  </h3>
</div>
        </div>

                <div className="clone_Devices_item2" style={{display:"flex" , alignItems:"center"}}>
          <div className="col3_clone_Project" style={{width:"50%"}}>
      <p>{p.mail11111}</p>
        </div>
        <div className="col4_clone_Devices" style={{width:"50%"}}>
      <p>{p.mobile11111}</p>
        </div>
        </div>

                                        <p>{p.description11111}</p>

                                              <div className="project_footer_Devices">
        <p><strong>Date:</strong> {p.date}</p>
        <button 
          onClick={() => handleToggleActive(i)} 
          className={p.isActive ? "active_btn" : "inactive_btn"}
        >
          {p.isActive ? "Active" : "Inactive"}
        </button>
      </div>

                          <div className="Devices_end_buttons_container" >
                    <div className="Devices_end_buttons_row">
                      <div className="Devices_end_buttons_col">
                        <button className="Devices_e  dit_button"   onClick={() => handleEditProjectD(i)}>Edit</button>
                      </div>
                      <div className="Devices_end_buttons_col2">
                        <button className="Devices_delete_button"    onClick={() => handleDeleteClickD(i)}>Delete</button>
                      </div>
                      <div className="Devices_end_buttons_col3">
                        <button className="Devices_view_button" onClick={() => router.push(`/Devices/${p.id}`)}>View</button>
                      </div>
                      <div className="Devices_end_buttons_col4">
                        <button className="Devices_clone_button"  onClick={() => handleCloneProjectD(i)}>Clone</button>
                      </div>
                      </div>
                      </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
                           {/* <div className="container4_Devices">
                            <div className="row4_Devices">
                                <div className="col6_Devices"><FontAwesomeIcon icon={faFile} style={{color:"#7d7878ff"}} /></div>
                                <div className="col7_Devices"><FontAwesomeIcon icon={faCalendarDays} style={{color:"#7d7878ff"}}/></div>
                                <div className="col8_Devices"><FontAwesomeIcon icon={faBars} style={{color:"#7d7878ff"}}/></div>
                            </div>
                            </div> */}
                <div className="container3_Devices">
                    <div className="row3_Devices">
                        <div className="col4_Devices"></div>
                        <div className="col5_Devices">
                            <span onClick={clickData}> {activeData ? ( 
    <>
     Active <FontAwesomeIcon icon={faAngleDown} />
     </>
 ) : (
    <>
    
      DeActive <FontAwesomeIcon icon={faAngleUp} />
    </>
  )}
</span>

                        </div>
                    </div>
                </div>

              {activeData && (
                <div className="container2_Devices">
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Device Id</th>
        <th>Main Output</th>
        <th>Hardware Type</th>
        <th>Last Updated</th>
      </tr>
    </thead>

    <tbody>
      {projectD.map((p) => (
        <tr key={p.id}>
          <td>{p.name11111}</td>
          <td>{p.deviceId?.slice(0, 8)}...</td>
          <td>Main</td>
          <td>Hardware</td>
          <td>{p.date}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
//                 <div className="container2_Devices">
//                                 <table>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Device Id</th>
//                             <th>main output</th>
//                             <th>Hardware Type</th>
//                             <th>Last updated</th>
//                         </tr>
// <tbody>
//   {projectD.map((p, i) => (
//     <tr key={p.id}>
//       <td>{p.name11111}</td>
//       <td>{p.deviceId.slice(0, 8)}...</td>
//       <td>Main</td>
//       <td>Hardware</td>
//       <td>{p.date}</td>
//     </tr>
//   ))}
// </tbody>

//                     </thead>
//                 </table>
//                 </div>
                )}
{showDeletePopupD && (
  <div className="delete_modal_overlay">
    <div className="delete_modal">

      <div className="delete_modal_header">
        <h3>Delete Hardware</h3>
      </div>

      <div className="delete_modal_body">
        <p>
          Are you sure you want to delete this project?
          <br />
          This action <strong>cannot be undone</strong>.
        </p>

        <label>Type <strong>DELETE</strong> to confirm</label>
        <input
          type="text"
          placeholder="DELETE"
          value={deleteTextD}
          onChange={(e) => setDeleteTextD(e.target.value)}
        />
      </div>

      <div className="delete_modal_footer">
        <button
          className="delete_cancel_btn"
          onClick={() => setShowDeletePopupD(false)}
        >
          Cancel
        </button>

        <button
          className="delete_confirm_btn"
          disabled={deleteTextD !== "DELETE"}
          onClick={confirmDeleteProject}
        >
          DELETE
        </button>
      </div>

    </div>
  </div>
)}

                {showPopupD && (
                    <DevicePopup
                        onClose={() => setShowPopupD(false)}
                        onSave={handleAddProjectD}
                    />
                )}
            </div>
        </>
    )
}
