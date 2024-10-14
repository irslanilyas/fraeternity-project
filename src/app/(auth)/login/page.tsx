// src/app/(auth)/login/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
}

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        {/* We'll add the login form here later */}
        <p>Login form will be added here.</p>
      </div>
    </div>
  )
}