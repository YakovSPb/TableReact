import React, {useState} from 'react'
import {UsersForm} from "./components/UsersForm";
import UsersTable from "./components/UsersTable";
import './index.scss'


export const Users = (props) => {

    const [withBirth, setWithBirth] = useState(false)


    return (
        <>
            <div className="main_users">
                <UsersForm onSubmit={(data) => {
                    props.addUser(data)
                }}/>
                <input
                    type="checkbox"
                    onChange={() => setWithBirth(!withBirth)}
                />
                <label>Только с Днем Рождения</label>
            </div>


            <UsersTable
                data={props.users}
                header={props.usersHeader}
                removeUser={props.removeUser}
                startEditing={props.startEditing}
                editeUser={props.editeUser}
                withBirth={withBirth}
            />
        </>
    )
}