'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "../../../Styles/ReportsViewPage.css";

export default function ReportsViewPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [activeTab, setActiveTab] = useState("attribute");


  
  useEffect(() => {
    const projects =
      JSON.parse(localStorage.getItem("Reports")) || [];

    const found = projects.find((p) => String(p.id) === String(id));
    setProject(found);
  }, [id]);

  if (!project) {
    return <p style={{ padding: "40px" }}>Reports not found</p>;
  }

  return (
<>

    <div className="ReportsViewPage_Main">
<div className="ReportsViewPage_container">
    <div className="ReportsViewPage_row1">
<div className="ReportsViewPage_col1">

      <h2>{project.name}</h2>

       <p><strong>Mail:</strong> {project.mail}</p>
      <p><strong>Date:</strong> {project.date}</p>
       <p><strong>Status:</strong> {project.isActive ? "Active" : "Inactive"}</p>

      <hr />


       <p><strong>Description:</strong></p>
      <p>{project.description}</p>
       <p><strong>Mobile:</strong> {project.mobile}</p>

</div>

<div className="ReportsViewPage_col2">
  <div className="ReportsViewPage_col2_FlexSection">

    <button
      className={`tab_btn ${activeTab === "attribute" ? "active" : ""}`}
      onClick={() => setActiveTab("attribute")}
    >
      Attribute
    </button>

    <button
      className={`tab_btn ${activeTab === "output" ? "active" : ""}`}
      onClick={() => setActiveTab("output")}
    >
      Output
    </button>

    <button
      className={`tab_btn ${activeTab === "controller" ? "active" : ""}`}
      onClick={() => setActiveTab("controller")}
    >
      Controller
    </button>

  </div>

  {/* CONTENT AREA */}
  <div className="ReportsViewPage_col2_Content">

    {activeTab === "attribute" && (
      <div>
        <h3>Attributes</h3>
        <p>Attribute related content here</p>
      </div>
    )}

    {activeTab === "output" && (
      <div>
        <h3>Outputs</h3>
        <p>Output related content here</p>
      </div>
    )}

    {activeTab === "controller" && (
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
    </>
  );
}

