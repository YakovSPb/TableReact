import React from 'react';
import {Users} from "../../index";
import {addUserAC, editeUserAC, removeUserAC} from "../../../../redux/users-reducer";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        usersHeader: state.usersReducer.usersHeader
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addUser: (data) => {
            dispatch(addUserAC(data));
        },
        removeUser: (id) => {
            dispatch(removeUserAC(id));
        },
        editeUser: (id, lastName, firstName, patronymic) => {
            dispatch(editeUserAC(id, lastName, firstName, patronymic))
    }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
