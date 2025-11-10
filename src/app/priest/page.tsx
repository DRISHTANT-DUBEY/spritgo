import Link from "next/link";

export default function PriestHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-yellow-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-600 mb-2">🚩 Spirigo</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Priest Portal</h2>
          <p className="text-gray-600">Manage your services and connect with devotees</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">📅 Manage Bookings</h3>
            <p className="text-gray-600 mb-4">View and manage your upcoming ceremony bookings</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              View Schedule
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">🕉️ Service Profile</h3>
            <p className="text-gray-600 mb-4">Update your services, rates, and availability</p>
            <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
              Edit Profile
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">💰 Earnings</h3>
            <p className="text-gray-600 mb-4">Track your earnings and payment history</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              View Earnings
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">📊 Analytics</h3>
            <p className="text-gray-600 mb-4">View booking trends and performance metrics</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              View Stats
            </button>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/"
            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}