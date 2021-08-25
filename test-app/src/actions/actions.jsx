const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const incThumbsUp = (id) => ({ type : INCREMENT, payload : id});

const decThumbsUp = (id) => ({ type : DECREMENT, payload : id});

export {incThumbsUp, decThumbsUp};