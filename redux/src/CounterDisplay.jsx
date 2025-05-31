import React from 'react';
import { useSelector } from 'react-redux';

export function CounterDisplay() {
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Counter Display</h2>
      <p className="text-2xl font-bold text-blue-600">{count}</p>
    </div>
  );
}