'use client'

import { useState } from 'react'
import { 
  Calendar, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  FileText, 
  Users, 
  TrendingUp,
  Mail,
  Phone,
  Download,
  Eye,
  ChevronRight
} from 'lucide-react'

interface DashboardData {
  totalClients: number
  activeProjects: number
  monthlyRevenue: number
  pendingTasks: number
  recentClients: Array<{
    id: string
    name: string
    email: string
    project: string
    status: 'Active' | 'Pending' | 'Completed'
    joinDate: string
  }>
  upcomingMeetings: Array<{
    id: string
    client: string
    title: string
    date: string
    time: string
    type: 'Consultation' | 'Review' | 'Planning'
  }>
  recentReports: Array<{
    id: string
    title: string
    client: string
    type: 'Financial Analysis' | 'Market Research' | 'Strategic Plan'
    status: 'Completed' | 'In Progress' | 'Review'
    date: string
  }>
  monthlyStats: Array<{
    month: string
    revenue: number
    clients: number
    projects: number
  }>
}

const mockData: DashboardData = {
  totalClients: 42,
  activeProjects: 18,
  monthlyRevenue: 125000,
  pendingTasks: 7,
  recentClients: [
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah@techstartup.com',
      project: 'Market Analysis',
      status: 'Active',
      joinDate: '2024-01-15'
    },
    {
      id: '2',
      name: 'Michael Chen',
      email: 'mchen@retailcorp.com',
      project: 'Financial Restructuring',
      status: 'Pending',
      joinDate: '2024-01-12'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      email: 'emily@greentech.io',
      project: 'Growth Strategy',
      status: 'Completed',
      joinDate: '2024-01-08'
    }
  ],
  upcomingMeetings: [
    {
      id: '1',
      client: 'TechStart Inc.',
      title: 'Q1 Strategy Review',
      date: '2024-01-20',
      time: '10:00 AM',
      type: 'Review'
    },
    {
      id: '2',
      client: 'Global Retail Corp',
      title: 'Initial Consultation',
      date: '2024-01-22',
      time: '2:00 PM',
      type: 'Consultation'
    }
  ],
  recentReports: [
    {
      id: '1',
      title: 'Market Entry Analysis - Southeast Asia',
      client: 'TechStart Inc.',
      type: 'Market Research',
      status: 'Completed',
      date: '2024-01-15'
    },
    {
      id: '2',
      title: 'Financial Performance Review Q4',
      client: 'Retail Corp',
      type: 'Financial Analysis',
      status: 'In Progress',
      date: '2024-01-18'
    }
  ],
  monthlyStats: [
    { month: 'Sep', revenue: 98000, clients: 38, projects: 15 },
    { month: 'Oct', revenue: 112000, clients: 40, projects: 17 },
    { month: 'Nov', revenue: 125000, clients: 42, projects: 18 },
    { month: 'Dec', revenue: 135000, clients: 45, projects: 20 }
  ]
}

export default function Dashboard() {
  const [data] = useState<DashboardData>(mockData)
  const [selectedTimeframe, setSelectedTimeframe] = useState('This Month')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
      case 'Completed':
        return 'bg-green-100 text-green-800'
      case 'Pending':
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800'
      case 'Review':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="mt-2 text-gray-600">Welcome back! Here's your business overview.</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <select 
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Quarter</option>
                <option>This Year</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Clients</p>
                <p className="text-3xl font-bold text-gray-900">{data.totalClients}</p>
                <p className="text-sm text-green-600 mt-1">+12% from last month</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Projects</p>
                <p className="text-3xl font-bold text-gray-900">{data.activeProjects}</p>
                <p className="text-sm text-green-600 mt-1">+5% from last month</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                <p className="text-3xl font-bold text-gray-900">{formatCurrency(data.monthlyRevenue)}</p>
                <p className="text-sm text-green-600 mt-1">+18% from last month</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <DollarSign className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Tasks</p>
                <p className="text-3xl font-bold text-gray-900">{data.pendingTasks}</p>
                <p className="text-sm text-red-600 mt-1">3 urgent</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Clients */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Recent Clients</h2>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View All
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {data.recentClients.map((client) => (
                    <div key={client.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-medium text-sm">
                            {client.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{client.name}</h3>
                          <p className="text-sm text-gray-600">{client.email}</p>
                          <p className="text-sm text-gray-500">{client.project}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(client.status)}`}>
                          {client.status}
                        </span>
                        <div className="flex space-x-2">
                          <button className="p-1 text-gray-400 hover:text-gray-600">
                            <Mail className="h-4 w-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-gray-600">
                            <Phone className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Meetings */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Upcoming Meetings</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {data.upcomingMeetings.map((meeting) => (
                    <div key={meeting.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-gray-900">{meeting.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(meeting.type)}`}>
                          {meeting.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{meeting.client}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {formatDate(meeting.date)} at {meeting.time}
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center justify-center">
                  View All Meetings
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Meeting
                  </button>
                  <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Create Report
                  </button>
                  <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                    <Users className="h-4 w-4 mr-2" />
                    Add Client
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="mt-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Recent Reports</h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View All Reports
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.recentReports.map((report) => (
                  <div key={report.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-gray-900">{report.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                        {report.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{report.client}</p>
                    <p className="text-xs text-gray-500 mb-3">{report.type}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{formatDate(report.date)}</span>
                      <div className="flex space-x-2">
                        <button className="p-1 text-gray-400 hover:text-gray-600">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-gray-600">
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="mt-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Performance Overview</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {data.monthlyStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <h3 className="text-sm font-medium text-gray-600 mb-2">{stat.month}</h3>
                    <div className="space-y-2">
                      <div>
                        <p className="text-lg font-bold text-gray-900">{formatCurrency(stat.revenue)}</p>
                        <p className="text-xs text-gray-500">Revenue</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-blue-600">{stat.clients}</p>
                        <p className="text-xs text-gray-500">Clients</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-green-600">{stat.projects}</p>
                        <p className="text-xs text-gray-500">Projects</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}