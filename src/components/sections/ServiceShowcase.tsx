'use client'

import { BarChart3, TrendingUp, FileText, Shield, Clock, Award } from 'lucide-react'
import Link from 'next/link'

export function ServiceShowcase() {
  const serviceFeatures = [
    {
      icon: FileText,
      title: "Comprehensive Reports",
      description: "Institutional-grade analysis covering financial, operational, and strategic factors",
      features: [
        "Executive summaries with key findings",
        "Risk assessment matrices", 
        "Market positioning analysis",
        "Financial model validation"
      ]
    },
    {
      icon: BarChart3,
      title: "Interactive Analytics",
      description: "Dynamic dashboards with real-time insights and customizable metrics",
      features: [
        "Portfolio performance tracking",
        "Market intelligence feeds",
        "Comparative analysis tools",
        "ROI projection models"
      ]
    },
    {
      icon: TrendingUp,
      title: "Growth Intelligence",
      description: "Strategic roadmaps and actionable recommendations for value creation",
      features: [
        "Revenue optimization strategies",
        "Operational efficiency plans",
        "Market expansion roadmaps",
        "Exit preparation frameworks"
      ]
    }
  ]

  const platformBenefits = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your sensitive investment data protected with enterprise-grade encryption and compliance standards."
    },
    {
      icon: Clock,
      title: "48-Hour Delivery", 
      description: "Rapid turnaround on critical analysis without compromising institutional-grade quality."
    },
    {
      icon: Award,
      title: "Boutique Excellence",
      description: "Personalized service and senior-level attention that large firms simply cannot provide."
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="container-xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            <span className="text-gradient">Intelligence Platform</span>
            <br />
            Built for Sophisticated Investors
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Access institutional-grade analysis through our secure platform designed specifically for private equity, family offices, and investment professionals.
          </p>
        </div>

        {/* Service Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {serviceFeatures.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-neutral-100 group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary-600" />
              </div>
              
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-neutral-600">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Platform Benefits */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft border border-neutral-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-neutral-900 mb-4">
              Why Choose Our Platform
            </h3>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The boutique advantage: premium quality, personalized service, and rapid execution.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {platformBenefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                  <benefit.icon className="w-8 h-8 text-primary-600" />
                </div>
                
                <h4 className="text-xl font-bold text-neutral-900 mb-4">
                  {benefit.title}
                </h4>
                
                <p className="text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA to Dashboard */}
          <div className="text-center bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-neutral-900 mb-4">
              Ready to Access Professional-Grade Intelligence?
            </h4>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Join sophisticated investors who rely on our platform for critical investment decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Request Sample Report
              </Link>
              <Link href="/dashboard" className="btn-secondary">
                View Platform Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}