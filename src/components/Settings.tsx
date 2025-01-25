import React from 'react';
import { User, Bell, Lock, Database, Cloud, Sliders } from 'lucide-react';

const settingSections = [
  {
    id: 'profile',
    title: 'Profile Settings',
    icon: User,
    description: 'Manage your account information and preferences',
    items: [
      { name: 'Name', value: 'John Doe' },
      { name: 'Email', value: 'john.doe@example.com' },
      { name: 'Company', value: 'Acme Corp' },
    ],
  },
  {
    id: 'notifications',
    title: 'Notifications',
    icon: Bell,
    description: 'Configure how you receive alerts and updates',
    items: [
      { name: 'Email Notifications', value: 'Enabled' },
      { name: 'Analysis Completion Alerts', value: 'Enabled' },
      { name: 'Weekly Reports', value: 'Disabled' },
    ],
  },
  {
    id: 'security',
    title: 'Security',
    icon: Lock,
    description: 'Manage your security settings and permissions',
    items: [
      { name: 'Two-Factor Authentication', value: 'Enabled' },
      { name: 'API Keys', value: '2 Active' },
      { name: 'Session Management', value: '1 Active Session' },
    ],
  },
  {
    id: 'storage',
    title: 'Storage & Data',
    icon: Database,
    description: 'Manage your data storage and retention settings',
    items: [
      { name: 'Storage Used', value: '2.4 GB of 10 GB' },
      { name: 'Data Retention', value: '90 days' },
      { name: 'Auto-cleanup', value: 'Enabled' },
    ],
  },
];

export function Settings() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Settings</h3>
        <p className="mt-1 text-sm text-gray-500">Manage your account and application preferences</p>
      </div>
      <div className="divide-y divide-gray-200">
        {settingSections.map((section) => (
          <div key={section.id} className="p-6">
            <div className="flex items-center">
              <section.icon className="h-6 w-6 text-gray-400" />
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">{section.title}</h4>
                <p className="mt-1 text-sm text-gray-500">{section.description}</p>
              </div>
            </div>
            <div className="mt-4 space-y-4">
              {section.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{item.name}</span>
                  <span className="text-sm font-medium text-gray-900">{item.value}</span>
                </div>
              ))}
            </div>
            <button className="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <Sliders className="h-4 w-4 mr-2" />
              Configure
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}