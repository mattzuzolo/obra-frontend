
import { ARTWORK_FETCH_SUCCESSFUL } from "./types";

//default state here
const initialState = {
  artworkArray: [],
}

function reducer (state = initialState, action) {
  switch(action.type){
    case ARTWORK_FETCH_SUCCESSFUL:
      return {...state, artworkArray: [...state.artworkArray, action.payload]}
    default:
      return state;
  }
}

export default reducer
