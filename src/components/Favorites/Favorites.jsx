import { connect } from "react-redux";
import Card from "../Cards/Card/Card";
import style from './Favorites.module.css'

function Favorites ({myFavorites}) {

    

    return (
        <div className={style.container}>
            {myFavorites?.map((fav) => <Card key={fav.id} id={fav.id} name={fav.name} status={fav.status} species={fav.species} gender={fav.gender} origin={fav.origin} image={fav.image}/>)}
        </div>
    )
}

const mapStateToProps = (state) => {
        return {
            myFavorites: state.myFavorites
        }
    }

export default connect(mapStateToProps, null)(Favorites);