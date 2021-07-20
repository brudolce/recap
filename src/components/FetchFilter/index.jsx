import React, { useState } from "react";
import "./FetchFilter.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setData,
  setEndDate,
  setStartDate,
  setStockSymbol,
} from "../../store/ducks/price";

import * as quandl from "../../calls/quandl";

import Input from "../Input";
import Button from "../Button";
import Load from "../Load";

const FetchFilter = ({ action = () => undefined }) => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.price.queryInfo);
  const [load, setLoad] = useState(false);

  const saveData = (res) => {
    dispatch(setData(res));
  };

  return (
    <div className="FetchFilterContainer">
      <div className="InputContainer">
        <Input
          name="STOCK SYMBOL"
          data={state.stockSymbol}
          setData={(info) => dispatch(setStockSymbol(info))}
          small
        />
        <Input
          name="START DATE"
          data={state.startDate}
          setData={(info) => dispatch(setStartDate(info))}
          date
        />
        <Input
          name="END DATE"
          data={state.endDate}
          setData={(info) => dispatch(setEndDate(info))}
          date
        />
        <Button action={() => quandl.getEod(state, setLoad, saveData)}>
          Check
        </Button>
      </div>
      {load && <Load />}
    </div>
  );
};

export default FetchFilter;
