import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

export default function Detail () {

const {id} = useParams();

const [character, setCharacter] = useState({});

useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
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
         <h3>{character.name && character.name}</h3>
         <h5>{character.status ? character.status : false}</h5>
         <img src={character.image && character.image}></img>
         <section>
            <span>{character.species && character.species}</span>
            <span>{character.gender && character.gender}</span>
            <span>{character.origin?.name}</span>
         </section>
      </div>)
}