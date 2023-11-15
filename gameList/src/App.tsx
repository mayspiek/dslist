import { Outlet } from 'react-router-dom';
import './App.css'
import { GameList } from './components/GameList';
import GenreList from './components/GenreList';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
        <Outlet />
    </>
  )
}

export default App
