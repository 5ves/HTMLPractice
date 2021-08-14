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
    const
        thumbsChecked = useState(props.thumbs_checked),
        thumbsAmount = useState(props.thumbs_amount),
        messagesChecked = useState(props.messages_checked),
        messagesAmount = useState(props.messages_amount)
    ;
    return (<div className="post__block">
        <PostHeader
            key={props.header_text}
            text={props.header_text}
            hrefs={props.header_hrefs}
        />
        <PostAuthor
            key={props.author_name}
            avatar_src={props.avatar_src}
            author_name={props.author_name}
            author_status={props.author_status}
        />
        <PostText key={props.post_text} text={props.post_text}/>

        {props.images.map((object) => <img className="margin-bottom_15 margin-left_30" src={object} alt=""/>)}

        {props.files.map((file) => <PostFile key={file.name}
                                             name={file.name}
                                             size={file.size}
                                             file={file.file}
                                             download={file.download}
        />)}

        <PostButtonsBar thumbs_checked={thumbsChecked}
                        thumbs_amount={thumbsAmount}
                        messages_checked={messagesChecked}
                        messages_amount={messagesAmount}
        />
    </div>)
}

export default Post;

