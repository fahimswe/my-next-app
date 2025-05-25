'use client';

import React from 'react';

type SubjectResult = {
  name: string;
  marksObtained: number;
  maxMarks: number;
};

const subjects: SubjectResult[] = [
  { name: 'Mathematics', marksObtained: 85, maxMarks: 100 },
  { name: 'Physics', marksObtained: 78, maxMarks: 100 },
  { name: 'Chemistry', marksObtained: 82, maxMarks: 100 },
  { name: 'English', marksObtained: 90, maxMarks: 100 },
  { name: 'Computer Science', marksObtained: 95, maxMarks: 100 },
];

function calculateGrade(marks: number): string {
  if (marks >= 90) return 'A+';
  if (marks >= 80) return 'A';
  if (marks >= 70) return 'B';
  if (marks >= 60) return 'C';
  if (marks >= 50) return 'D';
  return 'F';
}

function calculatePercentage(totalObtained: number, totalMax: number): number {
  return (totalObtained / totalMax) * 100;
}

export default function ResultPage() {
  const totalObtained = subjects.reduce((acc, sub) => acc + sub.marksObtained, 0);
  const totalMax = subjects.reduce((acc, sub) => acc + sub.maxMarks, 0);
  const percentage = calculatePercentage(totalObtained, totalMax).toFixed(2);
  const overallGrade = calculateGrade(Number(percentage));

  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-50 to-white p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-indigo-900">Exam Results</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-gray-900">Student Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-900">
            <div><strong>Name:</strong> John Doe</div>
            <div><strong>Roll Number:</strong> 12345</div>
            <div><strong>Class:</strong> 10th Grade</div>
            <div><strong>Exam Session:</strong> Spring 2025</div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Subject-wise Results</h2>
          <table className="w-full text-left border-collapse text-gray-900">
            <thead>
              <tr className="bg-indigo-200">
                <th className="border px-4 py-2">Subject</th>
                <th className="border px-4 py-2">Marks Obtained</th>
                <th className="border px-4 py-2">Maximum Marks</th>
                <th className="border px-4 py-2">Grade</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map(({ name, marksObtained, maxMarks }) => (
                <tr key={name} className="even:bg-indigo-100">
                  <td className="border px-4 py-2">{name}</td>
                  <td className="border px-4 py-2">{marksObtained}</td>
                  <td className="border px-4 py-2">{maxMarks}</td>
                  <td className="border px-4 py-2">{calculateGrade(marksObtained)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mt-8 p-4 bg-indigo-200 rounded-lg text-center">
          <p className="text-xl font-semibold text-gray-900">Total Marks: {totalObtained} / {totalMax}</p>
          <p className="text-xl font-semibold text-gray-900">Percentage: {percentage}%</p>
          <p className="text-2xl font-bold mt-2 text-indigo-900">
            Overall Grade: <span>{overallGrade}</span>
          </p>
          <p className="mt-4 text-gray-700 italic">
            {overallGrade === 'F' ? 'Unfortunately, you did not pass the exam.' : 'Congratulations on your performance!'}
          </p>
        </section>
      </div>
    </main>
  );
}
