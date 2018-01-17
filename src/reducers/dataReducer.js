import dummy from '../dummy';
import {
    FETCH_DATA,
    BOOKMARK
} from '../constants/ActionTypes';

const dataReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_DATA:
            return dummy.data;
        case BOOKMARK:
            let newState = state.map((article) => {
                if (article.id === action.id) {
                    article.isBookmarked = article.isBookmarked === 0 ? 1 : 0;
                }
                return article;
            })
            return newState;
        default:
            return state;
    }
};

export default dataReducer;