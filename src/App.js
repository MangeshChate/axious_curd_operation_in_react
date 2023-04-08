import logo from './logo.svg';
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Edit from './components/Edit';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Read/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/edit' element={<Edit/>}></Route>


      </Routes>
    </div>
  );
}

export default App;
