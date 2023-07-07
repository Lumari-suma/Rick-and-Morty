// import { all } from "axios";
import { ADDFAVORITE, DELETEFAVORITE, FILTER, ORDER, RESET} from "../actions/types";

const initialGlobalState = {
  favorites: [],
  allCharacters: [],
  // characters: [],
  access: false,
  aunMas: [],
  detail: {},
  
};

export default function rootReducer(state = initialGlobalState, action) {
  // Nos fijabamos por el TYPE de la accion
  switch (action.type) {
    case ADDFAVORITE:
    const addPj = [...state.allCharacters, action.payload]

    return {...state, favorites: addPj, allCharacters: [...addPj]};
    
      // return { ...state, favorites: [...state.favorites, action.payload], detail: {algo: "MESSI"} };

    case DELETEFAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== action.payload),
        allCharacters: state.allCharacters.filter((fav) => fav.id !== action.payload),
      };
    case FILTER:
      return {
        ...state,
        favorites: state.allCharacters.filter((pj) => pj.gender !== action.payload),
      };

    case ORDER:
      let copy = state.favorites.sort((a, b) => {
        if(action.payload === "A"){
          // ordenar de menor a mayor
          if(a.id > b.id) return 1
          if(a.id > b.id) return -1
          return 0 // si son igusles no los muevo de posición
        }else{
          // ordenar de mayor a menor
          if(a.id > b.id) return -1
          if(b.id > a.id) return 1
          return 0 // si son igusles no los muevo de posición
        }
      });
      return {
        ...state,
        favorites: copy
      };

      case RESET:
        return {...state, favorites: state.allCharacters};

      default:
      return { ...state };
  }
  
}
// favorites [{1},{2},{3}]
// vs
// []
