import React,{useContext} from 'react'
import './Home.css'
import ListContext from '../Context/Context'

function Home() {
    const [List] = useContext(ListContext)
    
    return (
        <div className="App"> 
    
        <ul className='grid-container' >
        {List.map ( List => {
                return ( <li className="grid_list"> <p>Place : {List.name} <br></br> Region : {List.region}</p>
           
  <img src="https://restcountries.com/v2/all?fields=flag " ></img></li>
                
        )}
      )
    }
    <h4>The City</h4>
  <p>Chania ishe city can be divided irts, the old town and the modern city.</p>
  <img src="https://restcountries.com/v2/all?fields=flag " ></img>
</ul>
        
        </div>
        
   
    )
}

export default Home
