import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Bookings = () => {
    const {user} = useContext(AuthContext);
    // declare a state to store booking information 
    const [bookings, setBookings] = useState([]);
    // make a dynamic url with email
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    // load data 
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data));
    },[]);
    return (
        <div className="min-h-screen">
            <h1>Total bookings: {bookings.length}</h1>
        </div>
    );
};

export default Bookings;