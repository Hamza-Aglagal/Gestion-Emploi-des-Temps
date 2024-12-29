import { ALL_PROF  , ALL_PROF_ACTIVE, DATA_PROF, GET_ERROR_PROF } from "../types";


const initialState = {
    AllProf: [],
    DataProf: [],
    AllProfActive: [],
    error : {}
};

const ProfReducer = (state = initialState, { type, payload } = {}) => {
    switch (type) {
        case ALL_PROF: {
            return { ...state, AllProf: payload };
        }

        case DATA_PROF: {
            return { ...state, DataProf: payload };
        }

        case GET_ERROR_PROF: {
            return { ...state, error: payload };
        }

        
        case ALL_PROF_ACTIVE: {
            return { ...state, AllProfActive: payload };
        }

        default:
            return state;
    }
};

export default ProfReducer;