'use client'

import { 
  TrendingUp, 
  Target, 
  BarChart3, 
  Shield, 
  Globe, 
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Users
} from 'lucide-react'
import Link from 'next/link'

const ServicesPage = () => {
  const services = [
    {
      id: 'strategic-planning',
      title: 'Strategic Planning & Execution',
      subtitle: 'Transform vision into measurable results',
      description: 'Comprehensive strategic planning that aligns organizational capabilities with market opportunities to create sustainable competitive advantages.',
      icon: Target,
      features: [
        'Market Analysis & Competitive Intelligence',
        'Strategic Options Assessment',
        'Implementation Roadmapping',
        'Performance Monitoring Systems'
      ],
      outcomes: [
        { metric: '3x', label: 'Revenue Growth Acceleration' },
        { metric: '18mo', label: 'Average Implementation Timeline' }
      ],
      investment: 'Starting at $25,000',
      timeline: '8-12 weeks',
      emotionalQuestion: 'Can you afford to let competitors define your market position while you react instead of lead?'
    },
    {
      id: 'financial-analysis',
      title: 'Financial Analysis & Restructuring',
      subtitle: 'Optimize capital structure and financial performance',
      description: 'Advanced financial modeling and restructuring strategies to enhance profitability, manage risk, and optimize capital allocation.',
      icon: BarChart3,
      features: [
        'Financial Performance Diagnostics',
        'Cash Flow Optimization',
        'Capital Structure Analysis',
        'Investment Evaluation Frameworks'
      ],
      outcomes: [
        { metric: '40%', label: 'Cost Reduction Achieved' },
        { metric: '$50M+', label: 'Capital Optimized' }
      ],
      investment: 'Starting at $35,000',
      timeline: '6-10 weeks',
      emotionalQuestion: 'Is poor financial performance keeping you awake at night, wondering if you will make payroll next quarter?'
    },
    {
      id: 'market-research',
      title: 'Market Research & Intelligence',
      subtitle: 'Uncover hidden opportunities and market dynamics',
      description: 'Deep market analysis combining quantitative research with behavioral insights to identify untapped opportunities and competitive vulnerabilities.',
      icon: Globe,
      features: [
        'Market Sizing & Segmentation',
        'Customer Behavior Analysis',
        'Competitive Landscape Mapping',
        'Opportunity Identification'
      ],
      outcomes: [
        { metric: '15', label: 'New Markets Identified' },
        { metric: '250%', label: 'Market Share Growth' }
      ],
      investment: 'Starting at $20,000',
      timeline: '4-8 weeks',
      emotionalQuestion: 'Are you making million-dollar decisions based on assumptions rather than market intelligence?'
    },
    {
      id: 'transformation',
      title: 'Business Transformation',
      subtitle: 'Reimagine business models for digital age',
      description: 'End-to-end transformation initiatives that modernize operations, culture, and capabilities to thrive in evolving market conditions.',
      icon: Zap,
      features: [
        'Digital Transformation Strategy',
        'Operational Excellence Programs',
        'Change Management',
        'Technology Integration Planning'
      ],
      outcomes: [
        { metric: '60%', label: 'Efficiency Improvement' },
        { metric: '24mo', label: 'Transformation Timeline' }
      ],
      investment: 'Starting at $50,000',
      timeline: '12-18 weeks',
      emotionalQuestion: 'Will your business become irrelevant while others embrace the digital transformation you have been postponing?'
    },
    {
      id: 'risk-assessment',
      title: 'Risk Assessment & Mitigation',
      subtitle: 'Protect value through proactive risk management',
      description: 'Comprehensive risk analysis and mitigation strategies to protect enterprise value and ensure business continuity.',
      icon: Shield,
      features: [
        'Enterprise Risk Assessment',
        'Scenario Planning & Stress Testing',
        'Risk Mitigation Strategies',
        'Crisis Management Planning'
      ],
      outcomes: [
        { metric: '85%', label: 'Risk Reduction Achieved' },
        { metric: '$100M+', label: 'Value Protected' }
      ],
      investment: 'Starting at $30,000',
      timeline: '6-12 weeks',
      emotionalQuestion: 'Can you sleep peacefully knowing unexpected risks could destroy everything you have built overnight?'
    },
    {
      id: 'investment-analysis',
      title: 'Investment Analysis & Due Diligence',
      subtitle: 'Maximize returns through intelligent capital allocation',
      description: 'Rigorous investment evaluation and due diligence processes to identify high-value opportunities and optimize portfolio performance.',
      icon: TrendingUp,
      features: [
        'Investment Opportunity Assessment',
        'Financial Due Diligence',
        'Valuation Analysis',
        'Portfolio Optimization'
      ],
      outcomes: [
        { metric: '180%', label: 'Average Investment Return' },
        { metric: '$2.8B+', label: 'Assets Under Analysis' }
      ],
      investment: 'Starting at $40,000',
      timeline: '8-16 weeks',
      emotionalQuestion: 'Are you watching inferior competitors raise millions while your superior business struggles for capital?'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Diagnosis',
      description: 'Comprehensive assessment of current state, challenges, and objectives',
      duration: '1-2 weeks'
    },
    {
      step: '02', 
      title: 'Analysis & Strategy Development',
      description: 'Data-driven analysis and strategic option development',
      duration: '3-6 weeks'
    },
    {
      step: '03',
      title: 'Implementation Planning',
      description: 'Detailed roadmap with milestones, resources, and success metrics',
      duration: '1-2 weeks'
    },
    {
      step: '04',
      title: 'Execution Support',
      description: 'Ongoing guidance and optimization throughout implementation',
      duration: 'Ongoing'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-r from-blue-900 to-slate-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white/90 font-medium">
              <Target className="w-5 h-5" />
              <span>Comprehensive Business Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Strategic Services
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                That Deliver Results
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Are you tired of watching competitors outmaneuver you while your strategies gather dust? 
              We transform business challenges into competitive advantages that your rivals cannot replicate.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">
              Is Your Business Falling Behind While You Wait for The Right Time?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="card-modern p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Are you losing market share every day you hesitate?
                </h3>
                <p className="text-gray-600">
                  While you analyze, competitors are capturing your customers. 
                  Every month of inaction costs you opportunities that may never return.
                </p>
              </div>
              
              <div className="card-modern p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Is poor strategy costing you millions in lost revenue?
                </h3>
                <p className="text-gray-600">
                  Bad decisions compound daily. The difference between mediocre and exceptional 
                  strategy is not just profit—it is your company&apos;s survival.
                </p>
              </div>
              
              <div className="card-modern p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Do you trust your current advisors with your company&apos;s future?
                </h3>
                <p className="text-gray-600">
                  Generic advice leads to generic results. Your business deserves 
                  strategies as unique and ambitious as your vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Will You Choose Certainty Over Hope?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop gambling with your business future. Choose proven strategies that guarantee results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="card-modern p-8 group hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-blue-600 font-semibold mb-3">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                    <p className="text-blue-800 font-semibold italic">
                      {service.emotionalQuestion}
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Capabilities</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 2).map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Proven Results</h4>
                      <div className="space-y-1">
                        {service.outcomes.map((outcome, idx) => (
                          <div key={idx} className="flex justify-between text-sm">
                            <span className="text-gray-600">{outcome.label}</span>
                            <span className="font-bold text-blue-600">{outcome.metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                      <div><strong>Investment:</strong> {service.investment}</div>
                      <div><strong>Timeline:</strong> {service.timeline}</div>
                    </div>
                    
                    <Link 
                      href={`/services/${service.id}`}
                      className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      <span>Transform Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Risk Your Future on Anyone Else?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When your company&apos;s survival depends on the next strategic decision, 
              do you not deserve advisors who stake their reputation on your success?
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: '$2.8B+', label: 'Client Assets Protected & Grown', icon: Shield },
              { metric: '98%', label: 'Client Retention Rate', icon: Users },
              { metric: '48hrs', label: 'Response Time Guarantee', icon: Clock },
              { metric: '127%', label: 'Average ROI Improvement', icon: TrendingUp }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Are You Ready to Stop Hoping and Start Knowing?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our proven methodology eliminates guesswork and delivers predictable results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/80 mb-2">{step.description}</p>
                <p className="text-white/60 text-sm font-medium">{step.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Will You Act Before Your Competitors Do?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Every day you wait is another day your competitors gain ground. 
            The question is not whether you need strategic help—it is whether you will get it before it is too late.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/book"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Schedule Emergency Strategy Session</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link 
              href="/contact"
              className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors"
            >
              Request Confidential Assessment
            </Link>
          </div>
          
          <p className="text-gray-400 text-sm mt-6">
            Free 30-minute consultation • No obligation • Complete confidentiality guaranteed
          </p>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage