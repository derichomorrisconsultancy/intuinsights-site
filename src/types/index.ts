// Form Types
export interface SampleRequestFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company: string
  position: string
  investmentFocus: string
  aum: string
  urgency: string
  specificNeeds?: string
}

export interface ContactFormData {
  name: string
  email: string
  company: string
  message: string
  subject?: string
}

// Report Generation Types
export interface ReportGenerationRequest {
  targetCompany: string
  industry: string
  dealSize: string
  reportType: 'due-diligence' | 'growth-strategy' | 'exit-planning' | 'market-intelligence' | 'full-acquisition'
  clientName: string
  clientEmail: string
  urgency: 'standard' | 'expedited' | 'rush'
  specificRequirements?: string
  financialData?: FinancialData
  marketContext?: string
}

export interface FinancialData {
  revenue: number
  ebitda: number
  growthRate: number
  employees: number
  marketCap?: number
  debtToEquity?: number
}

export interface ReportSection {
  id: string
  title: string
  content: string
  charts?: ChartData[]
  status: 'pending' | 'generating' | 'completed' | 'review'
}

export interface GeneratedReport {
  id: string
  title: string
  targetCompany: string
  reportType: string
  status: 'draft' | 'in-progress' | 'completed' | 'delivered'
  sections: ReportSection[]
  executiveSummary: string
  keyFindings: string[]
  recommendations: string[]
  createdAt: string
  completedAt?: string
  clientId: string
  pricing: {
    basePrice: number
    rushFee?: number
    totalPrice: number
  }
}

export interface ChartData {
  type: 'line' | 'bar' | 'pie' | 'scatter'
  title: string
  data: any[]
  config?: any
}

// Navigation Types
export interface NavigationItem {
  name: string
  href: string
  submenu?: NavigationSubItem[]
}

export interface NavigationSubItem {
  name: string
  href: string
}

// Dashboard Types
export interface DashboardMetric {
  label: string
  value: string
  change: string
  trend: 'up' | 'down'
  icon: any
}

export interface ClientProject {
  id: string
  name: string
  status: 'active' | 'completed' | 'pending'
  progress: number
  dueDate: string
  value: number
}

// User Types
export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'analyst' | 'client'
  company?: string
  avatar?: string
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Report Template Types
export interface ReportTemplate {
  id: string
  name: string
  description: string
  sections: string[]
  estimatedPages: number
  basePrice: number
  deliveryTime: string
}

// LLM Integration Types
export interface LLMPrompt {
  systemPrompt: string
  userPrompt: string
  context?: any
  temperature?: number
  maxTokens?: number
}

export interface LLMResponse {
  content: string
  usage: {
    promptTokens: number
    completionTokens: number
    totalTokens: number
  }
  model: string
}