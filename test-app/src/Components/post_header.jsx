import '../linkedIn.css';
import '../linkedInFeed.css';
import '../icomoon/style.css';

function PostHeader(props) {
    return (
        <div className="post-header__block">
            {props.text.split(/[ ,]+/).map((object) => {
                if (props.hrefs.includes(object)) {
                    return [<a href="../index.html" className="post-header__text blue_color">{object}</a>, <span>&nbsp;</span>];
                } else {
                    return [<span className="post-header__text">{object}</span>, <span>&nbsp;</span>];
                }
            })}
            <div className="icon icon-more-horizontal margin-left_auto cursor-pointer"/>
        </div>
    );
}

export default PostHeader;