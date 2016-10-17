export default function(state = [], action){

  switch(action.type) {
    case 'FETCH_API':
      return action.payload;

  }

  return state;

}
