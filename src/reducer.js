
import { ARTWORK_FETCH_SUCCESSFUL } from "./types";

//default state here
const initialState = {
  artworkArray: [],
}

export default function reducer(state = initialState, action) {
  // console.log("payload in reducer before switch", action.payload);
  switch(action.type){
    case ARTWORK_FETCH_SUCCESSFUL:
      return {...state, artworkArray: [...state.artworkArray, action.payload]}
    default:
      return state;
  }
}



      // case "ARTWORK_FETCH_SUCCESSFUL":
      //   console.log("action.payload in ARTWORK_FETCH_SUCCESSFUL switch", action.payload); //these console.logs run. Payload is as expected
      //   console.log("state in ARTWORK_FETCH_SUCCESSFUL switch", state);
      //   console.log("state of artwork array in ARTWORK_FETCH_SUCCESSFUL switch", state.artworkArray);
      //   return { ...state, artworkArray: [...state.artworkArray, action.payload] }
      // default:
      //   return state;
