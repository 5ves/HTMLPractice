import '../linkedIn.css';
import '../linkedInFeed.css'
import '../icomoon/style.css'
import paperclip from "../images/paperclip.png"
import image from "../images/image.png"
import film from "../images/film.png"
import send from "../images/send.png"

import avatar_1 from '../images/avatar_1.png';
import avatar_2 from '../images/avatar_2.png';
import avatar_3 from '../images/avatar_3.png';
import avatar_4 from '../images/avatar_4.png';

import post_image from "../images/post_image.png";
import profile_avatar from "../images/profile_photo.png";
import icon from "../images/Logo (2).svg";
import group_1 from "../images/group_1.png";
import group_2 from "../images/group_2.png";
import group_3 from "../images/group_3.png";

import article_1 from "../images/article_1.png";
import article_2 from "../images/article_2.png";
import article_3 from "../images/article_3.png";

import Post from "./post";
import {ColoredLine, Article, Hashtag, Group} from "./components"
import {useCallback} from "react";

const GroupsList = [
          {name: "Moscow State Linguistical University", src: group_1, key:"group_1"},
          {name: "Digital freelancers group", src: group_2, key:"group_2"},
          {name: "Interaction design association", src: group_3, key:"group_3"},
      ],
      HastagsList = ["work", "business", "hr", "userinterface", "digital", "userexperience", "ux", "ui", "freelance"],

      ArticlesList = [
          {src: article_1, title: "How I make cool designs?", viewers: "6,340", key:"article_1"},
          {src: article_2, title: "Advices for young HR-manage", viewers: "6,340", key:"article_2"},
          {src: article_3, title: "A little about usability testing", viewers: "6,340", key:"article_3"}
      ],
      Posts = [
          {
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
          {
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
          {
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
          {
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
];

function Main() {

    const PostsFunc = ({ posts }) => {
        const onThumbsUpClick = useCallback((post) => {
            post.thumbs_checked = !post.thumbs_checked;
            if (!post.thumbs_checked) {
                post.thumbs_amount++;
            } else {
                post.thumbs_amount--;
            }
        });

        const onMessagesClick = useCallback((post) => {
            post.messages_checked = !post.messages_checked;
        });

        return posts.map((item) => {
            return <Post key = {item.key}
                         header_text={item.header_text}
                         header_hrefs={item.header_hrefs}
                         avatar_src={item.avatar_src}
                         author_name={item.author_name}
                         author_status={item.author_status}
                         post_text={item.post_text}
                         images={item.images}
                         files={item.files}
                         thumbs_checked={item.thumbs_checked}
                         thumbs_amount={item.thumbs_amount}
                         messages_checked={item.messages_checked}
                         messages_amount={item.messages_amount}
                         on_thumbs_up_click={onThumbsUpClick}
                         on_messages_click={onMessagesClick}
            />
        })

    }

    return (
        <div className="main">
            <div className="main__left">
                {/*new post*/}
                <div className="new-post-block margin-bottom_20">
                    <span className="new-post__title uppercase">new post</span>
                    <div className="new-post__input-block border-top">
                        <input type="text" placeholder="What's on your mind?" className="new-post__placeholder"/>
                        <img src={paperclip} className="new-post__image" alt=""/>
                        <img src={image} className="new-post__image" alt=""/>
                        <img src={film} className="new-post__image" alt=""/>
                        <button className="new-post__button button-blue">
                            <img src={send} className="new-post__button-image" alt=""/>
                        </button>
                    </div>
                </div>

                {/*SORT BY*/}
                <div className="sort__block">
                    <ColoredLine color={"rgba(231, 231, 231, 1)"}/>
                    <span className="regular-text uppercase">sort by:  </span>
                    <span className="regular-text uppercase feed_blue_color">trending</span>
                    <ColoredLine color={"rgba(231, 231, 231, 1)"}/>
                </div>

                {/*{Posts.map((item) => {*/}
                {/*    return <Post key = {item.key}*/}
                {/*                 header_text={item.header_text}*/}
                {/*                 header_hrefs={item.header_hrefs}*/}
                {/*                 avatar_src={item.avatar_src}*/}
                {/*                 author_name={item.author_name}*/}
                {/*                 author_status={item.author_status}*/}
                {/*                 post_text={item.post_text}*/}
                {/*                 images={item.images}*/}
                {/*                 files={item.files}*/}
                {/*                 thumbs_checked={item.thumbs_checked}*/}
                {/*                 thumbs_amount={item.thumbs_amount}*/}
                {/*                 messages_checked={item.messages_checked}*/}
                {/*                 messages_amount={item.messages_amount}*/}
                {/*    />*/}
                {/*})}*/}

                {PostsFunc()}

            </div>
            <div className="main__right">
                <div className="feed_profile__block">
                    <img src={profile_avatar} className="feed_profile__avatar" alt=""/>
                    <div className="feed_profile__name_block">
                        <div className="font-size_14">Dmitry Kargaev</div>
                        <span>&nbsp;</span>
                        <img src={icon} className="profile-information__top-logo" alt=""/>
                    </div>
                    <div className="font-size_10 feed_profile__text">Freelance UX/UI designer, 80+ projects  in web design, mobile apps (iOS & android) and creative projects. Open to offers.</div>
                </div>

                <div className="feed__button_block">
                    <button className="feed__button cursor-pointer">write new article</button>
                </div>

                <div className="feed__groups_block">
                    <div className="buttons-row-flex">
                        <div className="regular-text uppercase">my groups</div>
                        <a href="../../../index.html" className="href_text blue_color uppercase">edit list</a>
                    </div>
                    <div className="groups_list border-top">
                        {GroupsList.map((item) => <Group name= {item.name} src={item.src} key={item.key}/>)}
                    </div>
                    <a href="" className="href_text blue_color uppercase">show all(8)</a>
                </div>

                <div className="features__block">
                    <div className="font-size_12 text-align_left uppercase margin-bottom_20">Followed hashtags</div>
                    <div className="hashtags__list border-top">
                        {HastagsList.map((item, index) => <Hashtag text={item} key={item}/>)}
                    </div>
                </div>

                <div className="features__block">
                    <div className="font-size_12 text-align_left uppercase margin-bottom_20">Trending articles</div>
                    <div className="groups_list border-top">
                        {ArticlesList.map((item) => <Article src={item.src} title={item.title} viewers={item.viewers} key={item.key}/>)}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Main;