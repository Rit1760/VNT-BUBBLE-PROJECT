

'use client';

import { useState } from "react";
import "../Styles/HardwarePopup.css";

export default function HardwarePopup({ onClose, onSave }) {

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [modelNo, setModelNo] = useState("");
  const [manufacturer, setManufacturer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !type || !description || !modelNo || !manufacturer) {
      alert("Please fill all fields");
      return;
    }

    const newHardware = {
      name,
      type,
      description,
      modelNo,
      manufacturer,
    };

    onSave(newHardware);
    onClose();
  };

  return (
    <div className="main1_HardwarePopup">
      <div className="container1_HardwarePopup">

        <h3>Add New Hardware</h3>

        <form onSubmit={handleSubmit}>

          <div className="form_group">
            <label>Name</label>

            <input
  type="text"
  value={name}
  placeholder="Hardware name"
  onChange={(e) => {
    const value = e.target.value;

    const onlyLetters = value.replace(/[0-9]/g, "");

    setName(onlyLetters.toUpperCase());
  }}
/>

          </div>

          <div className="form_group">
            <label>Hardware Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Select</option>
              <option>HTTP</option>
              <option>HTTPS</option>
              <option>MQTT</option>
              <option>LoRaWAN</option>
              <option>Bluetooth</option>
            </select>
          </div>

          <div className="form_group">
            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
          </div>

          
          <div className="form_group">
            <label>Model No</label>
<input
  type="text"
  value={modelNo}
  onChange={(e) => {
    const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
    setModelNo(onlyNumbers);
  }}
  placeholder="Model number"
/>
          </div>

          <div className="form_group">
            <label>Manufacturer</label>
            <select
              value={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
            >
              <option value="">Select</option>
              <option>VNT</option>
              <option>Siemens</option>
              <option>Schneider</option>
              <option>ABB</option>
              <option>Others</option>
            </select>
          </div>

          <div className="popup_actions">
            <button type="button" className="cancel_btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save_btn">
              Save
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}