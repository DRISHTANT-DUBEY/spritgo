import Link from "next/link";

export default function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Customer Dashboard</h1>
          <p className="text-gray-600">Manage your bookings and spiritual journey</p>
        </header>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Recent Bookings */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">📅 Recent Bookings</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-orange-400 pl-4">
                <p className="font-medium text-gray-800">Ganga Aarti</p>
                <p className="text-sm text-gray-600">Tomorrow at 6:00 PM</p>
              </div>
              <div className="border-l-4 border-red-400 pl-4">
                <p className="font-medium text-gray-800">Satyanarayan Puja</p>
                <p className="text-sm text-gray-600">Dec 15, 2024</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">⚡ Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-orange-500 text-white p-3 rounded hover:bg-orange-600 text-left">
                Book a Priest
              </button>
              <button className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 text-left">
                View Services
              </button>
              <button className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600 text-left">
                Payment History
              </button>
            </div>
          </div>

          {/* Profile Status */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">👤 Profile</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Profile Complete:</span>
                <span className="text-green-600 font-medium">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
              </div>
              <button className="text-blue-500 hover:underline">
                Complete Profile
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/customer"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors mr-4"
          >
            Back to Customer Portal
          </Link>
          <Link 
            href="/"
            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}