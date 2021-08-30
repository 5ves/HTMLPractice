import {initialPosts} from '../store/store'
import {useEffect} from "react";

export const THUMBS_CHECK = 'THUMBS_CHECK';
export const THUMBS_INCREMENT = 'THUMBS_INCREMENT';
export const THUMBS_DECREMENT = 'THUMBS_DECREMENT';

export default function reducer(state = initialPosts, action = {}) {
    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case THUMBS_CHECK:
            newState.byKey['post_' + action.id].thumbs_checked = !newState.byKey['post_' + action.id].thumbs_checked;
            return newState;
        case THUMBS_INCREMENT:
            newState.byKey['post_' + action.id].thumbs_amount++;
            return newState;
        case THUMBS_DECREMENT:
            newState.byKey['post_' + action.id].thumbs_amount--;
            return newState;
        default:
            return newState;
    }
}