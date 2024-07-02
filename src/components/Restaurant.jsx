import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { defaultImage, vendorImage } from '../utility/constants';
import MenuList from './MenuList';
// import loader from '../../assets/images/loader.gif';

function Restaurant() {
  const { id, lat, lng } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [menus, setMenus] = useState(
    [
      {
        'id': 1,
        'name': 'Margherita Gluten- Free Pizza (Medium 14")',
        'content': 'Tomato, basil, parmesan cheese',
        'price': 35,
      },
      {
        'id': 2,
        'name': 'Hawaiian Gluten- Free Pizza (Small 12")',
        'content': 'Turkey ham & pineapple',
        'price': 25,
      },
      {
        'id': 3,
        'name': 'Go Green Gluten- Free Pizza (Small 12")',
        'content': 'Pesto sauce, spinach, garlic, basil, fresh tomatoes',
        'price': 56,
      }
    ],
  );
  let api = `https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}`


  useEffect(() => {
    try {
      fetchRestaurant(api);

    } catch (error) {
      console.log('Error', error);
    }

  }, [api]);

  const fetchRestaurant = async (api) => {

    try {
      await axios.get(api)
        .then(response => response.data)
        .then(res => {
          res.data.cards.slice(1).forEach(element => {
            element?.card?.card?.gridElements?.infoWithStyle?.restaurants?.forEach(rest => {
              if (rest.info.id === id) {
                console.log('rest');
                setRestaurant(rest.info);
                setLoading(false);
                console.log("restaurant", restaurant);
              }
            })
          });
        });
    } catch (error) {
      console.log('Error', error);
    }
  }

  return (

    <div className='container'>
      <div className="restaurantHeroImage">
        <img src={defaultImage} alt="" height={250} className='restaurantImage' />
        <div className="vendorImage">
          <img src={vendorImage} alt="" />
        </div>
      </div>
      <h1 className='restauratn_title'>{restaurant?.name}</h1>
      <p style={{margin:"0"}} > <span> {restaurant?.avgRating < 4.5 ? restaurant?.avgRating : (<b>{restaurant?.avgRating}</b>)} </span>
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="styles__StyledInlineSvg-sc-1hetb2e-0 eCVqVv sc-3b51c52-2 fHVNTC fetched-icon"><path d="M8.91123 0.588193C8.74942 0.230121 8.3929 0 7.99996 0C7.60702 0 7.2505 0.230121 7.08869 0.588193L5.37313 4.38448L1.23251 4.84295C0.841962 4.8862 0.512933 5.15416 0.391509 5.52786C0.270085 5.90157 0.378772 6.31175 0.669316 6.5763L3.74967 9.381L2.90618 13.4606C2.82662 13.8454 2.97979 14.2412 3.29768 14.4721C3.61557 14.7031 4.03926 14.7265 4.38064 14.5319L7.99996 12.469L11.6193 14.5319C11.9607 14.7265 12.3843 14.7031 12.7022 14.4721C13.0201 14.2412 13.1733 13.8454 13.0937 13.4606L12.2503 9.381L15.3306 6.5763C15.6212 6.31175 15.7298 5.90157 15.6084 5.52786C15.487 5.15416 15.158 4.8862 14.7674 4.84295L10.6268 4.38448L8.91123 0.588193Z" fill="#606060"></path></svg>
        ({restaurant?.totalRatingsString} ratings) {restaurant?.sla.lastMileTravel} mi {restaurant?.sla.deliveryTime}min
      </p>
      <h2 style={{margin:"0", marginTop: '30px'}} id='menus'>Most Ordered</h2>
      <p style={{margin: '0', marginBottom: '20px'}}>The most commonly ordered items and dishes from this store</p>

      {/* Most orders */}
      <div className="menu_lists">
        {
          menus.map((menu) => {
            return (
              <MenuList menu={menu} key={menu.id} />

            )
          })
        }
      </div>

      <div className="view_menu_container">
        <button>
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="styles__StyledInlineSvg-sc-1hetb2e-0 eCVqVv fetched-icon"><path d="M6.70711 12.2928C6.31658 11.9023 5.68342 11.9023 5.29289 12.2928C4.90237 12.6834 4.90237 13.3165 5.29289 13.707L10.7436 19.1577C10.8278 19.242 10.9283 19.3426 11.0242 19.424C11.1352 19.5183 11.3038 19.6438 11.5365 19.7194C11.8377 19.8173 12.1623 19.8173 12.4635 19.7194C12.6962 19.6438 12.8648 19.5183 12.9758 19.424C13.0717 19.3426 13.1722 19.242 13.2564 19.1577L18.7071 13.707C19.0976 13.3165 19.0976 12.6834 18.7071 12.2928C18.3166 11.9023 17.6834 11.9023 17.2929 12.2928L13 16.5857L13 4.99994C13 4.44765 12.5523 3.99994 12 3.99994C11.4477 3.99994 11 4.44765 11 4.99994V16.5857L6.70711 12.2928Z" fill="#ffffff"></path></svg>
          </span>

          View Menu
        </button>

      </div>
    </div>
  )
}

export default Restaurant
