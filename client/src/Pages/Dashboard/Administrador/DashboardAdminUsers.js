import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Header, Divider, Segment } from "semantic-ui-react";
import UsersTable from "../../../Components/Dashboard/Administrador/UsersTable";
import NavContainer from "../../../Components/Dashboard/NavBar/NavContainer";

function DashboardAdminUsers() {
  const [formData, setFormData] = useState({
    users: [],
  });

  const { users } = formData;

  //Carga de Datos
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/users`)
      .then((res) => {
        setFormData({
          ...formData,
          users: res.data,
        });
      })
      .catch((err) => {
        toast.error(`Error To Your Information ${err.response.statusText}`);
      });
  };
  return (
    <NavContainer>
      <ToastContainer />
      <Segment basic>
        <Header as="h2">Usuarios</Header>
        <Divider />
        <UsersTable users={users} />
      </Segment>
    </NavContainer>
  );
}

export default DashboardAdminUsers;
