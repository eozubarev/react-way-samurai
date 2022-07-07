import state, { addPost, updateNewPostText } from './components/Redux/state';
import { rerenderEntireTree } from './render';
import './index.css';

rerenderEntireTree(state, addPost, updateNewPostText);


