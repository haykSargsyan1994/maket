export const ADD_COUNTRIES='ADD_COUNTRIES'
export const REMOVE_COUNTRIES='REMOVE_COUNTRIES'

export const actionCountriesAC=(country)=>{
    return {
        type:ADD_COUNTRIES,
        payload:country        
    }
}     


export const actionRemoveCountriesAC=(id)=>{
    return {
        type:REMOVE_COUNTRIES,
        payload:id
    }
}