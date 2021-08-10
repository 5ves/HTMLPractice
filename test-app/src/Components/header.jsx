import '../linkedIn.css';
import '../icomoon/style.css'
import avatar from "../images/avatar.svg";
import {HeaderButton} from './components';

function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <div className="logo_image"/>
            </div>
            <HeaderButton classes="icon-rss" title="FEED"/>
            <HeaderButton classes="icon-users" title="NETWORK"/>
            <HeaderButton classes="icon-briefcase" title="JOBS"/>
            <HeaderButton classes="icon-message-square" title="CHAT"/>
            <HeaderButton classes="icon-bell" title="NOTICES"/>
            <div className="search_block">
                <span className="icon icon-search search_icon"/>
                <input className="search_placeholder" type="search" placeholder="Search"/>
            </div>
            <div className="profile_block">
                <img className="profile_avatar" src={avatar} alt=""/>
                <div className="profile_description">
                    <div className="header_text_row">
                        <div className="regular-text header-text_style profile_name">D.KARGAEV</div>
                        <div className="regular-text lightgray_color">YOU</div>
                    </div>
                    <div className="header_text_row">
                        <div className="regular-text stat_text_color">367 views today</div>
                        {/*<div className="regular-text green_color">+32</div>*/}
                        <i className="icon icon-arrow-up-right icon-arrow"/>
                    </div>
                </div>
            </div>
            <HeaderButton classes="icon-more-horizontal" title="OTHER"/>
        </div>
    );
}

export default Header;