import { FETCH_WEATHER } from '../actions/index' 

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    // return state.concat([ action.payload.data ]);  // NOT push because this would mutate the state
    return [action.payload.data, ...state]  // Returns [city, city, city] NOT [city, [city, city]]
  }

  return state;
}