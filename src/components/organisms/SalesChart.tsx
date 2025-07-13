'use client';

import { useState } from 'react';
import {
  BarChart, Bar,
  LineChart, Line,
  PieChart, Pie,
  XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts';

import { salesData } from '../../data/mockSales';

export default function SalesChart() {
  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('bar');

  return (
    <div>
      <div className="mb-4 space-x-2">
        <button onClick={() => setChartType('bar')} className="border px-2 py-1">Bar</button>
        <button onClick={() => setChartType('line')} className="border px-2 py-1">Line</button>
        <button onClick={() => setChartType('pie')} className="border px-2 py-1">Pie</button>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <>
          {chartType === 'bar' && (
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#8884d8" />
            </BarChart>
          )}
          {chartType === 'line' && (
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line dataKey="sales" stroke="#8884d8" />
            </LineChart>
          )}
          {chartType === 'pie' && (
            <PieChart>
              <Tooltip />
              <Legend />
              <Pie data={salesData} dataKey="sales" nameKey="year" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
            </PieChart>
          )}
        </>
      </ResponsiveContainer>
    </div>
  );
}

