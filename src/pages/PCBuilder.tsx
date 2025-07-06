import React, { useState, Component } from 'react';
import { CpuIcon, HardDriveIcon, MonitorIcon, BoxIcon, BatteryMediumIcon, MemoryStickIcon, FanIcon, AlertTriangleIcon } from 'lucide-react';
import { ComponentType, usePCBuilder } from '../context/PCBuilderContext';
import ComponentSelector from '../components/builder/ComponentSelector';
import PriceEstimator from '../components/builder/PriceEstimator';
import { mockComponents } from '../data/mockComponents';
import ComponentCard from '../components/catalog/ComponentCard';
const PCBuilder = () => {
  const {
    build
  } = usePCBuilder();
  const [selectedType, setSelectedType] = useState<ComponentType | null>(null);
  const componentTypes = [{
    type: 'cpu' as ComponentType,
    title: 'Processor',
    icon: <CpuIcon className="h-5 w-5 text-indigo-600" />
  }, {
    type: 'motherboard' as ComponentType,
    title: 'Motherboard',
    icon: <MemoryStickIcon className="h-5 w-5 text-indigo-600" />
  }, {
    type: 'gpu' as ComponentType,
    title: 'Graphics Card',
    icon: <MonitorIcon className="h-5 w-5 text-indigo-600" />
  }, {
    type: 'ram' as ComponentType,
    title: 'Memory (RAM)',
    icon: <MemoryStickIcon className="h-5 w-5 text-indigo-600" />
  }, {
    type: 'storage' as ComponentType,
    title: 'Storage',
    icon: <HardDriveIcon className="h-5 w-5 text-indigo-600" />
  }, {
    type: 'psu' as ComponentType,
    title: 'Power Supply',
    icon: <BatteryMediumIcon className="h-5 w-5 text-indigo-600" />
  }, {
    type: 'case' as ComponentType,
    title: 'Case',
    icon: <BoxIcon className="h-5 w-5 text-indigo-600" />
  }, {
    type: 'cooling' as ComponentType,
    title: 'Cooling',
    icon: <FanIcon className="h-5 w-5 text-indigo-600" />
  }];
  const filteredComponents = selectedType ? mockComponents.filter(component => component.type === selectedType) : [];
  return <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Custom PC Builder
          </h1>
          <p className="mt-2 text-gray-600">
            Select components for your custom PC build. We'll check
            compatibility and calculate the total price.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Select Your Components
              </h2>
              {componentTypes.map(componentType => <ComponentSelector key={componentType.type} type={componentType.type} title={componentType.title} icon={componentType.icon} onSelect={() => setSelectedType(componentType.type)} />)}
            </div>
            {selectedType && <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Select a{' '}
                    {componentTypes.find(c => c.type === selectedType)?.title}
                  </h2>
                  <button onClick={() => setSelectedType(null)} className="text-gray-500 hover:text-gray-700">
                    Close
                  </button>
                </div>
                {filteredComponents.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                    {filteredComponents.map(component => <ComponentCard key={component.id} component={component} />)}
                  </div> : <div className="text-center py-8">
                    <AlertTriangleIcon className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-500">
                      No components found for this category.
                    </p>
                  </div>}
              </div>}
          </div>
          <div>
            <PriceEstimator />
            <div className="mt-6 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Compatibility Check
              </h2>
              {Object.keys(build.components).length > 0 ? <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-700 flex items-center">
                    <CheckIcon className="h-5 w-5 mr-2" />
                    All selected components are compatible
                  </p>
                </div> : <p className="text-gray-500 text-sm">
                  Select components to check compatibility
                </p>}
              <div className="mt-4 text-xs text-gray-500">
                * Our system automatically checks compatibility between
                components as you build your PC.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default PCBuilder;
// Missing import for CheckIcon
import { CheckIcon } from 'lucide-react';