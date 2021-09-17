import './App.css';
import Sitebar from './components/sitebar';
import Home from './Home';
import Messages from './Messages';
import Notifications from './Notifications';
import Profile from './Profile';
import {BrowserRouter, Route} from 'react-router-dom';





function App() {
  return (

    <BrowserRouter>
      <div className="app">
      
          <Sitebar/>
          <Route path='/Home' component={Home}/>
          <Route path='/Messages' component={Messages}/>
          <Route path='/Notifications' component={Notifications}/>
          <Route path='/Profile' component={Profile}/>

      </div>
    </BrowserRouter>
  );
}

export default App;
