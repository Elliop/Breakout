import React from "react";

const Ball = ({ x, y, radius }) => (
  <circle className="ball" cx={x} cy={y} r={radius} />
);

export default Ball;
