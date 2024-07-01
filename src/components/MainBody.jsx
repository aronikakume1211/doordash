import React, { useState } from 'react';
import {apiBase} from '../utility/constants';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MainBody = () => {

    const [search, setSearch] = useState('');
    const [Data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const [showFilter, setShowFilter] = useState(false);


    const handleChange = (event) => {
        setSearch(event.target.value);
        if (event.target.value.length > 2) {
            setShowFilter(true);
            fetchCity();
        }
    }

    const fetchCity = async () => {

        try {
            await axios.get(`${apiBase}${search}&types=`)
                .then(response => response.data
                ).then(res => {
                    console.log('data', res.data);
                    setData(res.data);
                });
        } catch (error) {
            // setError(error);
            // setLoading(false);
        }


    }

    return (
        <>
            <section className="hero_container_fluid">
                <div className="header_sign_ups header_logo">
                    <img src="assets/images/door-icon.svg" alt="" />
                    <img src="assets/images/doordash.svg" alt="doordash" />
                    <div className="header_right">
                        <a href="#">Sign in</a>
                        <a href="#">Sign Up</a>
                    </div>
                </div>
                <div className="hero_container">
                    <div className="header_sign_ups hero_logo">
                        <img src="assets/images/door-icon.svg" alt="" />
                        <img src="assets/images/doordash.svg" alt="doordash" />
                    </div>
                    <h1>Discover restaurants and more near you.</h1>

                    <div className="Input__InputContainer">
                        <div className="Inline__StyledInline">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true" className="styles__StyledInlineSvg-sc-1hetb2e-0 eCVqVv fetched-icon">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M10.5257 21.3514L12 20L13.4743 21.3514C13.0955 21.7647 12.5606 22 12 22C11.4394 22 10.9045 21.7647 10.5257 21.3514ZM13.2949 18.4463C12.5464 19.4039 12 20 12 20C12 20 11.4535 19.4039 10.7051 18.4463C9.07919 16.3658 6.5 12.5792 6.5 9.49242C6.5 6.45904 8.96243 4 12 4C15.0376 4 17.5 6.45904 17.5 9.49242C17.5 12.5792 14.9208 16.3658 13.2949 18.4463ZM13.4743 21.3514C13.4743 21.3514 13.4743 21.3514 12 20C10.5257 21.3514 10.5257 21.3514 10.5257 21.3514L10.5227 21.3482L10.5177 21.3427L10.5018 21.3252L10.4474 21.2647C10.4014 21.2133 10.3363 21.1398 10.2548 21.0461C10.0919 20.8589 9.86301 20.5903 9.59004 20.2553C9.04587 19.5873 8.31764 18.6441 7.58566 17.5456C6.85705 16.4522 6.10151 15.1704 5.5227 13.8275C4.95169 12.5026 4.5 10.9984 4.5 9.49242C4.5 5.35187 7.86046 2 12 2C16.1395 2 19.5 5.35187 19.5 9.49242C19.5 10.9984 19.0483 12.5026 18.4773 13.8275C17.8985 15.1704 17.1429 16.4522 16.4143 17.5456C15.6824 18.6441 14.9541 19.5873 14.41 20.2553C14.137 20.5903 13.9081 20.8589 13.7452 21.0461C13.6637 21.1398 13.5986 21.2133 13.5526 21.2647L13.4982 21.3252L13.4823 21.3427L13.4773 21.3482L13.4743 21.3514Z"
                                    fill="var(--usage-color-text-subdued-default)"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12 11C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.1716 8 10.5 8.67157 10.5 9.5C10.5 10.3284 11.1716 11 12 11ZM12 13C13.933 13 15.5 11.433 15.5 9.5C15.5 7.567 13.933 6 12 6C10.067 6 8.5 7.567 8.5 9.5C8.5 11.433 10.067 13 12 13Z"
                                    fill="var(--usage-color-text-subdued-default)"></path>
                            </svg>
                            <input onChange={handleChange} value={search} placeholder="Enter delivery address" aria-autocomplete="list" aria-controls="desktopAddressSearchAutocomplete"
                                aria-expanded="false" role="combobox" aria-label="" autocomplete="off"
                                id="HomeAddressAutocomplete" type="text" />
                        </div>
                        <button aria-label="Find Restaurants" type="button">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true" className="fetched-icon">
                                <path
                                    d="M12.2929 17.2929C11.9024 17.6834 11.9024 18.3166 12.2929 18.7071C12.6834 19.0976 13.3166 19.0976 13.7071 18.7071L19.1578 13.2564C19.242 13.1722 19.3427 13.0717 19.424 12.9758C19.5183 12.8648 19.6439 12.6962 19.7195 12.4635C19.8174 12.1623 19.8174 11.8377 19.7195 11.5365C19.6439 11.3038 19.5183 11.1352 19.424 11.0242C19.3427 10.9283 19.242 10.8278 19.1578 10.7436L13.7071 5.29289C13.3166 4.90237 12.6834 4.90237 12.2929 5.29289C11.9024 5.68342 11.9024 6.31658 12.2929 6.70711L16.5858 11L5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44771 13 5 13L16.5858 13L12.2929 17.2929Z"
                                    fill="currentColor"></path>
                            </svg>
                        </button>
                        {
                            showFilter ? (
                                <div className="input_autofill_container" id="input_autofill_container">
                                    {
                                        Data.length > 0 ? (
                                            Data.map((item) => {
                                                return (
                                                    <div key={item.place_id} className="input_autofill_item" onClick={() => {
                                                        setSearch(item.description);
                                                        setShowFilter(false);
                                                    }}>
                                                        <Link to={`/restaurants/${item.place_id}`}>
                                                            {item.description}
                                                        </Link>
                                                    </div>
                                                )
                                            })
                                        ) : (
                                            <p>No data available.</p>
                                        )
                                    }
                                </div>
                            ) : false
                        }

                    </div>
                    <button kind="BUTTON/PLAIN" data-testid="toggle-identity-button" type="button" className="signin">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12.5 16C13.6046 16 14.5 15.1046 14.5 14C14.5 13.5 14.37 13.0462 14.37 13.0462C14.2499 12.5658 14.0117 11.9323 13.5375 11.3C12.5198 9.94301 10.738 9 8 9C5.26202 9 3.48025 9.94301 2.4625 11.3C1.98825 11.9323 1.75013 12.5658 1.63003 13.0462C1.63003 13.0462 1.5 13.5 1.5 14C1.5 15.1046 2.39543 16 3.5 16H12.5ZM12.5 14C12.5 14 12.5 12.8726 11.4633 12C10.8088 11.4492 9.74133 11 8 11C6.25867 11 5.19116 11.4492 4.53675 12C3.5 12.8726 3.5 14 3.5 14H12.5Z"
                                fill="currentColor"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12 4C12 6.20914 10.2091 8 8 8C5.79086 8 4 6.20914 4 4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4ZM8 6C9.10457 6 10 5.10457 10 4C10 2.89543 9.10457 2 8 2C6.89543 2 6 2.89543 6 4C6 5.10457 6.89543 6 8 6Z"
                                fill="currentColor"></path>
                        </svg>

                        <span className="signin-txt">Sign in for saved address</span>
                    </button>
                </div>
            </section>

            <section className="features_container">
                <div className="features">
                    <div className="dasher">
                        <img src="../../assets/images/ScootScoot.svg" alt="" />
                        <div className="content">

                            <h2>Become a dasher</h2>
                            <p>
                                As a delivery driver, make money and work on your schedule. Sign up in minutes.
                            </p>
                            <a href="#">Start earning <img src="assets/images/next.svg" alt="" /></a>
                        </div>
                    </div>
                    <div className="partner">
                        <img src="../../assets/images/Storefront.svg" alt="" />
                        <div className="content">
                            <h2>Become a partner</h2>
                            <p>
                                Grow your business and reach new customers by partnering with us.
                            </p>
                            <a href="#">Sign up your store <img src="assets/images/next.svg" alt="" /></a>

                        </div>
                    </div>
                    <div className="doordash-experince">
                        <img src="assets/images/iphone.svg" alt="" />
                        <div className="content">

                            <h2>Become a doordash-experince</h2>
                            <p>
                                Experience the best your neighborhood has to offer, all in one app.
                            </p>
                            <a href="#">Get the app <img src="assets/images/next.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default MainBody;
