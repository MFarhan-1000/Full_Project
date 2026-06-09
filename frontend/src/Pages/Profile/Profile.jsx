import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function Profile() {
  const [data, setdata] = useState([])
    const params = useParams()

    useEffect(()=>{
        GetUserData();
    },[])

    const postStyle = {
          marginLeft: "20px",
          marginTop: "30px",
          listStyle: 'none'
        }
  
    const GetUserData =async ()=>{
        let result = await fetch(`http://localhost:3000/userprofile/${params.id}`)
        const data = await result.json()
        console.log(data);
        setdata(data);
    }

    const delPost =async (id)=>{
      let resultPost = await fetch(`http://localhost:3000/delpost/${id}`,{
        method: "Delete",
        body: JSON.stringify({id}),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const deletedPost = await resultPost.json();
      GetUserData();
    }

    return (
    <div>
    
      <h1>Profile</h1>

<br /><br />
      {data.map((item,index)=>(
        <ul style={postStyle} key={index}>
          <li>{item.title}</li>
        { item.message ? ( 
            <li>{item.message}</li>)
            :
            (<li><img src={item.media?.url} alt="image" width={200} height={150} /></li>)
          }

          <li>
            <button onClick={()=>{delPost(item._id)}}>Delete</button>
          </li>
        </ul>
      ))}

      <br /><br />

    </div>
  )
}

export default Profile
