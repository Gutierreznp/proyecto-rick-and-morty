import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import style from './Detail.module.css';

export default function Detail () {

const {id} = useParams();

const [character, setCharacter] = useState({});

useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

    return (
      <div>
         <div className={style.imgcontainer}>
            <img className={style.imagen} src={character.image && character.image}></img>
         </div>
         <div className={style.contenedor}>
            <h3 className={style.name}>{character.name && character.name}</h3>
            <hr/>
            <section> 
               <span>{character.status ? character.status : false}</span>
               <hr/>
               <span>{character.species && character.species}</span>
               <hr/>
               <span>{character.gender && character.gender}</span>
               <hr/>
               <span>{character.origin?.name}</span>
            </section>
         </div>
      </div>)
}