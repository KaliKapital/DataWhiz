export interface Dataset {
  id: string;
  name: string;
  size: string;
  lastModified: string;
  status: 'ready' | 'processing' | 'error';
}

export interface Analysis {
  id: string;
  type: 'eda' | 'prediction' | 'visualization';
  name: string;
  description: string;
  timestamp: string;
}

export interface DashboardStats {
  datasetsCount: number;
  analysisCount: number;
  storageUsed: string;
  activeJobs: number;
}