import { createContext, useEffect, useState } from "react";
import auth from "../components/Firebase/firebase.config";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

// create context 
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    // declare a state 
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user 
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login with email and password 
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // signout 
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    // to observe current user 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>unSubscribe();
    },[]);
    // for global access 
    const authInfo = {
        user,
        loading,
        createUser,signIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
// Adding proptypes 
AuthProvider.propTypes ={
    children: PropTypes.node.isRequired
}
export default AuthProvider;