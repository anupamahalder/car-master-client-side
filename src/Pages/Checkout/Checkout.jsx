import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Checkout = () => {
    // load the service data and destructure it
    const {_id, title, price} = useLoaderData();
    // get user form context 
    const {user} = useContext(AuthContext);
    // handle book service 
    const handleBookService = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        // create object 
        const order = {
            customerName: name,
            email,
            date,
            service: _id,
            price: price
        }
        console.log(order);
    }
    return (
        <div className="min-h-[90vh] pt-2 pb-10">
            <h1 className="text-2xl text-center font-bold py-4">Book Service: {title}</h1>
                <form onSubmit={handleBookService}
                className="card-body w-3/5 bg-base-200 mx-auto  rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" defaultValue={user?.name} placeholder="User Name" className="input" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email Address</span>
                    </label>
                    <input type="email" name="email" defaultValue={user?.email} placeholder="Email" className="input" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Date</span>
                    </label>
                    <input type="date" name="date" className="input" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Due Amount</span>
                    </label>
                    <input type="text" name="amount" defaultValue={'$ '+ price} className="input" required />
                    </div>
                    </div>
                    <textarea name="" className="input h-[100px] mt-4" placeholder="Description" id="" cols="30" rows="6"></textarea>
                    <div className="form-control mt-6">
                    <button className="btn bg-[#BE1921] text-white">Confirm Order</button>
                    </div>
                </form>
        </div>
    );
};

export default Checkout;