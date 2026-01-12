

'use client'

import LocationPopup from "@/Components/LocationPopup"
import { useState } from "react"
import "../../../../Styles/Locations.css"

export default function Locations() {

  const [locations, setLocations] = useState([])
  const [showPopupLO, setShowPopupLO] = useState(false)

  const handleAddLocation = (data) => {
    const newLocation = {
      ...data,
      date: new Date().toLocaleDateString(),
      isActive: false
    }

    setLocations(prev => [...prev, newLocation])
  }

  const handleToggleActive = (index) => {
    const updated = [...locations]
    updated[index].isActive = !updated[index].isActive
    setLocations(updated)
  }

  
  return (
    <>
      <div className="main1_Locations">
        <button onClick={() => setShowPopupLO(true)}>+ Add Location</button>

        <div className="projects_list_Locations">
          {locations.length === 0 ? (
            <p>No locations added</p>
          ) : (
            locations.map((p, i) => (
              <div key={i} className="project_item_Locations">

                <h3>{p.name} ({p.locationType})</h3>
                <p>{p.description}</p>

                <p><strong>Area:</strong> {p.area}</p>
                <p><strong>Email:</strong> {p.mail}</p>
                <p><strong>Mobile:</strong> {p.mobile}</p>

                <div className="project_footer_Locations">
                  <p>Date: {p.date}</p>
                  <button
                    onClick={() => handleToggleActive(i)}
                    className={p.isActive ? "active_btn" : "inactive_btn"}
                  >
                    {p.isActive ? "Active" : "Inactive"}
                  </button>
                </div>

              </div>
            ))
          )}
        </div>
      </div>

      {showPopupLO && (
        <LocationPopup
          onSave={handleAddLocation}
          onClose={() => setShowPopupLO(false)}
        />
      )}
    </>
  )
}