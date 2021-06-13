import {generate} from 'shortid';

const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';
const EDITE_USER = 'EDITE_USER';
const CONNECT_PARTS = 'CONNECT_PARTS';

let initialState = {
    users: [
        {id: 'YRds567Y', lastName: 'Кондратьев', firstName: 'Яков', patronymic: 'Александрович', idMeet: 'Yj12345'},
        {id: 'YRdewrs567Y', lastName: 'Иванов', firstName: 'Алексей', patronymic: 'Константинов'}
    ],
    usersHeader: [
        {
            name: "Id"
        },
        {
            name: "Фамилия"
        },
        {
            name: "Имя"
        },
        {
            name: "Отвество"
        }
    ]
}

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
    let stateCopy;

    switch (action.type) {
        case ADD_USER:

            stateCopy = {...state}
            stateCopy.users = [...state.users]
            stateCopy.users.push({id: generate(), ...action.data})
            return stateCopy;

        case REMOVE_USER:
            stateCopy = {...state}
            stateCopy.users = state.users.filter((user) => {
                return user.id !== action.id
            })
            return stateCopy;

        case EDITE_USER:
            stateCopy = {...state}
            stateCopy.users = state.users.map((user) => {
                if (user.id === action.id) {
                    return {
                        id: user.id,
                        lastName: action.lastName,
                        firstName: action.firstName,
                        patronymic: action.patronymic
                    }
                }
                return user;
            })
            return stateCopy;

        case CONNECT_PARTS:
            stateCopy = {...state}
            stateCopy.users = state.users.map((user) => {
                if (user.id === action.idUser) {
                    return {
                        ...user, idMeet: action.idMeet
                    }
                }
                return user;
            })
            return stateCopy;

        default:
            return state;
    }
}

type AddUserACType = {
    type: typeof ADD_USER,
    data: Array<Data>
}

type Data = {
    id: string
    lastName: string
    firstName: string
    patronymic: string
}

type RemoveUserACType = {
    type: typeof REMOVE_USER,
    id: string
}

type editeUserACType = {
    type: typeof EDITE_USER
    id: string
    lastName: string
    firstName: string
    patronymic: string
}

type EditeConnectPartsACType = {
    type: typeof CONNECT_PARTS
    idUser: string
    idMeet: string
}


export const addUserAC = (data:Array<Data>):AddUserACType => ({type: ADD_USER, data})
export const removeUserAC = (id:string):RemoveUserACType => ({type: REMOVE_USER, id})
export const editeUserAC = (id:string, lastName: string, firstName:string, patronymic:string):editeUserACType => ({
    type: EDITE_USER,
    id,
    lastName,
    firstName,
    patronymic
})

export const editeConnectPartsAC = (idUser:string, idMeet:string):EditeConnectPartsACType => ({type: CONNECT_PARTS, idUser, idMeet})


export default usersReducer;