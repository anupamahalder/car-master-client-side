import PropTypes from 'prop-types';
import {BsArrowRight} from 'react-icons/bs';
import { Link } from 'react-router-dom';
const ServiceCard = ({service}) => {
    // destructure 
    const {_id,title, img, price} = service;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
            <figure className="pt-6 px-4">
                <img src={img} alt='service' className="rounded-xl h-[200px]" />
            </figure>
            <h2 className="text-center font-bold text-2xl p-3 text-gray-700">{title}</h2>
            <div className='text-[#BE1921] font-semibold flex justify-between px-10 pb-6'>
                <p className=''>Price: ${price}</p>
                <Link to={`/checkout/${_id}`}>
                <BsArrowRight className='text-3xl font-bold cursor-pointer'></BsArrowRight>
                </Link>
                </div>
            </div>
        </div>
    );
};
// Adding proptypes 
ServiceCard.propTypes = {
    service: PropTypes.object.isRequired,
}
export default ServiceCard;