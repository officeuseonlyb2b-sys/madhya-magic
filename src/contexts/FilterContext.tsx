import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { MapCategory } from "@/data/mapDestinations";

interface FilterContextType {
  selectedFilters: MapCategory[];
  toggleFilter: (cat: MapCategory) => void;
  selectAll: () => void;
  isAll: boolean;
}

const FilterContext = createContext<FilterContextType | null>(null);

export const FilterProvider = ({
  children,
  initialFilters = [],
}: {
  children: ReactNode;
  initialFilters?: MapCategory[];
}) => {
  const [selectedFilters, setSelectedFilters] = useState<MapCategory[]>(initialFilters);

  const isAll = selectedFilters.length === 0;

  const toggleFilter = useCallback((cat: MapCategory) => {
    setSelectedFilters((prev) => {
      if (prev.includes(cat)) {
        return prev.filter((c) => c !== cat);
      }
      return [...prev, cat];
    });
  }, []);

  const selectAll = useCallback(() => {
    setSelectedFilters([]);
  }, []);

  return (
    <FilterContext.Provider value={{ selectedFilters, toggleFilter, selectAll, isAll }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error("useFilters must be used within FilterProvider");
  return ctx;
};
