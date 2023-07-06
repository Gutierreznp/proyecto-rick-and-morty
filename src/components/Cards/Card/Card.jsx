import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card({onClose, id, name, status, species, gender, origin, image, addFav, removeFav, myFavorites}) {
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({id, name, status, species, gender, origin, image});
      }
   }

   return (
      <div className={style.container}>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         { onClose ?
            (<button className={style.boton} onClick={() => {
               onClose(id); 
               removeFav(id);}}>Borrar</button>) : (null) }
         <h2 className={style.informacionName}>{name}</h2>
         <Link to={`/detail/${id}`}> 
         <img className={style.imagen} src={image} alt={name} />
         </Link>
         <h2 className={style.informacion}>{status}</h2>
         <h2 className={style.informacion}>{species}</h2>
         <h2 className={style.informacion}>{gender}</h2>
         <h2 className={style.informacion}>Origen: {origin}</h2>
         
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);