// BestSellingPhonesChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TelefonosChart = () => {
  // Datos de ejemplo
  const data = {
    labels: ['iPhone 14', 'Samsung Galaxy S23', 'Xiaomi 13', 'OnePlus 11', 'Google Pixel 7'],
    datasets: [
      {
        label: 'Unidades Vendidas',
        data: [150, 200, 120, 80, 60], // Cambia estos números según los datos reales
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Celulares Más Vendidos',
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TelefonosChart;
