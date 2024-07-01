import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from './Card';

function Restaurants() {
    let { id } = useParams();
    let baseApi = 'https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi'
    let address_recommend = `${baseApi}/misc/address-recommend?place_id=${id}`;

    const [restaurants, setRestaurants] = useState([]);
    const [cards, setCards] = useState([]);
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(address_recommend);
                const res = response.data;

                console.log('res', res);
                console.log('data', res[0].geometry.location.lat);
                console.log('data', res[0].geometry.location.lng);

                setLat(res[0].geometry.location.lat);
                setLng(res[0].geometry.location.lng);

                fetchRestaurants();
                
            } catch (error) {
                console.error('Error fetching address recommendations:', error);
            }
        };

        fetchData();
    }, []);

    const fetchRestaurants = async () => {
        const restaurants_list_url = `${baseApi}/restaurants/list/v5?lat=${lat}&lng=${lng}`;

        try {
            await axios.get(restaurants_list_url)
                .then(response => response.data)
                .then(res => {
                    console.log(res);
                    setCards(res.data.cards);
                    console.log(res.data.cards);
                });
        } catch (error) {
            console.log('Error', error);
        }
    }

    return (
        <div className='container'>

            {
                cards ? cards?.slice(1).map((item, index) => {
                    return (
                        <>
                            {index == 0 &&
                                (
                                    <>

                                        <h2>{item.card?.card?.header?.title}</h2>
                                        <div key={index} className='card_container restaurant_items'>

                                            {
                                                item.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((restaurant, index) => {
                                                    return (
                                                        <Card key={index} props={restaurant} lat={lat} lng={lng} />
                                                    );
                                                })
                                            }
                                        </div>
                                    </>
                                )
                            }
                        </>
                    )
                }) : null
            }

        </div>
    )
}

export default Restaurants
