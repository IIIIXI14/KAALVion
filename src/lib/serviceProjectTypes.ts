import { z } from 'zod';

export interface ProjectTypeOption {
  value: string;
  label: string;
}

export const getProjectTypesForService = (serviceType: string): ProjectTypeOption[] => {
  const serviceTypeLower = serviceType.toLowerCase();

  if (serviceTypeLower.includes('web') || serviceTypeLower.includes('web systems')) {
    return [
      { value: 'web-app', label: 'Web Application' },
      { value: 'spa', label: 'Single Page Application (SPA)' },
      { value: 'ssr', label: 'Server-Side Rendered (SSR)' },
      { value: 'ecommerce', label: 'E-Commerce Platform' },
      { value: 'dashboard', label: 'Admin Dashboard' },
      { value: 'cms', label: 'Content Management System' },
      { value: 'api', label: 'REST/GraphQL API' },
    ];
  }

  if (serviceTypeLower.includes('mobile') || serviceTypeLower.includes('wearable')) {
    return [
      { value: 'mobile-native', label: 'Native Mobile App (iOS/Android)' },
      { value: 'mobile-cross', label: 'Cross-Platform App (React Native/Flutter)' },
      { value: 'mobile-hybrid', label: 'Hybrid App (Ionic/Cordova)' },
      { value: 'wearable', label: 'Wearable Device App' },
      { value: 'pwa', label: 'Progressive Web App (PWA)' },
      { value: 'mobile-game', label: 'Mobile Game' },
    ];
  }

  if (serviceTypeLower.includes('iot') || serviceTypeLower.includes('edge')) {
    return [
      { value: 'iot-device', label: 'IoT Device Firmware' },
      { value: 'sensor-network', label: 'Sensor Network System' },
      { value: 'edge-computing', label: 'Edge Computing Solution' },
      { value: 'smart-home', label: 'Smart Home Automation' },
      { value: 'industrial-iot', label: 'Industrial IoT System' },
      { value: 'wifi-mesh', label: 'WiFi Mesh Network' },
    ];
  }

  if (serviceTypeLower.includes('cloud') || serviceTypeLower.includes('infrastructure')) {
    return [
      { value: 'cloud-migration', label: 'Cloud Migration' },
      { value: 'microservices', label: 'Microservices Architecture' },
      { value: 'serverless', label: 'Serverless Infrastructure' },
      { value: 'devops', label: 'DevOps Pipeline' },
      { value: 'kubernetes', label: 'Kubernetes Cluster' },
      { value: 'database', label: 'Database Infrastructure' },
      { value: 'cdn', label: 'CDN & Edge Network' },
    ];
  }

  if (serviceTypeLower.includes('interface') || serviceTypeLower.includes('ui')) {
    return [
      { value: 'ui-design', label: 'UI/UX Design' },
      { value: 'design-system', label: 'Design System' },
      { value: 'dashboard-ui', label: 'Dashboard Interface' },
      { value: 'admin-panel', label: 'Admin Panel UI' },
      { value: 'data-visualization', label: 'Data Visualization Interface' },
      { value: 'industrial-ui', label: 'Industrial Control UI' },
    ];
  }

  if (serviceTypeLower.includes('automation') || serviceTypeLower.includes('ops')) {
    return [
      { value: 'ci-cd', label: 'CI/CD Pipeline' },
      { value: 'workflow-automation', label: 'Workflow Automation' },
      { value: 'testing-automation', label: 'Testing Automation' },
      { value: 'deployment', label: 'Deployment Automation' },
      { value: 'monitoring', label: 'Monitoring & Alerting' },
      { value: 'infrastructure-as-code', label: 'Infrastructure as Code' },
    ];
  }

  // Default fallback for student projects or unknown services
  return [
    { value: 'web-app', label: 'Web Application' },
    { value: 'mobile-app', label: 'Mobile App' },
    { value: 'iot-system', label: 'IoT System' },
    { value: 'cloud-infra', label: 'Cloud Infrastructure' },
    { value: 'ui-interface', label: 'UI/Interface' },
    { value: 'automation', label: 'Automation' },
  ];
};

export const getProjectTypeSchema = (serviceType: string) => {
  const options = getProjectTypesForService(serviceType);
  return z.enum(options.map(opt => opt.value) as [string, ...string[]]);
};

