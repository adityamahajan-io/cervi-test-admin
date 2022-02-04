import { createSlice } from "@reduxjs/toolkit";
import { getAllDataAdmin} from "../constants";
import {logOut} from './auth'

const slice = createSlice({
    name: "appData",
    initialState: {
        patients: [],
        doctors: [],
        records: []
    },
    reducers: {
        setData: (state,action) => {
            state.doctors = action.payload.doctors
            state.patients = action.payload.patients
        }
    }
})

export const {setData} = slice.actions
export default slice.reducer

export const fetchAllData = (token) => (dispatch, getState) => {
    const url = getAllDataAdmin
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+ token);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    fetch(url, requestOptions)
    .then(response => {
        if(response.status === 401){
            dispatch(logOut())
            localStorage.clear();
        }
        return response.json()
    })
    .then(result => {
        dispatch(setData(result))
        console.log(result)
    })
    .catch(error => console.log('error', error));
}




