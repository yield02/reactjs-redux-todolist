import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Header from '../components/Header/Header';
import Task from '../pages/task/Task'
import SignIn from '../pages/sign-in/SignIn';
import { Routes, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { authActions, getAuth } from '../../auth'


function App({authenticated, signOut}) {
  console.log(authenticated);

  return (
    <div className="App container-md">
      <Header authenticated={authenticated} signOut={signOut}></Header>
      <main>
      <Routes>
        {/* unauth-route */}
        <Route
          exact
          path='/'
          element={
           authenticated ? (
            <Task />
            ) : (
            <SignIn/>
            )
          }
        />
        {/* auth-route */}
        <Route
          path="/sign-in"
          element={authenticated ? (
              <Task />
              ) : (
              <SignIn/>
            )
          }
        />
      </Routes>
      </main>
    </div>
  );
}

const mapStateToProps = getAuth;

const mapDispatchToProps = {
  signOut: authActions.signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
