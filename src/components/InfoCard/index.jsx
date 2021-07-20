import React from "react";
import "./InfoCard.css";

import * as M from "../../utils/masks";

const InfoCard = ({ kpi = "", value }) => {
  return (
    <div className="infoCardContainer">
      <div className="infoCardTitle">{kpi}: </div>
      <div className="infoCardValue">{M.percentageString(value)}</div>
    </div>
  );
};

export default InfoCard;
