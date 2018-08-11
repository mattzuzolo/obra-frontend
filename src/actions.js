

export function fetchArtwork() {
  return (dispatch) => {
    return fetch("http://localhost:4000/artwork")
      .then( res => res.json())
      .then( json => {
        dispatch({type: "GET_DATA", payload: json})
      })
  }
}
