import { create } from 'zustand';

interface FilterState {
  searchQuery: string;
  selectedLanguage: string | null;
  sortBy: 'stars' | 'updated' | 'name';
  setSearchQuery: (query: string) => void;
  setSelectedLanguage: (lang: string | null) => void;
  setSortBy: (sort: 'stars' | 'updated' | 'name') => void;
  resetFilters: () => void;
}

export const useProjectFilterStore = create<FilterState>((set) => ({
  searchQuery: '',
  selectedLanguage: null,
  sortBy: 'updated',
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setSelectedLanguage: (selectedLanguage) => set({ selectedLanguage }),
  setSortBy: (sortBy) => set({ sortBy }),
  resetFilters: () => set({ searchQuery: '', selectedLanguage: null, sortBy: 'updated' }),
}));
