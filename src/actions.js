
import { ARTWORK_FETCH_SUCCESSFUL } from './types';

export function artworkFetch(url) {
    return (dispatch) => {
      return fetch(url)
            .then(response => response.json())
            .then(artworkArray => {
        dispatch({type: ARTWORK_FETCH_SUCCESSFUL, payload: artworkArray})
      })
    }
}



//Examples:
// export function incrementAction() {
//   return { type: 'INCREMENT' }
// }
//
// export function addFriendAction(friend) {
//   return { type: "ADD_FRIEND", payload: friend }
// }
