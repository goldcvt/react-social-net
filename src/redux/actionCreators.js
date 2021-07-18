import {
    DIALOGS_CREATE_MESSAGE,
    DIALOGS_UPDATE_CURRENT_MESSAGE,
    PROFILE_CREATE_POST,
    PROFILE_LIKE_POST,
    PROFILE_UPDATE_CURRENT_POST
} from "./actionTypes"


export const createMessage = (payload) => ({
    type: DIALOGS_CREATE_MESSAGE,
    payload: payload
})

export const updateCurrentMessage = (payload) => ({
    type: DIALOGS_UPDATE_CURRENT_MESSAGE,
    payload: payload
})



export const createPost = (payload) => ({
    type: PROFILE_CREATE_POST,
    payload: payload
})

export const updateCurrentPost = (payload) => ({
    type: PROFILE_UPDATE_CURRENT_POST,
    payload: payload
})

export const likePost = (payload) => ({
    type: PROFILE_LIKE_POST,
    payload: payload
})