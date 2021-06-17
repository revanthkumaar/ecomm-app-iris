import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Signin from './pages/signin/signin.component'

import HomePage from './pages/home-page/home-page.component'
import ShopPage from './pages/home-page/home-page.component'

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={Signin}/>
    </Switch>
    </div>
  );
}

export default App;
