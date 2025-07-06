import React, { useMemo, useState, Component } from 'react';
import { SearchIcon, FilterIcon } from 'lucide-react';
import { ComponentType } from '../context/PCBuilderContext';
import FilterSidebar from '../components/catalog/FilterSidebar';
import ComponentCard from '../components/catalog/ComponentCard';
import { mockComponents } from '../data/mockComponents';
const Catalog = () => {
  const [selectedType, setSelectedType] = useState<ComponentType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const availableBrands = useMemo(() => {
    return Array.from(new Set(mockComponents.map(component => component.brand)));
  }, []);
  const filteredComponents = useMemo(() => {
    return mockComponents.filter(component => {
      // Filter by type
      if (selectedType !== 'all' && component.type !== selectedType) return false;
      // Filter by search query
      if (searchQuery && !component.name.toLowerCase().includes(searchQuery.toLowerCase()) && !component.brand.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      // Filter by price
      if (component.price < minPrice || component.price > maxPrice) return false;
      // Filter by brand
      if (selectedBrands.length > 0 && !selectedBrands.includes(component.brand)) return false;
      return true;
    });
  }, [selectedType, searchQuery, minPrice, maxPrice, selectedBrands]);
  const handleBrandChange = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };
  return <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Parts Catalog</h1>
          <p className="mt-2 text-gray-600">
            Browse our selection of PC components and add them to your build.
          </p>
        </div>
        <div className="mb-6">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input type="text" placeholder="Search components by name or brand..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-64 flex-shrink-0">
            <FilterSidebar selectedType={selectedType} onSelectType={setSelectedType} onPriceRangeChange={(min, max) => {
            setMinPrice(min);
            setMaxPrice(max);
          }} minPrice={minPrice} maxPrice={maxPrice} selectedBrands={selectedBrands} onBrandChange={handleBrandChange} availableBrands={availableBrands} />
          </div>
          <div className="flex-grow">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Components {selectedType !== 'all' ? `- ${selectedType}` : ''}
                </h2>
                <div className="text-sm text-gray-500">
                  {filteredComponents.length} items
                </div>
              </div>
              {filteredComponents.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredComponents.map(component => <ComponentCard key={component.id} component={component} />)}
                </div> : <div className="text-center py-12">
                  <FilterIcon className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-500 text-lg font-medium">
                    No components found
                  </p>
                  <p className="text-gray-400 mt-2">
                    Try adjusting your filters or search query
                  </p>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Catalog;