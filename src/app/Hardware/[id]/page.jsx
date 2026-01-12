
'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "../../../Styles/HardwareViewPage.css";

export default function HardwareViewPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [activeTab, setActiveTab] = useState("attribute");
  
  useEffect(() => {
    const projects =
      JSON.parse(localStorage.getItem("hardwareProjects")) || [];

    const found = projects.find((p) => String(p.id) === String(id));
    setProject(found);
  }, [id]);

  if (!project) {
    return <p style={{ padding: "40px" }}>Hardware not found</p>;
  }


  return (
<>

    <div className="HardwareViewPage_Main">
<div className="HardwareViewPage_container">
    <div className="HardwareViewPage_row1">
<div className="HardwareViewPage_col1">

      <h2>{project.name}</h2>

       <p><strong>Model No:</strong> {project.modelNo}</p>
      <p><strong>Type:</strong> {project.type}</p>
      <p><strong>Date:</strong> {project.date}</p>
       <p><strong>Status:</strong> {project.isActive ? "Active" : "Inactive"}</p>

      <hr />

       <p><strong>Description:</strong></p>
      <p>{project.description}</p>
</div>

<div className="HardwareViewPage_col2">
  <div className="HardwareViewPage_col2_FlexSection">

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
  <div className="HardwareViewPage_col2_Content">

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

