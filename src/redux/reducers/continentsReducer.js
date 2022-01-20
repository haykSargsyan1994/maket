

const initialState ={
    continents:[
        {id:1,name:'Eurasia'},
        {id:2,name:'North America'},
    ]
}


export const continentsReducer =(state=initialState,action)=>{
        switch(action.type){
            default:
                return state
        }
}

