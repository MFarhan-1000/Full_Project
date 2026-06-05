import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'


function Profile() {
    const params = useParams()

    useEffect(()=>{
        GetUserData();
    },[])
  
    const GetUserData =async ()=>{
        let result = await fetch(`http://localhost:3000/userprofile/${params.id}`)
        const data = await result.json()
        console.log(data);
    }

    return (
    <div>
    
      <h1>Profile</h1>

    </div>
  )
}

export default Profile
