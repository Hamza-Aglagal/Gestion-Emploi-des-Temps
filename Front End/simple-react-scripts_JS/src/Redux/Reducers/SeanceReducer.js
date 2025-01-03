import { ALL_SEANCE_OF_PROF, ALL_SEANCE_OF_STUDENT, ALL_SEANCE_RESERVE_OF_PROF, DELETE_SEANCE_TEMPORAIRE, EMPLOI_GROUPES, GET_ERROR_SEANCE_OF_PROF, MSG_ADD_SEANCE, MSG_ADD_SEANCE_TEMPORAIRE, MSG_DELETE_EMPLOI, MSG_DELETE_SEANCE, TIME_AVAILABLE_PROF_GP } from "../types";


const initialState = {
    AllSeanceOfProf: [],
    Msg_Add_Seance: [],
    Msg_Delete_Emploi: [],
    Msg_Delete_Seance: [],
    TimeAvailableProfGP : [],
    AllEmploiOfListGroupes :[],
    Msg_AddSeance_Temporaire :[],
    AllSeanceReserveOfProf :[],
    AllSeanceOfStudent : [],
    Msg_Delete_Seance_Temp : [],
    error : {}
};

const SeanceReducer = (state = initialState, { type, payload } = {}) => {
    switch (type) {
        case ALL_SEANCE_OF_PROF: {
            return { ...state, AllSeanceOfProf: payload };
        }

        case MSG_ADD_SEANCE : {
            return { ...state, Msg_Add_Seance: payload };
        }

        case MSG_DELETE_EMPLOI : {
            return { ...state, Msg_Delete_Emploi: payload };
        }

        case TIME_AVAILABLE_PROF_GP : {
            return { ...state, TimeAvailableProfGP: payload };
        }

        case MSG_DELETE_SEANCE: {
            return { ...state, Msg_Delete_Seance: payload };
        }

        case EMPLOI_GROUPES: {
            return { ...state, AllEmploiOfListGroupes: payload };
        }

        case MSG_ADD_SEANCE_TEMPORAIRE: {
            return { ...state, Msg_AddSeance_Temporaire: payload };
        }

        case ALL_SEANCE_RESERVE_OF_PROF: {
            return { ...state, AllSeanceReserveOfProf: payload };
        }

        case ALL_SEANCE_OF_STUDENT: {
            return { ...state, AllSeanceOfStudent: payload };
        }

        case DELETE_SEANCE_TEMPORAIRE: {
            return { ...state, Msg_Delete_Seance_Temp: payload };
        }

        case GET_ERROR_SEANCE_OF_PROF: {
            return { ...state, error: payload };
        }

        default:
            return state;
    }
};

export default SeanceReducer;