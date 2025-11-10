import Link from "next/link";

export default function CustomerHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-orange-600 mb-2">🚩 Spirigo</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customer Portal</h2>
          <p className="text-gray-600">Book priests and ritual services with ease</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">🏛️ Book A Priest</h3>
            <p className="text-gray-600 mb-4">Find and book qualified priests for your religious ceremonies</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              Find Priests
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">🕉️ Ritual Services</h3>
            <p className="text-gray-600 mb-4">Explore various puja and ceremony services</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Browse Services
            </button>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/customer/dashboard"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors mr-4"
          >
            Go to Dashboard
          </Link>
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