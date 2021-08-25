import { createStore } from "redux";
import avatar_1 from "../images/avatar_1.png";
import avatar_2 from "../images/avatar_2.png";
import post_image from "../images/post_image.png";
import avatar_3 from "../images/avatar_3.png";
import avatar_4 from "../images/avatar_4.png";

import reducer from "../reducers/reducer";

const initialPosts = {
    byKey : {
        "post_1": {
            key: "post_1",
            header_text: "Ted Bell, Annette Nguyen and Cody Hawkins liked this",
            header_hrefs: ["Ted", "Bell", "Annette", "Nguyen", "Cody", "Hawkins"],
            avatar_src: avatar_1,
            author_name: "Theresa Steward",
            author_status: "iOS developer",
            post_text: "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).",
            images: [],
            files: [{name: "", size: ""}],
            thumbs_checked: false,
            thumbs_amount: 42,
            messages_checked: false,
            messages_amount: 9,
        },
        "post_2": {
            key: "post_2",
            header_text: "Audrey Alexander comment this",
            header_hrefs: ["Audrey", "Alexander"],
            avatar_src: avatar_2,
            author_name: "Kyle Fisher",
            author_status: "Product designer at Commandor Corp.",
            post_text: "How’s your day going, guys?",
            images: [post_image],
            files: [{name: "", size: ""}],
            thumbs_checked: true,
            thumbs_amount: 12,
            messages_checked: false,
            messages_amount: 3,
        },
        "post_3": {
            key: "post_3",
            header_text: "High rated post from your feed",
            header_hrefs: [],
            avatar_src: avatar_3,
            author_name: "Brandon Wilson",
            author_status: "Senior UX designer",
            post_text: "There is some new guidelines for iOS",
            images: [],
            files: [
                {
                    name: "iOS 11 guidelines for UX/UI designers",
                    size: "324"
                },
                {
                    name: "iOS 11 guidelines for developers",
                    size: "245"
                }],
            thumbs_checked: true,
            thumbs_amount: 89,
            messages_checked: true,
            messages_amount: 7,
        },
        "post_4": {
            key: "post_4",
            header_text: "First post from Audrey Alexander",
            header_hrefs: ["Audrey", "Alexander"],
            avatar_src: avatar_4,
            author_name: "Audrey Alexander",
            author_status: "Team lead at Google",
            post_text: "The bun runs along the road and meets a wolf. «Little bun, little bun, I want to eat you!» says the wolf. «I ran away from Grandfather, I ran away from Grandmother, I ran away from the hare. And I can run away from you, grey wolf!» says the bun and runs away.",
            images: [],
            files: [{name: "", size: ""}],
            thumbs_checked: false,
            thumbs_amount: 10,
            messages_checked: false,
            messages_amount: 0,
        },
    },
    keysList: ['post_1', 'post_2', 'post_3', 'post_4'],
}


const store = createStore( reducer, initialPosts);

export default store;