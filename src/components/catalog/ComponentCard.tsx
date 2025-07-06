import React, { Component } from 'react';
import { PlusIcon, CheckIcon } from 'lucide-react';
import { PCComponent, usePCBuilder } from '../../context/PCBuilderContext';
interface ComponentCardProps {
  component: PCComponent;
}
const ComponentCard = ({
  component
}: ComponentCardProps) => {
  const {
    build,
    addComponent,
    isCompatible
  } = usePCBuilder();
  const isSelected = build.components[component.type]?.id === component.id;
  const compatible = isCompatible(component);
  const handleAddComponent = () => {
    if (compatible) {
      addComponent(component);
    }
  };
  return <div className={`border rounded-lg overflow-hidden bg-white transition ${isSelected ? 'border-indigo-500 ring-2 ring-indigo-200' : !compatible ? 'opacity-60' : 'hover:shadow-md'}`}>
      <div className="h-40 overflow-hidden">
        <img src={component.image} alt={component.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-gray-900">{component.name}</h3>
          <span className="text-indigo-600 font-semibold">
            ${component.price}
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-3">{component.brand}</p>
        <div className="space-y-1 mb-4">
          {Object.entries(component.specs).slice(0, 3).map(([key, value]) => <div key={key} className="text-xs flex">
                <span className="text-gray-500 w-1/3 capitalize">{key}:</span>
                <span className="text-gray-700 w-2/3">{value}</span>
              </div>)}
        </div>
        <button onClick={handleAddComponent} disabled={!compatible} className={`w-full py-2 rounded-md text-sm font-medium flex items-center justify-center ${isSelected ? 'bg-indigo-100 text-indigo-700' : compatible ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}>
          {isSelected ? <>
              <CheckIcon className="h-4 w-4 mr-1" /> Selected
            </> : <>
              <PlusIcon className="h-4 w-4 mr-1" />{' '}
              {compatible ? 'Add to Build' : 'Incompatible'}
            </>}
        </button>
      </div>
    </div>;
};
export default ComponentCard;