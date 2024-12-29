import {  UseGetdata } from "../../hooks/crud/UseGetdata"
import { ALL_SALLE_ACTIVE, GET_ERROR_GROUPE, GET_ERROR_SALLE, SALLES_DISPO_WITH_JOUR_DATEHEUR } from "../types"





// Get All salles 
export const GetSallesWithDateAndJour = (jour , idDateHeure) => async (dispatch) => {
    try {
        const res = await UseGetdata(`/seances/salle-disponible/${jour}/${idDateHeure}`)
        // console.log('res :', res)
        dispatch({ type: SALLES_DISPO_WITH_JOUR_DATEHEUR, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_SALLE, payload:`Error: ${error.response}` })
    }
}


// Get salles  active and no active
export const GetSalleActive = () => async (dispatch) => {
    try {
        const res = await UseGetdata('/salle-active')
        // console.log('res :', res)
        dispatch({ type: ALL_SALLE_ACTIVE, payload: res.data})
    } catch (error) {
        dispatch({ type: GET_ERROR_GROUPE, payload:`Error: ${error.response}` })
    }
}