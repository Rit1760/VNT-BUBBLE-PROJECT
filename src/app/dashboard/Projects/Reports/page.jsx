'use client'

import ReportsPopup from "@/Components/ReportsPopup";
import { useState } from "react"
import "../../../../Styles/Reports.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faAngleUp, faDownLong , faUpLong } from "@fortawesome/free-solid-svg-icons"
faDownLong
FontAwesomeIcon
import { useRouter } from "next/navigation";

export default function Reports({ }) {
    const [projectRP, setProjectsRP] = useState("");
    const [showPopupRP, setShowPopupRP] = useState("");
       const [activeData , setActiveData] = useState(true)
       
  const [editIndexR, setEditIndexR] = useState(null);
const [editDataR, setEditDataR] = useState(null);


const [showDeletePopupR, setShowDeletePopupR] = useState(false);
const [deleteIndexR, setDeleteIndexR] = useState(null);
const [deleteTextR, setDeleteTextR] = useState("");
const router = useRouter();






const handleSubmitRP = (project) => {
  const newProject = {
    ...project,
    id: Date.now(),
    date: new Date().toLocaleDateString(),
    isActive: false,
  };

  const updatedProjects = [...projectRP, newProject];

  setProjectsRP(updatedProjects);
  localStorage.setItem(
    "Reports",
    JSON.stringify(updatedProjects)
  );

  setShowPopupRP(false);
};









    const clickData = () => {
        setActiveData(!activeData)
    }



    // const handleSubmitRP = (projectRPP) => {

    //         const newProject = {
    //   ...projectRPP,
    //   date: new Date().toLocaleDateString(),
    //   isActive: false,
    // }
    //     setProjectsRP([...projectRP, projectRPP])
    //     setShowPopupRP(false)
    // }


  const handleToggleActive = (index) => {
    const updatedProjects = [...projectRP]
    updatedProjects[index].isActive = !updatedProjects[index].isActive
    setProjectsRP(updatedProjects)
  }






const handleCloneProjectR = (index) => {
  const projectToClone = projectRP[index];

  const baseName = projectToClone.name.replace(/\s\(Copy.*\)$/i, "");

  const copyCount = projectRP.filter((p) =>
    p.name.startsWith(baseName + " (Copy")
  ).length;



  const clonedProjectR = {
  ...projectToClone,
  id: Date.now(),
  name: `${baseName} (Copy ${copyCount + 1})`,
  date: new Date().toLocaleDateString(),
  isActive: false,
};

  setProjectsRP((prev) => [...prev, clonedProjectR]);
};


const handleEditProjectR = (index) => {
  setEditIndexR(index);
  setEditDataR(projectRP[index]);
  setShowPopupRP(true);
};





const handleDeleteClickR = (index) => {
  setDeleteIndexR(index);
  setDeleteTextR("");
  setShowDeletePopupR(true);
};


const confirmDeleteProjectR = () => {
  if (deleteTextR !== "DELETE") return;

  const updated = projectRP.filter((_, i) => i !== deleteIndexR);

  setProjectsRP(updated);
  localStorage.setItem("hardwareProjects", JSON.stringify(updated));

  setShowDeletePopupR(false);
};






    return (
        <>
            <div className="main1_Reports">
                <div className="container1_Reports">
                    <div className="row1_Reports">
                        <div className="col1_Reports">
                            <button onClick={() => setShowPopupRP(true)}>
                                + Add Reports
                            </button>
                        </div>

                        <div className="projects_list_Reports">
                            {projectRP.length === 0 ? (
                                <p>No projects yet</p>
                            ) : (
                                projectRP.map((p, i) => (
                                    <div key={i} className="project_item_Reports">



                                              <div className="clone_Reports_item" style={{display:"flex" , alignItems:"center"}}>
        <div className="col1_clone_Reports" style={{width:"50%"}}>
          {/* <span style={{border:"1px solid #a8a2a2ff", width:"30px", height:"30px", borderRadius:"50%", padding:"20px 30px"}}></span> */}
                                  <span className="Reports_avatar">
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


                <div className="clone_Reports_item2" style={{display:"flex" , alignItems:"center"}}>
          <div className="col3_clone_Reports" style={{width:"50%"}}>
      <p>{p.mail}</p>
        </div>
        <div className="col4_clone_Reports" style={{width:"50%"}}>
      <p>{p.mobile}</p>
        </div>
        </div>

                                        {/* <h3>{p.name}</h3> */}
                                        {/* <p>{p.mail}</p> */}
                                        <p>{p.description}</p>
                                        {/* <p>{p.mobile}</p> */}

                                        
      <div className="project_footer_Reports">
        <p><strong>Date:</strong> {p.date}</p>
        <button 
          onClick={() => handleToggleActive(i)} 
          className={p.isActive ? "active_btn" : "inactive_btn"}
        >
          {p.isActive ? "Active" : "Inactive"}
        </button>
      </div>




    <div className="Reports_end_buttons_container">
      <div className="Reports_end_buttons_row">
        <button className="Reports_edit_button" onClick={() => handleEditProjectR(i)}>Edit</button>
        <button className="Reports_delete_button"onClick={() => handleDeleteClickR(i)}>Delete</button>
        <button className="Reports_view_button" onClick={() => router.push(`/Reports/${p.id}`)}>View</button>
        <button className="Reports_clone_button "  onClick={() => handleCloneProjectR(i)}>Clone</button>
      </div>
    </div>


                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                <div className="container2_Report">
                    <div className="row2_Report">
                        <div className="col2_Report"></div>
                        <div className="col3_Report">
                            <input type="text" />
                        </div>
                    </div>
                </div>

                <div className="container3_Report">
                    <div className="row3_Report">
                        <div className="col4_Report"></div>
                        <div className="col5_Report">
                            <span onClick={clickData}> {activeData ? ( 
    <> Active <FontAwesomeIcon icon={faAngleDown} /></>
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

                <div className="container4_Report">
                                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cetagory</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Created by</th>
                            <th>Last Update</th>
                            <th>Data Created</th>
                        </tr>
                    </thead>
                </table>
                </div>
              )}




              {showDeletePopupR && (
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
          value={deleteTextR}
          onChange={(e) => setDeleteTextR(e.target.value)}
        />
      </div>

      <div className="delete_modal_footer">
        <button
          className="delete_cancel_btn"
          onClick={() => setShowDeletePopupR(false)}
        >
          Cancel
        </button>

        <button
          className="delete_confirm_btn"
          disabled={deleteTextR !== "DELETE"}
          onClick={confirmDeleteProjectR}
        >
          DELETE
        </button>
      </div>

    </div>
  </div>
)}


                {showPopupRP && (
                    <ReportsPopup
                        onClose={() => setShowPopupRP(false)}
                        onSave={handleSubmitRP}
                    />
                )}
            </div>

        </>
    )
}
