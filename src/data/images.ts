export type SiteImage = {
  id: string
  section: string
  imagePath: string
  altText: string
  imageType: 'stock' | 'generated' | 'manufacturer'
  source: string
  license: string
  isRepresentative: boolean
}

const unsplash = (id: string, width: number, quality = 82) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=${quality}`

export const siteImages: Record<string, SiteImage> = {
  hero: {
    id: 'hero-energy-facility', section: 'Hero', imagePath: unsplash('photo-1532601224476-15c79f2f7a51', 1400), altText: 'Commercial rooftop solar installation beside industrial power infrastructure', imageType: 'stock', source: 'Unsplash', license: 'Unsplash License', isRepresentative: true,
  },
  generator: {
    id: 'industrial-generator', section: 'Power solutions', imagePath: unsplash('photo-1581092160607-ee22621dd758', 1000), altText: 'Industrial generator and electrical power equipment in a facility', imageType: 'stock', source: 'Unsplash', license: 'Unsplash License', isRepresentative: true,
  },
  solar: {
    id: 'commercial-solar-rooftop', section: 'Solar energy', imagePath: unsplash('photo-1509391366360-2e959784a276', 1000), altText: 'Commercial rooftop solar panels arranged across an industrial building', imageType: 'stock', source: 'Unsplash', license: 'Unsplash License', isRepresentative: true,
  },
  hybrid: {
    id: 'hybrid-power-facility', section: 'Hybrid power', imagePath: unsplash('photo-1497435334941-8c899ee9e8e9', 1200), altText: 'Large solar installation in an energy facility representing integrated power planning', imageType: 'stock', source: 'Unsplash', license: 'Unsplash License', isRepresentative: true,
  },
  inverter: {
    id: 'commercial-inverter', section: 'Solar inverter', imagePath: unsplash('photo-1559302504-64aae6ca6b6d', 800), altText: 'Representative commercial photovoltaic inverter and solar installation', imageType: 'stock', source: 'Unsplash', license: 'Unsplash License', isRepresentative: true,
  },
  battery: {
    id: 'battery-storage', section: 'Battery storage', imagePath: unsplash('photo-1473341304170-971dccb5ac1e', 800), altText: 'Representative energy infrastructure for battery storage planning', imageType: 'stock', source: 'Unsplash', license: 'Unsplash License', isRepresentative: true,
  },
  panel: {
    id: 'electrical-panel', section: 'Electrical panels', imagePath: unsplash('photo-1621905252507-b35492cc74b4', 800), altText: 'Technician inspecting electrical equipment in an industrial setting', imageType: 'stock', source: 'Unsplash', license: 'Unsplash License', isRepresentative: true,
  },
  stabilizer: {
    id: 'industrial-stabilizer', section: 'Stabilizers', imagePath: unsplash('photo-1581093458791-9d42e3c8f6e8', 800), altText: 'Representative industrial voltage conditioning equipment in an electrical room', imageType: 'stock', source: 'Unsplash', license: 'Unsplash License', isRepresentative: true,
  },
  pump: {
    id: 'solar-water-pump', section: 'Solar water pumps', imagePath: unsplash('photo-1500382017468-9049fed747ef', 800), altText: 'Agricultural field representing a solar water pumping application', imageType: 'stock', source: 'Unsplash', license: 'Unsplash License', isRepresentative: true,
  },
  streetLight: {
    id: 'solar-street-light', section: 'Solar street lights', imagePath: unsplash('photo-1519501025264-65ba15a82390', 800), altText: 'Outdoor road and infrastructure lighting environment', imageType: 'stock', source: 'Unsplash', license: 'Unsplash License', isRepresentative: true,
  },
  mounting: {
    id: 'solar-mounting', section: 'Mounting structures', imagePath: unsplash('photo-1592833159155-c62df1b65634', 800), altText: 'Solar modules mounted on a structured commercial rooftop', imageType: 'stock', source: 'Unsplash', license: 'Unsplash License', isRepresentative: true,
  },
  industryManufacturing: {
    id: 'industry-manufacturing', section: 'Industries', imagePath: unsplash('photo-1565793298595-6a879b1d9492', 900), altText: 'Modern manufacturing facility with industrial power infrastructure', imageType: 'stock', source: 'Unsplash', license: 'Unsplash License', isRepresentative: true,
  },
  industryCommercial: {
    id: 'industry-commercial', section: 'Industries', imagePath: unsplash('photo-1486406146926-c627a92ad1ab', 900), altText: 'Commercial office building representing business energy requirements', imageType: 'stock', source: 'Unsplash', license: 'Unsplash License', isRepresentative: true,
  },
  industryHealthcare: {
    id: 'industry-healthcare', section: 'Industries', imagePath: unsplash('photo-1586773860418-d37222d8fce3', 900), altText: 'Hospital building representing critical power requirements', imageType: 'stock', source: 'Unsplash', license: 'Unsplash License', isRepresentative: true,
  },
  industryAgriculture: {
    id: 'industry-agriculture', section: 'Industries', imagePath: unsplash('photo-1625246333195-78d9c38ad449', 900), altText: 'Agricultural field representing solar pumping and farm energy applications', imageType: 'stock', source: 'Unsplash', license: 'Unsplash License', isRepresentative: true,
  },
  services: {
    id: 'service-engineering', section: 'Services', imagePath: unsplash('photo-1581092795360-fd1ca04f0952', 1000), altText: 'Engineer working on technical power equipment in an industrial environment', imageType: 'stock', source: 'Unsplash', license: 'Unsplash License', isRepresentative: true,
  },
  rfq: {
    id: 'rfq-planning', section: 'Request a quote', imagePath: unsplash('photo-1454165804606-c3d57bc86e40', 1000), altText: 'Technical project planning documents for a power solution enquiry', imageType: 'stock', source: 'Unsplash', license: 'Unsplash License', isRepresentative: true,
  },
  about: {
    id: 'about-power-infrastructure', section: 'About', imagePath: unsplash('photo-1473341304170-971dccb5ac1e', 1000), altText: 'Power infrastructure representing engineering and energy services', imageType: 'stock', source: 'Unsplash', license: 'Unsplash License', isRepresentative: true,
  },
  assistant: {
    id: 'assistant-engineering', section: 'Power Assistant', imagePath: unsplash('photo-1581091226825-a6a2a5aee158', 700), altText: 'Technician working with electrical equipment during an engineering inspection', imageType: 'stock', source: 'Unsplash', license: 'Unsplash License', isRepresentative: true,
  },
}

export const productImageByCategory: Record<string, SiteImage> = {
  'Diesel Generators': siteImages.generator,
  'Solar PV Modules': siteImages.solar,
  'Solar Inverters': siteImages.inverter,
  'Battery Energy Storage Systems': siteImages.battery,
  'Electrical Panels': siteImages.panel,
  Stabilizers: siteImages.stabilizer,
  'Solar Water Pumps': siteImages.pump,
  'Solar Street Lights': siteImages.streetLight,
  'Solar Mounting Structures': siteImages.mounting,
  'Hybrid Solar + Generator Systems': siteImages.hybrid,
}
