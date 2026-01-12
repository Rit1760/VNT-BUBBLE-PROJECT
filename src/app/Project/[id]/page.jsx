
'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "../../../Styles/ProjectViewPage.css";

export default function ProjectViewPage() {
  const { id } = useParams();
  const [projectP, setProjectP] = useState(null);
    const [activeTabP, setActiveTabP] = useState("attribute");

    
  useEffect(() => {
    const projects =
      JSON.parse(localStorage.getItem("ProjectsP")) || [];

    const found = projects.find((p) => String(p.id) === String(id));
    setProjectP(found);
  }, [id]);

  if (!projectP) {
    return <p style={{ padding: "40px" }}>Project not found</p>;
  }

  return (
<>

    <div className="ProjectViewPage_Main">
<div className="ProjectViewPage_container">
    <div className="ProjectViewPage_row1">
<div className="ProjectViewPage_col1">

      <h2>{projectP.name}</h2>

      <p><strong>solutions:</strong> {projectP.solutions}</p>
      <p><strong>Date:</strong> {projectP.date}</p>
       <p><strong>Status:</strong> {projectP.isActive ? "Active" : "Inactive"}</p>

      <hr />

      <p><strong>Location:</strong> {projectP.location}</p>

</div>
<div className="ProjectViewPage_col2">


<div className="ProjectViewPage_col2">
  <div className="ProjectViewPage_col2_FlexSection">

    <button
      className={`tab_btn ${activeTabP === "attribute" ? "active" : ""}`}
      onClick={() => setActiveTabP("attribute")}
    >
      Attribute
    </button>

    <button
      className={`tab_btn ${activeTabP === "output" ? "active" : ""}`}
      onClick={() => setActiveTabP("output")}
    >
      Output
    </button>

    <button
      className={`tab_btn ${activeTabP === "controller" ? "active" : ""}`}
      onClick={() => setActiveTabP("controller")}
    >
      Controller
    </button>

  </div>


  {/* CONTENT AREA */}
  <div className="ProjectViewPage_col2_Content">

    {activeTabP === "attribute" && (
      <div>
        <h3>Attributes</h3>
        <p>Attribute related content here</p>
      </div>
    )}

    {activeTabP === "output" && (
      <div>
        <h3>Outputs</h3>
        <p>Output related content here</p>
      </div>
    )}

    {activeTabP === "controller" && (
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