import img from '../../assets/images/login/login.svg';
const Login = () => {
    const handleLogin = (e)=>{
        e.preventDefault();
        
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mx-auto w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin}
                className="card-body">
                    <h1 className="text-3xl text-center font-bold">Login</h1>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button type='submit' className="btn bg-[#FF3811] text-white ">Sign In</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;