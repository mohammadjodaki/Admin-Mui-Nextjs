"use client";  
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [4000, 3000, 2000, 2780, 189 , 5754 , 651];
const pData = [2400, 1398, 9800, 3908, 487 , 1024 , 3245];
const xLabels = [
  'Revanue',
  'Sales',
  'Cost',
  'shopping',
  'back',
  'reached',
  'remainder',
  'back'
];

export default function SimpleLineChart() {
  return (
    <LineChart
      width={700}
      height={400}
      series={[
        { data: pData, label: 'pv' },
        { data: uData, label: 'uv' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}


