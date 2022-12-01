import { BrowserRouter,  Route, Switch } from 'react-router-dom';

import './App.css';
// import AddCard from './components/AddCard';
import PostCoupon from './components/PostCoupon';
import Nav from './components/Nav';
// import { Provider } from 'react';
// import store from './redux/store';
// import Get from './components/Get';
import GetCoupons from './components/GetCoupons';
import Edit from './components/Edit';
import CustomizedDialogs from './components/dialog';


const App=()=> {

  return (
    <BrowserRouter>
    
     <Switch>
        <Route exact path='/'> 
        <Nav/>
        
        <GetCoupons></GetCoupons>
        </Route>
        
        <Route path='/edit'>
        <Edit></Edit>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
