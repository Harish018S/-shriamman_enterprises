import { useState } from 'react'

type QuoteFormState = {
  name: string
  companyName: string
  designation: string
  email: string
  phone: string
  location: string
  requirementType: string
  projectType: string
  capacity: string
  expectedDate: string
  message: string
}

const initialState: QuoteFormState = {
  name: '',
  companyName: '',
  designation: '',
  email: '',
  phone: '',
  location: '',
  requirementType: 'Solar Panels',
  projectType: 'New Project',
  capacity: 'Not decided',
  expectedDate: '',
  message: '',
}

export function QuoteForm() {
  const [form, setForm] = useState<QuoteFormState>(initialState)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
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
    <form className="rfq-form" onSubmit={handleSubmit}>
      <div className="form-grid two-col">
        <label>
          <span>Name *</span>
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          <span>Company Name *</span>
          <input name="companyName" value={form.companyName} onChange={handleChange} required />
        </label>
        <label>
          <span>Designation</span>
          <input name="designation" value={form.designation} onChange={handleChange} />
        </label>
        <label>
          <span>Email *</span>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          <span>Phone *</span>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
        </label>
        <label>
          <span>Location *</span>
          <input name="location" value={form.location} onChange={handleChange} required />
        </label>
      </div>

      <div className="form-grid two-col">
        <label>
          <span>Requirement Type *</span>
          <select name="requirementType" value={form.requirementType} onChange={handleChange}>
            <option>Solar Panels</option>
            <option>Complete Solar System</option>
            <option>Rooftop Solar</option>
            <option>Industrial Solar</option>
            <option>Commercial Solar</option>
            <option>Generator</option>
            <option>Generator Service</option>
            <option>Solar O&M</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          <span>Project Type</span>
          <select name="projectType" value={form.projectType} onChange={handleChange}>
            <option>New Project</option>
            <option>Expansion</option>
            <option>Replacement</option>
            <option>Procurement Only</option>
            <option>Service</option>
          </select>
        </label>
        <label>
          <span>Estimated Capacity</span>
          <select name="capacity" value={form.capacity} onChange={handleChange}>
            <option>Not decided</option>
            <option>&lt;50 kW</option>
            <option>50–100 kW</option>
            <option>100–500 kW</option>
            <option>500 kW–1 MW</option>
            <option>1 MW+</option>
            <option>Custom</option>
          </select>
        </label>
        <label>
          <span>Expected Requirement Date</span>
          <input type="date" name="expectedDate" value={form.expectedDate} onChange={handleChange} />
        </label>
      </div>

      <label>
        <span>Message / Requirement Details</span>
        <textarea name="message" value={form.message} onChange={handleChange} rows={6} />
      </label>

      <label className="upload-label">
        <span>Upload Technical Specification / BOQ / RFQ</span>
        <input type="file" />
      </label>

      <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
        Submit Enquiry
      </button>

      {submitted ? (
        <div className="success-message" role="status">
          Your enquiry has been captured successfully. Our team will connect with you shortly.
        </div>
      ) : null}
    </form>
  )
}
