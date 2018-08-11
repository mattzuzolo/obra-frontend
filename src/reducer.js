const initialState = {
  artworkArray: [],
}

export default function reducer(state = initialState, action) {
  switch(action.type) {

    case 'INCREMENT_FRIENDS':
      return { ...state, friends: state.friends + 1 }
    case "GET_DATA":
      console.log("SWITCH GET DATA", action.payload)
      return { ...state, artworkArray: [...state.artworkArray, action.payload] }

    default:
      return state;
  }
}
