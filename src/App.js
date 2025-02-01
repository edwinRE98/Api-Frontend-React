import logo from './logo.svg';
import './App.css';
import ListUsers from './components/ListUsers';
import Header from './components/Header';
import FooterComp from './components/FooterComp';
import { BrowserRouter, Route, Routes } from 'react-router';
import SaveUser from './components/SaveUser';

function App(){
  return(
    <div>
      <BrowserRouter>
        <Header/>
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<ListUsers/>}></Route>
            <Route path='/users' element={<ListUsers/>}></Route>
            <Route path='/save-user' element={<SaveUser/>}></Route>
            <Route path='/update-user/:id' element={<SaveUser/>}></Route>
          </Routes>
        </div>
      <FooterComp/>
      </BrowserRouter>
    </div>
  )
}

export default App;