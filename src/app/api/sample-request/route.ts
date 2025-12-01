import { NextRequest, NextResponse } from 'next/server'

// Types for form data
interface SampleRequestData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company: string
  position: string
  investmentFocus: string
  aum: string
  urgency: string
  specificNeeds?: string
}

// Validation function
function validateFormData(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []
  
  if (!data.firstName?.trim()) errors.push('First name is required')
  if (!data.lastName?.trim()) errors.push('Last name is required')
  if (!data.email?.trim()) errors.push('Email is required')
  if (!data.company?.trim()) errors.push('Company is required')
  if (!data.position?.trim()) errors.push('Position is required')
  if (!data.investmentFocus) errors.push('Investment focus is required')
  if (!data.aum) errors.push('AUM range is required')
  if (!data.urgency) errors.push('Timeline is required')
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (data.email && !emailRegex.test(data.email)) {
    errors.push('Invalid email format')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

// Email template for internal notification
function createInternalEmailTemplate(data: SampleRequestData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #0ea5e9, #0284c7); color: white; padding: 20px; text-align: center; }
        .content { padding: 30px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #333; margin-bottom: 5px; display: block; }
        .value { color: #666; background: #f8f9fa; padding: 8px 12px; border-radius: 4px; }
        .priority-high { border-left: 4px solid #ef4444; }
        .priority-medium { border-left: 4px solid #f59e0b; }
        .priority-low { border-left: 4px solid #10b981; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎯 New Sample Report Request</h1>
          <p>High-quality lead from Dericho Morris Consultancy</p>
        </div>
        
        <div class="content ${data.urgency.includes('Immediate') ? 'priority-high' : data.urgency.includes('Week') ? 'priority-medium' : 'priority-low'}">
          <div class="field">
            <span class="label">Contact Information</span>
            <div class="value">
              <strong>${data.firstName} ${data.lastName}</strong><br>
              ${data.position} at ${data.company}<br>
              📧 ${data.email}<br>
              ${data.phone ? `📞 ${data.phone}` : ''}
            </div>
          </div>
          
          <div class="field">
            <span class="label">Investment Profile</span>
            <div class="value">
              <strong>Focus:</strong> ${data.investmentFocus}<br>
              <strong>AUM:</strong> ${data.aum}<br>
              <strong>Timeline:</strong> ${data.urgency}
            </div>
          </div>
          
          ${data.specificNeeds ? `
          <div class="field">
            <span class="label">Specific Requirements</span>
            <div class="value">${data.specificNeeds}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <span class="label">Next Steps</span>
            <div class="value">
              1. Assign senior analyst based on ${data.investmentFocus} expertise<br>
              2. Prepare relevant sample analysis<br>
              3. Deliver within ${data.urgency.includes('Immediate') ? '24 hours' : '48 hours'}<br>
              4. Follow up for consultation scheduling
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

// Client confirmation email template
function createClientEmailTemplate(data: SampleRequestData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #0ea5e9, #0284c7); color: white; padding: 30px; text-align: center; }
        .content { padding: 30px; line-height: 1.6; color: #333; }
        .cta-button { display: inline-block; background: #0ea5e9; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0; font-weight: bold; }
        .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✅ Request Confirmed</h1>
          <p>Thank you for your interest in our intelligence platform</p>
        </div>
        
        <div class="content">
          <p>Dear ${data.firstName},</p>
          
          <p>Thank you for requesting a sample report from Dericho Morris Consultancy. We're excited to demonstrate our institutional-grade analysis capabilities.</p>
          
          <p><strong>What happens next:</strong></p>
          <ul>
            <li>Our senior analyst will review your ${data.investmentFocus} focus area</li>
            <li>We'll prepare a relevant sample analysis showcasing our methodology</li>
            <li>You'll receive the report via secure email within ${data.urgency.includes('Immediate') ? '24 hours' : '48 hours'}</li>
            <li>Optional: Schedule a consultation to discuss your specific needs</li>
          </ul>
          
          <p>In the meantime, feel free to explore our platform capabilities:</p>
          
          <a href="https://derichomorrisconsultancy.com/dashboard" class="cta-button">View Platform Demo</a>
          
          <p>If you have any immediate questions, please don't hesitate to reach out.</p>
          
          <p>Best regards,<br>
          <strong>The Dericho Morris Team</strong><br>
          Premier Acquisition Intelligence</p>
        </div>
        
        <div class="footer">
          <p>Dericho Morris Consultancy | Institutional-Grade Investment Intelligence</p>
          <p>This email was sent to ${data.email} in response to your sample report request.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    const data: SampleRequestData = await request.json()
    
    // Validate form data
    const validation = validateFormData(data)
    if (!validation.isValid) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.errors },
        { status: 400 }
      )
    }
    
    // In a real application, you would:
    // 1. Save to database (CRM system, Airtable, etc.)
    // 2. Send emails via service like Resend, SendGrid, etc.
    // 3. Integrate with analytics/tracking
    // 4. Add to marketing automation
    
    // For now, we'll simulate successful processing
    console.log('Sample request received:', {
      name: `${data.firstName} ${data.lastName}`,
      company: data.company,
      email: data.email,
      aum: data.aum,
      focus: data.investmentFocus,
      urgency: data.urgency,
      timestamp: new Date().toISOString()
    })
    
    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Here you would integrate with your email service:
    /*
    // Example with Resend
    await resend.emails.send({
      from: 'noreply@derichomorrisconsultancy.com',
      to: 'team@derichomorrisconsultancy.com',
      subject: `🎯 New Sample Request: ${data.company} (${data.aum})`,
      html: createInternalEmailTemplate(data)
    })
    
    await resend.emails.send({
      from: 'team@derichomorrisconsultancy.com',
      to: data.email,
      subject: 'Your Sample Report Request - Confirmed',
      html: createClientEmailTemplate(data)
    })
    */
    
    // Track conversion for analytics
    // Example: Google Analytics, Mixpanel, etc.
    
    return NextResponse.json({
      success: true,
      message: 'Sample request submitted successfully',
      estimatedDelivery: data.urgency.includes('Immediate') ? '24 hours' : '48 hours'
    })
    
  } catch (error) {
    console.error('Sample request error:', error)
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}