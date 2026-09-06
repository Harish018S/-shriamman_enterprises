import { useState } from 'react'

type ContactFormState = {
  name: string
  company: string
  email: string
  phone: string
  message: string
}

const initialState: ContactFormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
}

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialState)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input name="name" value={form.name} onChange={handleChange} required />
      </label>
      <label>
        <span>Company</span>
        <input name="company" value={form.company} onChange={handleChange} />
      </label>
      <label>
        <span>Email</span>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />
      </label>
      <label>
        <span>Phone</span>
        <input type="tel" name="phone" value={form.phone} onChange={handleChange} />
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" value={form.message} onChange={handleChange} rows={5} required />
      </label>
      <button type="submit" className="btn btn-primary">Send Message</button>
      {submitted ? (
        <div className="success-message" role="status">
          Thanks for contacting us. We will respond shortly.
        </div>
      ) : null}
    </form>
  )
}
