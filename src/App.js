import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() {
   const [characters, setCharacters] = useState([]);
   const [charId, setCharId] = useState([]);

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '123456';
   
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } else {
         alert('Email o Password incorrectos');
      }
   }
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      if (charId.includes(parseInt(id))) {
         return window.alert('Ya Existe!')
      }
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
            // if(characters.find((character) => Number(id) === character.id))
            setCharId([...charId, data.id]);
         } 
         else {
            window.alert('No se encuentra este personaje');
         }
      })
      .catch((err) => console.log(err));
   }

   const onClose = (id) => {
      setCharacters(characters.filter((personaje) => (personaje.id) !== (parseInt(id))));
      setCharId(charId.filter((element) => (element) !== (id)));
   }

   const location = useLocation();

   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch = {onSearch}/>
         }
         <h1 className='Titulo'>Rick and Morty</h1>
         <Routes>
            <Route path='/' element={<Form login = {login}/>}></Route>
            <Route path='/home' element={<Cards onClose = {onClose} characters={characters} />}></Route>
            <Route path='/favorites' element={<Favorites />}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/detail/:id' element={<Detail/>}></Route>
         </Routes>
      </div>
   );
}

export default App;
