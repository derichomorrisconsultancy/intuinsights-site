'use client'

import { useState } from 'react'
import { 
  Target, 
  Award, 
  Users, 
  TrendingUp, 
  Globe, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Brain,
  LineChart,
  Building2
} from 'lucide-react'
import Link from 'next/link'

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'leadership', label: 'Leadership', icon: Users },
    { id: 'methodology', label: 'Methodology', icon: Brain },
    { id: 'values', label: 'Values', icon: Shield },
    { id: 'track-record', label: 'Track Record', icon: Award },
  ]

  const values = [
    {
      title: 'Data-Driven Precision',
      description: 'Every recommendation backed by quantitative analysis and market intelligence',
      icon: LineChart,
      metrics: '1000+ data points per analysis'
    },
    {
      title: 'Execution Excellence',
      description: 'Strategic insights translated into actionable implementation roadmaps',
      icon: Target,
      metrics: '95% implementation success rate'
    },
    {
      title: 'Client-Centric Partnership',
      description: 'Your success defines our success - aligned incentives, transparent communication',
      icon: Users,
      metrics: '98% client retention rate'
    },
    {
      title: 'Innovation Catalyst',
      description: 'Identifying opportunities others miss through contrarian thinking',
      icon: Zap,
      metrics: '3x average market returns'
    }
  ]

  const achievements = [
    { metric: '$2.8B+', label: 'Assets Under Advisory', period: 'Cumulative' },
    { metric: '300+', label: 'Strategic Transformations', period: 'Since 2020' },
    { metric: '127%', label: 'Average ROI Improvement', period: '24-month average' },
    { metric: '48hrs', label: 'Response Time', period: 'Guaranteed SLA' },
  ]

  const industries = [
    'Financial Services', 'Technology', 'Healthcare', 'Manufacturing', 
    'Real Estate', 'Energy', 'Retail', 'Professional Services'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white/90 font-medium">
              <Building2 className="w-5 h-5" />
              <span>Strategic Business Intelligence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Redefining Business
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Consulting Excellence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              We don&apos;t just provide recommendations—we architect transformative strategies that deliver 
              measurable competitive advantage in today&apos;s rapidly evolving market landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {activeTab === 'overview' && (
          <div className="space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                To empower ambitious organizations with strategic intelligence and execution capabilities 
                that create sustainable competitive advantages and accelerate long-term value creation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="card-modern p-8 text-center group">
                  <div className="text-4xl font-black text-blue-600 mb-2">
                    {achievement.metric}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-gray-500">
                    {achievement.period}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Industry Expertise
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                    <span className="font-semibold text-gray-700">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'leadership' && (
          <div className="space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven executives with deep domain expertise and a track record of delivering transformational results.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-900">Dericho Morris</h3>
                  <p className="text-xl text-blue-600 font-semibold">Founder & Managing Principal</p>
                </div>
                
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Strategic consultant with 15+ years of experience driving business transformation 
                    across Fortune 500 companies and high-growth startups. Former executive at leading 
                    consulting firms with specialized expertise in financial services and technology sectors.
                  </p>
                  <p>
                    Track record includes leading $500M+ strategic initiatives, 50+ successful M&A transactions, 
                    and developing proprietary methodologies for market entry and competitive positioning.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Education & Credentials</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>MBA, Strategic Management - Wharton School</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>CFA Charter Holder</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Certified Management Consultant (CMC)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">DM</span>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-green-500 text-white p-4 rounded-xl shadow-xl">
                  <div className="text-lg font-bold">15+</div>
                  <div className="text-xs opacity-90">Years Experience</div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white p-4 rounded-xl shadow-xl">
                  <div className="text-lg font-bold">$2.8B+</div>
                  <div className="text-xs opacity-90">Assets Advised</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'methodology' && (
          <div className="space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">The Morris Methodology</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our proprietary approach combines quantitative analysis, behavioral insights, and 
                implementation science to deliver sustainable competitive advantages.
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  step: '01',
                  title: 'Strategic Intelligence Gathering',
                  description: 'Comprehensive market analysis, competitive landscape mapping, and internal capability assessment using proprietary frameworks.',
                  deliverables: ['Market Size Analysis', 'Competitive Positioning Map', 'Capability Gap Assessment'],
                  icon: Brain
                },
                {
                  step: '02', 
                  title: 'Quantitative Modeling & Scenario Planning',
                  description: 'Advanced financial modeling, risk assessment, and scenario planning to identify optimal strategic pathways.',
                  deliverables: ['Financial Impact Models', 'Risk-Return Analysis', 'Strategic Options Framework'],
                  icon: LineChart
                },
                {
                  step: '03',
                  title: 'Implementation Architecture',
                  description: 'Detailed implementation roadmaps with clear milestones, resource requirements, and success metrics.',
                  deliverables: ['Implementation Roadmap', 'Resource Allocation Plan', 'KPI Dashboard'],
                  icon: Target
                },
                {
                  step: '04',
                  title: 'Execution Support & Optimization',
                  description: 'Ongoing monitoring, course correction, and optimization to ensure sustained value creation.',
                  deliverables: ['Performance Tracking', 'Continuous Optimization', 'Strategic Pivots'],
                  icon: TrendingUp
                }
              ].map((phase, index) => {
                const Icon = phase.icon
                return (
                  <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl font-bold">
                          {phase.step}
                        </div>
                        <Icon className="w-12 h-12 text-blue-600" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Key Deliverables:</h4>
                        <ul className="space-y-1">
                          {phase.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="w-full h-80 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl flex items-center justify-center">
                        <Icon className="w-24 h-24 text-blue-600" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {activeTab === 'values' && (
          <div className="space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide every client engagement and strategic recommendation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="card-modern p-8 group">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                        <div className="text-sm font-semibold text-blue-600 mb-3">{value.metrics}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {activeTab === 'track-record' && (
          <div className="space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Proven Track Record</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quantifiable results across diverse industries and business challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  category: 'Revenue Growth',
                  results: [
                    { metric: '300%', description: 'Average revenue increase' },
                    { metric: '18 months', description: 'Time to achieve results' },
                    { metric: '95%', description: 'Success rate' }
                  ]
                },
                {
                  category: 'Cost Optimization', 
                  results: [
                    { metric: '40%', description: 'Average cost reduction' },
                    { metric: '$50M+', description: 'Total savings generated' },
                    { metric: '6 months', description: 'Implementation timeline' }
                  ]
                },
                {
                  category: 'Market Expansion',
                  results: [
                    { metric: '15', description: 'New markets entered' },
                    { metric: '127%', description: 'ROI on expansion' },
                    { metric: '24 months', description: 'Payback period' }
                  ]
                }
              ].map((category, index) => (
                <div key={index} className="card-modern p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{category.category}</h3>
                  <div className="space-y-4">
                    {category.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-1">{result.metric}</div>
                        <div className="text-sm text-gray-600">{result.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-6">Trusted Across Industries</h3>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                From Fortune 500 enterprises to high-growth startups, our strategies adapt to your unique market context.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                <span>Start Your Transformation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AboutPage