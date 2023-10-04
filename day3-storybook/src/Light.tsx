import React from "react";

export interface LightProps {
  /** some description */
  variant: "red" | "green" | "yellow";
}

/** Comment about my component */
const Light: React.FC<LightProps> = ({ variant = "green" }) => {
  return (
    <div
      style={{
        background: variant,
        borderRadius: "50%",
        height: 50,
        width: 50,
      }}
    ></div>
  );
};

export default Light;
