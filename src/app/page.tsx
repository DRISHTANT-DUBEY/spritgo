import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 to-red-50">
      <main className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
        <h1 className="text-4xl font-bold text-orange-600 mb-2">🚩 Spirigo</h1>
        <p className="text-gray-600 mb-8">Priest Booking & Ritual Service Platform</p>
        
        <div className="flex flex-col gap-4 w-full">
          <Link
            href="/customer"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Customer Portal
          </Link>
          <Link
            href="/priest"
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
          >
            Priest Portal
          </Link>
        </div>
      </main>
    </div>
  );
}
