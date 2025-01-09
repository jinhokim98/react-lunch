import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import './styles/global.css';
import {GNB} from './components/gnb';

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
      <GNB />
      <h1>Self-Paced React</h1>;
    </QueryClientProvider>
  );
}

export default App;
