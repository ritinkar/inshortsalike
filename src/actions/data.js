import { FETCH_DATA , BOOKMARK} from '../constants/ActionTypes';

export function fetchData() {
    return {
        type: FETCH_DATA,
    }
}

export function bookmark(id){
    return{
        type: BOOKMARK,
        id
    }
}