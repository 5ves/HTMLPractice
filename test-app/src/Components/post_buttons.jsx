import '../linkedIn.css';
import '../linkedInFeed.css';
import '../icomoon/style.css';

import share from '../images/share-2.png';
import {ThumbsUp, Messages} from './components'
import {useActions} from '../actions/useActions.jsx'

function PostButtonsBar(props) {
    const actions = useActions();

    return (
        <div className="post-buttons__block">
            <ThumbsUp
                id={props.id}
                checked={props.thumbs_checked}
                amount={props.thumbs_amount}
                setChecked={actions.checkThumbsUp}
                increment={actions.incThumbsUp}
                decrement={actions.decThumbsUp}
            />
            <Messages id={props.id} checked={props.messages_checked} amount={props.messages_amount}/>
            <div className="post-buttons__share margin-left_auto cursor-pointer">
                <img src={share} className="post-buttons__icon" alt=""/>
                <span>&nbsp;</span>
                <span className="regular-text header-text_style">SHARE</span>
            </div>
        </div>
    );
}

export default PostButtonsBar;