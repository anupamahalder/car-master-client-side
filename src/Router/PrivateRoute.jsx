import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
const PrivateRoute = ({children}) => {
    // get user info 
    const {user, loading} = useContext(AuthContext);
    if(loading){
       return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children;
    }
    return <Navigate to='/login' replace></Navigate>
};
// Adding proptypes 
PrivateRoute.propTypes ={
    children: PropTypes.node.isRequired,
}
export default PrivateRoute;