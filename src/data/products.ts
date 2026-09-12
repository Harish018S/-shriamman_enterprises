export type ProductCategory =
  | 'Diesel Generators'
  | 'Solar PV Modules'
  | 'Solar Inverters'
  | 'Battery Energy Storage Systems'
  | 'Electrical Panels'
  | 'Stabilizers'
  | 'Solar Water Pumps'
  | 'Solar Street Lights'
  | 'Solar Mounting Structures'
  | 'Hybrid Solar + Generator Systems'

type Specification = {
  label: string
  value: string
}

export type Product = {
  id: string
  category: ProductCategory
  segment: string
  name: string
  manufacturer: string
  model: string
  summary: string
  application: string
  verification: string
  source: string
  specifications: Specification[]
  commercialNote: string
}

export const productCategories: { label: ProductCategory; description: string }[] = [
  { label: 'Diesel Generators', description: 'Generator capacity bands for backup and prime-power requirements.' },
  { label: 'Solar PV Modules', description: 'Reference module technologies for residential, commercial, and industrial projects.' },
  { label: 'Solar Inverters', description: 'Grid-connected and three-phase inverter options subject to system design.' },
  { label: 'Battery Energy Storage Systems', description: 'Modular LFP storage options for backup and hybrid applications.' },
  { label: 'Electrical Panels', description: 'Panel categories for organized power distribution and control.' },
  { label: 'Stabilizers', description: 'Requirement-led voltage stabilization for electrical equipment.' },
  { label: 'Solar Water Pumps', description: 'Pump families selected by flow, head, water source, and solar availability.' },
  { label: 'Solar Street Lights', description: 'Solar lighting products for outdoor and infrastructure applications.' },
  { label: 'Solar Mounting Structures', description: 'Rooftop and ground-mount structure planning, subject to engineering.' },
  { label: 'Hybrid Solar + Generator Systems', description: 'Indicative solar, battery, and generator combinations for site assessment.' },
]

export const productSegments = {
  generators: ['Small: 5-25 kVA', 'Commercial: 30-100 kVA', 'Industrial: 125-500 kVA', 'Large Industrial: 500-1,000+ kVA'],
  modules: ['Residential: 450-550 Wp', 'Commercial: 550-620 Wp', 'Industrial: 570-650+ Wp'],
  inverters: ['Residential: 3-10 kW', 'Small Commercial: 10-30 kW', 'Commercial: 30-60 kW', 'Industrial: 75-125 kW', 'Large C&I: 150-350 kW+'],
  storage: ['Residential: 5-20 kWh', 'Small Commercial: 20-50 kWh', 'Commercial: 50-100 kWh', 'Industrial: 100 kWh+'],
  pumps: ['Small agricultural: 0.75-2.5 kW', 'Medium: 2.5-7.5 kW', 'Larger systems: 7.5 kW+'],
  stabilizers: ['Small: 1-10 kVA', 'Commercial: 10-50 kVA', 'Industrial: 50-500 kVA', 'Large: 500 kVA+'],
}

export const products: Product[] = [
  {
    id: 'cat-c44-de125ae0',
    category: 'Diesel Generators',
    segment: 'Commercial: 30-100 kVA',
    name: 'Caterpillar C4.4 diesel generator set',
    manufacturer: 'Caterpillar',
    model: 'DE125AE0',
    summary: 'Reference generator set rated at 100 kVA prime power and 110 kVA standby power.',
    application: 'Commercial and industrial backup or prime-power requirements.',
    verification: 'Manufacturer reference specification supplied for this catalogue. Commercial supply, stock, and dealership status are not confirmed.',
    source: 'Caterpillar official product information supplied for this project.',
    commercialNote: 'Current availability, pricing, warranty, and delivery terms: Available on request.',
    specifications: [
      { label: 'Prime power', value: '100 kVA / 80 kW' },
      { label: 'Standby power', value: '110 kVA / 88 kW' },
      { label: 'Voltage', value: '220-380 V' },
      { label: 'Phase', value: 'Available on request for the selected configuration' },
      { label: 'Frequency / speed', value: '50 Hz / 1,500 rpm' },
      { label: 'Engine manufacturer / model', value: 'Caterpillar / Cat C4.4' },
      { label: 'Cylinders / displacement', value: 'Inline 4-cylinder / 4.4 L' },
      { label: 'Aspiration / cooling', value: 'Turbocharged / Available on request' },
      { label: 'Fuel system / consumption', value: 'Direct injection / Available on request' },
      { label: 'Alternator / controller', value: 'Available on request' },
      { label: 'Noise / protection', value: 'Available on request' },
      { label: 'Dimensions / dry weight', value: '1,980 x 890 x 1,376 mm / 1,065 kg maximum' },
      { label: 'Enclosure / tank', value: 'Acoustic enclosure / single-wall 8-hour tank' },
      { label: 'ATS compatibility / certifications', value: 'Available on request' },
      { label: 'Warranty', value: 'Available on request' },
      { label: 'Commercial data', value: 'Available on request' },
    ],
  },
  {
    id: 'jinko-tiger-neo-575',
    category: 'Solar PV Modules',
    segment: 'Commercial: 550-620 Wp',
    name: 'Jinko Solar Tiger Neo N-type module',
    manufacturer: 'Jinko Solar',
    model: 'JKM575N-72HL4 / JKM575N-72HL4-V',
    summary: 'Reference 575 Wp N-type monocrystalline / TOPCon module with 22.26% efficiency.',
    application: 'Commercial and industrial rooftop or ground-mounted PV installations.',
    verification: 'Manufacturer specification reference. This does not confirm Jinko distribution rights or company stock.',
    source: 'Jinko Solar published datasheet supplied for this project.',
    commercialNote: 'Current availability, pricing, warranty, and delivery terms: Available on request.',
    specifications: [
      { label: 'Rated power', value: '575 Wp' },
      { label: 'Efficiency / cell technology', value: '22.26% / N-type monocrystalline TOPCon' },
      { label: 'Cells', value: '144 (6 x 24)' },
      { label: 'Vmp / Imp', value: '42.22 V / 13.62 A' },
      { label: 'Voc / Isc', value: '50.88 V / 14.39 A' },
      { label: 'Power tolerance', value: '0 to +3%' },
      { label: 'Maximum system voltage', value: '1,000 / 1,500 V DC depending on exact datasheet/model' },
      { label: 'Maximum series fuse / temperature coefficient', value: '25 A / Pmax -0.30%/C, Voc -0.25%/C, Isc +0.046%/C' },
      { label: 'Operating temperature / NOCT', value: '-40 to +85 C / 45 +/- 2 C' },
      { label: 'Front glass / frame / junction box', value: '3.2 mm tempered glass / anodized aluminium alloy / IP68' },
      { label: 'Connector / wind and snow load', value: '4.0 mm2 output cable / Available on request' },
      { label: 'Dimensions / weight', value: '2,278 x 1,134 x 35 mm / 28 kg' },
      { label: 'Warranty / degradation / certifications', value: 'Available on request' },
      { label: 'Commercial data', value: 'Available on request' },
    ],
  },
  {
    id: 'longi-hi-mo-7',
    category: 'Solar PV Modules',
    segment: 'Commercial: 550-620 Wp',
    name: 'LONGi Hi-MO 7 module family',
    manufacturer: 'LONGi',
    model: 'LR7-72HGD',
    summary: 'Reference 585-620 W dual-glass bifacial module family with up to 23.0% efficiency.',
    application: 'Commercial and industrial PV installations where the exact model is selected after design review.',
    verification: 'Manufacturer reference family information. The wattage range is not one single product specification.',
    source: 'LONGi published product information supplied for this project.',
    commercialNote: 'Exact model, availability, pricing, warranty, and delivery terms: Available on request.',
    specifications: [
      { label: 'Product range', value: '585-620 W versions' },
      { label: 'Maximum efficiency', value: 'Up to 23.0%' },
      { label: 'Cells / construction', value: '144 / 2.0 + 2.0 mm dual glass' },
      { label: 'Dimensions / weight', value: '2,382 x 1,134 x 30 mm / 33.5 kg for cited version' },
      { label: 'Bifaciality', value: 'Approximately 80%' },
      { label: 'Static load', value: 'Front 5,400 Pa / rear 2,400 Pa for cited version' },
      { label: 'Commercial data', value: 'Available on request' },
    ],
  },
  {
    id: 'sungrow-sg50cx-p2',
    category: 'Solar Inverters',
    segment: 'Commercial: 30-60 kW',
    name: 'Sungrow three-phase string inverter',
    manufacturer: 'Sungrow',
    model: 'SG50CX-P2',
    summary: 'Reference 50 kW three-phase string inverter with up to 98.5% maximum efficiency.',
    application: 'Commercial PV systems subject to electrical design and compatibility review.',
    verification: 'Manufacturer reference specification. This does not confirm Sungrow distribution rights or company stock.',
    source: 'Official Sungrow documentation supplied for this project.',
    commercialNote: 'Current availability, pricing, warranty, and delivery terms: Available on request.',
    specifications: [
      { label: 'Rated AC output', value: '50 kW / 50 kVA' },
      { label: 'Recommended maximum PV input', value: '70 kWp' },
      { label: 'Maximum DC voltage / MPPT range', value: '1,100 V / 160-1,000 V' },
      { label: 'Startup voltage / maximum AC output', value: '200 V / 50 kVA' },
      { label: 'MPPT / strings', value: '4 independent MPPTs / 2 strings per MPPT' },
      { label: 'Maximum input / short-circuit current', value: '30 A x 4 / 50 A x 4' },
      { label: 'AC voltage / frequency', value: '230/400 V / 50 Hz' },
      { label: 'Rated / maximum AC current', value: '72.5 A / 80.5 A' },
      { label: 'Power factor / THD', value: '>0.99 / <3%' },
      { label: 'Maximum efficiency', value: '98.5%' },
      { label: 'European efficiency / protection', value: '98.3% / DC and AC protection, SPD, AFCI, PID recovery, DC switch' },
      { label: 'IP rating / operating temperature', value: 'IP66 / -30 to +60 C' },
      { label: 'Altitude / cooling / communication', value: '4,000 m / smart forced-air / RS485, optional WLAN/Ethernet' },
      { label: 'Dimensions / weight / certifications', value: '645 x 575 x 245 mm / 41 kg / Available on request' },
      { label: 'Warranty', value: 'Available on request' },
      { label: 'Commercial data', value: 'Available on request' },
    ],
  },
  {
    id: 'byd-hvm-11',
    category: 'Battery Energy Storage Systems',
    segment: 'Residential / small commercial reference',
    name: 'BYD Battery-Box Premium HVM',
    manufacturer: 'BYD Energy Storage',
    model: 'HVM 11.0',
    summary: 'Reference modular LFP battery system with 11.04 kWh usable energy.',
    application: 'Energy storage and hybrid system applications subject to inverter compatibility review.',
    verification: 'Manufacturer reference specification. This does not confirm BYD distribution rights or company stock.',
    source: 'BYD product information supplied for this project.',
    commercialNote: 'Current availability, pricing, warranty, and delivery terms: Available on request.',
    specifications: [
      { label: 'Usable energy', value: '11.04 kWh' },
      { label: 'Battery modules', value: '4 modules, 2.76 kWh each' },
      { label: 'Chemistry', value: 'Lithium iron phosphate (LFP)' },
      { label: 'Nominal system voltage', value: '204.8 V' },
      { label: 'Output current', value: '50 A maximum / 75 A peak for 3 seconds' },
      { label: 'Commercial data', value: 'Available on request' },
    ],
  },
  {
    id: 'deye-se-g5-1',
    category: 'Battery Energy Storage Systems',
    segment: 'Residential: 5-20 kWh',
    name: 'Deye LiFePO4 ESS battery',
    manufacturer: 'Deye',
    model: 'SE-G5.1',
    summary: 'Reference 5.12 kWh nominal LiFePO4 battery with modular parallel scalability.',
    application: 'Residential and small hybrid storage applications subject to system compatibility review.',
    verification: 'Manufacturer reference specification. This does not confirm Deye dealership or company stock.',
    source: 'Deye published product information supplied for this project.',
    commercialNote: 'Current availability, pricing, warranty, and delivery terms: Available on request.',
    specifications: [
      { label: 'Chemistry / energy', value: 'LiFePO4 / 5.12 kWh nominal' },
      { label: 'Nominal voltage / capacity', value: '51.2 V / 100 Ah' },
      { label: 'Operating voltage / scalability', value: '44.8-57.6 V / up to 64 units in parallel, 327 kWh' },
      { label: 'Charge / discharge current', value: '50 A maximum continuous for both' },
      { label: 'Peak current / recommended DoD', value: '100 A for 10 seconds / 80%' },
      { label: 'Cycle life / BMS', value: 'At least 6,000 cycles under cited conditions / integrated BMS' },
      { label: 'Communication', value: 'CAN 2.0 / RS485' },
      { label: 'Dimensions / weight', value: '440 x 540 x 133 mm / approximately 44 kg' },
      { label: 'IP rating / installation', value: 'IP20 / floor-stacked, wall-mounted, or rack-mounted' },
      { label: 'Operating temperature', value: 'Charge 0-55 C / discharge -20 to +55 C' },
      { label: 'Warranty', value: '5 years for cited manufacturer product page' },
      { label: 'Commercial data', value: 'Available on request' },
    ],
  },
  {
    id: 'philips-sunstay-brp710',
    category: 'Solar Street Lights',
    segment: '20 W class',
    name: 'Philips / Signify SunStay solar street light',
    manufacturer: 'Philips / Signify',
    model: 'BRP710 LED20 CW MR HY SOLAR IN',
    summary: 'Reference solar street light providing 2,000 lm at 175 lm/W.',
    application: 'Outdoor lighting and infrastructure applications subject to site and pole design.',
    verification: 'Manufacturer reference specification. This does not confirm distribution rights or company stock.',
    source: 'Philips / Signify product information supplied for this project.',
    commercialNote: 'Current availability, pricing, warranty, and delivery terms: Available on request.',
    specifications: [
      { label: 'Light output / efficacy', value: '2,000 lm / 175 lm/W' },
      { label: 'Battery / panel', value: 'LFP, 12.8 V 13.6 Ah / 28 W polycrystalline panel' },
      { label: 'CCT / lifetime', value: '5,700 K / 50,000 hours L70B50' },
      { label: 'IP / IK rating', value: 'IP65 / IK08' },
      { label: 'Warranty', value: '3 years for cited reference product' },
      { label: 'Commercial data', value: 'Available on request' },
    ],
  },
  {
    id: 'grundfos-sqflex',
    category: 'Solar Water Pumps',
    segment: 'Family reference',
    name: 'Grundfos SQFlex solar pump family',
    manufacturer: 'Grundfos',
    model: 'SQFlex family',
    summary: 'Solar-compatible pump family selected by required flow, head, water source, and solar availability.',
    application: 'Agricultural and community water pumping after model and site selection.',
    verification: 'Manufacturer family-level reference. Flow and head are model-specific and must not be treated as one universal rating.',
    source: 'Grundfos SQFlex product information supplied for this project.',
    commercialNote: 'Exact model, availability, pricing, warranty, and delivery terms: Available on request.',
    specifications: [
      { label: 'Motor size range', value: '0.3-2.5 kW' },
      { label: 'Family maximum flow / head', value: 'Up to 18 m3/h / up to 250 m' },
      { label: 'Voltage compatibility', value: '30-300 V DC / 90-240 V AC, 50/60 Hz' },
      { label: 'Enclosure / options', value: 'IP68 / 3-inch and 4-inch pump options' },
      { label: 'Selection inputs', value: 'Required flow, head, water source, and solar availability' },
      { label: 'Commercial data', value: 'Available on request' },
    ],
  },
  {
    id: 'lorentz-ps2-1800',
    category: 'Solar Water Pumps',
    segment: 'Family reference',
    name: 'LORENTZ solar pump system',
    manufacturer: 'LORENTZ',
    model: 'PS2-1800',
    summary: 'Reference solar pumping family with configuration-dependent performance.',
    application: 'Solar water pumping after flow, head, water source, and array review.',
    verification: 'Manufacturer reference specification for a cited CS-F configuration, not a universal family rating.',
    source: 'LORENTZ product information supplied for this project.',
    commercialNote: 'Exact configuration, availability, pricing, warranty, and delivery terms: Available on request.',
    specifications: [
      { label: 'Cited maximum TDH / flow', value: '50 m / 8.5 m3/h for cited CS-F configuration' },
      { label: 'Required Vmp / maximum Voc', value: '>102 V DC / 200 V DC' },
      { label: 'Nominal DC voltage', value: '72-96 V' },
      { label: 'Selection inputs', value: 'Required flow, head, water source, and solar availability' },
      { label: 'Commercial data', value: 'Available on request' },
    ],
  },
]

export const panelCategories = ['LT Distribution Panels', 'Main Distribution Boards', 'Sub-Main Distribution Boards', 'PCC Panels', 'MCC Panels', 'ACDB', 'DCDB', 'APFC Panels', 'Solar Protection Panels']
export const stabilizerCategories = ['Single-phase stabilizers', 'Three-phase stabilizers', 'Industrial stabilizers', 'Customized stabilizer solutions']
export const mountingCategories = ['RCC rooftop', 'Metal roof', 'Tile roof', 'Fixed-tilt ground mount', 'Adjustable-tilt ground mount']
export const hybridConfigurations = [
  { name: 'Small Commercial', configuration: '20 kWp solar + 20 kWh battery + 25 kVA generator' },
  { name: 'Medium Commercial', configuration: '50 kWp solar + 50 kWh battery + 62.5 kVA generator' },
  { name: 'Industrial', configuration: '100 kWp solar + 100 kWh battery + 125 kVA generator' },
  { name: 'Large Industrial', configuration: '250 kWp solar + 250 kWh battery + 250-320 kVA generator' },
  { name: 'Large C&I', configuration: '500 kWp solar + 500 kWh battery + 500 kVA+ generator' },
]

export const findProduct = (query: string) => {
  const normalized = query.toLowerCase()
  return products.find((product) => [product.name, product.manufacturer, product.model, product.id].some((value) => normalized.includes(value.toLowerCase())))
}
