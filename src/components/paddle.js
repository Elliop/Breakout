import React from "react";

const Paddle = ({ x, y, width, height }) => (
  <rect
    className="paddle"
    x={x}
    y={y - 5}
    width={width}
    height={height}
    rx={10}
  />
);

export default Paddle;
