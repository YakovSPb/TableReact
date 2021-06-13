import React from 'react';
import {connect} from "react-redux";
import {addMeetAC, editeMeetAC, removeMeetAC} from "../../../../redux/meets-reducer";
import {Meets} from "../../index";



let mapStateToProps = (state) => {
    return {
        meets: state.meetsReducer.meets,
        meetsHeader: state.meetsReducer.meetsHeader
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMeet: (nameMeet) => {
            dispatch(addMeetAC(nameMeet));
        },
        removeMeet: (id) => {
            dispatch(removeMeetAC(id));
        },
        editeMeet: (id, nameMeet) => {
            dispatch(editeMeetAC(id, nameMeet))
    }
    }
}

const MeetsContainer = connect(mapStateToProps, mapDispatchToProps)(Meets)

export default MeetsContainer;
