import {THUMBS_CHECK, THUMBS_INCREMENT, THUMBS_DECREMENT} from "../reducers/reducer";

export const checkThumbsUp = (id) => ({ type: THUMBS_CHECK, id: id});
export const incThumbsUp = (id) => ({ type: THUMBS_INCREMENT, id : id})
export const decThumbsUp = (id) => ({ type : THUMBS_DECREMENT, id : id});
