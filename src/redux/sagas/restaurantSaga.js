import { call, put, takeEvery } from 'redux-saga/effects';

import {
    GET_LOCATION,
    GET_RESTAURANTS,
} from '../type';

import {
    getLocations
} from './api'


function* fetchLocations(action) {
    try {
        const locations = yield call(getLocations, action.payload);
        yield put({
            type: GET_LOCATION,
            locations: locations,
        });
    } catch (error) {
        console.log(error);
    }
}

function* restaurantSaga() {
    yield takeEvery(GET_LOCATION, fetchLocations);
}

export default restaurantSaga;