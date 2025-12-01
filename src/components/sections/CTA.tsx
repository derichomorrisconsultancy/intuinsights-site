'use client'

import Link from 'next/link'
import { ArrowRight, Shield, Clock, Award } from 'lucide-react'

export function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
      
      <div className="container-xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <div className="mb-12">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to Access
              <span className="block text-gradient bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Institutional-Grade Intelligence?
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-neutral-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join sophisticated investors who rely on our platform for critical investment decisions. 
              Start with a sample report to experience our analytical rigor firsthand.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">Bank-Level Security</h3>
              <p className="text-neutral-400 text-sm">
                Your sensitive data protected with enterprise-grade encryption
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">48-Hour Delivery</h3>
              <p className="text-neutral-400 text-sm">
                Rapid turnaround without compromising quality
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">Boutique Excellence</h3>
              <p className="text-neutral-400 text-sm">
                Personalized service from senior-level experts
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-primary-500/25 group flex items-center"
            >
              Request Sample Report
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            
            <Link 
              href="/dashboard" 
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              View Platform Demo
            </Link>
          </div>

          {/* Social Proof */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-neutral-400 text-sm mb-4">
              Trusted by 150+ investment professionals
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <div className="text-neutral-500 font-semibold text-sm">PRIVATE EQUITY FIRMS</div>
              <div className="text-neutral-500 font-semibold text-sm">FAMILY OFFICES</div>
              <div className="text-neutral-500 font-semibold text-sm">INVESTMENT BANKS</div>
              <div className="text-neutral-500 font-semibold text-sm">SOVEREIGN FUNDS</div>
            </div>
          </div>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h4 className="font-bold text-lg mb-3">No Upfront Costs</h4>
            <p className="text-neutral-400 text-sm">
              Start with a complimentary sample report. Only pay when you see the value of our intelligence.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h4 className="font-bold text-lg mb-3">Flexible Engagement</h4>
            <p className="text-neutral-400 text-sm">
              From one-time reports to ongoing advisory relationships. We adapt to your needs.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h4 className="font-bold text-lg mb-3">Immediate Access</h4>
            <p className="text-neutral-400 text-sm">
              Get started today. Our team begins work on your sample report within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}