import AppRouter from './router/router';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return ( 
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <AppRouter />
      </div>
    </QueryClientProvider>
  );
}

export default App;