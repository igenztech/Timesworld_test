import React,{createContext,useState,useEffect} from 'react'
const ListContext = createContext()
const ListProvider = (props) => {
    const [List, setList] = useState([])

    useEffect (()=> {
        fetch('https://restcountries.com/v2/all?fields=name,region,flag')
        .then(response=>response.json())
        .then(res=> setList(res))
    },[])
    console.log(List);
    return(
        <ListContext.Provider value={[List, setList]} >
        {props.children}
        </ListContext.Provider>
    )
}
export {ListProvider}
export default ListContext