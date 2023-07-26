import { authActions } from '../../../auth';
import Button from '../../components/Button/Button';
import { connect } from 'react-redux';
import './SignIn.scss';

function SignIn({signInWithGithub, signInWithGoogle}) {


    return (
    <div>
        <h2 className='sign_in_title my-5'>Sign In</h2>
        <div className='d-flex flex-column align-items-center'>
            <Button className="signin-btn" onClick={signInWithGithub}>GitHub</Button>
            <Button className="signin-btn"onClick={signInWithGoogle}>Google</Button>
        </div>
    </div>)
}

const mapDispatchToProps = {
    signInWithGithub: authActions.signInWithGithub,
    signInWithGoogle: authActions.signInWithGoogle
}

export default connect(null, mapDispatchToProps)(SignIn);