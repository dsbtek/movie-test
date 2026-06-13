# Movie Discovery Dashboard

A modern movie discovery dashboard built with React.js, TypeScript, and Tailwind CSS. This application allows users to browse popular movies, search with filters, and view detailed movie information.

## 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js | UI framework |
| TypeScript | Type safety |
| Vite | Build tool |
| Tailwind CSS | Styling |
| TanStack Query | Async state management |
| React Router | Navigation |
| Axios | API client |

## 📁 Project Structure

```
src/
├── api/
│   ├── client.ts          # Axios instance configuration
│   ├── endpoints.ts       # API endpoint definitions
│   └── types.ts           # API response types
├── components/
│   ├── common/
│   │   ├── LoadingState.tsx
│   │   ├── ErrorState.tsx
│   │   └── EmptyState.tsx
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   └── Header.tsx
│   ├── movie/
│   │   ├── MovieCard.tsx
│   │   ├── MovieGrid.tsx
│   │   └── MovieSection.tsx
│   └── filters/
│       ├── SearchInput.tsx
│       ├── GenreFilter.tsx
│       ├── YearFilter.tsx
│       └── FilterBar.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── SearchPage.tsx
│   └── MovieDetailsPage.tsx
├── hooks/
│   ├── useDebounce.ts
│   ├── useMovies.ts
│   └── useFilters.ts
├── store/
│   └── filterStore.ts     # Filter state management
├── utils/
│   ├── constants.ts
│   └── helpers.ts
├── types/
│   └── index.ts           # Shared TypeScript types
├── routes/
│   └── AppRoutes.tsx
├── App.tsx
└── main.tsx
```

## ✨ Features

### 1. Home Page
- Sidebar navigation
- Movie sections (Popular Movies, Top Rated)
- Responsive movie card grid
- Loading, error, and empty states
- Each movie card displays:
  - Poster image
  - Movie title
  - Release year
  - Rating

### 2. Search & Filters
- Debounced search input (300ms delay)
- Filtering options:
  - **Genre** - Filter by movie genre
  - **Year** - Filter by release year
  - **Rating** - Filter by minimum rating
  - **Popularity** - Sort by popularity
- Clear filters button
- Persistent filter state management

### 3. Movie Details Page
- Movie poster and banner
- Movie title and rating
- Description/overview
- Genres list
- Release date
- Additional metadata (runtime, cast, etc.)
- Similar/recommended movies section

## 🔧 API Integration

This project uses **OMDb API** (The Open Movie Database API).

### Setup

1. Request an API key at [OMDb API](http://www.omdbapi.com/apikey.aspx)
2. Create a `.env.local` file in the root directory:

```env
VITE_OMDB_API_KEY=your_api_key_here
VITE_OMDB_BASE_URL=http://www.omdbapi.com/
```

### API Endpoints Used

| Endpoint | Purpose |
|----------|---------|
| `/?s={query}` | Search movies |
| `/?i={id}` | Get movie details by ID |

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Set up and Run

```bash
# 1. Clone the repository
git clone git@github.com:dsbtek/movie-test.git
cd movie-test

# 2. Install dependencies
npm install

# 3. Configure environment variables
# Create a .env.local file and add your OMDb API key
cp .env.example .env.local # if an example exists, otherwise create it manually
# Update .env.local with VITE_OMDB_API_KEY

# 4. Start the development server
pnpm dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start development server |
| `pnpm run build` | Build for production |
| `pnpm run preview` | Preview production build |
| `pnpm run lint` | Run ESLint |
| `pnpm run type-check` | Run TypeScript type checking |

## 🎨 Design Reference

The UI follows a modern movie dashboard layout with:
- Collapsible sidebar for navigation
- Hero section with trending content
- Horizontal scrolling movie sections
- Modal-style movie details view
- Responsive grid layout for search results

## 🔒 Type Safety

Full TypeScript coverage with:
- Strict mode enabled
- Defined API response types
- Component prop interfaces
- Custom hook return types

## ⚡ Performance Optimizations

- TanStack Query for caching and background refetching
- Debounced search to reduce API calls
- Lazy loading for movie images
- Code splitting via React Router
- Memoized components where beneficial

## 📦 Dependencies

### Core
```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "typescript": "^5.x"
}
```

### Routing & State
```json
{
  "react-router-dom": "^6.x",
  "@tanstack/react-query": "^5.x"
}
```

### UI & Styling
```json
{
  "tailwindcss": "^3.x",
  "axios": "^1.x"
}
```

## 🧪 Error Handling

- Graceful fallbacks for API failures
- Retry logic for failed requests
- User-friendly error messages
- Network status detection

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly interactions
- Adaptive grid layouts

## 🔜 Future Improvements

- [ ] Add user watchlist functionality
- [ ] Implement infinite scroll for search results
- [ ] Add trailer playback integration
- [ ] Dark/Light theme toggle
- [ ] Add favorite movies with local persistence
- [ ] Implement skeleton loaders
- [ ] Add movie cast and crew section
