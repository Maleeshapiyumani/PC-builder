import React, { Component } from 'react';
import { PlusIcon, CheckIcon, XIcon } from 'lucide-react';
import { PCComponent, ComponentType, usePCBuilder } from '../../context/PCBuilderContext';
interface ComponentSelectorProps {
  type: ComponentType;
  title: string;
  icon: React.ReactNode;
  onSelect: () => void;
}
const ComponentSelector = ({
  type,
  title,
  icon,
  onSelect
}: ComponentSelectorProps) => {
  const {
    build,
    removeComponent
  } = usePCBuilder();
  const selectedComponent = build.components[type];
  return <div className="border rounded-lg p-4 mb-4 bg-white shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-indigo-100 p-3 rounded-lg mr-4">{icon}</div>
          <div>
            <h3 className="font-medium text-gray-900">{title}</h3>
            {selectedComponent ? <div className="mt-1">
                <div className="text-sm font-medium text-gray-900">
                  {selectedComponent.name}
                </div>
                <div className="text-sm text-gray-500">
                  {selectedComponent.brand} · ${selectedComponent.price}
                </div>
              </div> : <p className="text-sm text-gray-500">Not selected</p>}
          </div>
        </div>
        <div className="flex items-center">
          {selectedComponent ? <>
              <button onClick={() => removeComponent(type)} className="p-2 text-red-600 hover:bg-red-50 rounded-full mr-2" title="Remove component">
                <XIcon className="h-5 w-5" />
              </button>
              <button onClick={onSelect} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-md text-sm font-medium hover:bg-indigo-200 transition">
                Change
              </button>
            </> : <button onClick={onSelect} className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-indigo-700 transition flex items-center">
              <PlusIcon className="h-4 w-4 mr-1" /> Add
            </button>}
        </div>
      </div>
    </div>;
};
export default ComponentSelector;