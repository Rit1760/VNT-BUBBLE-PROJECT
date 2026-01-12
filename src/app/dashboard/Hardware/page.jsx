'use client';

import HardwarePopup from "@/Components/HardwarePopup";
import { useState } from "react";
import "../../../Styles/Hardware.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";


export default function Hardware() {

  const [search, setSearch] = useState("");
  const [projects, setProjects] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const [editIndex, setEditIndex] = useState(null);
const [editData, setEditData] = useState(null);
const router = useRouter();

const [showDeletePopup, setShowDeletePopup] = useState(false);
const [deleteIndex, setDeleteIndex] = useState(null);
const [deleteText, setDeleteText] = useState("");

  const filteredProjects = projects.filter((p) =>
  p.name.toLowerCase().includes(search.toLowerCase())
);

const handleAddProject = (project) => {
  const newProject = {
    ...project,
    id: Date.now(),
    date: new Date().toLocaleDateString(),
    isActive: false,
  };

  const updatedProjects = [...projects, newProject];

  setProjects(updatedProjects);
  localStorage.setItem(
    "hardwareProjects",
    JSON.stringify(updatedProjects)
  );

  setShowPopup(false);
};



  const handleToggleActive = (index) => {
    const updatedProjects = [...projects];
    updatedProjects[index].isActive = !updatedProjects[index].isActive;
    setProjects(updatedProjects);
  };


  
const handleCloneProject = (index) => {
  const projectToClone = projects[index];

  const baseName = projectToClone.name.replace(/\s\(Copy.*\)$/i, "");

  const copyCount = projects.filter((p) =>
    p.name.startsWith(baseName + " (Copy")
  ).length;



  const clonedProject = {
  ...projectToClone,
  id: Date.now(),
  name: `${baseName} (Copy ${copyCount + 1})`,
  date: new Date().toLocaleDateString(),
  isActive: false,
};

  setProjects((prev) => [...prev, clonedProject]);
};


const handleEditProject = (index) => {
  setEditIndex(index);
  setEditData(projects[index]);
  setShowPopup(true);
};

const handleDeleteClick = (index) => {
  setDeleteIndex(index);
  setDeleteText("");
  setShowDeletePopup(true);
};



const confirmDeleteProject = () => {
  if (deleteText !== "DELETE") return;

  const updated = projects.filter((_, i) => i !== deleteIndex);

  setProjects(updated);
  localStorage.setItem("hardwareProjects", JSON.stringify(updated));

  setShowDeletePopup(false);
};


  return (
    <>
      <div className="main1_Hardware">
        <div className="container1_Hardware">
          <div className="row1_Hardware">

            <div className="col1_Hardware">

              <input
  type="text"
  placeholder="Search Hardware..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

              <button onClick={() => setShowPopup(true)}>
                + Create Hardware
              </button>
            </div>

            {/* <div className="projects_list">
              {projects.length === 0 ? (

                <div className="con1_NO_PRO">
                  <div className="row1_NO_PRO">
                    <div className="col1_NO_PRO" style={{ textAlign: "center" }}>
                      <FontAwesomeIcon
                        icon={faBell}
                        style={{ width: "40px", height: "40px", color: "#ff6600" }}
                      />
                      <h3>NO HARDWARE YET</h3>
                      <p>Seems Like You Have not added Hardware Yet</p>
                    </div>
                  </div>
                </div>

              ) : (

                filteredProjects.map((p, i) => (
<div key={i} className="project_item"> */}
<div className="projects_list">
  {projects.length === 0 ? (
    <div className="no_projects_center">
      <FontAwesomeIcon
        icon={faBell}
        style={{ width: "40px", height: "40px", color: "#ff6600" }}
      />
      <p>No projects yet</p>
      <p>Seems like you have not added any projects yet</p>
    </div>
  ) : (
    filteredProjects.map((p, i) => (
      <div key={i} className="project_item">




  {/* Always visible content */}
  <div className="project_visible">
    <div className="clone_Hardware_item" style={{ display: "flex", alignItems: "center" }}>
      <div className="col1_clone_Hardware" style={{ width: "30%" }}>
        <span className="hardware_avatar">
          {p.name?.charAt(0).toUpperCase()}
        </span>
      </div>

      <div className="col2_clone_Hardware" style={{ width: "50%" }}>
        <h3 title={p.name}>
          {p.name.length > 5 ? p.name.slice(0, 5) + "..." : p.name}
        </h3>
      </div>
    </div>
  </div>

  {/* Hidden until hover */}
  <div className="project_hidden">

    <div className="clone_Prooject_item2" style={{ display: "flex" }}>
      <div style={{ width: "50%" }}><p>{p.modelNo}</p></div>
      <div style={{ width: "50%" }}><p>{p.type}</p></div>
    </div>

    <div className="project_footer_Project">
      <p><strong>Date:</strong> {p.date}</p>
      <button
        onClick={() => handleToggleActive(i)}
        className={p.isActive ? "active_btn" : "inactive_btn"}
      >
        {p.isActive ? "Active" : "Inactive"}
      </button>
    </div>

    <div className="Hardware_end_buttons_container">
      <div className="Hardware_end_buttons_row">
        <button className="Hardware_edit_button" onClick={() => handleEditProject(i)}>Edit</button>
        <button className="Hardware_delete_button"onClick={() => handleDeleteClick(i)}>Delete</button>
        <button className="Hardware_view_button" onClick={() => router.push(`/Hardware/${p.id}`)}>View</button>
        <button className="Hardware_clone_button "  onClick={() => handleCloneProject(i)}>Clone</button>
      </div>
    </div>

  </div>
</div>

                ))

              )}
            </div>


          </div>
        </div>
{showDeletePopup && (
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
          value={deleteText}
          onChange={(e) => setDeleteText(e.target.value)}
        />
      </div>

      <div className="delete_modal_footer">
        <button
          className="delete_cancel_btn"
          onClick={() => setShowDeletePopup(false)}
        >
          Cancel
        </button>

        <button
          className="delete_confirm_btn"
          disabled={deleteText !== "DELETE"}
          onClick={confirmDeleteProject}
        >
          DELETE
        </button>
      </div>

    </div>
  </div>
)}
        {showPopup && (
          <HardwarePopup
            onClose={() => setShowPopup(false)}
            onSave={handleAddProject}
          />
        )}
      </div>
    </>
  );
}


