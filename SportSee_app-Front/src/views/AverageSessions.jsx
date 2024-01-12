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
  const formatXAxis = (tickItem) => {
    const joursSemaine = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    const jourSemaine = joursSemaine[tickItem - 1];

    return jourSemaine;
  };
  const CustomCursor = (props) => {
    const { width, height } = props;
    console.log(props.points[0].x);
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

  // const CustomTick = (props) => {
  //   const { fill, payload, x, width } = props;

  //   console.log(props);
  //   return (
  //     <text
  //       style={{ fontSize: '12px' }}
  //       fill={fill}
  //       x={x}
  //       y={240}
  //       width={width}
  //     >
  //       {formatXAxis(payload.value)}
  //     </text>
  //   );
  // };

  return (
    <div className='average-sessions_container'>
      <ResponsiveContainer width='100%' height='100%'>
        <h3>Durée moyenne des sessions</h3>
        <LineChart
          title='Durée moyenne des sessions'
          data={data.sessions}
          margin={{ top: 100, right: 0, left: 0, bottom: 20 }}
        >
          <XAxis
            dataKey='day'
            tickLine={false}
            tick={{ fill: 'white', fontSize: 12 }}
            axisLine={false}
            tickFormatter={formatXAxis}
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
