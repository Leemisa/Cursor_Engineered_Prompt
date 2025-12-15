import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchHistory: string[];
  addToHistory: (query: string) => void;
  clearHistory: () => void;
}

const SearchContext = createContext<SearchContextType | null>(null);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const addToHistory = (query: string) => {
    if (query.trim() && !searchHistory.includes(query)) {
      setSearchHistory(prev => [query, ...prev.slice(0, 9)]);
    }
  };

  const clearHistory = () => {
    setSearchHistory([]);
  };

  return (
    <SearchContext.Provider value={{
      searchQuery,
      setSearchQuery,
      searchHistory,
      addToHistory,
      clearHistory,
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
