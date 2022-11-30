import React, { useEffect, useState } from "react";
import "./PortfolioChart.module.scss";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

type CustomBarProps = {
  fill?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

const CustomBar = ({ fill, x, y, width, height }: CustomBarProps) => {
  // return <rect fill={fill} width={width} height={height} x={x} y={y} rx={10} />;
  console.log(x, y, width, height);

  return (
    <path
      d={`M ${x}, ${height}
      v -${height}
      a 10,10 0 0 0 0,0
      h ${width}
      a 10,10 0 0 0 0,0
      v ${height}
      z
  `}
    />
  );
};

function PortfolioChart() {
  const [data, setData] = useState([
    // {
    //   name: "Январь",
    //   value: "1000",
    // },
    // {
    //   name: "Февраль",
    //   value: "1000",
    // },
    // {
    //   name: "Март",
    //   value: "1000",
    // },
    // {
    //   name: "Апрель",
    //   value: "1000",
    // },
    // {
    //   name: "Май",
    //   value: "3000",
    // },
    // {
    //   name: "Июнь",
    //   value: "1000",
    // },
    // {
    //   name: "Июль",
    //   value: "1000",
    // },
    // {
    //   name: "Август",
    //   value: "1000",
    // },
    // {
    //   name: "Сентябрь",
    //   value: "1000",
    // },
    // {
    //   name: "Октябрь",
    //   value: "1000",
    // },
    // {
    //   name: "Ноябрь",
    //   value: "1000",
    // },
    {
      name: "Декабрь",
      value: "1000",
    },
  ]);
  useEffect(() => {}, [data]);

  return (
    <ResponsiveContainer width={816} height={276}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <Bar
          barSize={30}
          fill="rgb(101, 167, 224)"
          dataKey="value"
          shape={<CustomBar />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default PortfolioChart;
