import { ADD_COUNTRIES, REMOVE_COUNTRIES } from "../action/action.countries"

const initialState ={
    countries:[
        {id:1,name:'France',continentsId:1},
        {id:2,name:'Scotland',continentsId:1},
        {id:3,name:'Germany',continentsId:1},
        {id:4,name:'Brazil',continentsId:2},
        {id:5,name:'Argentina',continentsId:2},
        {id:6,name:'Chille',continentsId:2},
    ]
}


export const countriesReducer =(state=initialState,action)=>{
        switch(action.type){
            case ADD_COUNTRIES:
                return {
                    ...state,
                    countries:[...state.countries, action.payload]
                }
            case REMOVE_COUNTRIES:
                return {
                    ...state,
                    countries:state.countries.filter(el=>el.id!==action.payload)
                }
            default:
                return state
        }
}

