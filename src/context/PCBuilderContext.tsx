import React, { useState, createContext, useContext, Component } from 'react';
// Define types for PC components
export type ComponentType = 'cpu' | 'motherboard' | 'gpu' | 'ram' | 'storage' | 'psu' | 'case' | 'cooling';
export interface PCComponent {
  id: string;
  type: ComponentType;
  name: string;
  brand: string;
  price: number;
  image: string;
  specs: Record<string, string | number>;
  compatible?: Record<ComponentType, string[]>;
}
interface PCBuild {
  components: Partial<Record<ComponentType, PCComponent>>;
  totalPrice: number;
}
interface PCBuilderContextType {
  build: PCBuild;
  addComponent: (component: PCComponent) => void;
  removeComponent: (type: ComponentType) => void;
  isCompatible: (component: PCComponent) => boolean;
  clearBuild: () => void;
}
const PCBuilderContext = createContext<PCBuilderContextType | undefined>(undefined);
export const PCBuilderProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [build, setBuild] = useState<PCBuild>({
    components: {},
    totalPrice: 0
  });
  const addComponent = (component: PCComponent) => {
    setBuild(prevBuild => {
      const updatedComponents = {
        ...prevBuild.components,
        [component.type]: component
      };
      // Recalculate total price
      const newTotalPrice = Object.values(updatedComponents).reduce((sum, component) => sum + component.price, 0);
      return {
        components: updatedComponents,
        totalPrice: newTotalPrice
      };
    });
  };
  const removeComponent = (type: ComponentType) => {
    setBuild(prevBuild => {
      const updatedComponents = {
        ...prevBuild.components
      };
      if (updatedComponents[type]) {
        const removedPrice = updatedComponents[type]?.price || 0;
        delete updatedComponents[type];
        return {
          components: updatedComponents,
          totalPrice: prevBuild.totalPrice - removedPrice
        };
      }
      return prevBuild;
    });
  };
  const isCompatible = (component: PCComponent): boolean => {
    // This is a simplified compatibility check
    // In a real application, this would be more complex
    if (!component.compatible) return true;
    for (const [type, compatibleIds] of Object.entries(component.compatible)) {
      const existingComponent = build.components[type as ComponentType];
      if (existingComponent && !compatibleIds.includes(existingComponent.id)) {
        return false;
      }
    }
    return true;
  };
  const clearBuild = () => {
    setBuild({
      components: {},
      totalPrice: 0
    });
  };
  return <PCBuilderContext.Provider value={{
    build,
    addComponent,
    removeComponent,
    isCompatible,
    clearBuild
  }}>
      {children}
    </PCBuilderContext.Provider>;
};
export const usePCBuilder = () => {
  const context = useContext(PCBuilderContext);
  if (context === undefined) {
    throw new Error('usePCBuilder must be used within a PCBuilderProvider');
  }
  return context;
};