'use client'

import { 
  Search, 
  TrendingUp, 
  Target, 
  Shield, 
  Clock, 
  Users,
  BarChart3,
  CheckCircle,
  Zap,
  Globe
} from 'lucide-react'

export function Features() {
  const primaryServices = [
    {
      icon: Search,
      title: 'Due Diligence Excellence',
      description: 'Comprehensive analysis covering financial, operational, strategic, and risk factors with institutional-grade rigor.',
      benefits: [
        'Financial model validation',
        'Market position assessment', 
        'Risk factor identification',
        'Synergy opportunity mapping'
      ],
      highlight: 'McKinsey-level analysis'
    },
    {
      icon: TrendingUp,
      title: 'Growth Roadmap Design',
      description: 'Strategic planning and execution frameworks to optimize portfolio company performance and value creation.',
      benefits: [
        'Revenue acceleration strategies',
        'Operational optimization',
        'Digital transformation',
        'Market expansion planning'
      ],
      highlight: '23.4% avg IRR improvement'
    },
    {
      icon: Target,
      title: 'Exit Strategy Planning',
      description: 'Value maximization strategies and exit preparation to ensure optimal returns for your portfolio.',
      benefits: [
        'Valuation optimization',
        'Strategic buyer identification',
        'Timing optimization',
        'Transaction preparation'
      ],
      highlight: '45+ successful exits'
    }
  ]

  const differentiators = [
    {
      icon: Shield,
      title: 'Institutional Security',
      description: 'Bank-level security protocols ensuring complete confidentiality of sensitive investment data.',
    },
    {
      icon: Clock,
      title: '48-Hour Delivery',
      description: 'Rapid turnaround without compromising quality, enabling time-sensitive investment decisions.',
    },
    {
      icon: Users,
      title: 'Senior-Level Team',
      description: 'Every project led by partners with 15+ years experience at top-tier consulting firms.',
    },
    {
      icon: BarChart3,
      title: 'Quantified Impact',
      description: 'Data-driven recommendations with clear ROI projections and performance metrics.',
    },
    {
      icon: Zap,
      title: 'Actionable Insights',
      description: 'Practical, implementable strategies that drive immediate value creation.',
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'International market intelligence and cross-border transaction expertise.',
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            <span className="text-gradient">Acquisition Intelligence</span>
            <br />
            That Drives Results
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Our boutique approach combines the analytical rigor of McKinsey with the personalized service and speed that large firms cannot match.
          </p>
        </div>

        {/* Primary Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {primaryServices.map((service, index) => (
            <div 
              key={service.title}
              className="card-hover p-8 group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary-600" />
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-neutral-900">
                    {service.title}
                  </h3>
                  <span className="text-xs font-semibold text-primary-600 bg-primary-100 px-2 py-1 rounded-full">
                    {service.highlight}
                  </span>
                </div>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-neutral-800 text-sm uppercase tracking-wide">
                  Key Deliverables
                </h4>
                {service.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center text-sm text-neutral-600">
                    <CheckCircle className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Differentiators Grid */}
        <div className="bg-gradient-to-br from-neutral-50 to-primary-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-neutral-900 mb-4">
              Why Leading Investors Choose Us
            </h3>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The boutique advantage: premium quality, personalized service, and rapid execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div 
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
                
                <h4 className="font-bold text-neutral-900 mb-2">
                  {item.title}
                </h4>
                
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Overview */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-neutral-900 mb-8">
            Our Proven Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your investment thesis and objectives' },
              { step: '02', title: 'Analysis', desc: 'Deep-dive research and comprehensive evaluation' },
              { step: '03', title: 'Insights', desc: 'Strategic recommendations and action plans' },
              { step: '04', title: 'Delivery', desc: 'Presentation and ongoing support as needed' }
            ].map((phase, index) => (
              <div key={phase.step} className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-lg">
                  {phase.step}
                </div>
                
                <h4 className="font-bold text-neutral-900 mb-2">
                  {phase.title}
                </h4>
                
                <p className="text-sm text-neutral-600">
                  {phase.desc}
                </p>
                
                {/* Connection Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-primary-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}