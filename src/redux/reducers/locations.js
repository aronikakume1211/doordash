import {
    GET_LOCATION,
    GET_RESTAURANTS,
} from '../type';


const initialState = {
    locations: [],
    loading: false,
    error: '',
};

const Location = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOCATION:
            return {
                ...state,
                locations: action.locations,
                loading: false,
                error: '',
            };
        case GET_RESTAURANTS:
            return {
                ...state,
                restaurants: action.restaurants,
                loading: false,
                error: '',
            };
        default:
            return state;
    }
};

export default Location;