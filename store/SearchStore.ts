import { create } from "zustand";

interface SearchState {
  searchTerm: string;
  startDate: Date;
  endDate: Date;
  noOfGuests: number;
  setSearchTerm: (value: string) => void;
  setDates: (startDate: Date, endDate: Date) => void;
  setNoOfGuests: (value: number) => void;
  resetSearch: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  searchTerm: "",
  startDate: new Date(),
  endDate: new Date(),
  noOfGuests: 1,
  setSearchTerm: (value) => set({ searchTerm: value }),
  setDates: (startDate, endDate) => set({ startDate, endDate }),
  setNoOfGuests: (value) => set({ noOfGuests: value }),
  resetSearch: () =>
    set({
      searchTerm: "",
      startDate: new Date(),
      endDate: new Date(),
      noOfGuests: 1,
    }),
}));
