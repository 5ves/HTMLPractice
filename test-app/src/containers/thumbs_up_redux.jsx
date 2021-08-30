import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import * as Actions from '../actions/actions.jsx';
import {ThumbsUp} from "../Components/components";

const mapStateToProps = (state, ownProps) => ({
    key: ownProps.id,
    checked: state.byKey[ownProps.id].thumbs_checked,
    amount: state.byKey[ownProps.id].thumbs_amount
});

const mapDispatchToProps = (dispatch) => ({
   ...bindActionCreators(...Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ThumbsUp);
