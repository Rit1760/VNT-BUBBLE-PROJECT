'use client'

import { useState } from "react"
import "../../../Styles/Solutions.css"
import SolutionPopup from "@/Components/SolutionPopup";
import { useRouter } from "next/navigation";

export default function Solutions() {
  const [projectS, setProjectsS] = useState([]);
  const [showPopupS, setShowPopupS] = useState(false);
    const [search, setSearch] = useState("");


      const [editIndexS, setEditIndexS] = useState(null);
const [editDataS, setEditDataS] = useState(null);

const [showDeletePopupS, setShowDeletePopupS] = useState(false);
const [deleteIndexS, setDeleteIndexS] = useState(null);
const [deleteTextS, setDeleteTextS] = useState("");
const router = useRouter();



  const filteredProjectsS = projectS.filter((p) =>
  p.name.toLowerCase().includes(search.toLowerCase())
);


const handleAddProjectS = (projectSS) => {
  const newProject = {
    ...projectSS,
    id: Date.now(),
    date: new Date().toLocaleDateString(),
    isActive: false,
  };

  const updatedProjectsS = [...projectS, projectSS];

  setProjectsS(updatedProjectsS);
  localStorage.setItem(
    "Solution",
    JSON.stringify(updatedProjectsS)
  );

  setShowPopupS(false);
};


const handleCloneProjectS = (index) => {
  const projectToClone = projectS[index];

  const baseName = projectToClone.name.replace(/\s\(Copy.*\)$/i, "");

  const copyCount = projectS.filter((p) =>
    p.name.startsWith(baseName + " (Copy")
  ).length;



  const clonedProject = {
  ...projectToClone,
  id: Date.now(),
  name: `${baseName} (Copy ${copyCount + 1})`,
  date: new Date().toLocaleDateString(),
  isActive: false,
};

  setProjectsS((prev) => [...prev, clonedProject]);
};


const handleEditProjectS = (index) => {
  setEditIndexS(index);
  setEditDataS(projectS[index]);
  setShowPopupS(true);
};


const handleDeleteClickS = (index) => {
  setDeleteIndexS(index);
  setDeleteTextS("");
  setShowDeletePopupS(true);
};

const confirmDeleteProject = () => {
  if (deleteTextS !== "DELETE") {
    alert("Please type DELETE to confirm");
    return;
  }

  setProjectsS((prev) =>
    prev.filter((_, i) => i !== deleteIndexS)
  );

  setShowDeletePopupS(false);
  setDeleteIndexS(null);
  setDeleteTextS("");
};



  const handleToggleActive = (index) => {
    const updatedProjects = [...projectS]
    updatedProjects[index].isActive = !updatedProjects[index].isActive
    setProjectsS(updatedProjects)
  }





  return (
    <>
      <div className="main1_Solutions">
        <div className="container1_Solutions">
          <div className="row1_Solutions">
            <div className="col1_Solutions">
                           <input
  type="text"
  placeholder="Search Solutions..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
              <button onClick={() => setShowPopupS(true)}>
                + Add Solution
              </button>
            </div>

            <div className="projects_list_Solutions">
              {projectS.length === 0 ? (
                <p>No projects yet</p>
              ) : (
                  filteredProjectsS.map((p, i) => (
                  <div key={i} className="project_item_Solutions">



      <div className="clone_Solutions_item" style={{display:"flex" , alignItems:"center"}}>
        <div className="col1_clone_Solutions" style={{width:"30%"}}>
                                  <span className="Solutions_avatar">
  {p.name?.charAt(0).toUpperCase()}
</span>
        </div>

        
                                      <div className="col2_clone_Solutions" style={{ width: "50%" }}>
  <h3>
    {p.name.length > 5 ? p.name.slice(0, 5) + ".." : p.name}
  </h3>
</div>
        </div>

                <div className="clone_Solutions_item2" style={{display:"flex" , alignItems:"center"}}>
          <div className="col3_clone_Solutions" style={{width:"70%"}}>
      <p>{p.mail}</p>
        </div>

        </div>

                    <p>{p.description}</p>
                          <div className="project_footer_Solutions">
        <p><strong>Date:</strong> {p.date}</p>
        <button 
          onClick={() => handleToggleActive(i)} 
          className={p.isActive ? "active_btn" : "inactive_btn"}
        >
          {p.isActive ? "Active" : "Inactive"}
        </button>
      </div>
                          <div className="Solutions_end_buttons_container" >
                    <div className="Solutions_end_buttons_row">
                      <div className="Solutions_end_buttons_col">
                        <button className="Solutions_edit_button"   onClick={() => handleEditProjectS(i)}>Edit</button>
                      </div>
                      <div className="Solutions_end_buttons_col2">
                        <button className="Solutions_delete_button"    onClick={() => handleDeleteClickS(i)}>Delete</button>
                      </div>
                      <div className="Solutions_end_buttons_col3">
                        <button className="Solutions_view_button" onClick={() => router.push(`/Solution/${p.id}`)}>View</button>
                      </div>
                      <div className="Solutions_end_buttons_col4">
                        <button className="Solutions_clone_button"  onClick={() => handleCloneProjectS(i)}>Clone</button>
                      </div>
                      </div>
                      </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>


{showDeletePopupS && (
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
          value={deleteTextS}
          onChange={(e) => setDeleteTextS(e.target.value)}
        />
      </div>

      <div className="delete_modal_footer">
        <button
          className="delete_cancel_btn"
          onClick={() => setShowDeletePopupS(false)}
        >
          Cancel
        </button>

        <button
          className="delete_confirm_btn"
          disabled={deleteTextS !== "DELETE"}
          onClick={confirmDeleteProject}
        >
          DELETE
        </button>
      </div>

    </div>
  </div>
)}

        {showPopupS && (
       <SolutionPopup
  onClose={() => setShowPopupS(false)}
  onSave={handleAddProjectS}
/>
        )}
      </div>
    </>
  )
}
