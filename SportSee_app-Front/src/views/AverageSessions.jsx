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

  const CustomTick = (props) => {
    const { fill, payload, x, y } = props;

    console.log(props);
    return (
      <g>
        <text fill={fill} x={x} y={y}>
          {formatXAxis(payload.value)}
        </text>
      </g>
    );
  };

  return (
    <div className='average-sessions_container'>
      <ResponsiveContainer width='100%' height='100%' padding={80}>
        <h3>Durée moyenne des sessions</h3>
        <LineChart
          title='Durée moyenne des sessions'
          data={data.sessions}
          margin={{ top: 30, left: 0, right: 0, bottom: 0 }}
        >
          <XAxis
            dataKey='day'
            tickLine={false}
            tick={<CustomTick fill={'white'} x={0} y={0} />}
            opacity={0.5}
            axisLine={false}
          />
          <YAxis hide />
          <Tooltip
            content={<CustomTooltip />}
            cursor={<CustomCursor width={200} height={400} />}
          />
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
      </ResponsiveContainer>
    </div>
  );
}
