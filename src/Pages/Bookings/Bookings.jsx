import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Bookings = () => {
    const {user} = useContext(AuthContext);
    // declare a state to store booking information 
    const [bookings, setBookings] = useState([]);
    // make a dynamic url with email
    const url = `http://localhost:5050/bookings?email=${user?.email}`;
    // load data 
    useEffect(()=>{
        // using axios and get cookies in the server side
        axios.get(url, {withCredentials: true})
        .then(res =>{
            setBookings(res.data);
        })
        // axios.get(url, {withCredentials:true})
        // .then(res=>{
        //     setBookings(res.data);
        // }
        // fetch(url)
        // .then(res => res.json())
        // .then(data => setBookings(data));
    },[url]);
    const handleDelete = id =>{
        // use sweet alert instead 
        const proceed = confirm('Are you sure you want to delete?');
        if(proceed){
            fetch(`http://localhost:5050/bookings/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    alert('Deleted successfully!');
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
        }
    }
    const handleConfirm = id =>{
        const proceed = confirm('Are you sure you want to delete?');
        if(proceed){
        fetch(`http://localhost:5050/bookings/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            // sending one data only status 
            body: JSON.stringify({status: 'confirmed'})
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                //update state 
                // only one item changed 
                const remaining = bookings.filter(booking => booking._id !== id);
                // updated one 
                const updated = bookings.find(booking => booking._id === id);
                // hard code status to updated data
                updated.status = 'confirmed'
                // remaining is array so we will spread it out 
                const newBookings = [updated, ...remaining];
                setBookings(newBookings); 
            }
        })
        }
    }
    return (
        <div className="min-h-screen">
            <h1>Total bookings: {bookings.length}</h1>
            <div className="overflow-x-auto px-10">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
                </th>
                    <th>Service Image</th>
                    <th>Service Name</th>
                    <th>Booking Date</th>
                    <th>Price</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody className="">
                {/* table row  */}
                {
                    bookings.map(booking => <BookingRow key={booking._id} handleDelete={handleDelete} handleConfirm={handleConfirm} booking={booking}></BookingRow>)
                }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Bookings;