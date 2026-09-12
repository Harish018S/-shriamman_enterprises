import { useState } from 'react'
import type { FormEvent } from 'react'
import { Bot, LoaderCircle, MessageCircle, Send, X } from 'lucide-react'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

const initialMessage: ChatMessage = {
  role: 'assistant',
  content: 'Hello. I can help with solar, generator, electrical panel, and service enquiries. What are you planning?',
}

export function ChatBox() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage])
  const [isSending, setIsSending] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmedMessage = message.trim()

    if (!trimmedMessage || isSending) return

    const nextMessages = [...messages, { role: 'user' as const, content: trimmedMessage }]
    setMessages(nextMessages)
    setMessage('')
    setIsSending(true)

    try {
      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      })
      const data = await response.json() as { reply?: string; error?: string }

      if (!response.ok || !data.reply) {
        throw new Error(data.error || 'The chat service is unavailable.')
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        { role: 'assistant', content: data.reply as string },
      ])
    } catch {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: 'assistant',
          content: 'The assistant is not connected yet. Please use Request a Quote or Contact us and our team will help you directly.',
        },
      ])
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="chat-widget">
      {isOpen && (
        <section className="chat-panel" aria-label="AI assistant">
          <div className="chat-header">
            <div className="chat-title">
              <span className="chat-avatar"><Bot size={18} /></span>
              <span>
                <strong>Power assistant</strong>
                <small>Solar and generator guidance</small>
              </span>
            </div>
            <button type="button" className="chat-close" onClick={() => setIsOpen(false)} aria-label="Close chat">
              <X size={19} />
            </button>
          </div>

          <div className="chat-messages" aria-live="polite">
            {messages.map((item, index) => (
              <div className={`chat-message ${item.role}`} key={`${item.role}-${index}`}>
                {item.content}
              </div>
            ))}
            {isSending && (
              <div className="chat-message assistant chat-typing" aria-label="Assistant is typing">
                <LoaderCircle size={15} className="chat-spinner" /> Thinking...
              </div>
            )}
          </div>

          <form className="chat-form" onSubmit={handleSubmit}>
            <input
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Ask about your requirement..."
              aria-label="Message the power assistant"
              maxLength={500}
            />
            <button type="submit" aria-label="Send message" disabled={isSending || !message.trim()}>
              <Send size={17} />
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        className="chat-launcher"
        onClick={() => setIsOpen((value) => !value)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close AI chat' : 'Open AI chat'}
      >
        {isOpen ? <X size={23} /> : <MessageCircle size={23} />}
        <span>{isOpen ? 'Close' : 'Ask us'}</span>
      </button>
    </div>
  )
}