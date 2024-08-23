import React from 'react';
import { ResponsiveContainer, ScatterChart, XAxis, YAxis, ZAxis, Tooltip, Scatter } from 'recharts';

// Sample data structure
const data = [
  { day: 'Monday', hour: 9, hoursSpent: 3 },
  { day: 'Monday', hour: 10, hoursSpent: 2 },
  { day: 'Tuesday', hour: 9, hoursSpent: 4 },
  { day: 'Wednesday', hour: 10, hoursSpent: 1 },
  { day: 'Thursday', hour: 12, hoursSpent: 2 },
  { day: 'Friday', hour: 10, hoursSpent: 5 },
  { day: 'Saturday', hour: 8, hoursSpent: 3 },
];

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const hoursOfDay = Array.from({ length: 24 }, (_, i) => i); // Hours from 0 to 23

export default function HoursSpentChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis
          type="category"
          dataKey="day"
          name="Day"
          allowDuplicatedCategory={false}
          tick={{ fill: '#8884d8' }} // Customize text color
          data={daysOfWeek}
        />
        <YAxis
          type="number"
          dataKey="hour"
          name="Hour"
          domain={[0, 23]}
          tick={{ fill: '#8884d8' }} // Customize text color
          ticks={hoursOfDay}
          tickFormatter={(tick) => `${tick}:00`}
        />
        <ZAxis
          type="number"
          dataKey="hoursSpent"
          range={[50, 400]} // Control bubble size based on hours spent
        />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter data={data} fill="#377dff" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
