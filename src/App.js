import { Routes, Route, matchPath, useLocation, useNavigate } from 'react-router-dom';

import Nav from './components/InfiniteScroll/Nav/Nav';
import InfiniteScroll from './components/InfiniteScroll/InfiniteScroll';
import './App.css';

function App() {
  return (
    <div style={{width: '100vw'}}>
      <Nav />

      <Routes>
        <Route path='/' element={<InfiniteScroll />} />
        <Route path='/infinite-scroll' element={<InfiniteScroll/>} />
        <Route path='/use-previous' element={<div>hi</div>} />
        <Route path='/use-update' element={<div>update</div>} />
      </Routes>
    </div>
  );
}

export default App;
