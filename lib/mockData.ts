const activities = [
  'Asset deployment confirmed in sector 7',
  'Secure channel established with operative Alpha',
  'Intelligence packet received from source Bravo',
  'Threat vector analyzed in region Echo',
  'Operation status updated to active',
  'Network ping successful',
  'Alert: Anomalous activity detected',
  'Data encryption complete',
  'Surveillance feed online',
  'Extraction protocol initiated',
];

const regions = ['Europe', 'Asia', 'North America', 'Middle East', 'Africa'];
const alerts = ['Cyber Intrusion', 'Physical Breach', 'Comms Blackout', 'Asset Compromise'];

export const generateMockStats = () => ({
  operations: Math.floor(Math.random() * 20) + 30,
  assets: Math.floor(Math.random() * 50) + 100,
  channels: Math.floor(Math.random() * 30) + 60,
  threatLevel: ['LOW', 'MEDIUM', 'HIGH'][Math.floor(Math.random() * 3)],
});

export const generateMockActivity = () => {
  const now = new Date();
  return {
    id: Date.now(),
    timestamp: now.toLocaleTimeString(),
    message: activities[Math.floor(Math.random() * activities.length)],
    status: ['success', 'warning', 'error'][Math.floor(Math.random() * 3)] as 'success' | 'warning' | 'error',
  };
};

export const generateMockThreats = () => ({
  risk: Math.floor(Math.random() * 100),
  regions: Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () => regions[Math.floor(Math.random() * regions.length)]),
  alerts: Array.from({ length: Math.floor(Math.random() * 2) + 1 }, () => alerts[Math.floor(Math.random() * alerts.length)]),
});

export const generateMockChartData = (count: number = 20) => {
  const data = [];
  const baseTime = Date.now();
  for (let i = 0; i < count; i++) {
    data.push({
      time: new Date(baseTime - (count - i) * 3000).toLocaleTimeString(),
      value: Math.floor(Math.random() * 100),
    });
  }
  return data;
};
