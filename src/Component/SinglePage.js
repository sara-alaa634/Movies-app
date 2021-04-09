import React, {useState,useEffect} from 'react';

const SinglePage = () => {
   
useEffect(()=>{
    fetchItems()
},[])

const[items, setItems]=useState([])
   const fetchItems= async ()=>{
       const data=await fetch(
            "http://api.tvmaze.com/shows"
       );
       const items= await data.json();
       setItems(items);
        };
   
    return (

          
        <div className="page">
            <h1>single page</h1>
            <img src={items.image.medium} alt={items.name} />
            <div className="detalis">

                <h2>{items.name} </h2>
                <p> Type:{items.type}</p>
                <p>Language:{items.language}</p>
                <p>genres:{items.genres}</p>
                <p>status:{items.status}</p>
                <p> runtime:{items.runtime}</p>
                <p>premiered:{items.premiered}</p>
                <p>officialSite:{items.officialSite}</p>
                <p>schedule:{items.schedule}</p>
                <p>rating:{items.rating}</p>
                <p>weight:{items.weight}</p>
                <p>network:{items.network}</p>
                <p>summary:{items.summary}</p>
            </div>

        </div>
      );
}
 
export default SinglePage;







  
