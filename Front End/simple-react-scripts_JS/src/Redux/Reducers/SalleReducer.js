import {  ALL_SALLE_ACTIVE, GET_ERROR_SALLE, SALLES_DISPO_WITH_JOUR_DATEHEUR } from "../types";


const initialState = {
    Salle_Dispo: [],
    Salle_Active: [],
    error : {}
};

const SalleReducer = (state = initialState, { type, payload } = {}) => {
    switch (type) {
        case SALLES_DISPO_WITH_JOUR_DATEHEUR: {
            return { ...state, Salle_Dispo: payload };
        }

        case ALL_SALLE_ACTIVE: {
            return { ...state, Salle_Active: payload };
        }


        case GET_ERROR_SALLE: {
            return { ...state, error: payload };
        }

        default:
            return state;
    }
};

export default SalleReducer;