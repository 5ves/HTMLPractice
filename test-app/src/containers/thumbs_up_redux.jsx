import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import { store } from '../store/store';
import { incThumbsUp, decThumbsUp } from '../actions/actions.jsx';
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {ThumbsUp} from "../Components/components";



export default connect()(ThumbsUp)
