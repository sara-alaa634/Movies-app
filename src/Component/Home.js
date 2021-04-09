import React ,{useState,useEffect}from 'react';
import {Link} from "react-router-dom"
import SinglePage from "./SinglePage"



const Home = () => {

    useEffect(() =>{
        fetchItems();
    },[]);

    const[items, setItems]=useState([])

   const fetchItems= async () => {
       const data=await fetch(
           "http://api.tvmaze.com/shows"

       );
       const items= await data.json();
       setItems(items);

   };
    return ( 
        <div className="Home">
            <h1>Movies App</h1>
            <ul>{items.map(items=>(
                
                <li className="products" key="items.id" >
                    <Link to={`/SinglePage/${items.id}`}>  <img className="imgs" src= {items.image.medium} /></Link>
                   <p>{items.name}</p>

                
                </li>
                
            ))}
            </ul>
        </div>


      
     );
}
 
export default Home ;


