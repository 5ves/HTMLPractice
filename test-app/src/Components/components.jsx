import file_icon from "../images/file.png";
import download_icon from "../images/download-cloud.png";
import thumbs_up_filled from "../images/thumbs-up_filled.png";
import thumbs_up from "../images/thumbs-up.png";
import messages_filled from "../images/message-circle_filled.png";
import messages from "../images/message-circle.png";
import {useState} from "react";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            width: 322,
        }}
    />
);

function Group(props) {
    return (
        <div className="group-block">
            <img src={props.src} className="group__icon" alt=""/>
            <span>{props.name}</span>
        </div>
    );
}

function Hashtag(props) {
    return (
        <div className="hashtag font-size_12">
            {"#" + props.text}
        </div>
    );
}

function Article(props) {
    return (
        <div className="article">
            <img src={props.src} className="article__image cursor-pointer" alt=""/>
            <div className="feed_column">
                <span className="font-size_14 font-weight_bold margin-bottom_5 cursor-pointer">{props.title}</span>
                <span className="font-size_10 font-weight_lighter">{props.viewers + " viewers"}</span>
            </div>
        </div>
    );
}

function Column(props) {
    return (
        <div className={"column " + props.classes}>
            <div className={"footer_column_header black_color regular-text " + props.invisibleHeader}>{props.header}</div>
            {props.refs.map((object) => <a href="../../../index.html" className="href_text black_color">{object}</a>)}
        </div>
    );
}

function HeaderButton(props) {
    return (
        <button className="header-button cursor-pointer">
            <span className={props.classes + " icon header-icon"}/>
            <span className="regular-text header-text_style">{props.title}</span>
        </button>
    );
}

function PostText(props) {
    if (props.text && props.text.length < 301) {
        return (<span className="post_text margin-bottom_15 margin-left_30">{" " + props.text}</span>);
    } else if (props.text && props.text.length >= 301) {
        return (
            <div className="feed_column margin-left_30">
                <span className="post_text margin-bottom_15 gradient_text">{" " + props.text}</span>
                <a href="../../../index.html" className="href_text blue_color uppercase">read more</a>
            </div>
        );
    } else {
        return (<span/>);
    }
}

function PostFile(props) {
    if (props.name) {
        return (
            <div className="post_file__block  margin-left_30">
                <img src={file_icon} className="post_file__icon cursor-pointer" alt=""/>
                <div className="feed_column">
                    <span className="font-size_14 font-weight_bolder">{props.name}</span>
                    <span className="font-size_10 font-weight_lighter">{"PDF file, " + props.size + " kb"}</span>
                </div>
                <img src={download_icon} className="download_image cursor-pointer" alt=""/>
            </div>
        );
    } else {
        return <div/>;
    }
}

function ThumbsUp(props) {

    function handleClick() {
        props.checked[1](!props.checked[0]);
        if (!props.checked[0]) {
            props.amount[1](props.amount[0] + 1);
        } else {
            props.amount[1](props.amount[0] - 1);
        }
    }

    if (props.checked[0]) {
        return (
            <div className="post-buttons__button cursor-pointer" onClick={props.on_thumbs_up_click}>
                <div className="post__thumbsup-filled"/>
                <span>&nbsp;</span>
                <span className="font-size_12">{props.amount[0]}</span>
            </div>
        );
    } else {
        return (
            <div className="post-buttons__button cursor-pointer" onClick={props.on_thumbs_up_click}>
                <div className="post__thumbsup"/>
                <span>&nbsp;</span>
                <span className="font-size_12">{props.amount[0]}</span>
            </div>
        );
    }
}

function Messages(props) {
    function handleClick() {
        props.checked[1](!props.checked[0]);
    }
    if (props.checked[0]) {
        return (
            <div className="post-buttons__button cursor-pointer" onClick={props.on_messages_click}>
                <div className="post__messages-filled"/>
                <span>&nbsp;</span>
                <span className="font-size_12">{props.amount[0]}</span>
            </div>
        );
    } else {
        return (
            <div className="post-buttons__button cursor-pointer" onClick={props.on_messages_click}>
                <div className="post__messages"/>
                <span>&nbsp;</span>
                <span className="font-size_12">{props.amount[0]}</span>
            </div>
        );
    }
}


export {ColoredLine, Group, Hashtag, Article, Column, HeaderButton, PostText, PostFile, ThumbsUp, Messages};