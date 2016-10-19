import axios from 'axios';


export const sayHello = () => {

  return (dispatch) => {

        dispatch({
          type: 'HELLO' ,
          payload: 'hello world'
        });

  }

}
