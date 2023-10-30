import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
const Login = () => {
    const navigate = useNavigate();
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
        .then(res =>{
            const user = res.user;
            console.log(user);
            form.reset();
            navigate('/');
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