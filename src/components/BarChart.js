import React from "react";
import { Chart } from "react-google-charts";
import Color from '../../src/constants/theme'
export const data = [
  ["Element", "Density", { role: "style" }],
  ["Target", 8.94, Color.COLORS.primary], // RGB value
  ["Last Week", 10.49, Color.COLORS.primary], // English color name
  ["Last Month", 19.3, Color.COLORS.primary],
  // ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
];

export function BarChart() {
  return (
    <Chart chartType="ColumnChart" width="90%" height="300px" data={data} />
  );
}
