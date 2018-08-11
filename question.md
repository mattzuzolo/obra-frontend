//reducer.js

//default state here
const initialState = {
  artworkArray: [],
}

export default function reducer(state = initialState, action) {
  // console.log("payload in reducer before switch", action.payload);
  switch(action.type){
    case "ARTWORK_FETCH_SUCCESSFUL":
      console.log("action.payload in ARTWORK_FETCH_SUCCESSFUL switch", action.payload); //these console.logs run. Payload is as expected
      console.log("state in ARTWORK_FETCH_SUCCESSFUL switch", state);
      console.log("state of artwork array in ARTWORK_FETCH_SUCCESSFUL switch", state.artworkArray);
      return { ...state, artworkArray: [...state.artworkArray, action.payload] }
    default:
      return state;
  }
}


//actions.js

export function artworkFetch(url) {
    return (dispatch) => {
      return fetch(url)
            .then((response) => response.json())
            .then((artworkArray) => {
              dispatch({type: "ARTWORK_FETCH_SUCCESSFUL", payload: artworkArray})
            })
    }
}


//IndexContainer.js

//running method
componentDidMount() {
  this.props.fetchData("http://localhost:4000/artwork");
}

function mapStateToProps(state) {
  return {
    artworkArray: state.artworkArray,
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchData: (url) => dispatch(artworkFetch(url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);
