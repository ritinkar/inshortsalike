import {
    FETCH_DATA,
    BOOKMARK,
    LIKE,
    DISLIKE
} from '../constants/ActionTypes';

export function fetchData() {
    return {
        type: FETCH_DATA,
    }
}

export function bookmark(id) {
    return {
        type: BOOKMARK,
        id
    }
}

export function like(id) {
    return {
        type: LIKE,
        id
    }
}

export function dislike(id) {
    return {
        type: DISLIKE,
        id
    }
}