import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function IncomeExpenseGraph({ months, income, expense }) {
  const data = {
    labels: months,
    datasets: [
      {
        label: "Income",
        data: income,
        backgroundColor: "#108730",
        borderRadius: 10,
        borderWidth: 1,
      },
      {
        label: "Expense",
        data: expense,
        backgroundColor: "#102e73",
        borderRadius: 10,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0,0,0,0.1)",
         
        },
      },
      x: {
        grid: {
          color: "rgba(0, 0, 0, 0)",
          
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "black",
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className=" flex-grow justify-center items-center">
      <div
        className="p-3"
        style={{
          backgroundColor: "white",
          padding: "20px",
          boxShadow: "#aaa2a2 7px 4px 10px",
          borderRadius: "10px",
        }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default IncomeExpenseGraph;
