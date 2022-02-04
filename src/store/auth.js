import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'auth',
    initialState: {
        loaded: false,
        isLoggedIn: false,
        accessToken: null,
        userType: null
    },
    reducers: {
        logIn: (state, action) => {
            state.isLoggedIn=true
            state.accessToken=action.payload.accessToken
            state.userType=action.payload.userType
            state.loaded=true
        },
        logOut: (state, action) => {
            state.loaded = true
            state.isLoggedIn = false
            state.accessToken = null
            state.userType = null
        }
    }
})

export const {logIn, logOut} = slice.actions
export default slice.reducer