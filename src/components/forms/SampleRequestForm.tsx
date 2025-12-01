'use client'

import { useState } from 'react'
import { CheckCircle, Loader2, Building, Mail, Phone, User } from 'lucide-react'

interface SampleRequestFormProps {
  onSuccess?: () => void
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  position: string
  investmentFocus: string
  aum: string
  urgency: string
  specificNeeds: string
}

interface FormErrors {
  [key: string]: string
}

export function SampleRequestForm({ onSuccess }: SampleRequestFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    investmentFocus: '',
    aum: '',
    urgency: '',
    specificNeeds: '',
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const investmentFocusOptions = [
    'Private Equity',
    'Venture Capital', 
    'Growth Equity',
    'Real Estate',
    'Infrastructure',
    'Distressed Assets',
    'Technology',
    'Healthcare',
    'Other'
  ]

  const aumOptions = [
    'Under $50M',
    '$50M - $100M',
    '$100M - $500M',
    '$500M - $1B',
    '$1B - $5B',
    'Over $5B'
  ]

  const urgencyOptions = [
    'Immediate (Within 48 hours)',
    'This Week',
    'This Month',
    'Next Quarter',
    'General Interest'
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.position.trim()) newErrors.position = 'Position is required'
    if (!formData.investmentFocus) newErrors.investmentFocus = 'Investment focus is required'
    if (!formData.aum) newErrors.aum = 'AUM range is required'
    if (!formData.urgency) newErrors.urgency = 'Timeline is required'

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (formData.phone && !/^[\+]?[1-9][\d\s\-\(\)]{7,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/sample-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit request')
      }

      setIsSubmitted(true)
      
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          send_to: 'YOUR_CONVERSION_ID',
          value: 1.0,
          currency: 'USD'
        })
      }

      setTimeout(() => {
        onSuccess?.()
      }, 2000)

    } catch (error) {
      console.error('Form submission error:', error)
      setErrors({ submit: 'Failed to submit request. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8 animate-fade-in">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-2">
          Request Submitted Successfully!
        </h3>
        <p className="text-neutral-600 mb-4">
          Our team will review your request and send you a customized sample report within 24 hours.
        </p>
        <div className="bg-primary-50 rounded-lg p-4 text-left">
          <h4 className="font-semibold text-primary-900 mb-2">What happens next?</h4>
          <ul className="text-sm text-primary-800 space-y-1">
            <li>• Our senior analyst will review your investment focus</li>
            <li>• We'll prepare a relevant sample analysis</li>
            <li>• You'll receive the report via secure email</li>
            <li>• Optional: Schedule a consultation call</li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="form-label">
            <User className="w-4 h-4 inline mr-2" />
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className={`form-input ${errors.firstName ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : ''}`}
            placeholder="John"
          />
          {errors.firstName && <p className="form-error">{errors.firstName}</p>}
        </div>
        
        <div>
          <label htmlFor="lastName" className="form-label">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className={`form-input ${errors.lastName ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : ''}`}
            placeholder="Smith"
          />
          {errors.lastName && <p className="form-error">{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="form-label">
          <Mail className="w-4 h-4 inline mr-2" />
          Business Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={`form-input ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : ''}`}
          placeholder="john@company.com"
        />
        {errors.email && <p className="form-error">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="form-label">
          <Phone className="w-4 h-4 inline mr-2" />
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className={`form-input ${errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : ''}`}
          placeholder="+1 (555) 123-4567"
        />
        {errors.phone && <p className="form-error">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="company" className="form-label">
          <Building className="w-4 h-4 inline mr-2" />
          Company/Fund Name *
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          className={`form-input ${errors.company ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : ''}`}
          placeholder="Acme Capital Partners"
        />
        {errors.company && <p className="form-error">{errors.company}</p>}
      </div>

      <div>
        <label htmlFor="position" className="form-label">
          Your Position *
        </label>
        <input
          type="text"
          id="position"
          name="position"
          value={formData.position}
          onChange={handleInputChange}
          className={`form-input ${errors.position ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : ''}`}
          placeholder="Managing Partner, Investment Director, etc."
        />
        {errors.position && <p className="form-error">{errors.position}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="investmentFocus" className="form-label">
            Investment Focus *
          </label>
          <select
            id="investmentFocus"
            name="investmentFocus"
            value={formData.investmentFocus}
            onChange={handleInputChange}
            className={`form-input ${errors.investmentFocus ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : ''}`}
          >
            <option value="">Select focus area</option>
            {investmentFocusOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.investmentFocus && <p className="form-error">{errors.investmentFocus}</p>}
        </div>

        <div>
          <label htmlFor="aum" className="form-label">
            Assets Under Management *
          </label>
          <select
            id="aum"
            name="aum"
            value={formData.aum}
            onChange={handleInputChange}
            className={`form-input ${errors.aum ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : ''}`}
          >
            <option value="">Select AUM range</option>
            {aumOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.aum && <p className="form-error">{errors.aum}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="urgency" className="form-label">
          Timeline for Sample Report *
        </label>
        <select
          id="urgency"
          name="urgency"
          value={formData.urgency}
          onChange={handleInputChange}
          className={`form-input ${errors.urgency ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : ''}`}
        >
          <option value="">Select timeline</option>
          {urgencyOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        {errors.urgency && <p className="form-error">{errors.urgency}</p>}
      </div>

      <div>
        <label htmlFor="specificNeeds" className="form-label">
          Specific Areas of Interest (Optional)
        </label>
        <textarea
          id="specificNeeds"
          name="specificNeeds"
          value={formData.specificNeeds}
          onChange={handleInputChange}
          rows={3}
          className="form-textarea"
          placeholder="e.g., SaaS acquisitions, healthcare due diligence, ESG analysis..."
        />
      </div>

      {errors.submit && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600 text-sm">{errors.submit}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full justify-center text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Submitting Request...
          </>
        ) : (
          'Request Sample Report'
        )}
      </button>

      <div className="bg-neutral-50 rounded-lg p-4 text-center">
        <p className="text-xs text-neutral-600">
          Your information is confidential and will never be shared. We use bank-level security to protect all client data.
          By submitting, you agree to receive our sample report and occasional updates about our services.
        </p>
      </div>
    </form>
  )
}