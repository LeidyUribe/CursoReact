import {takeLatest} from 'redux-saga/effects'
import {fetchCharacterSaga} from './characterSagas'
import {CHARACTERS_REQUEST} from '../types/character'

export default function* rootSaga(){
    yield takeLatest(CHARACTERS_REQUEST,fetchCharacterSaga)
}