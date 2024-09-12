import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

function Chartone() {
  return (
    <div>
      <BarChart
        series={[
          { data: [35, 44, 24, 34] },
          { data: [51, 6, 49, 30] },
          { data: [15, 25, 30, 50] },
          { data: [60, 50, 15, 25] },
        ]}
        height={400}
        xAxis={[{ data: ["Revanue", "Sales", "Cost", "Q4"], scaleType: "band" }]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      />
    </div>
  );
}

export default Chartone;
