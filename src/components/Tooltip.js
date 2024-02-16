import React from "react";

const Tooltip = ({ text }) => {
  return (
    <div className="tooltip">
      <h2 className="tooltiptext">{text}</h2>
    </div>
  );
};

export default Tooltip;
