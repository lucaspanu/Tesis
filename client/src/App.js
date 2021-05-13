import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./Components/User/LoginForm";

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
import RegisterForm from "./Components/User/RegisterForm";
import ForgetPassword from "./Components/User/ForgetPassword";

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
          {/* --------------------- */}
          {/* Pagina no encontrada */}
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
