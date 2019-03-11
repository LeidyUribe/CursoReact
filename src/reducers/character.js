import Immutable from 'seamless-immutable'
import {SET_LIKES,CHARACTERS_REQUEST,CHARACTERS_SUCCESS,CHARACTERS_ERROR}from'../types/character'

const defaultState = Immutable({
    likes: 0,
    characters:[],
    error:'',
    fetching:false,
})
export default function character(state = defaultState, action = {}) {
    switch (action.type) {
        case SET_LIKES:
        return state.merge({likes:action.payload,})
        
        case CHARACTERS_REQUEST:
        return state.merge({
            error:'',
            fetching:true
        })

        case CHARACTERS_SUCCESS:
        return state.merge({
            characters:action.payload.characters,
            error:'',
            fetching:false
        })
        case CHARACTERS_ERROR:
        return state.merge({
            error:action.payload.error,
            fetching:true
        })

        default: return state
    }
}