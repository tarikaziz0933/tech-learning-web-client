import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState('');
    const { providerLogin, signIn } = useContext(AuthContext);

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));
    }

    const handleGitHubSignIn = () => {
        providerLogin(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(e => console.log(e));

    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='mb-2' variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
            <div>
                <p>Are you new in this web?<Link to={'/register'}>Go to Register</Link> </p>
            </div>

            <ButtonGroup vertical>
                <div className='d-flex'>
                    <Button onClick={handleGoogleSignIn} className='mb-2 me-3' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                    <Button onClick={handleGitHubSignIn} className='mb-2' variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
                </div>
            </ButtonGroup>

        </div>
    );
};

export default Login;