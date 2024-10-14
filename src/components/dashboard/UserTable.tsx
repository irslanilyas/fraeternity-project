// src/components/dashboard/UserTable.tsx

import { User, AlertCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface UserData {
  id: number
  name: string
  role: string
  email: string
  phone: string
  locality: string
  leads: number
  salesClosed: string
}

interface UserTableProps {
  users: UserData[]
}

const roleColors: Record<string, string> = {
  Superadmin: 'text-green-500',
  Salesperson: 'text-blue-500',
  Designer: 'text-purple-500',
  Marketing: 'text-yellow-500',
  Workshop: 'text-indigo-500',
}

export function UserTable({ users }: UserTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Locality</TableHead>
          <TableHead>Leads</TableHead>
          <TableHead>Sales Closed</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            {/* Use optional chaining and default value */}
            <TableCell className={roleColors[user.role] ?? 'text-gray-500'}>{user.role}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.locality}</TableCell>
            <TableCell>{user.leads}</TableCell>
            <TableCell>{user.salesClosed}</TableCell>
            <TableCell>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <AlertCircle className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
