import React from "react";

const Paddle = ({ x, y, width, height }) => (
  <rect className="paddle" x={x} y={y} width={width} height={height} />
);

export default Paddle;
