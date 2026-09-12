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
    return 'Yes. The Caterpillar C4.4 DE125AE0 is rated at 100 kVA prime power and 110 kVA standby power at 50 Hz. For current price, availability, installation scope, and the full datasheet, please request a quotation.'
  }

  if (/jinko|jkm575n|575\s*wp|575\s*w\b/.test(normalizedQuestion)) {
    return 'The Jinko Solar Tiger Neo JKM575N-72HL4 has an efficiency of 22.26%.'
  }

  if (/longi|hi-mo 7|lr7-72hgd|620\s*w/.test(normalizedQuestion)) {
    return 'The LONGi Hi-MO 7 LR7-72HGD family includes 585–620 W modules with up to 23.0% efficiency and bifacial dual-glass construction. Request a quotation for the exact model, datasheet, warranty, and availability.'
  }

  if (/sungrow|sg50cx|50\s*kw|50\s*kva|string inverter/.test(normalizedQuestion)) {
    return 'The Sungrow SG50CX-P2 is a 3-phase string inverter rated at 50 kW/50 kVA, with up to 98.5% maximum efficiency. Request a quotation for the current datasheet, system compatibility, warranty, and availability.'
  }

  if (/byd|hvm 11|11\.04\s*kwh/.test(normalizedQuestion)) {
    return 'The BYD Battery-Box Premium HVM 11.0 provides 11.04 kWh usable energy using LFP chemistry. Request a quotation for compatibility, current datasheet, warranty, and availability.'
  }

  if (/deye|se-g5\.1|5\.12\s*kwh/.test(normalizedQuestion)) {
    return 'The Deye SE-G5.1 Pro-B is a LiFePO4 residential ESS battery with 5.12 kWh nominal and 4.6 kWh usable energy. Request a quotation for the exact datasheet, compatibility, warranty, and availability.'
  }

  if (/philips|sunstay|brp710|solar street light|2,000\s*lm/.test(normalizedQuestion)) {
    return 'The Philips/Signify SunStay BRP710 LED20 solar street light provides 2,000 lm at 175 lm/W. Request a quotation for the current product sheet, installation requirements, warranty, and availability.'
  }

  if (/grundfos|sqflex|water pump|18\s*m³|250\s*m/.test(normalizedQuestion)) {
    return 'Grundfos SQFlex is a family of solar-compatible pumps, not one single model. Correct selection depends on required flow, head, water source, and solar availability. Share those details for a suitable recommendation.'
  }

  if (/lorentz|ps2-1800|solar pump/.test(normalizedQuestion)) {
    return 'LORENTZ PS2-1800 is a configuration-dependent solar pump family. Correct selection depends on required flow, head, water source, and solar availability. Share those details for a suitable recommendation.'
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