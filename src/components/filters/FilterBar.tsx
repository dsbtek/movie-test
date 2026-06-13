import { useFilters } from '../../store/filterStore';

export const FilterBar = () => {
  const { filters, setYear, setType, clearFilters } = useFilters();

  const types = [
    { label: 'All Types', value: '' },
    { label: 'Movies', value: 'movie' },
    { label: 'Series', value: 'series' },
    { label: 'Episodes', value: 'episode' },
  ];

  // Generate years from current year down to 1900
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => (currentYear - i).toString());

  return (
    <div className="flex flex-wrap items-center gap-4 py-4 border-y border-white/5 bg-surface/30 px-4 rounded-xl mt-6">
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-gray-400">Type:</label>
        <select
          value={filters.type}
          onChange={(e) => setType(e.target.value)}
          className="bg-background border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none"
        >
          {types.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-gray-400">Year:</label>
        <select
          value={filters.year}
          onChange={(e) => setYear(e.target.value)}
          className="bg-background border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none"
        >
          <option value="">Any Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1" />

      <button
        onClick={clearFilters}
        className="text-sm text-gray-400 hover:text-white transition-colors"
      >
        Clear Filters
      </button>
    </div>
  );
};
