
import { ARTWORK_FETCH_SUCCESSFUL } from './types';

export function incrementAction() {
  return { type: 'INCREMENT' }
}

export function incrementFriendsAction() {
  return { type: 'INCREMENT_FRIENDS' }
}

export function addFriendAction(friend) {
  return { type: "ADD_FRIEND", payload: friend }
}

export function setCountAction(count) {
  return { type: 'SET_COUNT', payload: count }
}

/// MY FUNCTIONS

// export function updateArtworkAction(artworkArray) {
//   return { type: UPDATE_ARTWORK_ACTION, payload: artworkArray }
// }

export function artworkFetch(url) {
    return (dispatch) => {

      return fetch(url)
            .then((response) => response.json())
            .then((artworkArray) => { dispatch({type: ARTWORK_FETCH_SUCCESSFUL, payload: artworkArray}) })

    }
}
