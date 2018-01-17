import dummy from '../dummy';
import {
    FETCH_DATA,
    BOOKMARK,
    LIKE,
    DISLIKE
} from '../constants/ActionTypes';

const dataReducer = (state = [], action) => {
    let newState = []
    switch (action.type) {
        case FETCH_DATA:
            return dummy.data;
        case BOOKMARK:
            newState = state.map((article) => {
                if (article.id === action.id) {
                    return { ...article,
                        isBookmarked: article.isBookmarked === 0 ? 1 : 0
                    }
                }
                return article;
            })
            return newState;
        case LIKE:
            newState = state.map((article) => {
                if (article.id === action.id) {
                    return { ...article,
                        isLiked: article.isLiked === 1 ? 0 : 1
                    }

                }
                return article;
            })
            return newState;
        case DISLIKE:
            newState = state.map((article) => {
                if (article.id === action.id) {
                    return { ...article,
                        isLiked: article.isLiked === -1 ? 0 : -1
                    }
                }
                return article;
            })
            return newState;
        default:
            return state;
    }
};

export default dataReducer;