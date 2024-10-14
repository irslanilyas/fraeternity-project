// src/components/layout/Sidebar.tsx
import Link from 'next/link'
import { BarChart2, Users, ShoppingBag, DollarSign, Palette, Tool, Package, FileText, Calendar, AlertCircle } from 'lucide-react'

const navItems = [
  { icon: BarChart2, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Users', href: '/dashboard/users' },
  { icon: ShoppingBag, label: 'Orders', href: '/dashboard/orders' },
  { icon: DollarSign, label: 'Sales', href: '/dashboard/sales' },
  { icon: Palette, label: 'Design', href: '/dashboard/design' },
  { icon: Tool, label: 'Workshop', href: '/dashboard/workshop' },
  { icon: Package, label: 'Stocking', href: '/dashboard/stocking' },
  { icon: FileText, label: 'Accounting', href: '/dashboard/accounting' },
  { icon: Calendar, label: 'Calendar', href: '/dashboard/calendar' },
  { icon: AlertCircle, label: 'Defects', href: '/dashboard/defects' },
]

export function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-red-600">FRAETERNITY</h1>
      </div>
      <nav className="mt-6">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100"
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}