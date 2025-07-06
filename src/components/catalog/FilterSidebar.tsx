import React, { Component } from 'react';
import { ComponentType } from '../../context/PCBuilderContext';
import { CpuIcon, HardDriveIcon, MonitorIcon, BoxIcon, BatteryMediumIcon, MemoryStickIcon, FanIcon } from 'lucide-react';
interface FilterSidebarProps {
  selectedType: ComponentType | 'all';
  onSelectType: (type: ComponentType | 'all') => void;
  onPriceRangeChange: (min: number, max: number) => void;
  minPrice: number;
  maxPrice: number;
  selectedBrands: string[];
  onBrandChange: (brand: string) => void;
  availableBrands: string[];
}
const FilterSidebar = ({
  selectedType,
  onSelectType,
  onPriceRangeChange,
  minPrice,
  maxPrice,
  selectedBrands,
  onBrandChange,
  availableBrands
}: FilterSidebarProps) => {
  return <div className="bg-white rounded-lg shadow-md p-5">
      <h2 className="font-semibold text-lg text-gray-900 mb-4">Filters</h2>
      <div className="mb-6">
        <h3 className="font-medium text-gray-900 mb-2">Component Type</h3>
        <div className="space-y-2">
          <button onClick={() => onSelectType('all')} className={`flex items-center w-full px-3 py-2 rounded-md text-left ${selectedType === 'all' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}>
            <MonitorIcon className="h-4 w-4 mr-2" />
            <span>All Components</span>
          </button>
          <button onClick={() => onSelectType('cpu')} className={`flex items-center w-full px-3 py-2 rounded-md text-left ${selectedType === 'cpu' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}>
            <CpuIcon className="h-4 w-4 mr-2" />
            <span>Processors (CPU)</span>
          </button>
          <button onClick={() => onSelectType('motherboard')} className={`flex items-center w-full px-3 py-2 rounded-md text-left ${selectedType === 'motherboard' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}>
            <MemoryStickIcon className="h-4 w-4 mr-2" />
            <span>Motherboards</span>
          </button>
          <button onClick={() => onSelectType('gpu')} className={`flex items-center w-full px-3 py-2 rounded-md text-left ${selectedType === 'gpu' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}>
            <MonitorIcon className="h-4 w-4 mr-2" />
            <span>Graphics Cards</span>
          </button>
          <button onClick={() => onSelectType('ram')} className={`flex items-center w-full px-3 py-2 rounded-md text-left ${selectedType === 'ram' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}>
            <MemoryStickIcon className="h-4 w-4 mr-2" />
            <span>Memory (RAM)</span>
          </button>
          <button onClick={() => onSelectType('storage')} className={`flex items-center w-full px-3 py-2 rounded-md text-left ${selectedType === 'storage' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}>
            <HardDriveIcon className="h-4 w-4 mr-2" />
            <span>Storage</span>
          </button>
          <button onClick={() => onSelectType('psu')} className={`flex items-center w-full px-3 py-2 rounded-md text-left ${selectedType === 'psu' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}>
            <BatteryMediumIcon className="h-4 w-4 mr-2" />
            <span>Power Supplies</span>
          </button>
          <button onClick={() => onSelectType('case')} className={`flex items-center w-full px-3 py-2 rounded-md text-left ${selectedType === 'case' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}>
            <BoxIcon className="h-4 w-4 mr-2" />
            <span>Cases</span>
          </button>
          <button onClick={() => onSelectType('cooling')} className={`flex items-center w-full px-3 py-2 rounded-md text-left ${selectedType === 'cooling' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}>
            <FanIcon className="h-4 w-4 mr-2" />
            <span>Cooling</span>
          </button>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="font-medium text-gray-900 mb-2">Price Range</h3>
        <div className="px-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">${minPrice}</span>
            <span className="text-sm text-gray-500">${maxPrice}</span>
          </div>
          <input type="range" min="0" max="1000" value={maxPrice} onChange={e => onPriceRangeChange(minPrice, parseInt(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
        </div>
      </div>
      <div>
        <h3 className="font-medium text-gray-900 mb-2">Brands</h3>
        <div className="space-y-1">
          {availableBrands.map(brand => <div key={brand} className="flex items-center">
              <input type="checkbox" id={`brand-${brand}`} checked={selectedBrands.includes(brand)} onChange={() => onBrandChange(brand)} className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" />
              <label htmlFor={`brand-${brand}`} className="ml-2 text-sm text-gray-700">
                {brand}
              </label>
            </div>)}
        </div>
      </div>
    </div>;
};
export default FilterSidebar;