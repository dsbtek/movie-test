import { useFilters } from '../../store/filterStore';

export const FilterBar = () => {
  const { filters, setYear, setType, clearFilters } = useFilters();

  const types = [
    { label: 'All Genres', value: '' }, // Reusing type as genre mock
    { label: 'Action', value: 'action' },
    { label: 'Comedy', value: 'comedy' },
    { label: 'Drama', value: 'drama' },
  ];

  // Generate years from current year down to 1900
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => (currentYear - i).toString());

  return (
    <div className="flex flex-wrap items-end gap-6 py-2 w-full">
      <div className="flex flex-col gap-1.5 flex-1 min-w-[120px]">
        <label className="text-xs font-semibold text-grayDark">Genre</label>
        <select
          value={filters.type}
          onChange={(e) => setType(e.target.value)}
          className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-black focus:ring-2 focus:ring-primary focus:border-primary outline-none w-full"
        >
          {types.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5 flex-1 min-w-[120px]">
        <label className="text-xs font-semibold text-grayDark">Year</label>
        <select
          value={filters.year}
          onChange={(e) => setYear(e.target.value)}
          className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-black focus:ring-2 focus:ring-primary focus:border-primary outline-none w-full"
        >
          <option value="">All Years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5 flex-1 min-w-[120px]">
        <label className="text-xs font-semibold text-grayDark">Rating</label>
        <select className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-black focus:ring-2 focus:ring-primary focus:border-primary outline-none w-full">
          <option value="">All Ratings</option>
          <option value="9">9+ Stars</option>
          <option value="8">8+ Stars</option>
          <option value="7">7+ Stars</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5 flex-1 min-w-[120px]">
        <label className="text-xs font-semibold text-grayDark">Sort By</label>
        <select className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-black focus:ring-2 focus:ring-primary focus:border-primary outline-none w-full">
          <option value="popularity">Popularity</option>
          <option value="rating">Rating</option>
          <option value="year">Year</option>
        </select>
      </div>

      <div className="flex items-center h-10 ml-2">
        <button
          onClick={clearFilters}
          className="text-sm text-primary font-semibold hover:text-blue-700 transition-colors"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};
