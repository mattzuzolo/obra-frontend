
import { ARTWORK_FETCH_SUCCESSFUL } from "./types";

//default state here
const initialState = {
  artworkArray: [{
    title: "Guernica",
    artist: "Pablo Picasso",
    medium: "Oil on canvas",
    century: "20th Cenutry",
    culture: "Spanish",
    url: "https://en.wikipedia.org/wiki/Guernica_(Picasso)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg",
    apiId: 568,
  }],
}

export default function reducer (state = initialState, action) {
  console.log("payload in reducer before switch", action.payload);
  switch(action.type){
    case ARTWORK_FETCH_SUCCESSFUL:
      console.log("action.payload in ARTWORK_FETCH_SUCCESSFUL switch", action.payload); //these console.logs run. Payload is as expected
      console.log("state in ARTWORK_FETCH_SUCCESSFUL switch", state);
      console.log("state of artwork array in ARTWORK_FETCH_SUCCESSFUL switch", state.artworkArray);
      return { ...state, artworkArray: [...state.artworkArray, action.payload] }
sd
    default:
      return state;
  }
}
