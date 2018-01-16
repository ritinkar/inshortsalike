import dummy from '../dummy';
import {
    FETCH_DATA
} from '../constants/ActionTypes';

const dataReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return dummy.data;
        default:
            return state;
    }
};

export default navigationReducer;