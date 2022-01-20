import React, { useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Modal from "./modal/modal";
import { actionCountriesAC, actionRemoveCountriesAC } from "./redux/action/action.countries";
import { UseQuery } from "./useQuery";







const Home =()=>{

    const continents =useSelector(state=>state.continentsReducer.continents);
    const countries = useSelector(state=>state.countriesReducer.countries);
    const capitals = useSelector(state=>state.capitalsReducer.capitals)

     const history =useHistory()
     const query = UseQuery()
     const worldQueryId = +query.get('world')
     const continentsQueryId = +query.get('continents')
     const countriesQueryId = +query.get('countries')

     const [isShowCountry, setShowCountry]=useState(false)
     const [country,setCountry]=useState('')

     const [showEdit,seTShowEdit]=useState({})
     const [editCountry,setEditCountry]=useState({})

     const dispatch=useDispatch()

     const addCountry=()=>{
           dispatch(actionCountriesAC({id:Math.random,name:country,continentsId:worldQueryId}))
           setCountry('')
           setShowCountry(false)
     }
     
     const removeCountry =(id)=>{
         dispatch(actionRemoveCountriesAC(id))
     }

     const func=(id)=>{
         seTShowEdit({[id]:false})
         countries.forEach(el=>{
             if(el.id===id){
                 el.name=editCountry[id]
             }
         })
     }


    return (
        <div>
            
            <ul className='menu'>
                {
                    continents.map(el=>{
                        return <li  key={el.id}
                                    onClick={()=>history.push(`/?world=${el.id}`)}
                                    className={el.id===worldQueryId ? 'active' : undefined}>
                                {el.name}
                        </li>
                        
                    })
                }
            </ul>
            
            <div className='menuBox'>
            <ul className='menu1'>
                {
                    countries.map(({id,name,continentsId})=>{
                        return continentsId ===worldQueryId && <li
                         key={id}
                         onClick={()=>history.push(`/?world=${worldQueryId}&continents=${id}`)}
                         className={id===continentsQueryId ? 'active' : undefined}>
                             {
                                 showEdit[id] ? <input className='editInp' type='text'value={editCountry[id]} onChange={e=>setEditCountry({[id]:e.target.value})}/> 
                                 : <span>{name}</span>
                             }
                                
                         
                            <button className='editBut' onClick={
                                showEdit[id] ? ()=>func(id) : ()=>{
                                    seTShowEdit({[id]:true})
                                    setEditCountry({[id]:name})
                                }
                            }>{showEdit[id] ? 'save': 'edit'}</button>

                               <button className='menu1Button' onClick={()=>removeCountry(id)}>x</button>
                        </li>
                    })
                }
            </ul>
             { worldQueryId>0 && <button className='menuBoxbutton' onClick={()=>setShowCountry(true)}>  + </button>} 
            </div>

            <ul className='menu'>
                {
                    capitals.map(({id,name,countriesId})=>{
                        return countriesId===continentsQueryId && <li
                         key={id}
                         onClick={()=>history.push(`/?world=${worldQueryId}&continents=${continentsQueryId}&countries=${id}`)}
                         className={id===countriesQueryId ? 'active' : undefined}>

                            {name}
                        </li>
                    })
                }
            </ul>
            { isShowCountry && <Modal close={()=>setShowCountry(false)}>
                                <input className='countryInp' type='text' value={country} onChange={e=>setCountry(e.target.value)}/>
                                <button onClick={addCountry} className='countryBut'>add</button>
                              </Modal>}
               
            

        </div>
    
    )
}

export default Home;