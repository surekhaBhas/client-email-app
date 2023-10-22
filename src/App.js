
import './App.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import ParticularMail from './components/ParticularMail';
import {Provider} from 'react-redux'
import store from './Redux/store';
import Header from './components/Header';
import UnRead from './components/UnRead';
import Favorite from './components/Favorite';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header/>
      <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/mail/:id' element={<ParticularMail/>}></Route>
     <Route path='/unread' element={<UnRead/>}/>
     <Route path='/favorite' element={<Favorite/>}/>
   </Routes>
      </Provider>
   
   
    </div>
  );
}

export default App;
