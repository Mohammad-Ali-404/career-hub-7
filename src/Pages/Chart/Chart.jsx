import React from 'react';

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function Statistics() {
  const data = [
    { name: 'A1', marks: 57 },
    { name: 'A2', marks: 59 },
    { name: 'A3', marks: 60 },
    { name: 'A4', marks: 56 },
    { name: 'A5', marks: 45 },
    { name: 'A6', marks: 54 },
    { name: 'A7', marks: 60 },
    { name: 'A8', marks: 58 },
  ];
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '80%' }}>
        <h2 className='text-center py-5'>Assignment Statistics</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="marks" stroke="#3881d8" fill="#5124d8" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}