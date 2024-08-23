import * as React from 'react';
import Box from '@mui/material/Box';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { LinePlot } from '@mui/x-charts/LineChart';

import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';

const timeData = [
  new Date(2023, 7, 31, 1),   // 1 AM
  new Date(2023, 7, 31, 2),   // 2 AM
  new Date(2023, 7, 31, 3),   // 3 AM
  new Date(2023, 7, 31, 4),   // 4 AM
  new Date(2023, 7, 31, 5),   // 5 AM
  new Date(2023, 7, 31, 6),   // 6 AM
  new Date(2023, 7, 31, 7),   // 7 AM
  new Date(2023, 7, 31, 8),   // 8 AM
  new Date(2023, 7, 31, 9),   // 9 AM
  new Date(2023, 7, 31, 10),   // 9 AM
  new Date(2023, 7, 31, 11),   // 9 AM
  new Date(2023, 7, 31, 12),   // 9 AM
  new Date(2023, 7, 31, 13),   // 9 AM
  new Date(2023, 7, 31, 14),   // 9 AM
  new Date(2023, 7, 31, 15),   // 9 AM
  new Date(2023, 7, 31, 16),   // 9 AM
  new Date(2023, 7, 31, 17),   // 9 AM
  new Date(2023, 7, 31, 18),   // 9 AM
  new Date(2023, 7, 31, 19),   // 9 AM
  new Date(2023, 7, 31, 20),   // 9 AM
];

const y1 = [80, 70, 65, 42, 35, 40, 45, 40, 50, 30, 40, 20, 5, 5, 10, 15, 30, 20, 12, 42];
const y2 = [5, 5, 10, 20, 30, 50, 30, 25, 25, 22, 21, 45, 36, 45, 35, 35, 20, 45, 15, 42];

const config = {
  series: [
    { type: 'line', data: y1, color:'#377dff' },
    { type: 'line', data: y2, color: '#c0c0c0' },
  ],
  height: 300,
  xAxis: [
    {
      data: timeData,
      scaleType: 'time',
      valueFormatter: (date) =>
        date.toLocaleTimeString('en-US', {
          hour: 'numeric',
          hour12: true,
        }), // Formatting X-axis labels as "1 AM", "2 AM", etc.
    },
  ],
};

export default function SalesGraph() {
  return (
    <Box sx={{ width: '100%', maxWidth: '100%' }}>
      <ResponsiveChartContainer {...config}>
        <LinePlot />
        <ChartsXAxis />
        <ChartsYAxis />
      </ResponsiveChartContainer>
    </Box>
  );
}
