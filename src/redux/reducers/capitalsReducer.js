

const initialState ={
    capitals:[
        {id:1,name:'Paris', countriesId:1},
        {id:2,name:'Edinburg', countriesId:2},
        {id:3,name:'Berlin', countriesId:3},
        {id:4,name:'Brazil', countriesId:4},
        {id:5,name:'Buenos Aires', countriesId:5},
        {id:6,name:'Santiago', countriesId:6},
    ]
}


export const capitalsReducer=(state=initialState,action)=>{
    switch(action.type){
        default:
            return state
    }
}