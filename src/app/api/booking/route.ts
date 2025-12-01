import { NextRequest, NextResponse } from 'next/server'

interface BookingData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  date: string
  time: string
  message?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: BookingData = await request.json()

    // Validate required fields
    const requiredFields: (keyof BookingData)[] = ['name', 'email', 'phone', 'company', 'service', 'date', 'time']
    const missingFields = requiredFields.filter(field => !body[field])

    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: `Missing required fields: ${missingFields.join(', ')}` 
        },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // In a real application, you would:
    // 1. Save to database
    // 2. Send confirmation emails
    // 3. Integrate with calendar systems
    // 4. Send notifications

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Send confirmation email (simulated)
    const emailContent = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0ea5e9, #0284c7); color: white; padding: 30px; text-align: center; }
            .content { padding: 30px; line-height: 1.6; }
            .meeting-details { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .button { background: #0ea5e9; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Meeting Confirmed</h1>
              <p>Thank you for booking with Dericho Morris Consultancy</p>
            </div>
            <div class="content">
              <p>Dear ${body.name},</p>
              <p>Your consultation has been successfully scheduled. We look forward to discussing your ${body.service} needs.</p>
              
              <div class="meeting-details">
                <h3>Meeting Details:</h3>
                <p><strong>Service:</strong> ${body.service}</p>
                <p><strong>Date:</strong> ${new Date(body.date).toLocaleDateString()}</p>
                <p><strong>Time:</strong> ${body.time}</p>
                <p><strong>Company:</strong> ${body.company}</p>
                ${body.message ? `<p><strong>Message:</strong> ${body.message}</p>` : ''}
              </div>
              
              <p>We will send you a calendar invitation shortly with the meeting link.</p>
              <p>If you need to reschedule or have any questions, please contact us immediately.</p>
              
              <p>Best regards,<br>The Dericho Morris Team</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Booking confirmed successfully',
      booking: {
        id: `booking_${Date.now()}`,
        ...body,
        status: 'confirmed',
        created: new Date().toISOString()
      }
    })

  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    )
  }
}