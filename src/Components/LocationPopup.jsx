'use client'

import { useState } from "react"
import "../Styles/LocationPopup.css"

export default function LocationPopup({ onSave, onClose }) {

  const [form, setForm] = useState({
    locationType: "",
    name: "",
    mail: "",
    description: "",
    mobile: "",
    area: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

//     const handleChangeM = (e) => {
//   const { nameM, valueM } = e.target;
//   setForm((prev) => ({ ...prev, [nameM]: valueM }));
// };

const handleChangem = (e) => {
  const { name, value } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: name === "name" ? value.toUpperCase() : value,
  }));
};

  const handleSubmitLO = (e) => {
    e.preventDefault()

    for (let key in form) {
      if (!form[key].trim()) {
        alert("Please fill all fields")
        return
      }
    }

    onSave(form)
    onClose()
  }



  return (
    <div className="main1_LocationPopup">
      <div className="container1_LocationPopup">
        <div className="col1_LocationPopup">
          <h3>Add Location</h3>

          <form onSubmit={handleSubmitLO}>

            {/* Location Type */}
            <div>
              <label>Location Type</label>
              <select name="locationType" onChange={handleChange}>
                <option value="">Select</option>
                <option value="Indoor">Indoor</option>
                <option value="Outdoor">Outdoor</option>
              </select>
            </div>

            <div>
              <label>Name</label>
            <input
  name="name"
  value={form.name}
  onChange={(e) =>
    setForm({ ...form, name: e.target.value.toUpperCase() })
  }
/>
            </div>


            <div>
              <label>Email</label>
              {/* <input name="email" value={form.mail} onChange={handleChange} required /> */}
              <input
  type="email"
  name="mail"
  value={form.mail}
  onChange={handleChangem}
  pattern=".+@.+\.com"
  required
/>
            </div>

            <div>
              <label>Description</label>
              <input name="description" value={form.description} onChange={handleChange} />
            </div>

            <div>
              <label>Mobile</label>
              <input name="mobile" value={form.mobile} onChange={handleChange} />
            </div>

            <div>
              <label>Area</label>
              <input name="area" value={form.area} onChange={handleChange} />
            </div>

            <div className="btnLO">
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="submit">Save</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}