import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Paguinas
import Home from "./Pages/Inicio/Home";
import NoMatch from "./Pages/NoMatch";
import Acreditacion from "./Pages/Inicio/Acreditacion";
import Especializaciones from "./Pages/Inicio/Especializaciones/Especializaciones";
import EspeciaAdministrativo from "./Pages/Inicio/Especializaciones/EspeciaAdministrativo";
import EspeciaAmbiental from "./Pages/Inicio/Especializaciones/EspeciaAmbiental";
import EspeciaDa from "./Pages/Inicio/Especializaciones/EspeciaDa";
import EspeciaPenal from "./Pages/Inicio/Especializaciones/EspeciaPenal";
import EspeciaProcesal from "./Pages/Inicio/Especializaciones/EspeciaProcesal";
import Doctorado from "./Pages/Inicio/Doctorado";
import Cursos from "./Pages/Inicio/Cursos";
import Diplomaturas from "./Pages/Inicio/Diplomaturas";
import LoginForm from "./Components/Login/LoginForm";
import RegisterForm from "./Components/Login/RegisterForm";
import ForgetPassword from "./Components/Login/ForgetPassword";
import ResetPassword from "./Components/Login/ResetPassword";

//Rutas privadas
import PrivateRoute from "./Routes/PrivateRoute";
import AdminRoute from "./Routes/AdminRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboarContacto from "./Pages/Dashboard/DashboarContacto";
import DashboarPerfil from "./Pages/Dashboard/Usuario/DashboarPerfil";
import DashboardInscrpCursos from "./Pages/Dashboard/Usuario/DashboardInscrpCursos";
import DashboardCursosAdmin from "./Pages/Dashboard/Administrador/DashboardCursosAdmin";
import DashboardDiplomaturas from "./Pages/Dashboard/Administrador/DashboardDiplomaturas";
import DashboradAddCursos from "./Pages/Dashboard/Administrador/DashboradAddCursos";
import DashboardAddDiplomatura from "./Pages/Dashboard/Administrador/DashboardAddDiplomatura";
import DashboardNewUser from "./Pages/Dashboard/Administrador/DashboardNewUser";
import DashboardAdminUsers from "./Pages/Dashboard/Administrador/DashboardAdminUsers";
import DashboardInscrpDiplomaturas from "./Pages/Dashboard/Usuario/DashboardInscrpDiplomaturas";
import DashboardInscripciones from "./Pages/Dashboard/Administrador/DashboardInscripciones";
import DashboardAsistencias from "./Pages/Dashboard/Profesor/DashboardAsistencias";
import DashboardCuotas from "./Pages/Dashboard/Administrador/DashboardCuotas";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {/* Inicio */}
          <Route exact path="/" component={Home} />
          <Route exact path="/doctorado" component={Doctorado} />
          <Route exact path="/cursos" component={Cursos} />
          <Route exact path="/diplomaturas" component={Diplomaturas} />
          <Route exact path="/acreditacion" component={Acreditacion} />
          {/* Especializaciones */}
          <Route
            exact
            path="/especializaciones"
            component={Especializaciones}
          />
          <Route
            exact
            path="/especializaciones/administrativo"
            component={EspeciaAdministrativo}
          />
          <Route
            exact
            path="/especializaciones/ambiental"
            component={EspeciaAmbiental}
          />
          <Route exact path="/especializaciones/daños" component={EspeciaDa} />
          <Route
            exact
            path="/especializaciones/penal"
            component={EspeciaPenal}
          />
          <Route
            exact
            path="/especializaciones/procesal"
            component={EspeciaProcesal}
          />
          {/* --------------------- */}
          {/* Login */}
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/registrarse" component={RegisterForm} />
          <Route exact path="/password" component={ForgetPassword} />
          <Route
            exact
            path="/password/reset/:token"
            component={ResetPassword}
          />
          {/* Dashboard */}
          <PrivateRoute path="/private" exact component={Dashboard} />
          <PrivateRoute
            path="/private/contacto"
            exact
            component={DashboarContacto}
          />
          {/* USUARIO */}
          <PrivateRoute path="/perfil" exact component={DashboarPerfil} />
          <PrivateRoute
            path="/private/cursos"
            exact
            component={DashboardInscrpCursos}
          />
          <PrivateRoute
            path="/private/diplomaturas"
            exact
            component={DashboardInscrpDiplomaturas}
          />
          <PrivateRoute
            path="/admin/asistencias"
            exact
            component={DashboardAsistencias}
          />
          {/* ADMINISTRADOR */}
          <AdminRoute
            path="/admin/cursos"
            exact
            component={DashboardCursosAdmin}
          />
          <AdminRoute path="/admin" exact component={DashboardAdminUsers} />
          <AdminRoute path="/admin/nuevo" exact component={DashboardNewUser} />
          <AdminRoute
            path="/admin/cursos/nuevo"
            exact
            component={DashboradAddCursos}
          />
          <AdminRoute
            path="/admin/diplomaturas/nuevo"
            exact
            component={DashboardAddDiplomatura}
          />
          <AdminRoute
            path="/admin/diplomaturas"
            exact
            component={DashboardDiplomaturas}
          />
          <AdminRoute path="/admin/cuotas" exact component={DashboardCuotas} />
          <AdminRoute
            path="/admin/inscripciones"
            exact
            component={DashboardInscripciones}
          />
          {/* --------------------- */}
          {/* Pagina no encontrada */}
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
