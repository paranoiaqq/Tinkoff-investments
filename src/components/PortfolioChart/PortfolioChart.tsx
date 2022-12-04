import React, { useEffect, useState, useRef } from "react";
import "./PortfolioChart.module.scss";
import { BarChart, Bar, XAxis, Tooltip } from "recharts";
import anime from "animejs/lib/anime.es.js";

interface CustomBarProps {
  fill?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

const CustomBar = ({ fill, x, y, width, height }: CustomBarProps) => {
  return (
    <svg>
      <defs>
        <clipPath id="round-corner">
          <rect
            fill={fill}
            x={x}
            y={y}
            width={width}
            height={height ? height + 10 : 0}
            rx="10"
            ry="10"
          />
        </clipPath>
      </defs>

      <rect
        x={x}
        y={y}
        fill={fill}
        width={width}
        height={height}
        // clip-path="url(#round-corner)"
      ></rect>
    </svg>
  );
};

function PortfolioChart() {
  const animation = useRef<any>(null);
  const animationReversed = useRef<any>(null);
  const popUpRef = useRef(null);
  const [data, setData] = useState([
    {
      name: "Январь",
      value: "1000",
    },
    {
      name: "Февраль",
      value: "3000",
    },
    {
      name: "Март",
      value: "1000",
    },
    {
      name: "Апрель",
      value: "2750",
    },
    {
      name: "Май",
      value: "3000",
    },
    {
      name: "Июнь",
      value: "1000",
    },
    {
      name: "Июль",
      value: "1000",
    },
    {
      name: "Август",
      value: "1000",
    },
    {
      name: "Сентябрь",
      value: "1000",
    },
    {
      name: "Октябрь",
      value: "1000",
    },
    {
      name: "Ноябрь",
      value: "1000",
    },
    {
      name: "Декабрь",
      value: "1000",
    },
  ]);

  useEffect(() => {
    animation.current = anime({
      targets: popUpRef.current,

      autoplay: false,
      duration: 300,
    });
    animationReversed.current = anime({
      targets: popUpRef.current,

      autoplay: false,
      duration: 300,
    });
  }, []);

  const enterHandler = () => {
    animation.current.play();
  };

  const leaveHandler = () => {
    animationReversed.current.play();
  };

  useEffect(() => {}, [data]);

  return (
    <BarChart data={data} width={816} height={276}>
      {/* <Tooltip
        labelStyle={{ color: "red" }}
        offset={-50}
        // position={{ x: 100, y: 140 }}
        coordinate={{ x: 100, y: 140 }}
      /> */}
      <XAxis dataKey="name" />
      <Bar
        onMouseEnter={enterHandler}
        onMouseLeave={leaveHandler}
        barSize={30}
        fill="rgb(101, 167, 224)"
        dataKey="value"
        shape={<CustomBar />}
      />
    </BarChart>
  );
}

export default PortfolioChart;
