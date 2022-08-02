import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Messages from './components/Messages/Messages';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

function App(props) {
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
            <Route path="/messages" element={<Messages/>} />
            <Route path="/users" element={<UsersContainer/>} />
            <Route path="/news" element={<News/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Routes>
      </div>
  );
}

export default App;
