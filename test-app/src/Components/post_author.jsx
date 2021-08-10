import '../linkedIn.css';
import '../linkedInFeed.css';
import '../icomoon/style.css';

function PostAuthor(props) {
    return (
        <div className="post-author__block">
            <img src={props.avatar_src} className="post-author__avatar"/>
            <div className="feed_column margin-top_15">
                <span className="font-size_14 font-weight_bold">{props.author_name}</span>
                <span className="post-header__text">{props.author_status}</span>
            </div>
        </div>
    );
}

export default PostAuthor;