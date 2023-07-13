import { connect, useDispatch } from "react-redux";
import Card from "../Cards/Card/Card";
import style from './Favorites.module.css'
import {filterCards, orderCards } from '../../redux/actions';
import { useState } from "react";

function Favorites ({myFavorites}) {

    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="B">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="allCharacters">All Characters</option>
            </select>
            <div className={style.container}>
                {myFavorites?.map((fav) => <Card key={fav.id} id={fav.id} name={fav.name} status={fav.status} species={fav.species} gender={fav.gender} origin={fav.origin} image={fav.image}/>)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
        return {
            myFavorites: state.myFavorites
        }
    }

export default connect(mapStateToProps, null)(Favorites);