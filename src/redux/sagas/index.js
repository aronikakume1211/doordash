import {all} from 'redux-saga/effects';
import restaurantSaga from './restaurantSaga';

export default function* rootSaga() {
    yield all([
        restaurantSaga(),
    ])
}