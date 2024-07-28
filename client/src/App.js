import './App.css';
import { Routes, Route } from 'react-router-dom';
import TitlePage from './pages/TitlePage';
import Home from './pages/Home';
import Translator from './pages/Translator';
import Rephraser from './pages/Rephraser';
import Qna from './pages/Qna';
import Summarizer from './pages/Summarizer';
import Notes from './pages/Notes';
import Register from './pages/Register';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<TitlePage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/summarizer' element={<Summarizer />} />
          <Route path='/qna' element={<Qna />} />
          <Route path='/rephraser' element={<Rephraser />} />
          <Route path='/translator' element={<Translator />} />
          <Route path='/signup' element={<Register signup={true} />} />
          <Route path='/login' element={<Register signup={false} />} />
        </Routes>
    </>
  );
}

export default App;