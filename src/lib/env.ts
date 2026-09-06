export const appConfig = {
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://example.com',
  contactEmail: import.meta.env.VITE_COMPANY_EMAIL || '[EMAIL ADDRESS]',
  contactPhone: import.meta.env.VITE_COMPANY_PHONE || '[PHONE NUMBER]',
  companyName: import.meta.env.VITE_COMPANY_NAME || 'shriammanenterprises',
  companyAddress: import.meta.env.VITE_COMPANY_ADDRESS || 'No 55/6, P.H Road, Arumbakkam, Chennai - 600106',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '[WHATSAPP NUMBER]',
}
