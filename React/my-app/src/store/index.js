
import {createStore} from 'redux'
//用于通过动作，创建新的state
const reducer = function(state={num:0},action){
    switch(action.type){
        case "add":
            state.num++;
            break;
        case 'decrement':
            state.num--;
            break;
        default:
            break;
    }
    return {...state}//相当于对象的COPY
}

const store = createStore(reducer)
export default store