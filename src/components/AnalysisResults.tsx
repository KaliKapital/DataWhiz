import React from 'react';
import { FileText, TrendingUp, AlertTriangle } from 'lucide-react';
import type { Analysis } from '../types';

const analyses: Analysis[] = [
  {
    id: '1',
    type: 'eda',
    name: 'Sales Performance Analysis',
    description: 'Exploratory analysis of Q4 2023 sales data',
    timestamp: '2024-02-15 14:30',
  },
  {
    id: '2',
    type: 'prediction',
    name: 'Customer Churn Prediction',
    description: 'ML model predictions for customer churn risk',
    timestamp: '2024-02-14 09:15',
  },
  {
    id: '3',
    type: 'visualization',
    name: 'Marketing Campaign Impact',
    description: 'Visual analysis of campaign effectiveness',
    timestamp: '2024-02-13 16:45',
  },
];

const getAnalysisIcon = (type: Analysis['type']) => {
  switch (type) {
    case 'eda':
      return <FileText className="h-6 w-6 text-blue-500" />;
    case 'prediction':
      return <TrendingUp className="h-6 w-6 text-green-500" />;
    case 'visualization':
      return <AlertTriangle className="h-6 w-6 text-yellow-500" />;
  }
};

export function AnalysisResults() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Analysis Results</h3>
        <p className="mt-1 text-sm text-gray-500">Recent analysis reports and insights</p>
      </div>
      <div className="divide-y divide-gray-200">
        {analyses.map((analysis) => (
          <div key={analysis.id} className="p-6 hover:bg-gray-50">
            <div className="flex items-center">
              {getAnalysisIcon(analysis.type)}
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">{analysis.name}</h4>
                <p className="mt-1 text-sm text-gray-500">{analysis.description}</p>
                <p className="mt-2 text-xs text-gray-400">{analysis.timestamp}</p>
              </div>
            </div>
            <div className="mt-4 flex space-x-4">
              <button className="text-sm text-indigo-600 hover:text-indigo-900">View Report</button>
              <button className="text-sm text-indigo-600 hover:text-indigo-900">Download PDF</button>
              <button className="text-sm text-indigo-600 hover:text-indigo-900">Share</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}