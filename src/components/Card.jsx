import React from 'react'
import { Link } from 'react-router-dom';

function Card({ props,lat,lng }) {
    const { id, name, image, avgRating, totalRatingsString, mile, minute, isOpen } = props.info;
    const { lastMileTravel, deliveryTime } = props.info.sla
    // const lat = props.lat;
    // const lng = props.lng;
    console.log(props.info);
    console.log(lat);
    return (
        <div class="restaurant_item">
            <Link to={`/restaurant/${id}/${name}/${lat}/${lng}`}>
                <img src={image ? image : 'https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto,width=800,quality=50/https://doordash-static.s3.amazonaws.com/media/photosV2/20a0e201-c536-46a3-90e4-0a3d233c92d9-retina-large.jpg'} alt="restaurant image" />
            </Link>
                <h3>{name}</h3>
           
            <p> <span> {avgRating < 4.5 ? avgRating : (<b>{avgRating}</b>)} </span>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="styles__StyledInlineSvg-sc-1hetb2e-0 eCVqVv sc-3b51c52-2 fHVNTC fetched-icon"><path d="M8.91123 0.588193C8.74942 0.230121 8.3929 0 7.99996 0C7.60702 0 7.2505 0.230121 7.08869 0.588193L5.37313 4.38448L1.23251 4.84295C0.841962 4.8862 0.512933 5.15416 0.391509 5.52786C0.270085 5.90157 0.378772 6.31175 0.669316 6.5763L3.74967 9.381L2.90618 13.4606C2.82662 13.8454 2.97979 14.2412 3.29768 14.4721C3.61557 14.7031 4.03926 14.7265 4.38064 14.5319L7.99996 12.469L11.6193 14.5319C11.9607 14.7265 12.3843 14.7031 12.7022 14.4721C13.0201 14.2412 13.1733 13.8454 13.0937 13.4606L12.2503 9.381L15.3306 6.5763C15.6212 6.31175 15.7298 5.90157 15.6084 5.52786C15.487 5.15416 15.158 4.8862 14.7674 4.84295L10.6268 4.38448L8.91123 0.588193Z" fill="#ebb11e"></path></svg>
                ({totalRatingsString}){lastMileTravel} mi {deliveryTime}min
            </p>
            <p>₹0 delivery free, first order</p>

        </div>
    )
}

export default Card
