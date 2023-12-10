import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LocationPage from './pages/LocationPage/MainPage';
// import LocationPageById from './pages/LocationPage/LocationById/MainPage';
import ToursPage from './pages/ToursPage/MainPage';
import TourPageById from './pages/ToursPage/ToursPageById';
import DropDownText from './components/dropdownText';
import LocationPageById from './pages/LocationPage/LocationById';
import TourPage from "./pages/TourPage";
import ForTourAuthorPage from "./pages/ForTourAuthorPage";



function App() {
  return (
    <div className="App">
      <header>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/locations//' component={LocationPage} />
          <Route exact path='/locations/:locationSpec' component ={LocationPageById}/>
          <Route exact path='/tours/:category' component={ToursPage} />
          <Route exact path='/tour/:id' component={TourPage} />
          <Route exact path='/test' component={TourPageById}/>
          <Route exact path='/tour-author' component={ForTourAuthorPage}/>

        </Switch>
      </header>
    </div>
  );
}

export default App;
