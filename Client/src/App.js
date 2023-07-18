import './App.css';
import Cards from './components/Cards/Cards';
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
   
   async function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/user/login/';
      // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      //    const { access } = data;
      //    setAccess(access);
      //    access && navigate('/home');
      // });
      try {
         const loginReq = await axios(URL + `?email=${email}&password=${password}`);
         const {data} = loginReq;
         const {access} = data;
         setAccess(access);
         access && navigate('/home');
      } catch (error) {
         alert(error.message);
      }
   }
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   async function onSearch(id) {
      if (charId.includes(parseInt(id))) {
         return window.alert('Ya Existe!')
      }
      // axios(`http://localhost:3001/character/${id}`).then(({ data }) => {
      //    console.log(data);
      //    if (data.name) {
      //       setCharacters((oldChars) => [...oldChars, data]);
      //       // if(characters.find((character) => Number(id) === character.id))
      //       setCharId([...charId, data.id]);
      //    } 
      //    else {
      //       window.alert('No se encuentra este personaje');
      //    }
      // })
      // .catch((err) => console.log(err));
      try {
         const backReq = await axios(`http://localhost:3001/character/${id}`);
         const {data} = backReq;
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
            // if(characters.find((character) => Number(id) === character.id))
            setCharId([...charId, data.id]);
         } 
         else {
            window.alert('No se encuentra este personaje');
         }

      } catch (error) {
         console.log(error);
      }
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
