import "./home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as A from "../../utils/algorithms";

import FetchFilter from "../../components/FetchFilter";
import DataChart from "../../components/DataChart";
import InfoCard from "../../components/InfoCard";

const Home = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const prices = store.price?.data?.data;

  return (
    <div>
      <header>
        <h1>re:cap challenge</h1>
        <div className="subTitle">Data available from 2013 to 2017.</div>
      </header>
      <FetchFilter />

      {!!store.price.data?.data && (
        <div>
          <section>
            <InfoCard
              kpi="SIMPLE RETURN"
              value={A.ROI(prices[prices.length - 1][11], prices[0][11])}
            />
            <InfoCard kpi="MAX. DRAWDOWN" value={A.maxDrawdown(prices)} />
          </section>
          <DataChart />
        </div>
      )}
      {!!store.price?.data?.error && (
        <section>
          <div className="error">Check if the inputs are filled correctly</div>
        </section>
      )}
    </div>
  );
};

export default Home;
