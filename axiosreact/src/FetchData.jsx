import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
//import './App.css'

function FetchData(){
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[]);
    return(
        <div className='container'>
            {/* <div className='mt-3'> */}
                <h3>Post List</h3>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr class="table-primary">
                            <th>UserId</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                            {/* <th>City</th> */}
                        </tr>
                    </thead>
                    <tbody class="table-success">{
                        
                        data.map((user,index) => { 
                            return <tr key={index}>
                              <td>{user.userId}</td>
                              <td>{user.id}</td> 
                              <td>{user.title}</td>
                              <td>{user.body}</td>
                              {/* <td>{user.address.city}</td>  */}
                            </tr>
                        })}

                    </tbody>
                </Table>

            </div>

        
    )
}
export default FetchData;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function FetchData() {  
//   const [data, setData] = useState([]);

//   useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(res => setData(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div className='container' >
//       <div className='mt-3'>
//         <h3> Fetch data from API in react with axioss</h3>
//         <table className='table'>
//           <thead>
//             <tr>
//               <th>UserID</th>
//               <th>ID</th>
//               <th>TITLE</th>
//               <th>BODY</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((user, index) => (
//               <tr key={index}>
//                 <td>{user.userId}</td>
//                 <td>{user.id}</td>
//                 <td>{user.title}</td>
//                 <td>{user.body}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default FetchData;