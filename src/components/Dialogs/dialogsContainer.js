import { connect } from 'react-redux';
import {onSendMessageCreator} from '../Redux/dialogs-reducer'
import {onUpdateMessageTextCreator} from '../Redux/dialogs-reducer'
import Dialogs from './dialogs'

let mapStateToProps = (state) => {
    return {
        isAuth: state.login.isAuth,
        dialogs: state.dialogs,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (value) => {dispatch(onSendMessageCreator(value))},
        onInputChange: (value) => {dispatch(onUpdateMessageTextCreator(value))}
    }
};

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer