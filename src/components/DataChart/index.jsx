import React from "react";
import "./DataChart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
} from "recharts";
import moment from "moment";
import { useSelector } from "react-redux";

const DataDisplay = () => {
  const store = useSelector((store) => store);

  const data = store?.price?.data?.data?.reverse().map((e) => ({
    date: moment(new Date(e[0]).getTime()).format("DD.MM.YYYY"),
    price: e[11],
  }));

  return (
    <div className="chartContainer">
      <LineChart
        width={window.innerWidth * 0.8}
        height={window.innerHeight / 2}
        data={data || []}
        margin={{
          top: 5,
          right: 30,
          left: 30,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          reversed
          tickFormatter={(time) => time.slice(-7)}
          minTickGap={window.innerWidth / 10}
        />
        <YAxis>
          <Label
            angle={270}
            position="left"
            style={{ textAnchor: "middle", fill: "#6497b1" }}
          >
            US$ Adjusted Closing Prices
          </Label>
        </YAxis>
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#6497b1"
          fill="#6497b1"
          dot={false}
          strokeWidth={3}
        />
      </LineChart>
    </div>
  );
};

export default DataDisplay;
