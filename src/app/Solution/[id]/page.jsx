
'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "../../../Styles/SolutionViewPage.css";

export default function HardwareViewPage() {
  const { id } = useParams();
  const [projectS, setProjectS] = useState(null);
    const [activeTabS, setActiveTabS] = useState("attribute");

  
  useEffect(() => {
    const projects =
      JSON.parse(localStorage.getItem("Solution")) || [];

    const found = projects.find((p) => String(p.id) === String(id));
    setProjectS(found);
  }, [id]);


  if (!projectS) {
    return <p style={{ padding: "40px" }}>Solution not found</p>;
  }

  return (
<>

    <div className="SolutionViewPage_Main">
<div className="SolutionViewPage_container">
    <div className="SolutionViewPage_row1">
<div className="SolutionViewPage_col1">

      <h2>{projectS.name}</h2>

      <p><strong>Mail:</strong> {projectS.mail}</p>
      <p><strong>Date:</strong> {projectS.date}</p>
       <p><strong>Status:</strong> {projectS.isActive ? "Active" : "Inactive"}</p>

      <hr />

       <p><strong>Description:</strong></p>
      <p>{projectS.description}</p>
      {/* <p><strong>Mobile:</strong> {projectS.mobile}</p> */}

</div>
<div className="SolutionViewPage_col2">











<div className="SolutionViewPage_col2">
  <div className="SolutionViewPage_col2_FlexSection">

    <button
      className={`tab_btn ${activeTabS === "attribute" ? "active" : ""}`}
      onClick={() => setActiveTabS("attribute")}
    >
      Attribute
    </button>

    <button
      className={`tab_btn ${activeTabS=== "output" ? "active" : ""}`}
      onClick={() => setActiveTabS("output")}
    >
      Output
    </button>

    <button
      className={`tab_btn ${activeTabS=== "controller" ? "active" : ""}`}
      onClick={() => setActiveTabS("controller")}
    >
      Controller
    </button>


  </div>

  {/* CONTENT AREA */}
  <div className="SolutionViewPage_col2_Content">

    {activeTabS === "attribute" && (
      <div>
        <h3>Attributes</h3>
        <p>Attribute related content here</p>
      </div>
    )}

    {activeTabS === "output" && (
      <div>
        <h3>Outputs</h3>
        <p>Output related content here</p>
      </div>
    )}

    {activeTabS === "controller" && (
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
