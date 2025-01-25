import React from 'react';
import { FileSpreadsheet, MoreVertical, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import type { Dataset } from '../types';

const datasets: Dataset[] = [
  { id: '1', name: 'Sales_2023_Q4.csv', size: '2.4 MB', lastModified: '2024-02-15', status: 'ready' },
  { id: '2', name: 'Customer_Feedback.xlsx', size: '1.8 MB', lastModified: '2024-02-14', status: 'processing' },
  { id: '3', name: 'Marketing_Campaign.csv', size: '3.1 MB', lastModified: '2024-02-13', status: 'error' },
  { id: '4', name: 'Product_Inventory.csv', size: '4.2 MB', lastModified: '2024-02-12', status: 'ready' },
];

const getStatusIcon = (status: Dataset['status']) => {
  switch (status) {
    case 'ready':
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case 'processing':
      return <Clock className="h-5 w-5 text-yellow-500" />;
    case 'error':
      return <AlertCircle className="h-5 w-5 text-red-500" />;
  }
};

export function DatasetList() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Datasets</h3>
        <p className="mt-1 text-sm text-gray-500">Manage your uploaded datasets</p>
      </div>
      <ul role="list" className="divide-y divide-gray-200">
        {datasets.map((dataset) => (
          <li key={dataset.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FileSpreadsheet className="h-6 w-6 text-gray-400" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{dataset.name}</p>
                  <div className="flex space-x-4">
                    <p className="text-sm text-gray-500">{dataset.size}</p>
                    <p className="text-sm text-gray-500">Last modified: {dataset.lastModified}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {getStatusIcon(dataset.status)}
                <button className="text-gray-400 hover:text-gray-500">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}