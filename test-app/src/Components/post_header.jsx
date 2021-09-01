import '../linkedIn.css';
import '../linkedInFeed.css';
import '../icomoon/style.css';

function PostHeader(props) {
    return (
        <div key={"post_header_" + props.id} className="post-header__block">
            {props.text.split(/[ ,]+/).map((object, index) => {
                if (props.hrefs.includes(object)) {
                    return [<a key={"post_" + props.id + "_header_word_" + index} href="../../../index.html" className="post-header__text blue_color">{object}</a>, <span key={"post_" + props.id + "_header_space_" + index}>&nbsp;</span>];
                } else {
                    return [<span key={"post_" + props.id + "_header_word_" + index} className="post-header__text">{object}</span>, <span key={"post_" + props.id + "_header_space_" + index}>&nbsp;</span>];
                }
            })}
            <div key={"post-header_more_" + props.id} className="icon icon-more-horizontal margin-left_auto cursor-pointer"/>
        </div>
    );
}

export default PostHeader;