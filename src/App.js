import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Messages from './components/Messages/Messages';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
      <div className="App grid">
        <Header />
        <Navbar />
          <Routes>
            <Route path="/profile" element={<Profile /> } />
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
