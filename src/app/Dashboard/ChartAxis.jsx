"use client";  
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [4000, 3000, 2000, 2780, 1890];
const pData = [2400, 1398, 9800, 3908, 4800];
const xLabels = [
  'Revanue',
  'Sales',
  'Cost',
  'Page D',
  'Page E',
];

export default function SimpleLineChart() {
  return (
    <LineChart
      width={500}
      height={300}
      series={[
        { data: pData, label: 'pv' },
        { data: uData, label: 'uv' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}


