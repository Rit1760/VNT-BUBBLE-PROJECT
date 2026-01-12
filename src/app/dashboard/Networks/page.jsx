'use client'

import { useState } from "react";
import "../../../Styles/Networks.css";
import NetworksPopup from "@/Components/NetworksPopup";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";


export default function Networks() {
    const [search, setSearch] = useState("");
  const [projectsN, setProjectsN] = useState([]);
  const [showPopupN, setShowPopupN] = useState(false);

    const [editIndexN, setEditIndexN] = useState(null);
const [editDataN, setEditDataN] = useState(null);

const [showDeletePopupN, setShowDeletePopupN] = useState(false);
const [deleteIndexN, setDeleteIndexN] = useState(null);
const [deleteTextN, setDeleteTextN] = useState("");

const router = useRouter();
    const filteredProjectsN = projectsN.filter((p) =>
  p.name.toLowerCase().includes(search.toLowerCase())
);


const handleAddProjectN = (project) => {
  const newProjectN = {
    ...project,
    id: Date.now(),
    date: new Date().toLocaleDateString(),
    isActive: false,
  };

  const updatedProjectsN = [...projectsN, newProjectN];

  setProjectsN(updatedProjectsN);
  localStorage.setItem(
    "Networks",
    JSON.stringify(updatedProjectsN)
  );

  setShowPopupN(false);
};

    const handleToggleActive = (index) => {
    const updatedProjects = [...projectsN]
    updatedProjects[index].isActive = !updatedProjects[index].isActive
    setProjectsN(updatedProjects)
  }

  
const handleCloneProjectN = (index) => {
  const projectToClone = projectsN[index];

  const baseName = projectToClone.name.replace(/\s\(Copy.*\)$/i, "");

  const copyCount = projectsN.filter((p) =>
    p.name.startsWith(baseName + " (Copy")
  ).length;



  const clonedProject = {
  ...projectToClone,
  id: Date.now(),
  name: `${baseName} (Copy ${copyCount + 1})`,
  date: new Date().toLocaleDateString(),
  isActive: false,
};

  setProjectsN((prev) => [...prev, clonedProject]);
};



const handleEditProjectN = (index) => {
  setEditIndexN(index);
  setEditDataN(projectsN[index]);
  setShowPopupN(true);
};


const handleDeleteClickN = (index) => {
  setDeleteIndexN(index);
  setDeleteTextN("");
  setShowDeletePopupN(true);
};

const confirmDeleteProjectN = () => {
  if (deleteTextN !== "DELETE") {
    alert("Please type DELETE to confirm");
    return;
  }

  setProjectsN((prev) =>
    prev.filter((_, i) => i !== deleteIndexN)
  );

  setShowDeletePopupN(false);
  setDeleteIndexN(null);
  setDeleteTextN("");
};


  return (
    <>
      <div className="main1_Networks">
        <div className="container1_Networks">
          <div className="row1_Networks">
            <div className="col1_Networks">

                            <input
  type="text"
  placeholder="Search Networks..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
              <button onClick={() => setShowPopupN(true)}>
                + Add Network
              </button>
            </div>


            {/* <div className="projects_list_Networks">
              {projectsN.length === 0 ? (
                <p>No projects yet</p>
              ) : (
                  filteredProjectsN.map((p, i) => (
                  <div key={i} className="project_item_Networks"> */}
<div className="projects_list_Networks">
  {projectsN.length === 0 ? (
    <div className="no_projects_center">
      <FontAwesomeIcon
        icon={faBell}
        style={{ width: "40px", height: "40px", color: "#ff6600" }}
      />
      <p>No projects yet</p>
      <p>Seems like you have not added any projects yet</p>
    </div>
  ) : (
    filteredProjectsN.map((p, i) => (
      <div key={i} className="projects_list_Networks">




      <div className="clone_Networks_item" style={{display:"flex" , alignItems:"center"}}>
        <div className="col1_clone_Networks" style={{width:"30%"}}>
          {/* <span style={{border:"1px solid #a8a2a2ff", width:"30px", height:"30px", borderRadius:"50%", padding:"20px 30px"}}></span> */}
                                <span className="Networks_avatar">
  {p.name?.charAt(0).toUpperCase()}
</span>
        </div>
        
        
                {/* <div className="col2_clone_Networks"  style={{width:"50%"}} >
      <h3>{p.name}</h3>
        </div> */}

                                      <div className="col2_clone_Networks" style={{ width: "50%" }}>
  <h3>
    {p.name.length > 5 ? p.name.slice(0, 5) + "..." : p.name}
  </h3>
</div>
        </div>



                <div className="clone_Networks_item2" style={{display:"flex" , alignItems:"center"}}>
          <div className="col3_clone_Networks" style={{width:"50%"}}>
      <p>{p.mail}</p>
        </div>
        <div className="col4_clone_Networks" style={{width:"50%"}}>
      <p>{p.mobile}</p>
        </div>
        </div>

                    {/* <h3>{p.name}</h3> */}
                    {/* <p>{p.mail}</p> */}
                    <p>{p.description}</p>
                    {/* <p>{p.mobile}</p> */}
                          <div className="project_footer_Networks">
        <p><strong>Date:</strong> {p.date}</p>
        <button 
          onClick={() => handleToggleActive(i)} 
          className={p.isActive ? "active_btn" : "inactive_btn"}
        >
          {p.isActive ? "Active" : "Inactive"}
        </button>
      </div>

                          <div className="Networks_end_buttons_container" >
                    <div className="Networks_end_buttons_row">
                      <div className="Networks_end_buttons_col">
                        <button className="Networks_edit_button"   onClick={() => handleEditProjectN(i)}>Edit</button>
                      </div>
                      <div className="Networks_end_buttons_col2">
                        <button className="Networks_delete_button"    onClick={() => handleDeleteClickN(i)}>Delete</button>
                      </div>
                      <div className="Networks_end_buttons_col3">
                        <button className="Networks_view_button" onClick={() => router.push(`/Networks/${p.id}`)}>View</button>
                      </div>
                      <div className="Networks_end_buttons_col4">
                        <button className="Networks_clone_button"  onClick={() => handleCloneProjectN(i)}>Clone</button>
                      </div>
                      </div>
                      </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>


{showDeletePopupN && (
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
          value={deleteTextN}
          onChange={(e) => setDeleteTextN(e.target.value)}
        />
      </div>

      <div className="delete_modal_footer">
        <button
          className="delete_cancel_btn"
          onClick={() => setShowDeletePopupN(false)}
        >
          Cancel
        </button>

        <button
          className="delete_confirm_btn"
          disabled={deleteTextN  !== "DELETE"}
          onClick={confirmDeleteProjectN}
        >
          DELETE
        </button>
      </div>

    </div>
  </div>
)}

        {showPopupN && (
          <NetworksPopup
            onClose={() => setShowPopupN(false)}
            onSave={handleAddProjectN}
          />
        )}
      </div>
    </>
  );
}
