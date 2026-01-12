'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "../../../Styles/AlertsViewpage.css";

export default function AlertsViewPage() {
  const { id } = useParams();
  const [projectAL, setProjectAL] = useState(null);
    const [activeTabAL, setActiveTabAL] = useState("attribute");


  useEffect(() => {
    const projects =
      JSON.parse(localStorage.getItem("ProjectsAL")) || [];

    const found = projects.find((p) => String(p.id) === String(id));
    setProjectAL(found);
  }, [id]);

  if (!projectAL) {
    return <p style={{ padding: "40px" }}>Alerts not found</p>;
  }

  return (
<>

    <div className="AlertsViewPage_Main">
<div className="AlertsViewPage_container">
    <div className="AlertsViewPage_row1">
<div className="AlertsViewPage_col1">


      <h2>{projectAL.name}</h2>

       <p><strong>Model No:</strong> {projectAL.mobile}</p>
      <p><strong>Value:</strong> {projectAL.EnterValue}</p>
      <p><strong>Date:</strong> {projectAL.date}</p>
       <p><strong>Status:</strong> {projectAL.isActive ? "Active" : "Inactive"}</p>

      <hr />

       <p><strong>Alert Name:</strong>{projectAL.name}</p>
      {/* <p>{projectAL.name}</p> */}
      <p><strong>Solution:</strong> {projectAL.Solution}</p>
      <p><strong>Selected Devices:</strong> {projectAL.Devices}</p>
      <p><strong>Conditions Type:</strong> {projectAL.ConditionsType}</p>
      <p><strong>Conditions:</strong> {projectAL.Conditions}</p>
      <p><strong>Rule:</strong> {projectAL.Rule}</p>

</div>
<div className="AlertsViewPage_col2">

<div className="AlertsViewPage_col2">
  <div className="AlertsViewPage_col2_FlexSection">

    <button
      className={`tab_btn ${activeTabAL === "attribute" ? "active" : ""}`}
      onClick={() => setActiveTabAL("attribute")}
    >
      Attribute
    </button>

    <button
      className={`tab_btn ${activeTabAL === "output" ? "active" : ""}`}
      onClick={() => setActiveTabAL("output")}
    >
      Output
    </button>

    <button
      className={`tab_btn ${activeTabAL === "controller" ? "active" : ""}`}
      onClick={() => setActiveTabAL("controller")}
    >
      Controller
    </button>

  </div>

  {/* CONTENT AREA */}
  <div className="AlertsViewPage_col2_Content">

    {activeTabAL === "attribute" && (
      <div>
        <h3>Attributes</h3>
        <p>Attribute related content here</p>
      </div>
    )}

    {activeTabAL === "output" && (
      <div>
        <h3>Outputs</h3>
        <p>Output related content here</p>
      </div>
    )}

    {activeTabAL === "controller" && (
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