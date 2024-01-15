import React from 'react';
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
  Rectangle,
} from 'recharts';

export default function AverageSessions({ data }) {
  console.log(data);
  const CustomCursor = (props) => {
    const { width, height } = props;

    return (
      <Rectangle
        fill='#000000'
        opacity={0.2}
        radius={[0, 10, 10, 0]}
        width={width}
        height={height}
        x={props.points[0].x}
      />
    );
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
      <ResponsiveContainer width='100%' height='100%'>
        <h3>Durée moyenne des sessions</h3>
        <LineChart
          title='Durée moyenne des sessions'
          data={data.activityData}
          margin={{ top: 100, right: 0, left: 0, bottom: 20 }}
        >
          <XAxis
            dataKey='day'
            tickLine={false}
            tick={{ fill: 'white', fontSize: 12 }}
            axisLine={false}
            tickFormatter={data.dayOfTheWeek}
            fillOpacity={0.5}
            fontWeight={500}
            style={{ transform: 'scale(0.91)', transformOrigin: 'bottom' }}
            tickSize={10}
            interval={'preserveStartEnd'}
          />
          <YAxis hide />
          <Tooltip
            content={<CustomTooltip />}
            cursor={<CustomCursor width={300} height={400} />}
          />
          <Line
            type='monotone'
            dataKey='sessionLength'
            stroke='white'
            opacity={0.5}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
