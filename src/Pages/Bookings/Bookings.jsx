import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Bookings = () => {
    const {user} = useContext(AuthContext);
    // declare a state to store booking information 
    const [bookings, setBookings] = useState([]);
    // make a dynamic url with email
    const url = `http://localhost:5000/bookings?email=${user.email}`;
    // load data 
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
    },[url]);
    return (
        <div>
            
        </div>
    );
};

export default Bookings;