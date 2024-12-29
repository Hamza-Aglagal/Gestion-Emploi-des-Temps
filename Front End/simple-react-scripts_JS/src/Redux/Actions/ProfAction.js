import {  UseGetdata } from "../../hooks/crud/UseGetdata"
import { ALL_PROF, ALL_PROF_ACTIVE, DATA_PROF, GET_ERROR_GROUPE, GET_ERROR_PROF } from "../types"




// Get All Prof 
export const GetAllProf = () => async (dispatch) => {
    try {
        const res = await UseGetdata('/professeur')
        // console.log('res :', res)
        dispatch({ type: ALL_PROF, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_PROF, payload:`Error: ${error.response}` })
    }
}



// Get prof active
export const GetProfActive = () => async (dispatch) => {
    try {
        const res = await UseGetdata('/prof-active')
        // console.log('res :', res)
        dispatch({ type: ALL_PROF_ACTIVE, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_GROUPE, payload:`Error: ${error.response}` })
    }
}


// Get data prof 
export const GetDataProf = (id) => async (dispatch) => {
    try {
        const res = await UseGetdata(`/professeur/${id}`)
        // console.log('res :', res)
        dispatch({ type: DATA_PROF, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_GROUPE, payload:`Error: ${error.response}` })
    }
}