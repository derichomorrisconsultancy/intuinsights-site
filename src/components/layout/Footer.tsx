import Link from 'next/link'
import { TrendingUp, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  const footerLinks = {
    services: [
      { name: 'Due Diligence', href: '/services#due-diligence' },
      { name: 'Growth Strategy', href: '/services#growth-strategy' },
      { name: 'Exit Planning', href: '/services#exit-planning' },
      { name: 'Market Intelligence', href: '/services#market-intelligence' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Team', href: '/about#team' },
      { name: 'Careers', href: '/careers' },
    ],
    resources: [
      { name: 'Platform Demo', href: '/dashboard' },
      { name: 'Sample Reports', href: '/contact' },
      { name: 'Research Papers', href: '/resources' },
      { name: 'Market Updates', href: '/insights' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Data Security', href: '/security' },
      { name: 'Compliance', href: '/compliance' },
    ]
  }

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="container-xl py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">Dericho Morris</div>
                <div className="text-xs text-neutral-400 font-medium tracking-wide">
                  CONSULTANCY
                </div>
              </div>
            </Link>
            
            <p className="text-neutral-400 leading-relaxed mb-6 max-w-md">
              Premier acquisition intelligence platform serving sophisticated investors, 
              private equity firms, and family offices with institutional-grade analysis 
              and strategic guidance.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-neutral-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <a href="mailto:team@derichomorrisconsultancy.com" className="text-sm">
                  team@derichomorrisconsultancy.com
                </a>
              </div>
              <div className="flex items-center text-neutral-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <a href="tel:+1-555-0123" className="text-sm">
                  +1 (555) 012-3456
                </a>
              </div>
              <div className="flex items-center text-neutral-400">
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">
                  New York • London • Singapore
                </span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-neutral-800 pt-12 mt-12">
          <div className="max-w-2xl">
            <h3 className="font-bold text-xl mb-4">
              Stay Updated on Market Intelligence
            </h3>
            <p className="text-neutral-400 mb-6">
              Receive quarterly insights, market updates, and investment intelligence 
              directly from our research team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
              />
              <button className="btn-primary px-6 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            
            <p className="text-xs text-neutral-500 mt-3">
              Unsubscribe at any time. We respect your privacy and never share your information.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container-xl py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-neutral-400 text-sm mr-4">Follow us:</span>
              <a
                href="https://linkedin.com/company/dericho-morris"
                className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/derichomorris"
                className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-neutral-800 pt-6 mt-6 text-center">
            <p className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} Dericho Morris Consultancy. All rights reserved. 
              <span className="ml-4">
                Investment Intelligence Platform for Sophisticated Investors
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}