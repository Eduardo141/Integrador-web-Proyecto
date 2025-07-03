import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Enero', Visitas: 4000 },
  { name: 'Febrero', Visitas: 3000 },
  { name: 'Marzo', Visitas: 5000 },
  { name: 'Abril', Visitas: 4000 },
  { name: 'Mayo', Visitas: 6000 },
  { name: 'Junio', Visitas: 7000 },
  { name: 'Julio', Visitas: 6000 },
  { name: 'Agosto', Visitas: 5000 },
  { name: 'Septiembre', Visitas: 7000 },
  { name: 'Octubre', Visitas: 8000 },
  { name: 'Noviembre', Visitas: 9000 },
  { name: 'Diciembre', Visitas: 10000 },
];

function VMensuales() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Visitas" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default VMensuales;
