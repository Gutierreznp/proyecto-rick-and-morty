import SearchBar from './SearchBar/SearchBar';
import style from './Nav.module.css';
import { Link } from 'react-router-dom';

export default function Navegador ({onSearch}) {
    return (
        <div className={style.contenedor}>
            <button className={style.navegacion}>
                <Link to={'/home'}>Home</Link>
            </button>
            <button className={style.navegacion}>
                <Link to={'/favorites'}>Favorites</Link>
            </button>
            <button className={style.navegacion}>
                <Link to={'/about'}>About</Link>
            </button>
            <SearchBar onSearch = {onSearch} />
        </div>
    );
}