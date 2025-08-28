import React, { useState } from "react";
import { faker } from "@faker-js/faker";

export default function DataGenerator() {
  const [data, setData] = useState([]);

  // Function to generate random data
  const generateData = () => {
    const fakeData = Array.from({ length: 5 }, () => ({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
    }));
    setData(fakeData);
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-3xl">
      <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
        Fake Data Generator
      </h1>

      <div className="flex justify-center mb-4">
        <button
          onClick={generateData}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Generate Data
        </button>
      </div>

      {data.length > 0 && (
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="border border-gray-300 px-3 py-2">Name</th>
              <th className="border border-gray-300 px-3 py-2">Email</th>
              <th className="border border-gray-300 px-3 py-2">Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">{item.name}</td>
                <td className="border border-gray-300 px-3 py-2">{item.email}</td>
                <td className="border border-gray-300 px-3 py-2">{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
