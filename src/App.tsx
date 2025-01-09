import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Lunch} from './pages/Lunch';

import './styles/global.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 1000 * 5,
      gcTime: 1000 * 5,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Lunch />
    </QueryClientProvider>
  );
}

export default App;
