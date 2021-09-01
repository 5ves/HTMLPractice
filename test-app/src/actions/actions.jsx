import {THUMBS_CHECK, THUMBS_INCREMENT, THUMBS_DECREMENT, FETCH_DATA} from "../reducers/reducer";

export const checkThumbsUp = (id) => ({ type: THUMBS_CHECK, id: id});
export const incThumbsUp = (id) => ({ type: THUMBS_INCREMENT, id : id})
export const decThumbsUp = (id) => ({ type : THUMBS_DECREMENT, id : id});
export const fetchData = () => ({ type: FETCH_DATA });