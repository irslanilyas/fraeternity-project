// src/components/dashboard/MetricCard.tsx
import { LucideIcon } from 'lucide-react'

interface MetricCardProps {
  label: string
  value: string
  icon: LucideIcon
  change: string
}

export function MetricCard({ label, value, icon: Icon, change }: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center">
        <div className="p-3 rounded-full bg-gray-200 bg-opacity-75">
          <Icon className="h-8 w-8 text-gray-600" />
        </div>
        <div className="mx-5">
          <h4 className="text-2xl font-semibold text-gray-700">{value}</h4>
          <div className="text-gray-500">{label}</div>
        </div>
      </div>
      <div className="text-sm text-green-500 mt-2">{change}</div>
    </div>
  )
}