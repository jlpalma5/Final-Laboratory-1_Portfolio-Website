import React from "react";

export default function PersonalInfo() {
  return (
    <div className="top-card info-card">
      <h2>Personal Information</h2>
      <ul className="pf-info">
        <li><strong>Email:</strong> johnlloydpalma54@gmail.com</li>
        <li><strong>Phone:</strong> 09759691865</li>
        <li><strong>Address:</strong> Cabuyao, Laguna, Philippines</li>
        <li><strong>Education:</strong>
          <ul>
            <li>Bachelor of Science in Computer Science, University of Cabuyao</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
