'use client'

import { useState } from 'react'
import { Calendar, Clock, Video, Phone, MessageSquare, CheckCircle, ArrowLeft } from 'lucide-react'

interface TimeSlot {
  id: string
  date: string
  time: string
  available: boolean
  timezone: string
}

interface MeetingType {
  id: string
  title: string
  description: string
  duration: number
  price?: number
  icon: any
  color: string
}

export function SchedulingWidget() {
  const [selectedMeetingType, setSelectedMeetingType] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [step, setStep] = useState<'type' | 'time' | 'details' | 'confirmation'>('type')
  const [isBooking, setIsBooking] = useState(false)

  const meetingTypes: MeetingType[] = [
    {
      id: 'sample-review',
      title: 'Sample Report Review',
      description: 'Discuss your sample acquisition report and explore full engagement opportunities',
      duration: 30,
      icon: MessageSquare,
      color: 'bg-blue-500'
    },
    {
      id: 'strategy-session',
      title: 'Investment Strategy Consultation',
      description: 'Deep-dive strategy session for your acquisition pipeline and due diligence needs',
      duration: 60,
      price: 2500,
      icon: Video,
      color: 'bg-primary-500'
    },
    {
      id: 'portfolio-review',
      title: 'Portfolio Intelligence Review',
      description: 'Comprehensive review of your portfolio companies and value creation opportunities',
      duration: 90,
      price: 5000,
      icon: Calendar,
      color: 'bg-green-500'
    },
    {
      id: 'discovery-call',
      title: 'Discovery Call',
      description: 'Initial consultation to understand your investment focus and intelligence needs',
      duration: 15,
      icon: Phone,
      color: 'bg-neutral-500'
    }
  ]

  // Generate available time slots (in a real app, this would come from your calendar API)
  const generateTimeSlots = (date: string): TimeSlot[] => {
    const slots: TimeSlot[] = []
    const times = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']
    
    times.forEach(time => {
      slots.push({
        id: `${date}-${time}`,
        date,
        time,
        available: Math.random() > 0.3, // Simulate availability
        timezone: 'EST'
      })
    })
    
    return slots
  }

  // Generate next 14 days (excluding weekends)
  const generateAvailableDates = (): string[] => {
    const dates: string[] = []
    const today = new Date()
    
    for (let i = 1; i <= 20; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date.toISOString().split('T')[0])
      }
      
      if (dates.length >= 14) break
    }
    
    return dates
  }

  const handleBooking = async () => {
    setIsBooking(true)
    
    // Simulate booking API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setStep('confirmation')
    setIsBooking(false)
  }

  const selectedMeeting = meetingTypes.find(t => t.id === selectedMeetingType)
  const availableDates = generateAvailableDates()
  const timeSlots = selectedDate ? generateTimeSlots(selectedDate) : []

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-strong border border-neutral-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Schedule a Consultation</h2>
            <p className="text-primary-100">
              Book time with our senior investment analysts
            </p>
          </div>
          {step !== 'type' && step !== 'confirmation' && (
            <button
              onClick={() => {
                if (step === 'details') setStep('time')
                else if (step === 'time') setStep('type')
              }}
              className="flex items-center gap-2 text-primary-100 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          )}
        </div>
      </div>

      <div className="p-8">
        {/* Step 1: Meeting Type Selection */}
        {step === 'type' && (
          <div>
            <h3 className="text-xl font-bold text-neutral-900 mb-6">
              Select Meeting Type
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {meetingTypes.map((meeting) => (
                <div
                  key={meeting.id}
                  onClick={() => {
                    setSelectedMeetingType(meeting.id)
                    setStep('time')
                  }}
                  className="border-2 border-neutral-200 rounded-xl p-6 cursor-pointer hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${meeting.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <meeting.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-neutral-900">
                          {meeting.title}
                        </h4>
                        {meeting.price && (
                          <span className="text-primary-600 font-semibold">
                            ${meeting.price.toLocaleString()}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-neutral-600 text-sm mb-3">
                        {meeting.description}
                      </p>
                      
                      <div className="flex items-center gap-2 text-neutral-500 text-sm">
                        <Clock className="w-4 h-4" />
                        {meeting.duration} minutes
                        {!meeting.price && (
                          <span className="ml-2 bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                            FREE
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Time Selection */}
        {step === 'time' && selectedMeeting && (
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                {selectedMeeting.title}
              </h3>
              <div className="flex items-center gap-4 text-neutral-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {selectedMeeting.duration} minutes
                </div>
                {selectedMeeting.price && (
                  <div className="flex items-center gap-2">
                    <span className="text-primary-600 font-semibold">
                      ${selectedMeeting.price.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Date Selection */}
              <div>
                <h4 className="font-semibold text-neutral-900 mb-4">
                  Select Date
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  {availableDates.map((date) => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`p-3 rounded-lg border text-left transition-all duration-200 ${
                        selectedDate === date
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                      }`}
                    >
                      <div className="font-medium text-sm">
                        {formatDate(date)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <h4 className="font-semibold text-neutral-900 mb-4">
                  Select Time {selectedDate && `(${formatDate(selectedDate)})`}
                </h4>
                
                {selectedDate ? (
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.id}
                        onClick={() => {
                          setSelectedTime(slot.id)
                          setStep('details')
                        }}
                        disabled={!slot.available}
                        className={`p-3 rounded-lg border text-center transition-all duration-200 ${
                          slot.available
                            ? 'border-neutral-200 hover:border-primary-300 hover:bg-primary-50'
                            : 'border-neutral-100 bg-neutral-50 text-neutral-400 cursor-not-allowed'
                        }`}
                      >
                        <div className="font-medium">
                          {slot.time}
                        </div>
                        <div className="text-xs text-neutral-500">
                          {slot.timezone}
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-neutral-500 text-center py-8">
                    Please select a date first
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Contact Details */}
        {step === 'details' && (
          <div>
            <h3 className="text-xl font-bold text-neutral-900 mb-6">
              Your Details
            </h3>

            <div className="bg-primary-50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-primary-900 mb-2">
                Meeting Summary
              </h4>
              <div className="text-sm text-primary-800">
                <p><strong>{selectedMeeting?.title}</strong></p>
                <p>{selectedDate && formatDate(selectedDate)} at {timeSlots.find(s => s.id === selectedTime)?.time}</p>
                <p>{selectedMeeting?.duration} minutes {selectedMeeting?.price && `• $${selectedMeeting.price.toLocaleString()}`}</p>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">First Name *</label>
                  <input type="text" className="form-input" placeholder="John" />
                </div>
                <div>
                  <label className="form-label">Last Name *</label>
                  <input type="text" className="form-input" placeholder="Smith" />
                </div>
              </div>

              <div>
                <label className="form-label">Email Address *</label>
                <input type="email" className="form-input" placeholder="john@company.com" />
              </div>

              <div>
                <label className="form-label">Company/Fund *</label>
                <input type="text" className="form-input" placeholder="Apex Capital Partners" />
              </div>

              <div>
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-input" placeholder="+1 (555) 123-4567" />
              </div>

              <div>
                <label className="form-label">Meeting Agenda (Optional)</label>
                <textarea 
                  className="form-textarea" 
                  rows={3}
                  placeholder="What would you like to discuss? Any specific deals or opportunities?"
                />
              </div>

              <button
                type="button"
                onClick={handleBooking}
                disabled={isBooking}
                className="btn-primary w-full py-4 text-lg disabled:opacity-50"
              >
                {isBooking ? 'Booking Meeting...' : `Confirm Booking${selectedMeeting?.price ? ` - $${selectedMeeting.price.toLocaleString()}` : ''}`}
              </button>
            </form>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 'confirmation' && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Meeting Confirmed!
            </h3>
            
            <div className="bg-green-50 rounded-xl p-6 mb-6 text-left max-w-md mx-auto">
              <h4 className="font-semibold text-green-900 mb-3">Meeting Details</h4>
              <div className="space-y-2 text-sm text-green-800">
                <p><strong>Type:</strong> {selectedMeeting?.title}</p>
                <p><strong>Date:</strong> {selectedDate && formatDate(selectedDate)}</p>
                <p><strong>Time:</strong> {timeSlots.find(s => s.id === selectedTime)?.time} EST</p>
                <p><strong>Duration:</strong> {selectedMeeting?.duration} minutes</p>
                {selectedMeeting?.price && (
                  <p><strong>Investment:</strong> ${selectedMeeting.price.toLocaleString()}</p>
                )}
              </div>
            </div>

            <div className="space-y-4 text-neutral-600">
              <p>
                📅 <strong>Calendar invite sent</strong> to your email with Zoom/Teams link
              </p>
              <p>
                📋 <strong>Preparation materials</strong> will be shared 24 hours before the meeting
              </p>
              <p>
                📞 <strong>Need to reschedule?</strong> Use the link in your confirmation email
              </p>
            </div>

            <button
              onClick={() => {
                setStep('type')
                setSelectedMeetingType(null)
                setSelectedDate(null)
                setSelectedTime(null)
              }}
              className="btn-secondary mt-6"
            >
              Schedule Another Meeting
            </button>
          </div>
        )}
      </div>
    </div>
  )
}