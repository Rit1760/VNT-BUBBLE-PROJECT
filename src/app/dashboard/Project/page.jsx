
'use client'

import { useState } from "react"
import "../../../Styles/Project.css"
import ProjectPopup from "@/components/ProjectPopup"
import { useRouter } from "next/navigation";

export default function Project(){
  const [projectP, setProjectsP] = useState([])
  const [showPopupP, setShowPopupP] = useState(false)
    const [searchP, setSearchP] = useState("");
  const [editIndex, setEditIndexP] = useState(null);
const [editData, setEditDataP] = useState(null);

      // const [showPopup, setShowPopup] = useState(false);


      
const [showDeletePopupP, setShowDeletePopupP] = useState(false);
const [deleteIndexP, setDeleteIndexP] = useState(null);
const [deleteTextP, setDeleteTextP] = useState("");
const router = useRouter();
      




    

      const filteredProjectsP = projectP.filter((p) =>
  p.name.toLowerCase().includes(searchP.toLowerCase())
);



const handleAddProjectP = (projectPP) => {
  const newProject = {
    ...projectPP,
    id: Date.now(),
    date: new Date().toLocaleDateString(),
    isActive: false,
  };

  const updatedProjects = [...projectP, newProject];

  setProjectsP(updatedProjects);
  localStorage.setItem(
    "ProjectsP",
    JSON.stringify(updatedProjects)
  );

  setShowPopupP(false);
};


  const handleToggleActive = (index) => {
    const updatedProjects = [...projectP]
    updatedProjects[index].isActive = !updatedProjects[index].isActive
    setProjectsP(updatedProjects)
  }




const handleEditProjectP = (index) => {
  setEditIndexP(index);
  setEditDataP(projectP[index]);
  setShowPopupP(true);
};


const handleCloneProject = (index) => {
  const projectToClone = projectP[index];

  const baseName = projectToClone.name.replace(/\s\(Copy.*\)$/i, "");

  const copyCount = projectP.filter((p) =>
    p.name.startsWith(baseName + " (Copy")
  ).length;

  
  const clonedProject = {
  ...projectToClone,
  id: Date.now(),
  name: `${baseName} (Copy ${copyCount + 1})`,
  date: new Date().toLocaleDateString(),
  isActive: false,
};

  setProjectsP((prev) => [...prev, clonedProject]);
};

const handleDeleteClickP = (index) => {
  setDeleteIndexP(index);
  setDeleteTextP("");
  setShowDeletePopupP(true);
};

const confirmDeleteProjectP = () => {
  if (deleteTextP !== "DELETE") {
    alert("Please type DELETE to confirm");
    return;
  }

  setProjectsP((prev) =>
    prev.filter((_, i) => i !== deleteIndexP)
  );

  setShowDeletePopupP(false);
  setDeleteIndexP(null);
  setDeleteTextP("");
};

  return (
    <div className="main1_Project">
      <div className="container1_Project">
        <div className="row1_Project">
          <div className="col1_Project">
                          <input
  type="text"
  placeholder="Search Hardware..."
  value={searchP}
  onChange={(e) => setSearchP(e.target.value)}
/>
            <button onClick={() => setShowPopupP(true)}>
              + Add Project
            </button>
          </div>


          <div className="projects_list_Project">
{projectP.length === 0 ? (
  <p>No projects yet</p>
) : (
  filteredProjectsP.map((p, i) => (
    <div key={i} className="project_item_Project">

      <div className="clone_Prooject_item" style={{display:"flex" , alignItems:"center"}}>
        <div className="col1_clone_Project" style={{width:"30%"}}>
          {/* <span style={{border:"1px solid #a8a2a2ff", width:"30px", height:"30px", borderRadius:"50%", padding:"20px 30px"}}></span> */}
                                  <span className="project_avatar">
  {p.name?.charAt(0).toUpperCase()}
</span>
        </div>
                {/* <div className="col2_clone_Project"  style={{width:"50%"}} >
      <h3>{p.name}</h3>
        </div> */}
                              <div className="col2_clone_Project" style={{ width: "50%" }}>
  <h3>
    {p.name.length > 5 ? p.name.slice(0, 5) + "..." : p.name}
  </h3>
</div>

        </div>
        <div className="clone_Prooject_item2" style={{display:"flex" , alignItems:"center" , columnGap:"10px"}}>
          <div className="col3_clone_Project" style={{width:"60%"}}>
      <p>{p.mail}</p>
        </div>
        <div className="col4_clone_Project" style={{width:"40%"}}>
      <p>{p.mobile}</p>
        </div>
        </div>


      <p>{p.description}</p>

      <div className="project_footer_Project">
        <p><strong>Date:</strong> {p.date}</p>
        <button 
          onClick={() => handleToggleActive(i)} 
          className={p.isActive ? "active_btn" : "inactive_btn"}
        >
          {p.isActive ? "Active" : "Inactive"}
        </button>
      </div>

                    <div className="Project_end_buttons_container" >
                    <div className="Project_end_buttons_row">
                      <div className="Project_end_buttons_col">
                        <button className="Project_edit_button"   onClick={() => handleEditProjectP(i)}>Edit</button>
                      </div>
                      <div className="Project_end_buttons_col2">
                        <button className="Project_delete_button"    onClick={() => handleDeleteClickP(i)}>Delete</button>
                      </div>
                      <div className="Project_end_buttons_col3">
                        <button className="Project_view_button" onClick={() => router.push(`/Project/${p.id}`)}>View</button>
                      </div>
                      <div className="Project_end_buttons_col4">
                        <button className="Project_clone_button"  onClick={() => handleCloneProject(i)}>Clone</button>
                      </div>
                      </div>
                      </div>
    </div>
  ))
)}



          </div>
        </div>
      </div>

{showDeletePopupP && (
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
          value={deleteTextP}
          onChange={(e) => setDeleteTextP(e.target.value)}
        />
      </div>

      <div className="delete_modal_footer">
        <button
          className="delete_cancel_btn"
          onClick={() => setShowDeletePopupP(false)}
        >
          Cancel
        </button>

        <button
          className="delete_confirm_btn"
          disabled={deleteTextP !== "DELETE"}
          onClick={confirmDeleteProjectP}
        >
          DELETE
        </button>
      </div>

    </div>
  </div>
)}

      {showPopupP && (
        <ProjectPopup
          onClose={() => setShowPopupP(false)}
          onSave={handleAddProjectP}
        />
      )}
    </div>
  )
}