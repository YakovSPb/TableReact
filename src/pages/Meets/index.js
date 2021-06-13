import React from 'react'
import {MeetsForm} from "./components/MeetsForm";
import MeetsTable from "./components/MeetsTable";


export const Meets = (props) => {

    return (
        <>
            <MeetsForm onSubmit={(data) => {
                props.addMeet(data.nameMeet)
            }}/>

            <MeetsTable
                data={props.meets}
                header={props.meetsHeader}
                removeMeet={props.removeMeet}
                startEditing={props.startEditing}
                editeMeet={props.editeMeet}
            />
        </>
    )
}