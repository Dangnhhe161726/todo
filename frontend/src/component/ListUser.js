import React, { useState, useEffect } from "react";
import axiosInstance from "../common/axios";

const ListUser = ({ token }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get("User/GetAllUser", {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token to request headers
          },
        });
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, [token]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Role Number</th>
          <th>Role Id</th>
          <th>Phone Number</th>
          <th>Password</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.userName}</td>
            <td>{user.email}</td>
            <td>{user.roleNumber}</td>
            <td>{user.roleId}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.password}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListUser;
