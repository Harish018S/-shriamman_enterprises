type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

const systemPrompt = `You are the helpful website assistant for Shri Amman Enterprises in Chennai, India.
The company has operated since 2005 and supports commercial and industrial customers with generator sales and service, electrical panels, stabilizers, solar EPC, rooftop and industrial solar, procurement, installation, commissioning, O&M, AMC, and technical support.
Give concise, practical answers. Ask for the customer's location, application, approximate load or capacity, and timeline when that helps. Never invent prices, warranties, availability, or technical guarantees. For a detailed quote, direct the customer to the Request a Quote page or the company contact team. Keep the conversation professional and easy to understand.`

export default async (request: Request) => {
  if (request.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405 })
  }

  const apiKey = Netlify.env.get('OPENAI_API_KEY')
  if (!apiKey) {
    return Response.json({ error: 'The AI assistant is not configured yet.' }, { status: 503 })
  }

  try {
    const body = await request.json() as { messages?: ChatMessage[] }
    const messages = Array.isArray(body.messages)
      ? body.messages.filter((item) => (item.role === 'user' || item.role === 'assistant') && typeof item.content === 'string').slice(-12)
      : []

    if (!messages.length) {
      return Response.json({ error: 'A message is required.' }, { status: 400 })
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: Netlify.env.get('OPENAI_MODEL') || 'gpt-4o-mini',
        temperature: 0.4,
        max_tokens: 350,
        messages: [{ role: 'system', content: systemPrompt }, ...messages],
      }),
    })

    const data = await response.json() as { choices?: Array<{ message?: { content?: string } }> }
    const reply = data.choices?.[0]?.message?.content

    if (!response.ok || !reply) {
      return Response.json({ error: 'The AI service could not respond.' }, { status: 502 })
    }

    return Response.json({ reply })
  } catch {
    return Response.json({ error: 'Unable to process the chat request.' }, { status: 500 })
  }
}