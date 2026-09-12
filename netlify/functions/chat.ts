type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

function answerQuestion(question: string) {
  const normalizedQuestion = question.toLowerCase()

  if (/\b(hello|hi|hey)\b|good morning|good evening/.test(normalizedQuestion)) {
    return 'Hello. I can help with solar systems, generators, electrical panels, stabilizers, installation, and maintenance. What do you need help with?'
  }

  if (/all products|product list|what products|which products|available products/.test(normalizedQuestion)) {
    return 'Our listed products are: Caterpillar C4.4 DE125AE0 100 kVA diesel generator; Jinko Solar Tiger Neo JKM575N-72HL4 575 Wp N-type module; LONGi Hi-MO 7 LR7-72HGD up to 620 W module; Sungrow SG50CX-P2 50 kW string inverter; BYD Battery-Box Premium HVM 11.0; Deye SE-G5.1 Pro-B battery; Philips SunStay BRP710 LED20 solar street light; Grundfos SQFlex solar pump family; and LORENTZ PS2-1800 solar pump. Ask for a product name or model for its available specifications.'
  }

  if (/caterpillar|de125ae0|c4\.4|100\s*kva|110\s*kva/.test(normalizedQuestion)) {
    return 'The Caterpillar C4.4 DE125AE0 diesel generator is rated at 100 kVA (80 kW) prime power and 110 kVA (88 kW) standby power at 50 Hz. It uses an inline 4-cylinder, 4.4 L turbocharged direct-injection diesel engine, runs at 1,500 rpm, and supports 220–380 V operation. Dimensions are 1,980 × 890 × 1,376 mm, with a maximum dry weight of 1,065 kg and an acoustic enclosure.'
  }

  if (/jinko|jkm575n|575\s*wp|575w/.test(normalizedQuestion)) {
    return 'The Jinko Solar Tiger Neo JKM575N-72HL4 is a 575 Wp N-type monocrystalline module with 22.26% efficiency, 144 cells, Vmp 42.22 V, Imp 13.62 A, Voc 50.88 V, and Isc 14.39 A. It measures 2,278 × 1,134 × 35 mm, weighs 28 kg, has an IP68 junction box, and supports 1,000/1,500 V DC maximum system voltage.'
  }

  if (/longi|hi-mo 7|lr7-72hgd|620\s*w/.test(normalizedQuestion)) {
    return 'The LONGi Hi-MO 7 LR7-72HGD family includes 585–620 W versions, with up to 23.0% efficiency. The cited 620 W version has 144 cells, dimensions of 2,382 × 1,134 × 30 mm, 33.5 kg weight, IP68 junction box, dual-glass construction, and approximately 80% bifaciality. Its listed front/rear static loads are 5,400/2,400 Pa.'
  }

  if (/sungrow|sg50cx|50\s*kw|50\s*kva|string inverter/.test(normalizedQuestion)) {
    return 'The Sungrow SG50CX-P2 is a 3-phase string inverter rated at 50 kW/50 kVA. It accepts up to 1,100 V DC, supports up to 70 kWp recommended PV input, has 4 independent MPPTs with 2 strings per MPPT, and reaches 98.5% maximum efficiency. AC output is 230/400 V at 50 Hz, with IP66 protection and dimensions of 645 × 575 × 245 mm.'
  }

  if (/byd|hvm 11|11\.04\s*kwh/.test(normalizedQuestion)) {
    return 'The BYD Battery-Box Premium HVM 11.0 provides 11.04 kWh usable energy from 4 modules. It uses LFP chemistry, with 2.76 kWh per module, 204.8 V nominal system voltage, 50 A maximum output current, and 75 A peak output for 3 seconds. Weight and dimensions should be confirmed from the exact current BYD datasheet.'
  }

  if (/deye|se-g5\.1|5\.12\s*kwh/.test(normalizedQuestion)) {
    return 'The Deye SE-G5.1 Pro-B is a LiFePO4 residential ESS battery with 5.12 kWh nominal and 4.6 kWh usable energy, 51.2 V nominal voltage, 100 Ah capacity, 50 A recommended charge/discharge current, 90% recommended DoD, and at least 6,000 cycles. It measures 440 × 133 × 540 mm, weighs approximately 45 kg, and has IP20 protection.'
  }

  if (/philips|sunstay|brp710|solar street light|2,000\s*lm/.test(normalizedQuestion)) {
    return 'The Philips/Signify SunStay BRP710 LED20 solar street light provides 2,000 lm at 175 lm/W and 5,700 K. It uses a 28 W polycrystalline panel and a 12.8 V, 13.6 Ah lithium iron phosphate battery, with MPPT control, IP65 protection, 50,000-hour L70B50 life, 12.5 kg weight, and a 3-year warranty.'
  }

  if (/grundfos|sqflex|water pump|18\s*m³|250\s*m/.test(normalizedQuestion)) {
    return 'Grundfos SQFlex is a family, not one single pump model. Family-level specifications include 0.3–2.5 kW motor sizes, up to 18 m³/h flow, up to 250 m head, 30–300 V DC or 90–240 V AC compatibility, IP68 enclosure, and 3- or 4-inch pump options. Please provide required flow, head, water source, and solar availability before selecting a model.'
  }

  if (/lorentz|ps2-1800|solar pump/.test(normalizedQuestion)) {
    return 'The LORENTZ PS2-1800 family is configuration-dependent. The cited CS-F configuration supports up to 50 m total dynamic head and 8.5 m³/h maximum flow, with required Vmp above 102 V DC, maximum Voc 200 V DC, and nominal DC voltage of 72–96 V. Please provide required flow and head for correct sizing.'
  }

  if (/solar|panel|rooftop|epc|inverter|bifacial|topcon/.test(normalizedQuestion)) {
    return 'Shri Amman Enterprises supports rooftop, commercial, industrial, and ground-mounted solar projects, including procurement, EPC, installation, commissioning, and O&M. For a recommendation, please share your location, facility type, approximate monthly electricity usage, and timeline.'
  }

  if (/generator|genset|dg set|backup power|diesel/.test(normalizedQuestion)) {
    return 'We provide generator sourcing, supply, installation, electrical integration, commissioning, preventive maintenance, breakdown support, and AMC services. Please share your required load in kVA, application, location, and whether this is a new installation or replacement.'
  }

  if (/panel|stabilizer|electrical|switchgear/.test(normalizedQuestion)) {
    return 'We manufacture and supply electrical panels and stabilizers for commercial and industrial requirements. To guide you correctly, please share the equipment type, load or capacity, voltage, location, and required delivery timeline.'
  }

  if (/product|products|available|specification|specs|model|capacity|rating/.test(normalizedQuestion)) {
    return 'Our current product and solution categories are: rooftop and industrial solar systems; Mono PERC, TOPCon, bifacial, and high-efficiency solar modules; inverters; mounting structures; solar BOS components; generators and DG sets; electrical panels; and stabilizers. Exact brand, model, kW/kVA rating, voltage, dimensions, warranty, and availability depend on the project and are not published in this assistant yet. Please use Request a Quote with your required capacity and application for a verified specification sheet.'
  }

  if (/service|maintenance|amc|repair|breakdown|support/.test(normalizedQuestion)) {
    return 'Our services include installation, commissioning, preventive maintenance, breakdown support, AMC, and technical support for power and solar systems. Please share the equipment type, issue, location, and preferred service date.'
  }

  if (/price|cost|quote|quotation|estimate|contact|phone|email/.test(normalizedQuestion)) {
    return 'Project pricing depends on capacity, equipment, site conditions, and scope. Please use the Request a Quote page and include your location, application, required capacity, and timeline so the team can prepare a suitable response.'
  }

  return 'I can help with solar, generators, electrical panels, stabilizers, installation, maintenance, and AMC services. For a detailed answer, please describe your requirement or submit it through Request a Quote.'
}

export default async (request: Request) => {
  if (request.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405 })
  }

  try {
    const body = await request.json() as { messages?: ChatMessage[] }
    const messages = Array.isArray(body.messages)
      ? body.messages.filter((item) => (item.role === 'user' || item.role === 'assistant') && typeof item.content === 'string').slice(-12)
      : []

    if (!messages.length) {
      return Response.json({ error: 'A message is required.' }, { status: 400 })
    }

    const latestQuestion = messages.filter((item) => item.role === 'user').at(-1)?.content || ''
    return Response.json({ reply: answerQuestion(latestQuestion) })
  } catch {
    return Response.json({ error: 'Unable to process the chat request.' }, { status: 500 })
  }
}