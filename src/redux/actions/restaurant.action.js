import {
    GET_LOCATION,
    GET_RESTAURANTS
} from '../type';

export const getLocations = ( ) => {
    console.log('Hello world!');
    return {
        type: GET_LOCATION,
    }
}