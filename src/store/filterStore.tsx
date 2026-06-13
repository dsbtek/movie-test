import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FilterState {
  searchQuery: string;
  year: string;
  type: string;
}

interface FilterContextType {
  filters: FilterState;
  setSearchQuery: (query: string) => void;
  setYear: (year: string) => void;
  setType: (type: string) => void;
  clearFilters: () => void;
}

const initialState: FilterState = {
  searchQuery: '',
  year: '',
  type: '',
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState<FilterState>(initialState);

  const setSearchQuery = (searchQuery: string) => setFilters(prev => ({ ...prev, searchQuery }));
  const setYear = (year: string) => setFilters(prev => ({ ...prev, year }));
  const setType = (type: string) => setFilters(prev => ({ ...prev, type }));
  const clearFilters = () => setFilters(initialState);

  return (
    <FilterContext.Provider value={{ filters, setSearchQuery, setYear, setType, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
};
