import { Link, useNavigate } from "react-router-dom";
import logolight from '../../../assets/logolight.png';
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
const Navbar = () => {
    const navigate = useNavigate();
    // get user info 
    const {user, logOut} = useContext(AuthContext);
    // handle log out 
    const handleLogout = () =>{
        logOut()
        .then(()=>{
            alert('User logout successfully!');
            navigate('/');
        })
        .catch(err=>console.log(err.message))
    }
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        {
            user?.email ? <>
            <li><Link to='/bookings'>My 
            Bookings</Link></li> 
            <li><button onClick={handleLogout}>Signout</button></li> 
            </>
            :<li><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navItems}
            </ul>
            </div>
            <Link to className="">
            <img className="w-[90px]" src={logolight} alt="" />
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            {navItems}
            </ul>
        </div>
        <div className="navbar-end">
            <button className="btn btn-outline text-[#BE1921] hover:bg-[#BE1921] hover:text-white">Appointment</button>
        </div>
        </div>
    );
};

export default Navbar;