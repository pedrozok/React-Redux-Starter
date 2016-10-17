import axios from 'axios';

const API_URL = 'http://www.reddit.com/r/aww/search.json';

export function fetchAPI() {

  let request = axios.get(API_URL, {
    params: {
      q: "",
      restrict_sr: "true",
      limit: 100
    }
  });

  return function(dispatch) {
    request.then(function(data) {

      dispatch(
        {
          type: 'FETCH_API',
          payload: data.data.data.children
        }
      );
    });
  }


}
