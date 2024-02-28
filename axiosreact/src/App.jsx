// import {  useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import FetchData from './FetchData';

// import axios from './axios';

// To
// import axios from 'axios';

// const API = "https://jsonplaceholder.typicode.com";

// Rest of your code...

function App() {
  return(
    <FetchData/>
  )
}
export default App;
//   // const [isError,setIsError]= useState("");

//   //Note: using promises

//   // useEffect(() =>{
//   //   axios
//   //   .get("https://jsonplaceholder.typicode.com/posts")
//   //   .then((res) => setMyData(res.data));
//   //   .catch((error) => setIsError(error.message));
    
    
    
    



//   // }, []);
//   //Note: using Async Await

//   const getApiData = async () => {
//     try {
//       const res = await axios.get("/posts");
//       setMyData(res.data);
//     } catch (error) {
//       setIsError(error.message);
//     }
//   };
  

  
//   useEffect(() => {
//     getApiData(${API}/posts);
//   }, []);
//   return (
//     <>
//     <h1> Axios</h1>
//     {isError != "" && <h2>{isError}</h2>}

    
//     <div className='grid'>
//   {myData.slice(0, 12).map((post) => (
//     <div className='card' key={post.id}>
//       <h2>{post.title.slice(0, 15).toUpperCase()}</h2>
//       <p>{post.body.slice(0, 100)}</p>
//     </div>
//   ))}
// </div>

//     </>
    
      
//   )
// }

// export default App