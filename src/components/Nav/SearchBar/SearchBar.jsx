import style from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar({onSearch}) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div className={style.container}>
         <input onChange = {handleChange} value = {id} className={style.input} type='text' placeholder="Personaje..."/>
         <button className={style.boton} onClick={() => {onSearch(id)}}>Agregar</button>
      </div>
   );
}
