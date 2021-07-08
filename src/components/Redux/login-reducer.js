const LOGIN_USER = 'LOGIN-USER';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

let loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, ...action.data.data.data, isAuth: true }
        default:
            return state
    }
};

export const loginUserAC = (data) => {
    return {type: 'LOGIN-USER', data: data}
};

export default loginReducer;