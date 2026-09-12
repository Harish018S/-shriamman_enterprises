import { products, type Product } from '../../src/data/products'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

const typoMap: Record<string, string> = {
  disel: 'diesel',
  genrator: 'generator',
  genrators: 'generators',
  efficency: 'efficiency',
  availble: 'available',
  specifcation: 'specification',
  specifcations: 'specifications',
  wight: 'weight',
}

function normalizeQuestion(question: string) {
  return question.toLowerCase().replace(/\b[a-z]+\b/g, (word) => typoMap[word] || word)
}

function findProductInContext(messages: ChatMessage[]) {
  const conversation = messages.filter((message) => message.role === 'user').map((message) => message.content).join(' ')
  const normalizedConversation = normalizeQuestion(conversation)
  return products.find((product) => {
    const modelTerms = [product.model, product.id, `${product.manufacturer} ${product.model}`]
    const specificationTerms = product.specifications.map((specification) => specification.value.toLowerCase().replace(/p\b/g, ''))
    return [...modelTerms, ...specificationTerms].some((value) => normalizedConversation.includes(value.toLowerCase()))
  })
}

function productListAnswer() {
  return 'Our reference catalogue includes Caterpillar C4.4 DE125AE0 diesel generator, Jinko Solar Tiger Neo 575 Wp module, LONGi Hi-MO 7 module family, Sungrow SG50CX-P2 inverter, BYD HVM 11.0 battery, Deye SE-G5.1 battery, Philips SunStay solar street light, Grundfos SQFlex pump family, and LORENTZ PS2-1800 pump family. Exact commercial availability is confirmed case by case.'
}

function conciseProductAnswer(product: Product, question: string) {
  const normalizedQuestion = normalizeQuestion(question)
  const fullSpecifications = /full|complete|all|technical|datasheet|specification table/.test(normalizedQuestion)
  const requestedSpec = product.specifications.find((specification) => {
    const label = specification.label.toLowerCase()
    const aliases = label.split(' / ').concat(label.split(' / ').map((part) => part.replace('maximum ', '').replace('recommended ', '')))
    return aliases.some((alias) => normalizedQuestion.includes(alias))
  })

  if (requestedSpec && !fullSpecifications) {
    return `${product.name} ${requestedSpec.label.toLowerCase()} is ${requestedSpec.value}.`
  }

  if (fullSpecifications) {
    const specificationText = product.specifications.map((specification) => `${specification.label}: ${specification.value}`).join('\n')
    return `${product.name}\nManufacturer specifications (reference):\n${specificationText}\n\n${product.verification}`
  }

  const headline = product.specifications.slice(0, 2).map((specification) => `${specification.label}: ${specification.value}`).join('; ')
  return `${product.name} is a reference product from ${product.manufacturer}. ${headline}.\n\nWould you like the full technical specifications or a quotation?`
}

function answerQuestion(question: string, messages: ChatMessage[]) {
  const normalizedQuestion = normalizeQuestion(question)
  const product = findProductInContext(messages)

  if (/\b(hello|hi|hey)\b|good morning|good evening/.test(normalizedQuestion)) {
    return 'Hello. I can help with solar systems, generators, electrical panels, stabilizers, installation, and maintenance. What do you need help with?'
  }

  if (/about (the )?company|who are you|tell me about (the )?company|shri amman|your company/.test(normalizedQuestion)) {
    return 'Shri Amman Enterprises is an established power-solutions company operating since 2005. Its core work includes diesel generator sales and service, electrical panels, stabilizers, power distribution, installation, maintenance, and AMC support. The company is expanding its capabilities into solar PV, battery storage, solar EPC, solar water pumping, solar street lighting, hybrid solar + generator systems, and solar O&M for commercial and industrial requirements.'
  }

  if (/all products|product list|what products|which products|available products|what .* available/.test(normalizedQuestion)) {
    return productListAnswer()
  }

  if (/price|cost|quote|quotation|estimate|how much/.test(normalizedQuestion)) {
    return 'Pricing depends on the product, quantity, destination, delivery terms, and current availability. I can help you prepare a quotation request with the product, quantity, destination, and technical requirement.'
  }

  if (/stock|how many units|in stock|availability/.test(normalizedQuestion)) {
    return 'Current availability is subject to confirmation. Please share the product or model, quantity, destination, and required delivery date for a sales enquiry.'
  }

  if (/full|complete|technical|datasheet|specification/.test(normalizedQuestion) && !product) {
    return 'Which product or model would you like the technical specifications for? You can ask about the Caterpillar generator, Jinko or LONGi panels, Sungrow inverter, BYD or Deye battery, Philips street light, or a solar pump family.'
  }

  if (product) {
    return conciseProductAnswer(product, question)
  }

  if (/hybrid|solar.*battery.*generator|battery.*generator.*solar/.test(normalizedQuestion)) {
    return 'A hybrid solar + battery + generator system should be sized from the location, peak load, daily consumption, critical loads, backup duration, generator requirement, roof or land area, and delivery timeline. I can start a quotation request with those details.'
  }

  if (/generator|genset|dg set|backup power|diesel/.test(normalizedQuestion)) {
    if (/available|product|model|which|what|size/.test(normalizedQuestion)) {
      return 'The listed reference diesel generator is the Caterpillar C4.4 DE125AE0, rated at 100 kVA prime power and 110 kVA standby power. Generator capacity bands are 5-25, 30-100, 125-500, and 500-1,000+ kVA. Current options and commercial terms are confirmed case by case.'
    }
    return 'We support generator sourcing, supply, installation, electrical integration, commissioning, preventive maintenance, breakdown support, and AMC. Please share your required kVA, application, voltage, frequency, phase, destination, and quantity.'
  }

  if (/street solar|solar street|street light|solar lighting/.test(normalizedQuestion)) {
    return 'The catalogue includes the Philips / Signify SunStay BRP710 LED20 as a manufacturer reference product. It provides 2,000 lm at 175 lm/W. Ask for its full reference specifications or prepare a quotation for the required lighting class and site.'
  }

  if (/solar panel|pv module|solar module|panel wattage/.test(normalizedQuestion)) {
    return 'The catalogue includes Jinko Solar Tiger Neo 575 Wp and the LONGi Hi-MO 7 585-620 W reference family. Ask about a named model or wattage for a concise specification answer. Exact commercial availability is confirmed case by case.'
  }

  if (/inverter/.test(normalizedQuestion)) {
    return 'The catalogue includes the Sungrow SG50CX-P2 as a 50 kW three-phase string inverter reference product. Ask for its efficiency, MPPT count, or full reference specifications.'
  }

  if (/battery|energy storage|ess/.test(normalizedQuestion)) {
    return 'The catalogue includes BYD HVM 11.0 and Deye SE-G5.1 as manufacturer reference battery products. Ask about capacity, chemistry, cycle life, or a specific model. Compatibility and availability are confirmed case by case.'
  }

  if (/pump|water pumping/.test(normalizedQuestion)) {
    return 'The catalogue includes the Grundfos SQFlex and LORENTZ PS2-1800 solar pump families. Selection depends on required flow, head, water source, and solar availability.'
  }

  if (/purifier|water purifier|ro purifier/.test(normalizedQuestion)) {
    return 'Water purifiers are not currently listed in the product catalogue. I can help with solar water pumps, solar systems, generators, panels, stabilizers, and electrical solutions.'
  }

  if (/solar|panel|rooftop|epc|inverter|bifacial|topcon/.test(normalizedQuestion)) {
    return 'We support rooftop, commercial, industrial, and ground-mounted solar projects, including PV modules, inverters, battery storage, EPC, installation, commissioning, hybrid systems, and O&M. Please share your location, facility type, monthly consumption, roof or land area, and timeline.'
  }

  if (/service|maintenance|amc|repair|breakdown|support/.test(normalizedQuestion)) {
    return 'Our services include installation, commissioning, preventive maintenance, breakdown support, AMC, and technical assistance for power and solar systems. Please share the equipment, issue, location, and preferred service date.'
  }

  if (/product|specification|model|capacity|rating|weight|efficiency/.test(normalizedQuestion)) {
    return `${productListAnswer()} Ask about a named model for a concise reference answer, or ask for full specifications when you need the technical table.`
  }

  return 'I can help with products, solar, generators, electrical panels, stabilizers, hybrid systems, installation, maintenance, and RFQ preparation. Please describe the requirement, product, model, capacity, or application.'
}

export default async (request: Request) => {
  if (request.method !== 'POST') return Response.json({ error: 'Method not allowed' }, { status: 405 })

  try {
    const body = await request.json() as { messages?: ChatMessage[] }
    const messages = Array.isArray(body.messages)
      ? body.messages.filter((item) => (item.role === 'user' || item.role === 'assistant') && typeof item.content === 'string' && item.content.length <= 1000).slice(-12)
      : []

    if (!messages.length) return Response.json({ error: 'A message is required.' }, { status: 400 })

    const latestQuestion = messages.filter((item) => item.role === 'user').at(-1)?.content || ''
    return Response.json({ reply: answerQuestion(latestQuestion, messages) })
  } catch {
    return Response.json({ error: 'Unable to process the chat request.' }, { status: 500 })
  }
}
