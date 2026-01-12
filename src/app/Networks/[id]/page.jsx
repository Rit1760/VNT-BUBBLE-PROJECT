'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";    
import "../../../Styles/NetworkViewPage.css";

export default function NetworksViewPage() {
  const { id } = useParams();
  const [projectN, setProjectN] = useState(null);
    const [activeTabN, setActiveTabN] = useState("attribute");



  useEffect(() => {
    const projects =
      JSON.parse(localStorage.getItem("Networks")) || [];

    const found = projects.find((p) => String(p.id) === String(id));
    setProjectN(found);
  }, [id]);

  if (!projectN) {
    return <p style={{ padding: "40px" }}>Networks not found</p>;
  }

  return (  
<>

    <div className="NetworksViewPage_Main">
<div className="NetworksViewPage_container">
    <div className="NetworksViewPage_row1">
<div className="NetworksViewPage_col1">

      <h2>{projectN.name}</h2>

      <p><strong>Date:</strong> {projectN.date}</p>
       <p><strong>Status:</strong> {projectN.isActive ? "Active" : "Inactive"}</p>

      <hr />

       <p><strong>Description:</strong></p>
      <p>{projectN.description}</p>
       <p><strong>Network:</strong> {projectN.network}</p>

</div>
<div className="NetworksViewPage_col2">

















<div className="NetworksViewPage_col2">
  <div className="NetworksViewPage_col2_FlexSection">

    <button
      className={`tab_btn ${activeTabN === "attribute" ? "active" : ""}`}
      onClick={() => setActiveTabN("attribute")}
    >
      Attribute
    </button>

    <button
      className={`tab_btn ${activeTabN === "output" ? "active" : ""}`}
      onClick={() => setActiveTabN("output")}
    >
      Output
    </button>

    <button
      className={`tab_btn ${activeTabN === "controller" ? "active" : ""}`}
      onClick={() => setActiveTabN("controller")}
    >
      Controller
    </button>

  </div>

  {/* CONTENT AREA */}
  <div className="NetworksViewPage_col2_Content">

    {activeTabN === "attribute" && (
      <div>
        <h3>Attributes</h3>
        <p>Attribute related content here</p>
      </div>
    )}

    {activeTabN === "output" && (
      <div>
        <h3>Outputs</h3>
        <p>Output related content here</p>
      </div>
    )}

    {activeTabN === "controller" && (
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
