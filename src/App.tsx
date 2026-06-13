import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { FilterProvider } from './store/filterStore';

function App() {
  return (
    <Router>
      <FilterProvider>
        <div className="min-h-screen flex bg-background text-black">
          <AppRoutes />
        </div>
      </FilterProvider>
    </Router>
  );
}

export default App;
