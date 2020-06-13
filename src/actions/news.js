import * as actionTypes from './../constants/actionTypes';

export const receiveNews = news => {
    return {
        type: actionTypes.RECEIVE_NEWS,
        news
    };
};

export const editSource = source => {
    return {
        type: actionTypes.EDIT_SOURCE,
        source
    };
};
