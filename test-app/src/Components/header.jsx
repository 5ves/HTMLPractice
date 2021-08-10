import '../linkedIn.css';
import '../icomoon/style.css'
import avatar from "../images/avatar.svg";
import {HeaderButton} from './components';

const ButtonsBar = [
    {classes:"icon-rss", title:"FEED"},
    {classes:"icon-users", title:"NETWORK"},
    {classes:"icon-briefcase", title:"JOBS"},
    {classes:"icon-message-square", title:"CHAT"},
    {classes:"icon-bell", title:"NOTICES"}
];

function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <div className="logo_image"/>
            </div>
            {ButtonsBar.map((item) => <HeaderButton classes={item.classes} title={item.title} key={item.title}/>)}
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
                        <i className="icon icon-arrow-up-right icon-arrow"/>
                    </div>
                </div>
            </div>
            <HeaderButton classes="icon-more-horizontal" title="OTHER"/>
        </div>
    );
}

export default Header;