import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { DashboardStats } from './components/DashboardStats';
import { DatasetList } from './components/DatasetList';
import { Visualizations } from './components/Visualizations';
import { AnalysisResults } from './components/AnalysisResults';
import { Settings } from './components/Settings';

const mockStats = {
  datasetsCount: 12,
  analysisCount: 45,
  storageUsed: '2.4 GB',
  activeJobs: 3,
};

function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'datasets' | 'analysis' | 'settings'>('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'datasets':
        return <DatasetList />;
      case 'analysis':
        return (
          <div className="space-y-6">
            <Visualizations />
            <AnalysisResults />
          </div>
        );
      case 'settings':
        return <Settings />;
      default:
        return (
          <>
            <DashboardStats stats={mockStats} />
            
            <div className="mt-8 bg-white shadow rounded-lg p-6">
              <div className="border-b border-gray-200 pb-4">
                <h2 className="text-lg font-medium text-gray-900">Quick Analysis</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Upload a dataset or ask a question about your existing data
                </p>
              </div>
              
              <div className="mt-4">
                <div className="relative">
                  <input
                    type="text"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pl-4 pr-12 py-3"
                    placeholder="Ask a question about your data..."
                  />
                  <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 hover:text-gray-700">
                    <span className="text-sm font-medium">Ask</span>
                  </button>
                </div>
                
                <div className="mt-4 flex justify-center">
                  <div className="max-w-lg w-full bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
                    <div className="text-gray-500">
                      <p className="text-sm font-medium">Drag and drop your dataset here</p>
                      <p className="text-xs mt-1">or</p>
                      <button className="mt-2 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Browse Files
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <main className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`${
                  activeTab === 'dashboard'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('datasets')}
                className={`${
                  activeTab === 'datasets'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Datasets
              </button>
              <button
                onClick={() => setActiveTab('analysis')}
                className={`${
                  activeTab === 'analysis'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Analysis
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`${
                  activeTab === 'settings'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Settings
              </button>
            </nav>
          </div>
          
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;