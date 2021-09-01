import {initialPosts} from '../store/store'
import {useEffect} from "react";

export const THUMBS_CHECK = 'THUMBS_CHECK';
export const THUMBS_INCREMENT = 'THUMBS_INCREMENT';
export const THUMBS_DECREMENT = 'THUMBS_DECREMENT';
export const FETCH_DATA = 'FETCH_DATA';

export default function reducer(state = initialPosts, action = {}) {
    let newState = JSON.parse(JSON.stringify(state));
    let posts;
    switch (action.type) {
        case FETCH_DATA:
            posts = JSON.parse(localStorage.getItem('posts'));
            return posts;
        case THUMBS_CHECK:
            newState[action.id].thumbs_checked = !newState[action.id].thumbs_checked;
            localStorage.setItem('posts', JSON.stringify(newState));
            return newState;
        case THUMBS_INCREMENT:
            newState[action.id].thumbs_amount++;
            localStorage.setItem('posts', JSON.stringify(newState));
            return newState;
        case THUMBS_DECREMENT:
            newState[action.id].thumbs_amount--;
            localStorage.setItem('posts', JSON.stringify(newState));
            return newState;
        default:
            return newState;
    }
}