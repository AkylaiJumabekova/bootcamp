import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {
    const [user, setUser] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json().then(data => setUser(data)));
    }, []);
  return (
    <div>
        <h1>User Detail</h1>
        {user && (
            <>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
            <span>{user.phone}</span>
            </>
        )}
    </div>
  )
}

export default UserDetail