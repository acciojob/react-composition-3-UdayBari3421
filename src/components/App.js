import "./../styles/App.css";
import React, { useState } from "react";
import Tooltip from "./Tooltip";
import "./../styles/App.css";

const App = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showTooltip1, setShowTooltip1] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleMouseEnter1 = () => {
    setShowTooltip1(true);
  };

  const handleMouseLeave1 = () => {
    setShowTooltip1(false);
  };
  return (
    <div>
      {showTooltip && <Tooltip text="This is a tooltip" />}
      <h2
        style={{ padding: "20px", borderBottom: "1px solid" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover me
      </h2>

      {showTooltip1 && <Tooltip text="This is a another tooltip " />}
      <p
        style={{ padding: "20px", borderBottom: "1px solid" }}
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}
      >
        Hover over me to see another tooltip
      </p>
    </div>
  );
};

export default App;
