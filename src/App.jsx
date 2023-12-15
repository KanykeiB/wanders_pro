import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LocationPage from './pages/LocationPage/MainPage';
import LocationPageById from './pages/LocationPage/LocationById';
import ToursPage from './pages/ToursPage/MainPage';
import TourPageById from './pages/ToursPage/ToursPageById';
import DropDownText from './components/dropdownText';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <header>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/locations/' component={LocationPage} />
          <Route exact path='/locations/:locationSpec' component ={LocationPageById}/>
          <Route exact path='/tours/:category' component={ToursPage} />
          <Route exact path='/test' component={TourPageById}/>
          <Route exact path='/aboutUs' component={AboutUs}/>
        </Switch>
      </header>
    </div>
  );
}

export default App;
