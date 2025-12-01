'use client'

import { DollarSign, TrendingUp, Users, Award, Building, Globe } from 'lucide-react'

export function Stats() {
  const mainStats = [
    {
      icon: DollarSign,
      value: '$2.3B+',
      label: 'Portfolio Value Analyzed',
      description: 'Across 200+ transactions and investments',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: TrendingUp,
      value: '23.4%',
      label: 'Average IRR Improvement',
      description: 'Measurable portfolio performance enhancement',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      icon: Users,
      value: '150+',
      label: 'Investment Partners',
      description: 'Trusted by leading PE firms and family offices',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Award,
      value: '45+',
      label: 'Successful Exits',
      description: 'Strategic exits delivering exceptional returns',
      gradient: 'from-gold-500 to-gold-600'
    }
  ]

  const clientTypes = [
    {
      icon: Building,
      title: 'Private Equity Firms',
      count: '75+',
      description: 'Mid-market to large-cap PE partners'
    },
    {
      icon: Users,
      title: 'Family Offices',
      count: '45+',
      description: 'Ultra-high net worth family offices'
    },
    {
      icon: TrendingUp,
      title: 'Investment Banks',
      count: '25+',
      description: 'Bulge bracket and boutique banks'
    },
    {
      icon: Globe,
      title: 'Sovereign Funds',
      count: '12+',
      description: 'National and regional investment funds'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 via-white to-primary-50">
      <div className="container-xl">
        {/* Main Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {mainStats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-8 bg-white rounded-3xl shadow-soft hover:shadow-medium transition-all duration-300 group border border-white/50"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-4xl font-bold text-neutral-900 mb-2">
                {stat.value}
              </div>
              
              <div className="text-lg font-semibold text-neutral-800 mb-2">
                {stat.label}
              </div>
              
              <div className="text-sm text-neutral-600 leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Client Breakdown */}
        <div className="bg-white rounded-3xl shadow-soft p-8 lg:p-12 border border-neutral-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-neutral-900 mb-4">
              Trusted by Leading Investment Institutions
            </h3>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our client base spans the full spectrum of sophisticated investors, from emerging managers to global institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {clientTypes.map((client, index) => (
              <div 
                key={client.title}
                className="text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <client.icon className="w-7 h-7 text-primary-600" />
                </div>
                
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  {client.count}
                </div>
                
                <div className="font-semibold text-neutral-900 mb-2">
                  {client.title}
                </div>
                
                <div className="text-sm text-neutral-600">
                  {client.description}
                </div>
              </div>
            ))}
          </div>

          {/* Geographic Reach */}
          <div className="border-t border-neutral-100 pt-8">
            <div className="text-center mb-8">
              <h4 className="text-xl font-bold text-neutral-900 mb-2">
                Global Reach
              </h4>
              <p className="text-neutral-600">
                Serving clients across major financial centers worldwide
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-neutral-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                North America (65%)
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                Europe (25%)
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                Asia-Pacific (10%)
              </div>
            </div>
          </div>
        </div>

        {/* Recognition */}
        <div className="mt-16 text-center">
          <h4 className="text-xl font-bold text-neutral-900 mb-8">
            Industry Recognition
          </h4>
          
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {/* Replace with actual award logos/text */}
            <div className="text-neutral-500 font-semibold">FORBES TOP ADVISOR</div>
            <div className="text-neutral-500 font-semibold">PE HUB AWARD</div>
            <div className="text-neutral-500 font-semibold">INSTITUTIONAL INVESTOR</div>
            <div className="text-neutral-500 font-semibold">FAMILY OFFICE MAGAZINE</div>
          </div>
        </div>
      </div>
    </section>
  )
}