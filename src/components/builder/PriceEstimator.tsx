import React, { Component } from 'react';
import { usePCBuilder } from '../../context/PCBuilderContext';
import { ShoppingCartIcon, TrashIcon } from 'lucide-react';
const PriceEstimator = () => {
  const {
    build,
    clearBuild
  } = usePCBuilder();
  const componentCount = Object.keys(build.components).length;
  return <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Build Summary
      </h2>
      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Components Selected</span>
          <span className="font-medium">{componentCount} / 8</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-900 font-medium">Estimated Total</span>
          <span className="text-xl font-bold text-indigo-600">
            ${build.totalPrice.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="border-t pt-4 space-y-3">
        <button className="w-full bg-indigo-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700 transition flex items-center justify-center" disabled={componentCount === 0}>
          <ShoppingCartIcon className="h-5 w-5 mr-2" />
          Add to Cart
        </button>
        <button onClick={clearBuild} className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-md font-medium hover:bg-gray-50 transition flex items-center justify-center" disabled={componentCount === 0}>
          <TrashIcon className="h-4 w-4 mr-2" />
          Clear Build
        </button>
      </div>
      <div className="mt-4 text-xs text-gray-500">
        * Prices are estimates and may vary. Tax and shipping not included.
      </div>
    </div>;
};
export default PriceEstimator;