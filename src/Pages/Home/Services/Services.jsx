import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    // load data 
    useEffect(()=>{
        fetch('http://localhost:5050/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    return (
        <div className="py-10">
            <div>
                <h1 className="text-2xl text-center font-bold text-[#BE1921]">Service</h1>
                <h1 className="text-4xl text-center font-bold py-3">Our Service Area</h1>
                <p className="text-center w-3/4 mx-auto text-gray-700 pb-10">Servicing the car near your area and beyond, we&apos;re here to take care of your car&apos;s needs.From routine maintenance to complex repairs, we&apos;re your local automotive experts you can rely on.</p>
            </div>
            {/* Showing services with images and others data  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
                {
                    // loop through the services 
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;