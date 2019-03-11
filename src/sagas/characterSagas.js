import { call, put } from 'redux-saga/effects'
import { fetchedCharacterSuccess, fetchedCharacterError } from '../actions/character'
import api from '../api'
export function* fetchCharacterSaga(action) {
    try {
        const characters = yield call(
            api.characters.fetchAll
        )
        yield put(fetchedCharacterSuccess(characters))
    } catch (err) {
        yield put (fetchedCharacterError(err.response))
    }
}
