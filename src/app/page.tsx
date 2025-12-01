'use client'

import { useState } from 'react'
import { Calendar, Clock, User, Building2, FileText, Phone, Mail } from 'lucide-react'

const services = [
  'Strategic Planning',
  'Financial Analysis',
  'Market Research',
  'Business Transformation',
  'Risk Assessment',
  'Investment Analysis'
]

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
]

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    date: '',
    time: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setShowToast(true)
        setTimeout(() => setShowToast(false), 4000)
        setFormData({
          name: '', email: '', phone: '', company: '', service: '', date: '', time: '', message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSampleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowToast(true)
    setTimeout(() => setShowToast(false), 4000)
  }

  return (
    <>
      {/* Consultancy Landing Page */}
      <div className="container" id="root">
        <header role="banner" aria-label="Top">
          <div className="brand" aria-hidden="false">
            <img src="/logo.png" alt="Dericho-Morris Consultancy logo" />
            <div>
              <h1>Dericho-Morris Consultancy</h1>
              <p>Acquisition Strategy & Value Creation Advisor</p>
            </div>
          </div>

          <nav aria-label="Primary navigation">
            <a href="#reports" className="ghost" style={{marginRight: '8px'}}>Reports</a>
            <a href="#about" className="ghost" style={{marginRight: '8px'}}>About</a>
            <a href="#booking" className="primary">Book Consultation</a>
          </nav>
        </header>

        <main role="main" className="hero" aria-labelledby="hero-heading">
          <section className="lead" aria-describedby="hero-sub">
            <div className="eyebrow">Confidential · Private-equity grade · Boutique</div>

            <h2 id="hero-heading" className="headline">Buy with certainty. Create lasting value.</h2>

            <p id="hero-sub" className="sub">
              We help family offices, private equity teams, and strategic buyers make confident acquisition decisions — and then increase the company's value through operational playbooks, rapid execution, and a clear exit path.
            </p>

            <div className="questions" aria-hidden="false">
              <p>Do you want to know, with clarity, if a target company is truly worth buying?</p>
              <p>Would you welcome a practical 90-day plan that immediately improves cash flow and operational stability?</p>
              <p>Do you prefer a confidential partner who prioritizes long-term relationships and measurable outcomes?</p>
            </div>

            <div className="cta-row">
              <button 
                className="btn primary" 
                onClick={() => document.getElementById('contact-card')?.scrollIntoView({behavior: 'smooth'})}
              >
                Request a confidential sample
              </button>

              <button 
                className="btn ghost" 
                onClick={() => document.getElementById('booking-section')?.scrollIntoView({behavior: 'smooth'})}
              >
                Schedule a consultation
              </button>
            </div>

            <div style={{height: '18px'}}></div>

            <div className="trust" aria-hidden="false">
              <div className="t">
                <strong>150+</strong>
                <span>Reports Delivered</span>
              </div>
              <div className="t">
                <strong>Family offices & PE</strong>
                <span>Trusted Collaboration</span>
              </div>
              <div className="t">
                <strong>Repeat partnerships</strong>
                <span>Long-term value creation</span>
              </div>
            </div>

            <div className="features" style={{marginTop: '24px'}} aria-hidden="false">
              <div className="feature-card">
                <h4>Due Diligence, Elevated</h4>
                <p>Financial forensics, concentration risk, customer quality and contract scrutiny — not the superficial checklists, but what matters for real decisions.</p>
              </div>
              <div className="feature-card">
                <h4>Operational Playbooks</h4>
                <p>90-day action plans and measurable OKRs that accelerate cashflow and stabilize operations after close.</p>
              </div>
              <div className="feature-card">
                <h4>Exit Preparedness</h4>
                <p>Positioning and packaging for a successful exit — market timing, buyer mapping, and documentation to maximize outcomes.</p>
              </div>
            </div>
          </section>

          {/* Sample Request Card */}
          <aside id="contact-card" className="card" aria-labelledby="contact-title" role="complementary">
            <h3 id="contact-title">Request a Confidential Sample Report</h3>
            <p>Complete the brief form — we respond with a tailored preview and next steps for a private review.</p>

            <form id="dm-form" className="dm-form" onSubmit={handleSampleSubmit}>
              <div className="form-row">
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" type="text" placeholder="Jane Doe" required autoComplete="name" />
              </div>

              <div className="form-row">
                <label htmlFor="email">Best email</label>
                <input id="email" name="email" type="email" placeholder="jane@office.com" required autoComplete="email" />
              </div>

              <div className="form-row">
                <label htmlFor="org">Organization / Fund</label>
                <input id="org" name="organization" type="text" placeholder="Family Office, PE firm, or company" />
              </div>

              <div className="form-row">
                <label htmlFor="role">Your role</label>
                <select id="role" name="role" required>
                  <option value="">Select role</option>
                  <option>Family Office Principal</option>
                  <option>Private Equity Partner</option>
                  <option>Strategic Buyer / CEO</option>
                  <option>M&A Advisor</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-row">
                <label htmlFor="interest">Industry of interest</label>
                <select id="interest" name="interest" required>
                  <option value="">Select industry</option>
                  <option>HVAC & Field Services</option>
                  <option>Healthcare Services</option>
                  <option>Logistics & Distribution</option>
                  <option>SaaS & Technology</option>
                  <option>Manufacturing</option>
                  <option>Professional Services</option>
                </select>
              </div>

              <div className="affirm" aria-label="Affirmations">
                <label><input type="checkbox" id="affirm1" required /> Yes — I am actively evaluating acquisition targets and want private-equity grade insights.</label>
                <label><input type="checkbox" id="affirm2" required /> Yes — I prioritize a long-term partnership to create operational value after acquisition.</label>
                <label><input type="checkbox" id="affirm3" required /> Yes — I understand this is a confidential service for serious buyers.</label>
              </div>

              <button type="submit" className="submit">Request Sample Report</button>
              <p className="privacy">We respect your privacy. No spam, ever.</p>
            </form>
          </aside>
        </main>

        {/* Booking Section */}
        <section id="booking-section" className="booking-section">
          <div className="booking-container">
            <div className="text-center mb-12">
              <h1 className="booking-title">
                Schedule a Consultation
              </h1>
              <p className="booking-subtitle">
                Ready to transform your business? Book a strategic consultation with our experts.
              </p>
            </div>

            <div className="booking-card">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Form Section */}
                <div className="p-8 lg:p-12">
                  <h2 className="booking-form-title">Book Your Session</h2>
                  
                  {submitStatus === 'success' && (
                    <div className="success-message">
                      <p>Consultation booked successfully! We'll contact you shortly.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="error-message">
                      <p>Failed to book consultation. Please try again.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="input-label">
                          Full Name *
                        </label>
                        <div className="input-container">
                          <User className="input-icon" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="input-field"
                            placeholder="Your full name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="input-label">
                          Email Address *
                        </label>
                        <div className="input-container">
                          <Mail className="input-icon" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="input-field"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="input-label">
                          Phone Number *
                        </label>
                        <div className="input-container">
                          <Phone className="input-icon" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="input-field"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="input-label">
                          Company *
                        </label>
                        <div className="input-container">
                          <Building2 className="input-icon" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            className="input-field"
                            placeholder="Your company name"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="input-label">
                        Service Required *
                      </label>
                      <div className="input-container">
                        <FileText className="input-icon" />
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="input-field"
                        >
                          <option value="">Select a service</option>
                          {services.map(service => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="input-label">
                          Preferred Date *
                        </label>
                        <div className="input-container">
                          <Calendar className="input-icon" />
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className="input-field"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="input-label">
                          Preferred Time *
                        </label>
                        <div className="input-container">
                          <Clock className="input-icon" />
                          <select
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className="input-field"
                          >
                            <option value="">Select time</option>
                            {timeSlots.map(time => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="input-label">
                        Additional Information
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="textarea-field"
                        placeholder="Tell us about your business challenges and objectives..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="submit-button"
                    >
                      {isSubmitting ? 'Booking...' : 'Book Consultation'}
                    </button>
                  </form>
                </div>

                {/* Info Section */}
                <div className="info-section">
                  <h3 className="info-title">What to Expect</h3>
                  
                  <div className="space-y-6">
                    <div className="info-item">
                      <div className="info-icon">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="info-item-title">60-Minute Session</h4>
                        <p className="info-item-description">Comprehensive consultation to understand your business needs</p>
                      </div>
                    </div>

                    <div className="info-item">
                      <div className="info-icon">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="info-item-title">Detailed Analysis</h4>
                        <p className="info-item-description">Review of your current situation and strategic opportunities</p>
                      </div>
                    </div>

                    <div className="info-item">
                      <div className="info-icon">
                        <User className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="info-item-title">Expert Guidance</h4>
                        <p className="info-item-description">Actionable recommendations from experienced consultants</p>
                      </div>
                    </div>
                  </div>

                  <div className="info-box">
                    <h4 className="info-box-title">Next Steps</h4>
                    <ul className="info-box-list">
                      <li>• Confirmation email within 24 hours</li>
                      <li>• Pre-consultation questionnaire</li>
                      <li>• Calendar invitation with meeting details</li>
                      <li>• Preparation materials if needed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div>© 2025 Dericho-Morris Consultancy. All rights reserved.</div>
          <div className="socials">
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
          </div>
        </footer>

        <div className={`toast ${showToast ? 'show' : ''}`} id="toast">
          Thank you! We'll be in touch shortly.
        </div>
      </div>

      <style jsx global>{`
        :root{
          --bg-1: #081426;
          --bg-2: #0f2740;
          --card: rgba(255,255,255,0.04);
          --muted: rgba(255,255,255,0.72);
          --accent: #D4AF37;
          --accent-2: #4a90e2;
          --glass: rgba(255,255,255,0.05);
          --radius: 14px;
        }

        *{box-sizing:border-box;margin:0;padding:0}
        html,body,#__next{height:100%}
        body{
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          background: linear-gradient(135deg,var(--bg-1) 0%, var(--bg-2) 60%);
          color: #fff;
          -webkit-font-smoothing:antialiased;
          -moz-osx-font-smoothing:grayscale;
          line-height:1.45;
          padding: 32px 20px;
        }

        .container{
          max-width:1200px;
          margin:0 auto;
        }

        header[role="banner"]{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:20px;
          padding:12px 0 28px;
        }

        .brand{
          display:flex;
          align-items:center;
          gap:14px;
        }

        .brand img{
          width:64px;
          height:64px;
          object-fit:contain;
          border-radius:8px;
          background:transparent;
        }

        .brand h1{
          font-family: "Playfair Display", serif;
          font-size:20px;
          font-weight:600;
          letter-spacing:1px;
          margin-bottom:2px;
        }
        .brand p{font-size:12px;color:var(--muted);margin:0; letter-spacing:0.6px}

        nav a{
          color:rgba(255,255,255,0.85);
          text-decoration:none;
          font-weight:600;
          padding:8px 12px;
          border-radius:8px;
        }
        nav a.primary{
          background: linear-gradient(90deg,var(--accent) 0%, #b89b3a 100%);
          color:#081426;
          box-shadow: 0 6px 20px rgba(0,0,0,0.35);
        }

        .hero {
          display:grid;
          grid-template-columns: 1fr 460px;
          gap:40px;
          align-items:start;
          margin-bottom:40px;
        }

        .hero .lead{
          padding: 28px 28px 28px 16px;
        }
        .eyebrow{
          display:inline-block;
          font-size:13px;
          padding:6px 10px;
          border-radius:999px;
          background:rgba(255,255,255,0.03);
          color:var(--muted);
          font-weight:600;
          letter-spacing:0.6px;
          margin-bottom:18px;
        }

        .headline{
          font-family: "Playfair Display", serif;
          font-size:42px;
          line-height:1.02;
          margin-bottom:18px;
          letter-spacing:-0.5px;
          color: #fff;
        }

        .sub{
          color:var(--muted);
          max-width:52ch;
          font-size:17px;
          margin-bottom:24px;
        }

        .questions{
          display:grid;
          gap:12px;
          margin-bottom:24px;
        }
        .questions p{
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          padding:14px 16px;
          border-radius:10px;
          border: 1px solid rgba(255,255,255,0.03);
          color:#fff;
          font-weight:600;
        }
        .cta-row{
          display:flex;
          gap:12px;
          align-items:center;
          margin-top:6px;
        }

        .btn{
          display:inline-flex;
          align-items:center;
          gap:10px;
          padding:12px 18px;
          border-radius:10px;
          border:none;
          cursor:pointer;
          font-weight:700;
        }
        .btn.primary{
          background: linear-gradient(90deg,var(--accent) 0%, #b89b3a 100%);
          color:#081426;
          box-shadow: 0 12px 30px rgba(212,175,55,0.12);
        }
        .btn.ghost{
          background:transparent;
          color:var(--muted);
          border:1px solid rgba(255,255,255,0.06);
        }

        .socials{display:flex;gap:8px;align-items:center}

        .card{
          background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
          border:1px solid rgba(255,255,255,0.06);
          padding:28px;
          border-radius:var(--radius);
          box-shadow:0 18px 50px rgba(2,6,23,0.6);
          position:sticky;
          top:32px;
        }

        .card h3{
          margin-bottom:8px;
          font-size:20px;
          font-weight:700;
          font-family: "Playfair Display", serif;
        }
        .card p{color:var(--muted);margin-bottom:14px;font-size:14px}

        .form-row{display:grid;gap:12px;margin-bottom:12px}
        label{font-size:13px;color:var(--muted);font-weight:600}
        input[type="text"], input[type="email"], input[type="tel"], textarea, select{
          background:var(--glass);
          border:1px solid rgba(255,255,255,0.06);
          padding:12px 14px;
          color:#fff;
          border-radius:10px;
          font-size:14px;
          outline:none;
        }
        input:focus, textarea:focus, select:focus{
          box-shadow:0 6px 20px rgba(74,144,226,0.10);
          border-color:var(--accent-2);
        }
        textarea{min-height:100px;resize:vertical}

        .affirm{
          display:flex;
          flex-direction:column;
          gap:10px;
          margin:10px 0 18px;
          padding:12px;
          background: linear-gradient(180deg, rgba(255,255,255,0.015), transparent);
          border-radius:10px;
          border:1px solid rgba(255,255,255,0.03);
        }
        .affirm label{
          display:flex;
          gap:12px;
          align-items:flex-start;
          cursor:pointer;
          font-size:14px;
          color:#fff;
          font-weight:600;
        }
        .affirm input[type="checkbox"]{
          width:18px;height:18px;margin-top:3px;
          accent-color: var(--accent-2);
        }

        .submit{
          width:100%;
          padding:12px;
          border-radius:10px;
          background:linear-gradient(90deg,var(--accent-2), #2b6fb5);
          color:#fff;
          font-weight:700;
          border:none;
          cursor:pointer;
          font-size:15px;
          margin-top:6px;
        }

        .submit:active{transform:translateY(1px)}
        .privacy{font-size:12px;color:var(--muted);margin-top:10px}

        .features{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:18px;
          margin:28px 0 40px;
        }
        .feature-card{
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          border-radius:12px;padding:18px;border:1px solid rgba(255,255,255,0.03);
          min-height:110px;
        }
        .feature-card h4{font-size:16px;margin-bottom:8px;font-weight:700}
        .feature-card p{color:var(--muted);font-size:14px}

        .trust{
          display:flex;
          gap:20px;
          margin-top:8px;
          align-items:center;
          justify-content:center;
        }
        .trust .t{
          text-align:center;
          background:rgba(255,255,255,0.02);
          padding:12px 16px;border-radius:10px;border:1px solid rgba(255,255,255,0.03);
        }
        .trust strong{display:block;font-size:18px;color:#fff}
        .trust span{color:var(--muted);font-size:13px}

        footer{
          margin-top:46px;
          padding-top:26px;
          border-top:1px solid rgba(255,255,255,0.03);
          display:flex;
          justify-content:space-between;
          gap:20px;
          align-items:center;
          font-size:13px;
          color:var(--muted);
        }

        /* Booking Section Styles */
        .booking-section {
          margin-top: 80px;
          padding: 60px 0;
          background: rgba(255,255,255,0.02);
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .booking-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .booking-title {
          font-family: "Playfair Display", serif;
          font-size: 3rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 1rem;
        }

        .booking-subtitle {
          font-size: 1.25rem;
          color: var(--muted);
          max-width: 600px;
          margin: 0 auto;
        }

        .booking-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          box-shadow: 0 25px 50px rgba(2,6,23,0.4);
          overflow: hidden;
        }

        .booking-form-title {
          font-family: "Playfair Display", serif;
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 2rem;
        }

        .input-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--muted);
          margin-bottom: 0.5rem;
        }

        .input-container {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          height: 20px;
          width: 20px;
          color: var(--muted);
        }

        .input-field {
          width: 100%;
          padding: 12px 12px 12px 44px;
          background: var(--glass);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          color: #fff;
          font-size: 14px;
          outline: none;
          transition: all 0.2s;
        }

        .input-field:focus {
          border-color: var(--accent-2);
          box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
        }

        .textarea-field {
          width: 100%;
          padding: 12px;
          background: var(--glass);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          color: #fff;
          font-size: 14px;
          outline: none;
          resize: vertical;
          min-height: 120px;
          transition: all 0.2s;
        }

        .textarea-field:focus {
          border-color: var(--accent-2);
          box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
        }

        .submit-button {
          width: 100%;
          padding: 16px;
          background: linear-gradient(90deg, var(--accent-2), #2b6fb5);
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 10px 25px rgba(74, 144, 226, 0.3);
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .info-section {
          background: rgba(255,255,255,0.03);
          padding: 3rem;
          border-left: 1px solid rgba(255,255,255,0.05);
        }

        .info-title {
          font-family: "Playfair Display", serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 2rem;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .info-icon {
          background: var(--accent-2);
          color: #fff;
          padding: 8px;
          border-radius: 8px;
          flex-shrink: 0;
        }

        .info-item-title {
          font-weight: 600;
          color: #fff;
          margin-bottom: 0.25rem;
        }

        .info-item-description {
          color: var(--muted);
          font-size: 0.875rem;
        }

        .info-box {
          margin-top: 2rem;
          padding: 1.5rem;
          background: rgba(255,255,255,0.02);
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .info-box-title {
          font-weight: 600;
          color: #fff;
          margin-bottom: 0.75rem;
        }

        .info-box-list {
          color: var(--muted);
          font-size: 0.875rem;
          list-style: none;
          padding: 0;
        }

        .info-box-list li {
          margin-bottom: 0.25rem;
        }

        .success-message {
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 8px;
          color: #4ade80;
        }

        .error-message {
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 8px;
          color: #f87171;
        }

        /* Toast */
        .toast{
          position:fixed;right:20px;bottom:20px;z-index:1200;
          background:linear-gradient(90deg,var(--accent-2), #2b6fb5);
          color:#fff;padding:12px 16px;border-radius:10px;box-shadow:0 14px 40px rgba(0,0,0,0.45);
          display:none;font-weight:700;
        }
        .toast.show{display:block;animation: pop .28s ease}
        @keyframes pop{from{transform:scale(.96);opacity:0}to{transform:scale(1);opacity:1}}

        /* Responsiveness */
        @media (max-width: 980px){
          .hero{grid-template-columns:1fr; }
          .features{grid-template-columns:repeat(2,1fr)}
          .brand img{width:54px;height:54px}
          header[role="banner"]{flex-direction:column;align-items:flex-start;gap:10px}
          .card{position:relative;top:0}
          .info-section {
            border-left: none;
            border-top: 1px solid rgba(255,255,255,0.05);
          }
        }
        @media (max-width: 560px){
          .features{grid-template-columns:1fr}
          .headline{font-size:30px}
          .brand h1{font-size:18px}
          .booking-title {
            font-size: 2rem;
          }
          .booking-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  )
}