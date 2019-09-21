import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.js';
import UsersContainer from './components/Users/UsersContainer.js';

const App = (props) => {


  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          {/*<Route path="/messages" component={Dialogs} />
          <Route path="/profile" component={Profile} />*/}
          <Route path="/messages" render={() => <DialogsContainer />}/>
          <Route path="/profile" render={() => <Profile />}/>
          <Route path="/users" render={() => <UsersContainer />}/>
        </div>
      </div> 
  );
}

export default App;
