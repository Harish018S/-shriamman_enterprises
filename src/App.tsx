import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import GeneratorSolutionsPage from './pages/GeneratorSolutionsPage'
import SolarSolutionsPage from './pages/SolarSolutionsPage'
import SolarTechnologyPage from './pages/SolarTechnologyPage'
import ServicesPage from './pages/ServicesPage'
import IndustriesPage from './pages/IndustriesPage'
import ProjectsPage from './pages/ProjectsPage'
import WhyChooseUsPage from './pages/WhyChooseUsPage'
import ContactPage from './pages/ContactPage'
import RequestQuotePage from './pages/RequestQuotePage'
import SupplierPartnerPage from './pages/SupplierPartnerPage'
import { PrivacyPolicyPage, TermsConditionsPage } from './pages/LegalPages'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/generator-solutions" element={<GeneratorSolutionsPage />} />
          <Route path="/solar-solutions" element={<SolarSolutionsPage />} />
          <Route path="/solar-technology" element={<SolarTechnologyPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/request-quote" element={<RequestQuotePage />} />
          <Route path="/partner-with-us" element={<SupplierPartnerPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
