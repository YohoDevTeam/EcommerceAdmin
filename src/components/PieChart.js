import React from "react";
import { Chart } from "react-google-charts";
import Color from "../../src/constants/theme";
export const data = [
  ["Task", "Hours per Day"],
  ["send", 8],
  ["open", 3],
  ["spam", 4],
  // ["Watch TV", 2],
  // ["Sleep", 7],
];

export const options = {
  // title: "My Daily Activities",
  slices: {
    0: { color: Color.COLORS.primary },
    1: { color: Color.COLORS.secondary },
    2: { color: Color.COLORS.pinkTwo },
  },
};

export function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      width="90%"
      height="300px"
      options={options}
    />
  );
}
