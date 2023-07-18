import Button from '../../components/Button/Button';
import './SignIn.scss';

function SignIn() {


    return (
    <div>
        <h2 className='sign_in_title my-5'>Sign In</h2>
        <div className='d-flex flex-column align-items-center'>
            <Button className="signin-btn">GitHub</Button>
            <Button className="signin-btn">Google</Button>
            <Button className="signin-btn">Twitter</Button>
        </div>
    </div>)
}

export default SignIn;