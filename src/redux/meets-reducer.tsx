import {generate} from 'shortid';
const ADD_MEET = 'ADD_MEET';
const REMOVE_MEET = 'REMOVE_MEET';
const EDITE_MEET = 'EDITE_MEET';



let initialState = {
    meets : [
        {id: generate(),  nameMeet: 'Новые Год'},
        {id: 'Yj12345',  nameMeet: 'День Рождения'},
        {id: generate(),  nameMeet: '8 Марта'}
    ],
    meetsHeader: [
        {
            name: "Id"
        },
        {
            name: "Наименование"
        }
    ]
}

type InitialStateType = typeof initialState;

const meetsReducer = (state = initialState, action: any):InitialStateType => {

    switch(action.type) {
        case ADD_MEET:
            let stateCopy = {...state}
            stateCopy.meets = [...state.meets]
            stateCopy.meets.push({id: generate(), nameMeet: action.nameMeet})
            return stateCopy;

        case REMOVE_MEET:
            let stateCopy2 = {...state}
               stateCopy2.meets = state.meets.filter((meet) => {
                   return meet.id !== action.id
               })
            return stateCopy2;

        case EDITE_MEET:
            let stateCopy3 = {...state}
               stateCopy3.meets = state.meets.map((meet) => {
                   if(meet.id === action.id) {
                       return {id: meet.id, nameMeet: action.nameMeet}
                   }
                   return meet;
               })
            return stateCopy3;

        default:
            return state;
    }
}

type AddMeetACType = {
    type: typeof ADD_MEET
    nameMeet: string
}

type RemoveMeetACType = {
    type: typeof REMOVE_MEET,
    id: number
}

type EditeMeetACType = {
    type: typeof EDITE_MEET,
    id: number,
    nameMeet: string
}

export const addMeetAC = (nameMeet: string):AddMeetACType => ({type: ADD_MEET, nameMeet})
export const removeMeetAC = (id: number):RemoveMeetACType => ({type: REMOVE_MEET, id})
export const editeMeetAC = (id: number, nameMeet: string):EditeMeetACType => ({type: EDITE_MEET, id, nameMeet})



export default meetsReducer;