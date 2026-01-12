
'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "../../../Styles/UsersViewPage.css";


export default function UsersViewPage() {
  const { id } = useParams();
  const [projectU, setProjectU] = useState(null);
    const [activeTabU, setActiveTabU] = useState("attribute");

  

  useEffect(() => {
    const projects =
      JSON.parse(localStorage.getItem("Users")) || [];

    const found = projects.find((p) => String(p.id) === String(id));
    setProjectU(found);
  }, [id]);

  if (!projectU) {
    return <p style={{ padding: "40px" }}>Users not found</p>;
  }

  
  return (
<>

    <div className="UsersViewPage_Main">
<div className="UsersViewPage_container">
    <div className="UsersViewPage_row1">
<div className="UsersViewPage_col1">

      <h2>{projectU.name}</h2>

       <p><strong>Mail:</strong> {projectU.mail}</p>
       <p><strong>Project-Name:</strong> {projectU.Pname}</p>
      <p><strong>Date:</strong> {projectU.date}</p>
       <p><strong>Status:</strong> {projectU.isActive ? "Active" : "Inactive"}</p>

      <p>{projectU.description}</p>
       <p><strong>Mobile:</strong> {projectU.mobile}</p>

</div>
<div className="UsersViewPage_col2">

















<div className="UsersViewPage_col2">
  <div className="UsersViewPage_col2_FlexSection">

    <button
      className={`tab_btn ${activeTabU === "attribute" ? "active" : ""}`}
      onClick={() => setActiveTabU("attribute")}
    >
      Attribute
    </button>

    <button
      className={`tab_btn ${activeTabU === "output" ? "active" : ""}`}
      onClick={() => setActiveTabU("output")}
    >
      Output
    </button>

    <button
      className={`tab_btn ${activeTabU === "controller" ? "active" : ""}`}
      onClick={() => setActiveTabU("controller")}
    >
      Controller
    </button>

  </div>

  {/* CONTENT AREA */}
  <div className="UsersViewPage_col2_Content">

    {activeTabU === "attribute" && (
      <div>
        <h3>Attributes</h3>
        <p>Attribute related content here</p>
      </div>
    )}


    {activeTabU === "output" && (
      <div>
        <h3>Outputs</h3>
        <p>Output related content here</p>
      </div>
    )}

    {activeTabU === "controller" && (
      <div>
        <h3>Controllers</h3>
        <p>Controller related content here</p>
      </div>
    )}


  </div>
</div>











</div>
    </div>
    </div>
    </div>
    </>
  );
}
