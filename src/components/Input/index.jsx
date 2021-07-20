import React from "react";
import "./Input.css";
import * as M from "../../utils/masks";

const Input = ({
  name = "",
  date = false,
  data = "",
  setData = () => undefined,
}) => {
  const handleChange = (value, save = () => undefined) => {
    if (!!date) {
      save(M.dateMask(value));
    } else {
      save(M.stringMask(value));
    }
  };

  return (
    <div className="inputContainer">
      <div className="inputHeader">{name}</div>
      <input
        placeholder={!!date ? "dd.mm.yyyy" : "...stock symbol"}
        className="inputTextArea"
        type="text"
        value={data}
        onChange={(e) => handleChange(e.target.value, setData)}
        maxLength={!!date ? "10" : "4"}
      />
    </div>
  );
};

export default Input;
