import { createStore } from "redux";
import avatar_1 from "../images/avatar_1.png";
import avatar_2 from "../images/avatar_2.png";
import post_image from "../images/post_image.png";
import avatar_3 from "../images/avatar_3.png";
import avatar_4 from "../images/avatar_4.png";

import reducer from "../reducers/reducer";

export const initialPosts = []

export const store = createStore( reducer, initialPosts);
