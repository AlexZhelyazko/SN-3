import { connect } from 'react-redux';
import {onSendMessageCreator} from '../Redux/dialogs-reducer'
import {onUpdateMessageTextCreator} from '../Redux/dialogs-reducer'
import Dialogs from './dialogs'
import {withAuthRedirect} from '../HOC/withAuthRedirect'

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (value) => {dispatch(onSendMessageCreator(value))},
        onInputChange: (value) => {dispatch(onUpdateMessageTextCreator(value))}
    }
};

let AuthRedirectComponent = withAuthRedirect(Dialogs)

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer