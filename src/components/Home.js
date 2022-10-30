import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users)
    console.log(users);
    const handalDelete = (user) =>{
        const agreed = window.confirm(`Are you agree to delete ${user.email}`);
        if(agreed){
            fetch(`http://localhost:5000/users/${user._id}`,{
                method: "DELETE",
                
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('User Deleted Successfully!!!');
                    const remaningUsers = displayUsers.filter(usr=> usr._id !== user._id);
                    setDisplayUsers(remaningUsers)
                }
            })
        }
    }
    return (
      <div>
        <h2>Users: {displayUsers.length}</h2>
        <div>
          {displayUsers.map((user) => (
            <p key={user._id}>
              Name: {user.name} Email: {user.email}{" "}
              <button onClick={() => handalDelete(user)}>X</button>
            </p>
          ))}
        </div>
      </div>
    );
};

export default Home;