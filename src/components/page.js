import React, { useRef, useState, useEffect } from "react";
import Screen from "./screen";
import { registerListner } from "../utils";

export default () => {
  const screenContainer = useRef();
  const [size, setSize] = useState();

  useEffect(() => {
    const onResize = () => {
      const { width, height } = screenContainer.current.getBoundingClientRect();
      setSize({ width, height });
    };
    const unregisterResizeListner = registerListner("resize", onResize);
    onResize();
    return unregisterResizeListner;
  }, []);
  return (
    <div className="page">
      <div className="screen-container" ref={screenContainer}>
        {size && <Screen {...size} />}
      </div>
    </div>
  );
};
