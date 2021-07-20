import React from "react";
import "./Button.css";
import * as M from "../../utils/masks";

const Input = ({ action = () => undefined, children }) => {
  return (
    <button className="Button" onClick={action}>
      {children}
    </button>
  );
};

export default Input;
