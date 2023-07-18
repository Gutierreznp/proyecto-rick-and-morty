import axios from 'axios';


export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

export const addFav = (character) => {
   
      const endpoint = 'http://localhost:3001/favorites/';
    return async (dispatch) => {
      try {
      const response = await axios.post(endpoint, character);
      const {data} = response;
          return dispatch({
             type: ADD_FAV,
             payload: data,
          })
   } catch(error) {
      alert(error.message); 
   } 
   }
    
          
    };

 export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/favorites/' + id;
    return async (dispatch) => {
      try {
         const response = await axios.delete(endpoint);
         const {data} =response;
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
      } catch (error) {
         alert(error.message);
      }
       
    };
 };

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}