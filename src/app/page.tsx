// src/app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to Your Dashboard Project</h1>
      <p className="text-xl mb-8">This is the landing page for your application.</p>
      <Link 
        href="/dashboard" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to Dashboard
      </Link>
    </main>
  )
}