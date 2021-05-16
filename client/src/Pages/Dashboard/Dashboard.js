import React, { Fragment } from "react";
import DashboardAdmin from "./Administrador/DashboardAdmin";
import DashboardUser from "./Usuario/DashboardUser";

import { isAuth } from "../../helpers/auth";
import NavContainer from "../../Components/Dashboard/NavBar/NavContainer";

function Dashboard() {
  return (
    <NavContainer>
      {isAuth().role === "admin" ? (
        <Fragment>
          <DashboardAdmin />
        </Fragment>
      ) : (
        <Fragment>
          <DashboardUser />
        </Fragment>
      )}
    </NavContainer>
  );
}

export default Dashboard;
