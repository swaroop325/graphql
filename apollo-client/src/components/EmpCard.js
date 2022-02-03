import React from "react";

export default function EmpCard({ emp, onCardClick }) {
  const { id, fullName } = emp;
  return (
    <div
      onClick={() => onCardClick(id)}
      className="card col-3 border-dark bg-info text-light"
    >
      <br />
      <h4>{fullName}</h4>
    </div>
  );
}
