// src/app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar placeholder */}
      <div className="w-64 bg-white shadow-md">
        {/* Add sidebar content here */}
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header placeholder */}
        <header className="bg-white shadow-sm h-16 flex items-center px-6">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}