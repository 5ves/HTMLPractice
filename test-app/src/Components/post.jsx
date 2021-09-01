import '../linkedIn.css';
import '../linkedInFeed.css';
import '../icomoon/style.css';
import file from '../images/file.png'
import download from '../images/download-cloud.png';
import PostHeader from './post_header';
import PostAuthor from './post_author';
import PostButtonsBar from './post_buttons';
import {PostFile, PostText} from "./components";
import {useState, useCallback} from "react";

function Post(props) {
    const Post = props.post;

    const
        thumbsChecked = useState(Post.thumbs_checked),
        thumbsAmount = useState(Post.thumbs_amount),
        messagesChecked = useState(Post.messages_checked),
        messagesAmount = useState(Post.messages_amount)
    ;

    return (
        <div className="post__block">
            <PostHeader
                id={props.id}
                key={Post.header_text}
                text={Post.header_text}
                hrefs={Post.header_hrefs}
            />
            <PostAuthor
                key={Post.author_name}
                avatar_src={Post.avatar_src}
                author_name={Post.author_name}
                author_status={Post.author_status}
            />
            <PostText key={Post.post_text} text={Post.post_text}/>

            {Post.images.map((object, index) => <img key={"post_img_" + index}  className="margin-bottom_15 margin-left_30" src={object} alt=""/>)}

            {Post.files.map((file) => <PostFile key={file.name}
                                                 name={file.name}
                                                 size={file.size}
                                                 file={file.file}
                                                 download={file.download}
            />)}

            <PostButtonsBar id = {props.id}
                            thumbs_checked={Post.thumbs_checked}
                            thumbs_amount={Post.thumbs_amount}
                            messages_checked={Post.messages_checked}
                            messages_amount={Post.messages_amount}
            />
        </div>
    )
}

export default Post;

