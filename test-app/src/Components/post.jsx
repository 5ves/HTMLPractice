import '../linkedIn.css';
import '../linkedInFeed.css';
import '../icomoon/style.css';
import file from '../images/file.png'
import download from '../images/download-cloud.png';
import PostHeader from './post_header';
import PostAuthor from './post_author';
import PostButtonsBar from './post_buttons';
import {PostFile, PostText} from "./components";

function Post(props) {
    return (<div className="post__block">
        <PostHeader
            text={props.header_text}
            hrefs={props.header_hrefs}
        />
        <PostAuthor
            avatar_src={props.avatar_src}
            author_name={props.author_name}
            author_status={props.author_status}
        />
        <PostText text={props.post_text}/>

        {props.images.map((object) => <img className="margin-bottom_15 margin-left_30" src={object}/>)}

        {props.files.map((file) => <PostFile name={file.name}
                                             size={file.size}
                                             file={file.file}
                                             download={file.download}
        />)}

        <PostButtonsBar thumbs_checked={props.thumbs_checked}
                        thumbs_amount={props.thumbs_amount}
                        messages_checked={props.messages_checked}
                        messages_amount={props.messages_amount}
        />
    </div>)
}

export default Post;

