import React from 'react';
import {connect} from "react-redux";
import Parts from "../../index";
import {editeConnectPartsAC} from "../../../../redux/users-reducer";



let mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        meets: state.meetsReducer.meets
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        editeConnectParts: (idUser, idMeet) => {
            dispatch(editeConnectPartsAC(idUser, idMeet))
        }
    }
}

const PartsContainer = connect(mapStateToProps, mapDispatchToProps)(Parts)

export default PartsContainer;