import React from "react";

const Tooltip = ({ text }) => {
  return (
    <h2 className="tooltip">
      <div className="tooltiptext">{text}</div>
    </h2>
  );
};

export default Tooltip;
