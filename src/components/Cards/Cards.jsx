import Card from './Card/Card';
import style from './Cards.module.css';

export default function Cards({ onClose, characters}) {
   return (
      <div className= {style.container}>
      {characters.map((obj) => <Card onClose= {onClose} id={obj.id} name={obj.name} status={obj.status} species={obj.species} gender={obj.gender} origin={obj.origin.name} image={obj.image}/>)}
      </div>
   );
}
