import React, { useState } from 'react';

const AddUsers = () => {
    const [user, setUser] = useState({});
     const handleAddUser = (event) => {
       event.preventDefault();
       console.log(user);

       fetch("http://localhost:5000/users", {
         method: "POST",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(user),
       })
         .then((res) => res.json())
         .then((data) => {
           if (data.acknowledged) {
             alert("User added successfully");
             event.target.reset();
           }
         });
     };

    const handalInputBlur = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser);
        
    }
    return (
      <div>
        <h2>Please Add a user: </h2>
        <form onSubmit={handleAddUser}>
          <input
            onBlur={handalInputBlur}
            type="text"
            name="name"
            id=""
            placeholder="User Name"
            required
          />
          <br />
          <input
            onBlur={handalInputBlur}
            type="text"
            name="address"
            id=""
            placeholder="User Address"
            required
          />
          <br />
          <input
            onBlur={handalInputBlur}
            type="email"
            name="email"
            id=""
            placeholder="Email"
            required
          />
          <br />
          <button type="submit">Add User</button>
        </form>
      </div>
    );
};

export default AddUsers;