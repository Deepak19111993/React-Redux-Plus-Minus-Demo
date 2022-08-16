import { all,call } from 'redux-saga/effects'
import generalSaga from './sagas/generalSaga';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* rootSaga() {
    yield all ([
        call(generalSaga)
    ])
}

export default rootSaga;