
'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "../../../Styles/DevicesViewPage.css";


export default function DevicesViewPage() {
  const { id } = useParams();
  const [projectD, setProjectD] = useState(null);
    const [activeTabD, setActiveTabD] = useState("attribute");

  
  useEffect(() => {
    const projects =
      JSON.parse(localStorage.getItem("Devices")) || [];

    const found = projects.find((p) => String(p.id) === String(id));
    setProjectD(found);
  }, [id]);

  if (!projectD) {
    return <p style={{ padding: "40px" }}>Devices not found</p>;
  }

  return (
<>

    <div className="DevicesViewPage_Main">
<div className="DevicesViewPage_container">
    <div className="DevicesViewPage_row1">
<div className="DevicesViewPage_col1">


      <h2>{projectD.name11111}</h2>

      <p><strong>Mobile:</strong> {projectD.mobile11111}</p>
      <p><strong>Date:</strong> {projectD.date}</p>
       <p><strong>Status:</strong> {projectD.isActive ? "Active" : "Inactive"}</p>

      <hr />

       <p><strong>Description:</strong></p>
      <p>{projectD.description11111}</p>
</div>
<div className="DevicesViewPage_col2">





<div className="DevicesViewPage_col2">
  <div className="DevicesViewPage_col2_FlexSection">

    <button
      className={`tab_btn ${activeTabD === "attribute" ? "active" : ""}`}
      onClick={() => setActiveTabD("attribute")}
    >
      Attribute
    </button>

    <button
      className={`tab_btn ${activeTabD === "output" ? "active" : ""}`}
      onClick={() => setActiveTabD("output")}
    >
      Output
    </button>

    <button
      className={`tab_btn ${activeTabD === "controller" ? "active" : ""}`}
      onClick={() => setActiveTabD("controller")}
    >
      Controller
    </button>

  </div>

  {/* CONTENT AREA */}
  <div className="DevicesViewPage_col2_Content">

    {activeTabD === "attribute" && (
      <div>
        <h3>Attributes</h3>
        <p>Attribute related content here</p>
      </div>
    )}


    {activeTabD === "output" && (
      <div>
        <h3>Outputs</h3>
        <p>Output related content here</p>
      </div>
    )}

    {activeTabD === "controller" && (
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
