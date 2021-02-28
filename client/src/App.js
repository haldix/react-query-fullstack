import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Posts from './Posts';
import Form from './Form';
import Navbar from './Navbar';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <QueryClientProvider client={queryClient}>
          <Route exact path='/' component={Posts} />
          <Route exact path='/form' component={Form} />
        </QueryClientProvider>
      </Switch>
    </Router>
  );
}

export default App;
