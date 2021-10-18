import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Divider, Grid, Statistic } from "semantic-ui-react";
import UsersTable from "../../../Components/Dashboard/Administrador/UsersTable";

function DashboardAdmin() {
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
    <div>
      <br />
      <ToastContainer />
      <Grid stackable padded>
        <Grid.Column computer="4" tablet="8" mobile="16" textAlign="center">
          <Statistic color="teal">
            <Statistic.Value>
              {" "}
              {users.filter((x) => x.role == "Usuario").length}
            </Statistic.Value>
            <Statistic.Label>Usuarios</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column computer="4" tablet="8" mobile="16" textAlign="center">
          <Statistic color="blue">
            <Statistic.Value>
              {" "}
              {users.filter((x) => x.role == "profesor").length}
            </Statistic.Value>
            <Statistic.Label>Profesores</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column computer="4" tablet="8" mobile="16" textAlign="center">
          <Statistic color="red">
            <Statistic.Value>
              {" "}
              {users.filter((x) => x.role == "admin").length}
            </Statistic.Value>
            <Statistic.Label>Administradores</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column computer="4" tablet="8" mobile="16" textAlign="center">
          <Statistic color="green">
            <Statistic.Value>{users.length}</Statistic.Value>
            <Statistic.Label>Total</Statistic.Label>
          </Statistic>
        </Grid.Column>
      </Grid>
      <Divider />
      <UsersTable users={users} />
    </div>
  );
}

export default DashboardAdmin;
