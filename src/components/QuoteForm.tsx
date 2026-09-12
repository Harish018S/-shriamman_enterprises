import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

type QuoteFormState = Record<string, string>

const initialState: QuoteFormState = {
  name: '',
  companyName: '',
  designation: '',
  email: '',
  phone: '',
  country: 'India',
  city: '',
  requirementType: 'Solar PV Modules',
  projectType: 'New Project',
  productModel: '',
  quantity: '',
  application: '',
  requiredCapacity: '',
  voltage: '',
  frequency: '50 Hz',
  phase: 'Not decided',
  destination: '',
  deliveryLocation: '',
  requiredDate: '',
  certification: '',
  incoterm: 'Not decided',
  message: '',
}

function createRfqNumber() {
  const suffix = Math.floor(10000 + Math.random() * 90000)
  return `RFQ-${new Date().getFullYear()}-${suffix}`
}

export function QuoteForm() {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState<QuoteFormState>(() => ({ ...initialState, productModel: searchParams.get('product') || '' }))
  const [rfqNumber, setRfqNumber] = useState('')

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setRfqNumber(createRfqNumber())
  }

  if (rfqNumber) {
    return (
        <div className="rfq-confirmation" role="status">
          <span className="rfq-confirmation-mark">✓</span>
          <span className="eyebrow">Enquiry prepared</span>
          <h2>{rfqNumber}</h2>
          <p>Your requirement has been captured for the next conversation. This preview does not send email until an enquiry endpoint is connected.</p>
          <button type="button" className="btn btn-secondary" onClick={() => { setRfqNumber(''); setForm(initialState) }}>Start another enquiry</button>
        </div>
    )
  }

    return (
      <form className="rfq-form" onSubmit={handleSubmit}>
        <p className="form-note">Share what you know. Unknown technical or commercial fields can be confirmed during the enquiry.</p>
        <div className="form-grid two-col">
          <label><span>Name *</span><input name="name" value={form.name} onChange={handleChange} required /></label>
          <label><span>Company name *</span><input name="companyName" value={form.companyName} onChange={handleChange} required /></label>
          <label><span>Designation</span><input name="designation" value={form.designation} onChange={handleChange} /></label>
          <label><span>Email *</span><input type="email" name="email" value={form.email} onChange={handleChange} required /></label>
          <label><span>Phone *</span><input type="tel" name="phone" value={form.phone} onChange={handleChange} required /></label>
          <label><span>Country *</span><input name="country" value={form.country} onChange={handleChange} required /></label>
          <label><span>City / project location *</span><input name="city" value={form.city} onChange={handleChange} required /></label>
          <label><span>Destination / delivery country</span><input name="destination" value={form.destination} onChange={handleChange} /></label>
        </div>

        <div className="form-grid two-col">
          <label><span>Requirement *</span><select name="requirementType" value={form.requirementType} onChange={handleChange}><option>Diesel Generator</option><option>Solar PV Modules</option><option>Solar Inverter</option><option>Battery Energy Storage</option><option>Electrical Panels</option><option>Stabilizer</option><option>Solar Water Pump</option><option>Solar Street Light</option><option>Mounting Structure</option><option>Hybrid Solar + Generator</option><option>Service / AMC</option><option>Other</option></select></label>
          <label><span>Product / model</span><input name="productModel" value={form.productModel} onChange={handleChange} placeholder="Brand or model if known" /></label>
          <label><span>Quantity</span><input type="number" min="1" name="quantity" value={form.quantity} onChange={handleChange} placeholder="Number of units" /></label>
          <label><span>Project type</span><select name="projectType" value={form.projectType} onChange={handleChange}><option>New Project</option><option>Expansion</option><option>Replacement</option><option>Procurement Only</option><option>Service</option></select></label>
          <label><span>Required capacity</span><input name="requiredCapacity" value={form.requiredCapacity} onChange={handleChange} placeholder="kVA, kW, kWp, kWh, or flow/head" /></label>
          <label><span>Application</span><input name="application" value={form.application} onChange={handleChange} placeholder="Factory, office, pump, lighting, etc." /></label>
          <label><span>Voltage</span><input name="voltage" value={form.voltage} onChange={handleChange} placeholder="e.g. 230/400 V" /></label>
          <label><span>Frequency</span><select name="frequency" value={form.frequency} onChange={handleChange}><option>50 Hz</option><option>60 Hz</option><option>Not decided</option></select></label>
          <label><span>Phase</span><select name="phase" value={form.phase} onChange={handleChange}><option>Not decided</option><option>Single phase</option><option>Three phase</option></select></label>
          <label><span>Required delivery date</span><input type="date" name="requiredDate" value={form.requiredDate} onChange={handleChange} /></label>
          <label><span>Certification requirements</span><input name="certification" value={form.certification} onChange={handleChange} placeholder="Required standard or certification" /></label>
          <label><span>Incoterm</span><select name="incoterm" value={form.incoterm} onChange={handleChange}><option>Not decided</option><option>EXW</option><option>FCA</option><option>FOB</option><option>CIF</option><option>DAP</option><option>DDP</option></select></label>
        </div>

        <label><span>Delivery location</span><input name="deliveryLocation" value={form.deliveryLocation} onChange={handleChange} placeholder="Full delivery location or port" /></label>
        <label><span>Additional requirements</span><textarea name="message" value={form.message} onChange={handleChange} rows={6} placeholder="Load details, critical loads, technical requirements, packaging, documents, or questions" /></label>
        <label className="upload-label"><span>Upload technical specification / BOQ / RFQ</span><input type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.jpg,.jpeg,.png" /><small>Optional. File handling is not connected in this preview.</small></label>

        <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>Prepare RFQ</button>
      </form>
    )
}
