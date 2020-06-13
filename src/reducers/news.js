import * as actionTypes from './../constants/actionTypes';
import {updateObject} from './utility';

const initialState = {
    news: null,
};
let indexId = 0;

export const saveNews = (state = initialState, action) => {
    return updateObject(state, {
        ...action.news.reduce((obj, news) => {
            obj[indexId++] = news;
            return obj;
        }, {})
    })
};

export const editSource = (state = initialState, action) => {
    let postId = action.source.id;
    let post = state[postId];

    if (post !== undefined) {
        post.source = action.source;

        return {
            ...state,
            [postId]: {
                ...post
            }
        };
    } else {
        return {
            ...state
        }
    }

};


export const newsReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.RECEIVE_NEWS:
            return saveNews(state, action);
        case actionTypes.EDIT_SOURCE:
            return editSource(state, action);
        default:
            return state;
    }
};