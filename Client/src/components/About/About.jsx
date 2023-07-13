import style from './About.module.css'
import miImagen from '../../image/fotonicolas.jpeg'

export default function About() {
    return <div className={style.contenedor}>
        <h2 className={style.subtitulo}>Creador de la pagina Web:</h2>
        <h4 className={style.nombre}>Nicolas Gutierrez Plaza</h4>
        <img className={style.imagen} src= {miImagen} />
        <h6 className={style.footer}>Salta, Argentina</h6>
    </div>
}