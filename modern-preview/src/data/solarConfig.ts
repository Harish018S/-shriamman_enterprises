export const solarConfig = {
  location: 'Chennai, Tamil Nadu',
  generation: {
    low: 1400,
    typical: 1550,
    high: 1700,
    unit: 'kWh/kWp/year',
  },
  emissions: {
    factor: 0.710,
    unit: 'kgCO2/kWh',
    source: 'CEA CO2 Baseline Database Version 21.0',
  },
  tariff: {
    residential: {
      type: 'LT-IA',
      method: 'slab_based',
      energyRate: null,
    },
    commercial: {
      type: 'LT-V',
      energyRate: 10.45,
    },
    industrial: {
      type: 'LT-III-B',
      energyRate: 8.25,
    },
  },
  selfConsumption: {
    low: 0.70,
    typical: 0.80,
    high: 0.90,
  },
  panel: {
    wattage: null,
    source: null,
  },
  projectCost: {
    low: null,
    typical: null,
    high: null,
  },
  propertyGenerationFactor: {
    Residential: 0.95,
    Commercial: 1,
    Industrial: 1.05,
  },
} as const
