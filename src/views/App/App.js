import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Header from '../components/Header/Header';
import Task from '../pages/task/Task'
import SignIn from '../pages/sign-in/SignIn';
import { Routes, Route, Navigate} from 'react-router-dom';
import { connect } from 'react-redux';
import { authActions, getAuth } from '../../auth'


function App({authenticated, signOut}) {

  console.log(signOut());

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
              <Navigate to={{
                pathname: '/',
              }}/>
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
              <Navigate to={{
                pathname: '/sign-in',
              }}/>
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
