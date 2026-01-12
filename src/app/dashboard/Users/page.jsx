'use client'

import { useState } from "react"
import "../../../Styles/Users.css"
import UsersPopup from "@/Components/UsersPopup";
import { useRouter } from "next/navigation";


export default function Users() {
    const [search, setSearch] = useState("");
  const [projectU, setProjectsU] = useState([]);
  const [showPopupU, setShowPopupU] = useState(false);
  const [editIndexU, setEditIndexU] = useState(null);
const [editDataU, setEditDataU] = useState(null);
const router = useRouter();


const [showDeletePopupU, setShowDeletePopupU] = useState(false);
const [deleteIndexU, setDeleteIndexU] = useState(null);
const [deleteTextU, setDeleteTextU] = useState("");


    const filteredProjectsU = projectU.filter((p) =>
  p.name.toLowerCase().includes(search.toLowerCase())
);


const handleAddProjectU = (project) => {
  const newProjectU = {
    ...project,
    id: Date.now(),
    date: new Date().toLocaleDateString(),
    isActive: false,
  };

  const updatedProjectsU = [...projectU, newProjectU];

  setProjectsU(updatedProjectsU);
  localStorage.setItem(
    "Users",
    JSON.stringify(updatedProjectsU)
  );

  setShowPopupU(false);
};


    const handleToggleActive = (index) => {
    const updatedProjects = [...projectU]
    updatedProjects[index].isActive = !updatedProjects[index].isActive
    setProjectsU(updatedProjects)
  }



const handleCloneProjectU = (index) => {
  const projectToClone = projectU[index];

  const baseName = projectToClone.name.replace(/\s\(Copy.*\)$/i, "");

  const copyCount = projectU.filter((p) =>
    p.name.startsWith(baseName + " (Copy")
  ).length;


  const clonedProject = {
  ...projectToClone,
  id: Date.now(),
  name: `${baseName} (Copy ${copyCount + 1})`,
  date: new Date().toLocaleDateString(),
  isActive: false,
};

  setProjectsU((prev) => [...prev, clonedProject]);
};


const handleEditProjectU = (index) => {
  setEditIndexU(index);
  setEditDataU(projectU[index]);
  setShowPopupU(true);
};



const handleDeleteClickU = (index) => {
  setDeleteIndexU(index);
  setDeleteTextU("");
  setShowDeletePopupU(true);
};

const confirmDeleteProjectU = () => {
  if (deleteTextU !== "DELETE") {
    alert("Please type DELETE to confirm");
    return;
  }

  setProjectsU((prev) =>
    prev.filter((_, i) => i !== deleteIndexU)
  );

  setShowDeletePopupU(false);
  setDeleteIndexU(null);
  setDeleteTextU("");
};


  return (
    <>
      <div className="main1_Users">
        <div className="container1_Users">
          <div className="row1_Users">
            <div className="col1_Users">
                            <input
  type="text"
  placeholder="Search Users..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
              <button onClick={() => setShowPopupU(true)}>
                + Invite Users
              </button>
            </div>

            <div className="projects_list_Users">
              {projectU.length === 0 ? (
                <p>No projects yet</p>
              ) : (
                filteredProjectsU.map((p, i) => (
                  <div key={i} className="project_item_Users">


                          <div className="clone_Users_item" style={{display:"flex" , alignItems:"center"}}>
        <div className="col1_clone_Users" style={{width:"30%"}}>
          {/* <span style={{border:"1px solid #a8a2a2ff", width:"30px", height:"30px", borderRadius:"50%", padding:"20px 30px"}}></span> */}
                                  <span className="Users_avatar">
  {p.name?.charAt(0).toUpperCase()}
</span>
        </div>
                {/* <div className="col2_clone_Users"  style={{width:"50%"}} >
      <h3>{p.name}</h3>
        </div> */}
                                              <div className="col2_clone_Users" style={{ width: "50%" }}>
  <h3>
    {p.name.length > 5 ? p.name.slice(0, 5) + "..." : p.name}
  </h3>
</div>
        </div>
        <div className="clone_Users_item2" style={{display:"flex" , alignItems:"center"}}>
          <div className="col3_clone_Users" style={{width:"50%"}}>
      <p>{p.mail}</p>
        </div>
        <div className="col4_clone_Users" style={{width:"50%"}}>
      <p>{p.mobile}</p>
        </div>
        </div>



                    
      <div className="project_footer_Users">
        <p><strong>Date:</strong> {p.date}</p>
        <button 
          onClick={() => handleToggleActive(i)} 
          className={p.isActive ? "active_btn" : "inactive_btn"}
        >
          {p.isActive ? "Active" : "Inactive"}
        </button>
      </div>


                          <div className="Users_end_buttons_container" >
                    <div className="Users_end_buttons_row">
                      <div className="Users_end_buttons_col">
                        <button className="Users_edit_button"   onClick={() => handleEditProjectU(i)}>Edit</button>
                      </div>
                      <div className="Users_end_buttons_col2">
                        <button className="Users_delete_button"    onClick={() => handleDeleteClickU(i)}>Delete</button>
                      </div>
                      <div className="Users_end_buttons_col3">
                        <button className="Users_view_button" onClick={() => router.push(`/Users/${p.id}`)}>View</button>
                      </div>
                      <div className="Users_end_buttons_col4">
                        <button className="Users_clone_button"  onClick={() => handleCloneProjectU(i)}>Clone</button>
                      </div>
                      </div>
                      </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>


{showDeletePopupU && (
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
          value={deleteTextU}
          onChange={(e) => setDeleteTextU(e.target.value)}
        />
      </div>

      <div className="delete_modal_footer">
        <button
          className="delete_cancel_btn"
          onClick={() => setShowDeletePopupU(false)}
        >
          Cancel
        </button>

        <button
          className="delete_confirm_btn"
          disabled={deleteTextU !== "DELETE"}
          onClick={confirmDeleteProjectU}
        >
          DELETE
        </button>
      </div>

    </div>
  </div>
)}

        {showPopupU && (
          <UsersPopup
            onClose={() => setShowPopupU(false)}
            onSave={handleAddProjectU}
          />
        )}
      </div>
    </>
  )
}


