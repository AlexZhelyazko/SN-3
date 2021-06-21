import React from 'react';
import './App.css';
import Header from './components/Header/header.jsx'
import Navbar from './components/Navbar/navbar.jsx'
import Profile from './components/Profile/profile.jsx'
import DialogsContainer from './components/Dialogs/dialogsContainer.js'
import Settings from './components/Settingss/settings.jsx'
import Music from './components/Music/music.jsx'
import News from './components/News/news.jsx'
import UserContainer from './components/Users/userContainer';
import { Route } from 'react-router-dom'

const App = (props) => {
  return (
      <div className='wrap'>
        <Header />
        <div className='contentWrap'>
          <Navbar/>
          <Route path='/profile' render={() => <Profile/>}></Route>
          <Route  path='/messages' render={() => <DialogsContainer/>}></Route>
          <Route path='/users' render={() => <UserContainer/>}></Route>
          <Route path='/news' component={News}></Route>
          <Route path='/music' component={Music}></Route>
          <Route path='/settings' component={Settings}></Route>
        </div>
      </div>
  );
}

export default App;
