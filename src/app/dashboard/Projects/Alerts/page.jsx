
'use client'

import AlertPopup from "@/Components/AlertPopup"
import { useState } from "react"
import "../../../../Styles/Alerts.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/navigation";



export default function Alerts() {
  const [projectAL, setProjectsAL] = useState([])
  const [showPopupAL, setShowPopupAL] = useState(false)

  const [showDeletePopupAL, setShowDeletePopupAL] = useState(false);
const [deleteIndexAL, setDeleteIndexAL] = useState(null);
const [deleteTextAL, setDeleteTextAL] = useState("");

  const [editIndexAL, setEditIndexAL] = useState(null);
const [editDataAL, setEditDataAL] = useState(null);
const router = useRouter();


  const handleAddProjectAL = (projectALL) => {
  const newProject = {
    ...projectALL,
    id: Date.now(),
    date: new Date().toLocaleDateString(),
    isActive: false,
  };

  const updatedProjects = [...projectAL, newProject];

  setProjectsAL(updatedProjects);
  localStorage.setItem(
    "ProjectsAL",
    JSON.stringify(updatedProjects)
  );

  setShowPopupAL(false);
};


  const handleToggleActive = (index) => {
    const updatedProjects = [...projectAL]
    updatedProjects[index].isActive = !updatedProjects[index].isActive
    setProjectsAL(updatedProjects)
  }



const handleCloneProjectA = (index) => {
  const projectToCloneAL = projectAL[index];

  const baseName = projectToCloneAL.name.replace(/\s\(Copy.*\)$/i, "");

  const copyCount = projectAL.filter((p) =>
    p.name.startsWith(baseName + " (Copy")
  ).length;



  const clonedProject = {
  ...projectToCloneAL,
  id: Date.now(),
  name: `${baseName} (Copy ${copyCount + 1})`,
  date: new Date().toLocaleDateString(),
  isActive: false,
};

  setProjectsAL((prev) => [...prev, clonedProject]);
};







const handleDeleteClickA = (index) => {
  setDeleteIndexAL(index);
  setDeleteTextAL("");
  setShowDeletePopupAL(true);
};


const confirmDeleteProjectAL = () => {
  if (deleteTextAL !== "DELETE") {
    alert("Please type DELETE to confirm");
    return;
  }



  setProjectsAL((prev) =>
    prev.filter((_, i) => i !== deleteIndexAL)
  );

  setShowDeletePopupAL(false);
  setDeleteIndexAL(null);
  setDeleteTextAL("");
};



const handleEditProjectA = (index) => {
  setEditIndexAL(index);
  setEditDataAL(projectAL[index]);
  setShowPopupAL(true);
};



  

  return (
    <>
      <div className="main1_Alerts">
        <div className="container1_Alerts">
          <div className="row1_Alerts">
            <div className="col1_Alerts">
              <button onClick={() => setShowPopupAL(true)}>
                + Create Alert
              </button>
            </div>

            <div className="projects_list_Alerts">
              {projectAL.length === 0 ? (
                <p>No projects yet</p>
              ) : (
                projectAL.map((p, i) => (
                  <div key={i} className="project_item_Alerts">

                    <div className="clone_Alerts_item" style={{ display: "flex", alignItems: "center" }}>
                      <div className="col1_clone_Alerts" style={{ width: "50%" }}>


                                                          <span className="project_avatar">
  {p.name?.charAt(0).toUpperCase()}
</span>
                      </div>

                      <div className="col2_clone_Alerts" style={{ width: "50%" }}>
                        {/* <h3>{p.name}</h3> */}
                         {p.name.length > 5 ? p.name.slice(0, 5) + "..." : p.name}
                      </div>
                    </div>

                    <div className="clone_Alerts_item2" style={{ display: "flex", alignItems: "center" }}>
                      <div className="col3_clone_Alerts" style={{ width: "50%" }}>
                        <p>{p.value}</p>
                      </div>

                      <div className="col4_clone_Alerts" style={{ width: "50%" }}>
                        <p>{p.rule}</p>
                      </div>
                    </div>


                    <p>{p.readingCount}</p>

                    <div className="project_footer_Alerts">
                      <p><strong>Date:</strong> {p.date}</p>

                      <button
                        onClick={() => handleToggleActive(i)}
                        className={p.isActive ? "active_btn" : "inactive_btn"}
                      >
                        {p.isActive ? "Active" : "Inactive"}
                      </button>
                    </div>


                                <div className="Alerts_end_buttons_container" >
                    <div className="Alerts_end_buttons_row">
                      <div className="Alerts_end_buttons_col">
                        <button className="Alerts_edit_button"   onClick={() => handleEditProjectA(i)}>Edit</button>
                      </div>
                      <div className="Alerts_end_buttons_col2">
                        <button className="Alerts_delete_button"    onClick={() => handleDeleteClickA(i)}>Delete</button>
                      </div>
                      <div className="Alerts_end_buttons_col3">
                        <button className="Alerts_view_button" onClick={() => router.push(`/Alerts/${p.id}`)}>View</button>
                      </div>
                      <div className="Project_end_buttons_col4">
                        <button className="Alerts_clone_button"  onClick={() => handleCloneProjectA(i)}>Clone</button>
                      </div>
                      </div>
                      </div>



                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="container2_Alerts">
          <div className="row2_Alerts">
            <div className="col2_Alerts">
              <select>
                <option>All</option>
                <option>All</option>
                <option>All</option>
                <option>All</option>
              </select>
            </div>

            <div className="col3_Alerts">
              <select>
                <option>All</option>
                <option>All</option>
                <option>All</option>
                <option>All</option>
              </select>
            </div>
          </div>
        </div>

        <div className="container3_Alert">
          <table>
            <thead>
              <tr>
                <th>Alerts</th>
                <th>Select Devices</th>
                <th>Auto Downlink Devices</th>
              </tr>
            </thead>
          </table>
        </div>

        {projectAL.length === 0 && (
          <div className="container4_Alert">
            <div className="col4_Alert_default">
              <FontAwesomeIcon
                icon={faBell}
                style={{ width: "40px", height: "40px", color: "#ff6600" }}
              />
              <h2>No Alerts Found</h2>
              <p>seems like you have not added any alerts yet</p>
            </div>



          </div>
        )}



{showDeletePopupAL && (
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
          value={deleteTextAL}
          onChange={(e) => setDeleteTextAL(e.target.value)}
        />
      </div>

      <div className="delete_modal_footer">
        <button
          className="delete_cancel_btn"
          onClick={() => setShowDeletePopupAL(false)}
        >
          Cancel
        </button>

        <button
          className="delete_confirm_btn"
          disabled={deleteTextAL !== "DELETE"}
          onClick={confirmDeleteProjectAL}
        >
          DELETE
        </button>
      </div>

    </div>
  </div>
)}






        {showPopupAL && (
          <AlertPopup
            onClose={() => setShowPopupAL(false)}
            onSave={handleAddProjectAL}
          />
        )}
      </div>
    </>
  )
}


