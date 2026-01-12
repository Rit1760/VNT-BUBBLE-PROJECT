



'use client'

import { useState } from "react"
import "../Styles/UsersPopup.css"

export default function UsersPopup({ onSave, onClose }) {

  const [name, setName] = useState("")
  const [Pname, psetName] = useState("")
  const [mobile, setMobile] = useState("")
  const [mobileError, setMobileError] = useState("")
  const [mail, setMail] = useState("")
  const [error, setError] = useState("")

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const validateMobile = (number) => {
    const regex = /^[6-9]\d{9}$/
    return regex.test(number)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name.trim() || !Pname.trim() || !mail.trim() || !mobile.trim()) {
      alert("Please fill all fields")
      return
    }

    if (!validateEmail(mail)) {
      alert("Please enter a valid email")
      return
    }

    if (!validateMobile(mobile)) {
      alert("Mobile number is invalid")
      return
    }

    const saveData = { name, Pname, mail, mobile }
    onSave(saveData)

    setName("")
    psetName("")
    setMail("")
    setMobile("")
    setError("")
    setMobileError("")
  }

  return (
    <div className="main1_UsersPopup">
      <div className="container1_UsersPopup">
        <div className="row1_UsersPopup">
          <div className="col1_UsersPopup">
            <h3>Add new User</h3>

            <form onSubmit={handleSubmit}>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  placeholder="Name..."
                  onChange={(e) => setName(e.target.value.toUpperCase())}
                />
              </div>

              <div>
                <label>Project Name</label>
                <input
                  type="text"
                  value={Pname}
                  placeholder="Project Name..."
                  onChange={(e) => psetName(e.target.value)}
                />
              </div>

              <div>
                <label>Mail</label>
                <input
                  type="email"
                  value={mail}
                  placeholder="Mail..."
                  onChange={(e) => {
                    setMail(e.target.value)
                    setError(
                      validateEmail(e.target.value)
                        ? ""
                        : "Please enter a valid email"
                    )
                  }}
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
              </div>

              <div>
                <label>Mobile</label>
                <input
                  type="text"
                  value={mobile}
                  placeholder="Mobile..."
                  maxLength={10}
                  onChange={(e) => {
                    const onlyNumbers = e.target.value.replace(/[^0-9]/g, "")
                    setMobile(onlyNumbers)
                    setMobileError(
                      validateMobile(onlyNumbers)
                        ? ""
                        : "Enter valid 10-digit Indian mobile number"
                    )
                  }}
                />
                {mobileError && <p style={{ color: "red" }}>{mobileError}</p>}
              </div>

              <div className="btnU">
                <button type="button" onClick={onClose}>Cancel</button>
                <button type="submit" disabled={error || mobileError}>
                  Save
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}


