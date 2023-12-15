import React from 'react';
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Legend,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

export default function DailyActivities({ data }) {
  const formatXAxis = (tickItem) => {
    return new Date(tickItem).getDate();
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className='custom-tooltip'>
          <p className='label'>{`${payload[0].value} kg`}</p>
          <p className='label'>{`${payload[1].value} kcal`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className='barchart_container'>
      <h3>Activité quotidienne</h3>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          width={800}
          height={300}
          data={data}
          margin={{ top: 10, right: 30, left: 20, bottom: 50 }}
        >
          <CartesianGrid strokeDasharray='3 3' stroke='' />
          <ReferenceLine yAxisId='right' y='40' />
          <ReferenceLine yAxisId='right' y='80' />
          <XAxis dataKey='day' stroke='#9B9EAC' tickFormatter={formatXAxis} />
          <YAxis yAxisId='left' orientation='left' stroke='#9B9EAC' hide />
          <YAxis yAxisId='right' orientation='right' stroke='#9B9EAC' />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            yAxisId='right'
            dataKey='kilogram'
            fill='#242424'
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            yAxisId='left'
            dataKey='calories'
            fill='#e60000'
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
          <Legend
            verticalAlign='top'
            layout='horizontal'
            align='right'
            wrapperStyle={{ top: '-15%', right: '10%' }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
