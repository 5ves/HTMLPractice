import '../linkedIn.css';
import '../linkedInFeed.css';
import '../icomoon/style.css';

import thumbs_up from '../images/thumbs-up.png';
import thumbs_up_filled from '../images/thumbs-up_filled.png';
import messages from '../images/message-circle.png';
import messages_filled from '../images/message-circle_filled.png';
import share from '../images/share-2.png';
import {ThumbsUp, Messages} from './components'

function PostButtonsBar(props) {
    return (
        <div className="post-buttons__block">
            <ThumbsUp checked={props.thumbs_checked} amount={props.thumbs_amount}/>
            <Messages checked={props.messages_checked} amount={props.messages_amount}/>
            <div className="post-buttons__share margin-left_auto cursor-pointer">
                <img src={share} className="post-buttons__icon"/>
                <span>&nbsp;</span>
                <span className="regular-text header-text_style">SHARE</span>
            </div>
        </div>
    );
}

export default PostButtonsBar;