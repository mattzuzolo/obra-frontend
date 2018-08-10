import { ADD_FRIEND } from './types';
import { UPDATE_ARTWORK_ACTION, ARTWORK_FETCH_SUCCESSFUL } from "./types";

//default state here
const initialState = {
  artworkArray: [],
}

function reducer (state = initialState, action) {
  switch(action.type){
    case "INCREMENT":
      return {...state, count: state.count + 1, somethingElse: "new"}
    case "DECREMEMNT":
      return {...state, count: state.count - 1, somethingElse: "newer"}
    case ADD_FRIEND:
      return {...state, friendsArray: [...state.friendsArray, action.payload]}
    case UPDATE_ARTWORK_ACTION:
      return {...state, artworkArray: [...state.artworkArray, action.payload]}
    case ARTWORK_FETCH_SUCCESSFUL:
      return {...state, artworkArray: [...state.artworkArray, action.payload]}
    default:
      return state;
  }
}

export default reducer
