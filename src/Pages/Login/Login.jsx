import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // destructure 
    const {signIn} = useContext(AuthContext);
    const handleLogin = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        //login user with email and password
        signIn(email, password)
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            // do not send password to server send email only 
            const user = {email};
            // using axios send data to url and give the data 
            // axios converts data to json so we get direct json data in response 
            axios.post('http://localhost:5050/jwt', user, 
            {withCredentials: true})
            .then(res => {
                console.log(res.data);
                if(res.data?.success){
                    navigate(location?.state ? location.state : '/');
                }
            })

            // const loggedInUser = res.user;
            // console.log(loggedInUser);
            // const user = {email};

            // // get access token 
            // axios.post('http://localhost:5050/jwt', user, {withCredentials:true})
            // .then(res=>{
            //     console.log(res.data);
            //     if(res.data.success){
            //         // if we get sucess is true then only naviagate 
            //         form.reset();
            //         navigate(location?.state ? location?.state : '/');
            //     }
            // })
        }) 
        .catch(err =>{
            console.log(err.message);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mx-auto w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100 pb-6">
                <form onSubmit={handleLogin}
                className="card-body">
                    <h1 className="text-3xl text-center font-bold">Login</h1>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button type='submit' className="btn bg-[#FF3811] text-white ">Sign In</button>
                    </div>
                </form>
                <h1 className='text-center'>New to Car Master? <Link to='/signup' className='text-[#FF3811] font-semibold'>Sign Up</Link></h1>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;