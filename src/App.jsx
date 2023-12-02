import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LocationPage from './pages/LocationPage/MainPage';
import ToursPage from './pages/ToursPage';
import LocationPageById from './pages/LocationPage/LocationById';
import TourPage from "./pages/TourPage";

function App() {
  return (
    <div className="App">
      <header>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/locations/' component={LocationPage} />
          <Route exact path='/locations/:locationSpec' component ={LocationPageById}/>
          <Route exact path='/tours/:category' component={ToursPage} />
          <Route exact path='/tour/:id' component={TourPage} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
