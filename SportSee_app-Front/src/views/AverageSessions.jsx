import React from 'react';
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Legend,
  CartesianGrid,
} from 'recharts';

export default function AverageSessions({ data }) {
  const formatXAxis = (tickItem) => {
    const joursSemaine = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    const jourSemaine = joursSemaine[tickItem - 1];

    return jourSemaine;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className='custom-tooltip-average-session'>
          <p className='label'>{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className='average-sessions_container'>
      <h3>Durée moyenne des sessions</h3>
      <LineChart width={250} height={200} data={data}>
        <XAxis
          dataKey='day'
          tickLine={false}
          tick={{ fill: 'white' }}
          tickFormatter={formatXAxis}
          opacity={0.5}
          axisLine={false}
          padding={{ left: 10 }}
        />
        <YAxis hide />
        <Tooltip content={<CustomTooltip />} cursor={false} />
        <Line
          type='monotone'
          dataKey='sessionLength'
          stroke='white'
          opacity={0.5}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 3 }}
        />
      </LineChart>
    </div>
  );
}
