import React from 'react';
import { BarChart, LineChart, PieChart, ScatterChart } from 'lucide-react';

const charts = [
  {
    id: '1',
    title: 'Revenue Trend',
    type: 'line',
    description: 'Monthly revenue over the past year',
    icon: LineChart,
  },
  {
    id: '2',
    title: 'Customer Distribution',
    type: 'pie',
    description: 'Distribution of customers by segment',
    icon: PieChart,
  },
  {
    id: '3',
    title: 'Product Sales',
    type: 'bar',
    description: 'Top 10 products by sales volume',
    icon: BarChart,
  },
  {
    id: '4',
    title: 'Price vs. Rating',
    type: 'scatter',
    description: 'Correlation between price and customer rating',
    icon: ScatterChart,
  },
];

export function Visualizations() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Visualizations</h3>
        <p className="mt-1 text-sm text-gray-500">Interactive data visualizations</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 p-6">
        {charts.map((chart) => (
          <div
            key={chart.id}
            className="relative rounded-lg border border-gray-200 p-6 hover:border-indigo-500 cursor-pointer transition-colors"
          >
            <div className="flex items-center">
              <chart.icon className="h-8 w-8 text-indigo-600" />
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">{chart.title}</h4>
                <p className="mt-1 text-sm text-gray-500">{chart.description}</p>
              </div>
            </div>
            <div className="mt-4 h-48 bg-gray-50 rounded-md flex items-center justify-center">
              <p className="text-sm text-gray-500">Chart preview will appear here</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}