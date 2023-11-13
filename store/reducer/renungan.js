import { SHOW_RENUNGAN } from "../action/renungan"

const initialState={
    renungan:[]
}

const categoriReducer=(state=initialState,action) =>{
    switch (action.type){
        case SHOW_RENUNGAN:
            return {
                ...state,renungan:action.data
            }
        default:
            return state
    }
}

export default categoriReducer