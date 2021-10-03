import React from "react";

const Level = ({ level, unit }) => {
  return (
    <text x={unit} y={unit * 2} fontSize={unit} className="level">
      LEVEL {level}
    </text>
  );
};

export default Level;
