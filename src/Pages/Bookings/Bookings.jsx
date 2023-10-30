import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";

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
    const handleDelete = id =>{
        // use sweet alert instead 
        const proceed = confirm('Are you sure you want to delete?');
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
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
                    bookings.map(booking => <BookingRow key={booking._id} handleDelete={handleDelete} booking={booking}></BookingRow>)
                }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Bookings;