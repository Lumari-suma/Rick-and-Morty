import { useState } from "react";
import style from "./Favorites.module.css";
import { connect, useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards, reset} from "../../redux/actions/actions";
import Card from "../Cards/Singular/Card";

export default function Favorites() {
  // WARNING PELIGRO
  // CUIDADO!!!!
  // USE SELECTOR NO SE PERMITE EN EL CHECKPOINT
  const favorites = useSelector((state) => state.favorites); 
  const dispatch = useDispatch();
  const [booleano, setBooleano] = useState(false);

  function handleOrder(event){
    dispatch(orderCards(event.target.value));
    setBooleano(!booleano) // Se actualiza el componente!
  }

  function handleFilter(event){
    if(event.target.value === "RESET"){
      dispatch(reset());
    }else {
      dispatch(filterCards(event.target.value));
    }    
  }
  
  return (
    <div>
      <div className={style.select}>
      <select onChange={handleOrder}>
        <option value="A">ACENDENTE</option>
        <option value="D">DESCENDENTE</option>
      </select>

      <select onChange={handleFilter}>
        <option value="RESET">RESET</option>
        <option value="unknown">UNKNOWN</option>
        <option value="Genderless">GENDERLESS</option>
        <option value="Female">FEMALE</option>
        <option value="Male">MALE</option>
      </select>
      </div>

      <div className={style.card}>
        {favorites?.map((char) => (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            species={char.species}
            gender={char.gender}
            status={char.status}
            image={char.image}
            origin={char.origin.name}
          />
        ))}
      </div>
    </div>
  );
}
