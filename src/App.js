import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/About/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Details from './pages/Details/Details';
import Home from './pages/Home/Home/Home';
import Login from './pages/login/Login/Login';
import Services from './pages/Service/Services/Services';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';
import NotFound from './pages/shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <AboutUs></AboutUs>
            </Route>
            <Route path='/service'>
              <Services></Services>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>  
            </Route>
            <Route path ='/login'>
              <Login></Login>
            </Route>            
            <Route path ='/details/:serviceId'>
              <Details></Details>
            </Route>            
            <Route path ='*'>
              <NotFound></NotFound>
            </Route>            
          </Switch>
          <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
