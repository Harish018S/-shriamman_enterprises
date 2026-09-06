import { useState } from 'react'

type SupplierFormState = {
  companyName: string
  contactPerson: string
  designation: string
  email: string
  phone: string
  productCategory: string
  annualSupplyCapacity: string
  preferredRegion: string
  message: string
}

const initialState: SupplierFormState = {
  companyName: '',
  contactPerson: '',
  designation: '',
  email: '',
  phone: '',
  productCategory: 'Solar Modules',
  annualSupplyCapacity: '',
  preferredRegion: '',
  message: '',
}

export function SupplierForm() {
  const [form, setForm] = useState<SupplierFormState>(initialState)
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
    <form className="supplier-form" onSubmit={handleSubmit}>
      <div className="form-grid two-col">
        <label>
          <span>Company Name</span>
          <input name="companyName" value={form.companyName} onChange={handleChange} required />
        </label>
        <label>
          <span>Contact Person</span>
          <input name="contactPerson" value={form.contactPerson} onChange={handleChange} required />
        </label>
        <label>
          <span>Designation</span>
          <input name="designation" value={form.designation} onChange={handleChange} />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          <span>Phone</span>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
        </label>
        <label>
          <span>Product Category</span>
          <select name="productCategory" value={form.productCategory} onChange={handleChange}>
            <option>Solar Modules</option>
            <option>Inverters</option>
            <option>Mounting Structures</option>
            <option>BOS Components</option>
            <option>Solar EPC</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          <span>Annual Supply Capacity</span>
          <input name="annualSupplyCapacity" value={form.annualSupplyCapacity} onChange={handleChange} />
        </label>
        <label>
          <span>Preferred Region</span>
          <input name="preferredRegion" value={form.preferredRegion} onChange={handleChange} />
        </label>
      </div>

      <label className="upload-label">
        <span>Product Datasheet Upload</span>
        <input type="file" />
      </label>

      <label>
        <span>Message</span>
        <textarea name="message" rows={5} value={form.message} onChange={handleChange} />
      </label>

      <button type="submit" className="btn btn-primary">Become a Supplier / Partner</button>

      {submitted ? (
        <div className="success-message" role="status">
          Thank you for partnering with us. Our business development team will review your enquiry.
        </div>
      ) : null}
    </form>
  )
}
