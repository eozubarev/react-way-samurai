import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp } from './Redux/reducers/app-reduces';
import Preloader from './components/common/Preloader/Preloader';


class App extends Component {

  componentDidMount () {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
        <div className="App grid">
          <HeaderContainer />
          <Navbar />
            <Routes>
              <Route path='/profile/:userId'
                element={<ProfileContainer  />}
              />
              <Route path='/profile' element={<ProfileContainer />} />
              <Route path="/dialogs/*" element={<DialogsContainer /> } />
              <Route path="/users" element={<UsersContainer/>} />
              <Route path="/news" element={<News/>}/>
              <Route path="/music" element={<Music/>}/>
              <Route path="/settings" element={<Settings/>}/>
              <Route path="/login" element={<Login />}/>
            </Routes>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  connect(mapStateToProps, {initializeApp})
)(App)
