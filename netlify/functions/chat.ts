type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

function answerQuestion(question: string) {
  const normalizedQuestion = question.toLowerCase()

  if (/hello|hi|hey|good morning|good evening/.test(normalizedQuestion)) {
    return 'Hello. I can help with solar systems, generators, electrical panels, stabilizers, installation, and maintenance. What do you need help with?'
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