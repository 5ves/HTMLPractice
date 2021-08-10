import '../linkedIn.css';
import '../icomoon/style.css'
import LinkedIn from '../images/LinkedIn.svg';
import {Column} from './components';

function Footer() {
    const first_column = ["About", "Careers", "Advertising", "Small Business"],
          second_column = ["Talent Solutions", "Marketing Solutions", "Sales Solutions", "Safety Center"],
          third_column = ["Community Guidelines", "Privacy & Terms", "Mobile App"];
    return (
        <div className="footer">
            <div>
                <div className="logo_image"/>
                <img className="footer_logo" src={LinkedIn} alt=""/>
            </div>
            <Column classes="margin-left_69" invisibleHeader="" header="Navigation" refs={first_column}/>
            <Column classes="margin-left_35" invisibleHeader="invisible_header" header="." refs={second_column}/>
            <Column classes="margin-left_45" invisibleHeader="invisible_header" header="." refs={third_column}/>

            <div className="column column_margn-left_65">
                <div className="footer_column_header black_color regular-text">Fast access</div>
                <button className="footer_button blue_button">
                    <span>QUESTIONS?</span>
                    <span className="icon icon-help-circle footer_icon"/>
                </button>
                <button className="footer_button white_button">
                    <span>SETTINGS</span>
                    <span className="icon icon-settings footer_icon"/>
                </button>
            </div>

            <div className="column column_margin-left_60">
                <div className="footer_column_header black_color regular-text">Language</div>
                <select className="footer__language_select">
                    <option>ENGLISH</option>
                    <option>RUSSIAN</option>
                    <option>LATIN</option>
                </select>
            </div>

        </div>
    );
}

export default Footer;