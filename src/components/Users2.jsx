// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

const Users2 = () => {
   
    const {isPending, isError, error, data:users} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/user');
            return res.json();
        }
    })


    // using by useEffect

    //  const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/user')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setUsers(data)
    //     })
    // }, [])

    if (isPending) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }






  const handleDelete = (id) => {
    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          console.log("deleted successFully");

          // remove the user from the UI
          //   const remaining = users.filter((user) => user._id !== id);
          //   setUsers(remaining);
        }
      });
  };

  return (
    <div>
      {/* <h2>users: {loadedUsers.length}</h2> */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>last logged in</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastLoggedAt}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users2;
