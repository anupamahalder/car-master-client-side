import { useLoaderData } from "react-router-dom";

const Checkout = () => {
    // load the service data and destructure it
    const {title, price} = useLoaderData();
    return (
        <div className="min-h-screen">
            <h1>Book Service</h1>
            <p>{title}</p>
        </div>
    );
};

export default Checkout;