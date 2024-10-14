// src/app/dashboard/page.tsx
import { Sidebar } from '@/components/layout/Sidebar'
import { Header } from '@/components/layout/Header'
import { MetricCard } from '@/components/dashboard/MetricCard'
import { UserTable } from '@/components/dashboard/UserTable'
import { Users, User, ShoppingBag, FileText, UserPlus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

// Mock data for demonstration
const mockUsers = [
  { id: 1, name: 'Atif Abbasi', role: 'Superadmin', email: 'Atifsajjad32@gmail.com', phone: '(301) 580-7410', locality: 'Madrid', leads: 12, salesClosed: '154/200' },
  { id: 2, name: 'Liam Nuvallie', role: 'Salesperson', email: 'iva838@outlook.com', phone: '(406) 382-2670', locality: 'Cataluña', leads: 12, salesClosed: '154/200' },
  // Add more mock users as needed
]

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col  overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-3xl font-medium text-gray-700">Welcome Atif, View Your Users</h3>
            <p className="text-gray-500 mt-2">You can view all of your business at a glance in this dashboard, feel free to navigate through other options from the sidebar.</p>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <MetricCard label="Total Users" value="250" icon={Users} change="+20.1% from last month" />
              <MetricCard label="Online Now" value="127" icon={User} change="+20.1% from last month" />
              <MetricCard label="Returns" value="24" icon={ShoppingBag} change="+20.1% from last month" />
            </div>

            <div className="mt-8">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-semibold text-gray-700">Users</h4>
                <div className="flex space-x-4">
                  <Input type="text" placeholder="Search" className="w-64" />
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select locality" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Every Locality">Every Locality</SelectItem>
                      <SelectItem value="Madrid">Madrid</SelectItem>
                      <SelectItem value="Cataluña">Cataluña</SelectItem>
                      <SelectItem value="Andalucía">Andalucía</SelectItem>
                      <SelectItem value="Galicia">Galicia</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    Export To Excel
                    <FileText className="ml-2 h-4 w-4" />
                  </Button>
                  <Button>
                    Add user
                    <UserPlus className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <UserTable users={mockUsers} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}