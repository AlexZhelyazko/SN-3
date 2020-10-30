import React from 'react';
import './App.css';
import Header from './components/Header/header.jsx'
import Navbar from './components/Navbar/navbar.jsx'
import Profile from './components/Profile/profile.jsx'
import Dialogs from './components/Dialogs/dialogs.jsx'
import Settings from './components/Settingss/settings.jsx'
import Music from './components/Music/music.jsx'
import News from './components/News/news.jsx'
import { Route, BrowserRouter } from 'react-router-dom'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='wrap'>
        <Header />
        <div className='contentWrap'>
          <Navbar />
          <Route path='/profile' render={() => <Profile
            txt={props.state.posts.txt}
            addPost={props.addPost}
            value = {props.state.posts.newPostText}
            updateNewPostText = {props.updateNewPostText} />
            }>
          </Route>
          <Route exact path='/messages' render={() => <Dialogs dialogs={props.state.dialogs} />}></Route>
          <Route path='/news' component={News}></Route>
          <Route path='/music' component={Music}></Route>
          <Route path='/settings' component={Settings}></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
