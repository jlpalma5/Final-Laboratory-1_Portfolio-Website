import React from "react";

const infoData = [
  { label: "Email", value: "johnlloydpalma54@gmail.com" },
  { label: "Phone", value: "09759691865" },
  { label: "Address", value: "Cabuyao, Laguna, Philippines" },
  { label: "Education", value: "Bachelor of Science in Computer Science, University of Cabuyao" }
];

export default function PersonalInfo() {
  return (
    <div className="card info-card" tabIndex={0}>
      <h2>Personal Information</h2>
      <ul className="pf-info-list">
        {infoData.map((info, index) => (
          <li key={info.label} className="info-item" tabIndex={0}>
            <div className="info-label">
              <strong>{info.label}</strong>
            </div>
            <div className="info-value">
              {info.value}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
