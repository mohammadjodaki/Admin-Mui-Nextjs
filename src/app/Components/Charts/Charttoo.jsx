"use client";  
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
  { value: 5, label: 'Revanue' , color:'#E69900' },
  { value: 10, label: 'Sales' , color:'#00BD52' },
  { value: 15, label: 'Cost' , color:'#0090E7' },
  { value: 20, label: 'D' , color:'#FC424A' },
];

const size = {
  width: 400,
  height: 250,
};

const StyledText = styled('text')(({ theme }) => ({
  // fill: 'white',
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));


function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  return (
    <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
      <PieCenterLabel>Total</PieCenterLabel>
    </PieChart>
  );
}
