import getAllCardsData from '@/lib/getAllCardsData';
import Image from 'next/image';
import React from 'react';

export default async function Cards() {
  const data = await getAllCardsData();

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((dt) => (
        <div
          key={dt.id}
          className="rounded overflow-hidden shadow border border-gray-200 bg-white dark:bg-[#111] transition"
        >
          <Image
            src={dt.image}
            alt={dt.title}
            width={400}
            height={200}
            className="w-full h-40 object-cover"
          />
          <div className="p-4 space-y-1 text-sm">
            <h2 className="text-base font-semibold">{dt.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">Price: ${dt.price}</p>
            <p className="text-gray-600 dark:text-gray-300">Location: {dt.location}</p>
            <p className="text-gray-600 dark:text-gray-300">Type: {dt.type}</p>
            <button className="bg-primary text-white w-full py-2 mt-3 rounded font-medium hover:opacity-90 transition">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
