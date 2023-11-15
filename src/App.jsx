import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LocationPage from './pages/LocationPage';
import ToursPage from './pages/ToursPage';

function App() {
  return (
    <div className="App">
      <header>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/locations/' component={LocationPage} />
          <Route exact path='/tours/:category' component={ToursPage} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
