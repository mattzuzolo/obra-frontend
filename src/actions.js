
import { ARTWORK_FETCH_SUCCESSFUL } from './types';

// export function artworkFetch(url) {
//   return (dispatch) => {
//     return fetch(url)
//       .then(response => response.json())
//       // .then( artworkArray => console.log({type: ARTWORK_FETCH_SUCCESSFUL, payload: artworkArray}) ) //action displays on console.log
//       .then( artworkArray => dispatch({type: "ARTWORK_FETCH_SUCCESSFUL", payload: artworkArray}))
//       .catch(error => console.log("Fetch failed: ", error))
//     }
// }

export function artworkFetch(url) {
    return (dispatch) => {
      return fetch(url)
            .then((response) => response.json())
            .then((artworkArray) => {
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
