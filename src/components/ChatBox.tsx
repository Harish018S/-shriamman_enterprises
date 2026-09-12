import { useState } from 'react'
import type { FormEvent } from 'react'
import { Bot, ClipboardList, LoaderCircle, MessageCircle, Send, X } from 'lucide-react'
import { products } from '../data/products'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

type RfqState = {
  name: string
  company: string
  email: string
  phone: string
  country: string
  product: string
  quantity: string
  destination: string
  deliveryDate: string
  certification: string
  incoterm: string
}

const initialMessage: ChatMessage = {
  role: 'assistant',
  content: 'Hello. I can help with solar systems, generators, electrical panels, stabilizers, installation, and maintenance. What do you need help with?',
}

const initialRfq: RfqState = {
  name: '', company: '', email: '', phone: '', country: '', product: '', quantity: '', destination: '', deliveryDate: '', certification: '', incoterm: 'Not decided',
}

export function ChatBox() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage])
  const [isSending, setIsSending] = useState(false)
  const [showRfq, setShowRfq] = useState(false)
  const [rfq, setRfq] = useState<RfqState>(initialRfq)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmedMessage = message.trim()
    if (!trimmedMessage || isSending) return

    const nextMessages = [...messages, { role: 'user' as const, content: trimmedMessage }]
    setMessages(nextMessages)
    setMessage('')

    if (/\b(need|want|request|prepare|send)\b.*\b(quote|quotation|rfq|pricing)\b|\bquote\b|\bquotation\b|\brfq\b/i.test(trimmedMessage)) {
      openRfqFromConversation(nextMessages, trimmedMessage)
      setMessages((currentMessages) => [...currentMessages, { role: 'assistant', content: 'I can prepare the quotation request. Please complete the RFQ fields below so the team has the product, quantity, destination, and delivery details.' }])
      return
    }

    const quantityMatch = trimmedMessage.match(/\b(\d+)\s*(?:numbers?|units?|pieces?|pcs?)\b/i)
    if (quantityMatch) {
      setRfq((current) => ({ ...current, quantity: quantityMatch[1] }))
      setMessages((currentMessages) => [...currentMessages, { role: 'assistant', content: `Noted: quantity ${quantityMatch[1]}. Say “request a quote” when you are ready to provide the destination and contact details.` }])
      return
    }

    setIsSending(true)

    try {
      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      })
      const data = await response.json() as { reply?: string; error?: string }
      if (!response.ok || !data.reply) throw new Error(data.error || 'The chat service is unavailable.')
      setMessages((currentMessages) => [...currentMessages, { role: 'assistant', content: data.reply as string }])
    } catch {
      setMessages((currentMessages) => [...currentMessages, {
        role: 'assistant',
        content: 'The assistant is not connected yet. Please use Request a Quote or Contact us and our team will help you directly.',
      }])
    } finally {
      setIsSending(false)
    }
  }

  function updateRfq(field: keyof RfqState, value: string) {
    setRfq((current) => ({ ...current, [field]: value }))
  }

  function openRfqFromConversation(conversation: ChatMessage[], question: string) {
    const conversationText = conversation.map((item) => item.content).join(' ').toLowerCase()
    const selectedProduct = products.find((product) => [product.name, product.manufacturer, product.model].some((term) => conversationText.includes(term.toLowerCase())))
    const quantity = question.match(/\b(\d+)\s*(?:numbers?|units?|pieces?|pcs?)\b/i)?.[1] || ''
    setRfq((current) => ({
      ...current,
      product: selectedProduct ? `${selectedProduct.manufacturer} ${selectedProduct.model}` : current.product,
      quantity: quantity || current.quantity,
    }))
    setShowRfq(true)
  }

  function handleRfqSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const reference = `RFQ-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`
    setShowRfq(false)
    setMessages((currentMessages) => [...currentMessages, {
      role: 'assistant',
      content: `${reference} prepared. Your enquiry for ${rfq.product || 'the selected requirement'} has been captured in this preview. The team still needs a connected email or CRM endpoint to receive it.`,
    }])
  }

  return (
    <div className="chat-widget">
      {isOpen && (
        <section className="chat-panel" aria-label="AI assistant">
          <div className="chat-header">
            <div className="chat-title">
              <span className="chat-avatar"><Bot size={18} /></span>
              <span><strong>Power Assistant</strong><small>Solar and generator guidance</small></span>
            </div>
            <div className="chat-header-actions">
              <button type="button" className="chat-rfq-button" onClick={() => setShowRfq((value) => !value)} aria-label="Start a request for quotation"><ClipboardList size={16} /> RFQ</button>
              <button type="button" className="chat-close" onClick={() => setIsOpen(false)} aria-label="Close chat"><X size={19} /></button>
            </div>
          </div>

          {showRfq ? (
            <form className="chat-rfq-form" onSubmit={handleRfqSubmit}>
              <strong>Request a quotation</strong>
              <p>Share the essentials. The sales team can confirm the remaining details.</p>
              <input required placeholder="Your name" value={rfq.name} onChange={(event) => updateRfq('name', event.target.value)} />
              <input required placeholder="Company name" value={rfq.company} onChange={(event) => updateRfq('company', event.target.value)} />
              <input required type="email" placeholder="Email" value={rfq.email} onChange={(event) => updateRfq('email', event.target.value)} />
              <input required placeholder="Phone" value={rfq.phone} onChange={(event) => updateRfq('phone', event.target.value)} />
              <input required placeholder="Country / city" value={rfq.country} onChange={(event) => updateRfq('country', event.target.value)} />
              <input required placeholder="Product or model" value={rfq.product} onChange={(event) => updateRfq('product', event.target.value)} />
              <div className="chat-rfq-two-col"><input required type="number" min="1" placeholder="Quantity" value={rfq.quantity} onChange={(event) => updateRfq('quantity', event.target.value)} /><input placeholder="Destination" value={rfq.destination} onChange={(event) => updateRfq('destination', event.target.value)} /></div>
              <div className="chat-rfq-two-col"><input type="date" value={rfq.deliveryDate} onChange={(event) => updateRfq('deliveryDate', event.target.value)} /><select value={rfq.incoterm} onChange={(event) => updateRfq('incoterm', event.target.value)}><option>Not decided</option><option>EXW</option><option>FCA</option><option>FOB</option><option>CIF</option><option>DAP</option><option>DDP</option></select></div>
              <input placeholder="Certification requirement (optional)" value={rfq.certification} onChange={(event) => updateRfq('certification', event.target.value)} />
              <button type="submit" className="chat-rfq-submit">Prepare RFQ</button>
            </form>
          ) : (
            <>
              <div className="chat-messages" aria-live="polite">
                {messages.map((item, index) => <div className={`chat-message ${item.role}`} key={`${item.role}-${index}`}>{item.content}</div>)}
                {isSending && <div className="chat-message assistant chat-typing" aria-label="Assistant is typing"><LoaderCircle size={15} className="chat-spinner" /> Thinking...</div>}
              </div>
              <form className="chat-form" onSubmit={handleSubmit}>
                <input value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Ask about your requirement..." aria-label="Message the power assistant" maxLength={500} />
                <button type="submit" aria-label="Send message" disabled={isSending || !message.trim()}><Send size={17} /></button>
              </form>
            </>
          )}
        </section>
      )}

      <button type="button" className="chat-launcher" onClick={() => setIsOpen((value) => !value)} aria-expanded={isOpen} aria-label={isOpen ? 'Close AI chat' : 'Open AI chat'}>
        {isOpen ? <X size={23} /> : <MessageCircle size={23} />}
        <span>{isOpen ? 'Close' : 'Ask us'}</span>
      </button>
    </div>
  )
}
