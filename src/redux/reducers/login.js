import {LOGIN, LOGOUT} from '../actiontypes';

const initialState = {loggedin: false};
const login = (state = initialState, action) => 
{
    console.log(action.type);
    switch(action.type)
    {
        case LOGIN:
            return {...state, loggedin: true};
        case LOGOUT:
            return {...state, loggedin: false};
        default:
            return state;
    }
}

export default login;