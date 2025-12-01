'use client'

import Link from 'next/link'
import { ArrowRight, TrendingUp, Users, Award, ChevronDown } from 'lucide-react'
import { SampleRequestForm } from '@/components/forms/SampleRequestForm'
import { useState } from 'react'

export function Hero() {
  const [showForm, setShowForm] = useState(false)

  const stats = [
    { label: 'Portfolio Value Analyzed', value: '$2.3B+', icon: TrendingUp },
    { label: 'Investment Partners', value: '150+', icon: Users },
    { label: 'Successful Exits', value: '45+', icon: Award },
  ]

  return (
    <section className="relative min-h-screen flex items-center gradient-mesh overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-primary-50/30 to-white/80"></div>
      
      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full text-primary-700 text-sm font-semibold mb-8 shadow-soft">
              <Award className="w-4 h-4 mr-2" />
              Trusted by 150+ Investment Partners
            </div>
            
            {/* Main Headline - Conversion Optimized */}
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 mb-6 leading-tight">
              <span className="text-gradient">Acquisition Intelligence</span>
              <br />
              <span className="text-neutral-800">That Drives</span>
              <br />
              <span className="text-gradient">Exceptional Returns</span>
            </h1>
            
            {/* Value Proposition */}
            <p className="text-xl lg:text-2xl text-neutral-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Elite boutique consultancy delivering institutional-grade 
              <span className="font-semibold text-neutral-800"> due diligence, growth roadmaps, and exit strategies</span> 
              for discerning investors, private equity firms, and family offices.
            </p>
            
            {/* Secondary Benefits */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-10 text-neutral-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                <span className="font-medium">McKinsey-level Analysis</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                <span className="font-medium">48-Hour Delivery</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                <span className="font-medium">Confidential & Secure</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => setShowForm(true)}
                className="btn-primary text-lg px-8 py-4 group"
              >
                Request Sample Report
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              
              <Link 
                href="/book" 
                className="btn-secondary text-lg px-8 py-4"
              >
                Book Consultation
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <p className="text-sm text-neutral-500 mb-4">Trusted by leading investment firms</p>
              <div className="flex flex-wrap gap-8 opacity-60 justify-center lg:justify-start">
                {/* You can replace these with actual client logos */}
                <div className="text-neutral-400 font-semibold">BLACKSTONE</div>
                <div className="text-neutral-400 font-semibold">KKR & CO</div>
                <div className="text-neutral-400 font-semibold">APOLLO</div>
                <div className="text-neutral-400 font-semibold">CARLYLE</div>
              </div>
            </div>
          </div>
          
          {/* Hero Stats/Visual */}
          <div className="relative animate-slide-up">
            {/* Premium Stats Card */}
            <div className="bg-white/80 backdrop-blur-premium rounded-3xl shadow-strong border border-white/50 p-8 lg:p-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  Portfolio Impact
                </h3>
                <p className="text-neutral-600">
                  Delivering measurable value for our partners
                </p>
              </div>
              
              <div className="space-y-8">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-neutral-50 to-primary-50 rounded-2xl"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                        <stat.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-neutral-900">
                          {stat.value}
                        </div>
                        <div className="text-sm text-neutral-600">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* ROI Highlight */}
              <div className="mt-8 p-6 bg-gradient-to-r from-gold-50 to-gold-100 rounded-2xl border border-gold-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-gold mb-1">
                    23.4%
                  </div>
                  <div className="text-sm text-gold-700 font-medium">
                    Average Portfolio IRR Improvement
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-400 rounded-full opacity-80 animate-bounce-subtle"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gold-400 rounded-full opacity-80 animate-bounce-subtle delay-500"></div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-neutral-400" />
        </div>
      </div>
      
      {/* Sample Request Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
              onClick={() => setShowForm(false)}
            ></div>
            
            <div className="relative bg-white rounded-3xl shadow-strong max-w-md w-full p-8 animate-scale-in">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                <span className="sr-only">Close</span>
                ×
              </button>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  Request Sample Report
                </h3>
                <p className="text-neutral-600">
                  See our institutional-grade analysis in action
                </p>
              </div>
              
              <SampleRequestForm onSuccess={() => setShowForm(false)} />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}