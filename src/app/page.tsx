'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-8 space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-2">🎓 Result Processing System</h1>
          <p className="text-gray-600">Manage exams, view results, and student records efficiently.</p>
        </header>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link
            href="/auth/login"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition"
          >
            Login
          </Link>
          <Link
            href="/auth/register"
            className="px-6 py-3 bg-green-600 text-white rounded-lg text-center hover:bg-green-700 transition"
          >
            Register
          </Link>
          <Link
            href="/result"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg text-center hover:bg-indigo-700 transition"
          >
            View Results
          </Link>
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">📊 Recent Exam Results</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300 rounded-lg shadow-sm">
              <thead className="bg-gray-200 text-gray-700 text-left">
                <tr>
                  <th className="px-4 py-2">Student Name</th>
                  <th className="px-4 py-2">Roll</th>
                  <th className="px-4 py-2">Subject</th>
                  <th className="px-4 py-2">Marks</th>
                  <th className="px-4 py-2">Grade</th>
                </tr>
              </thead>
              <tbody className="bg-white text-gray-800">
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">Fahim Ahmed</td>
                  <td className="px-4 py-2">202101</td>
                  <td className="px-4 py-2">Mathematics</td>
                  <td className="px-4 py-2">85</td>
                  <td className="px-4 py-2">A</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">Sadia Rahman</td>
                  <td className="px-4 py-2">202102</td>
                  <td className="px-4 py-2">Physics</td>
                  <td className="px-4 py-2">78</td>
                  <td className="px-4 py-2">B+</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2">Tanvir Islam</td>
                  <td className="px-4 py-2">202103</td>
                  <td className="px-4 py-2">Chemistry</td>
                  <td className="px-4 py-2">92</td>
                  <td className="px-4 py-2">A+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
