import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { GetAllGroupe, GetGroupesActive, GetGroupesWithNiveau } from '../../Redux/Actions/GroupeAction'
import { GetAllProf } from '../../Redux/Actions/ProfAction'
import { GetAllFillier } from '../../Redux/Actions/FilliereAction'
import { GetAllNiveau } from '../../Redux/Actions/NiveauAction'
import { GetAllDates, GetAllDatesDisponibleInDay, GetAllDatesWithDays } from '../../Redux/Actions/DatesAction'
import { AddSeance, DeleteSeanceTempOfProf, GetAllSeanceOfProf, GetAllSeanceTempOfProf, GetTimesAvailabLeOfProAndGRoupe } from '../../Redux/Actions/SeanceAction'
import { notifySuccess, notifyWarning } from '../../hooks/notification/useNotif'
import { GetSallesWithDateAndJour } from '../../Redux/Actions/SalleAction'
import { getIdFromToken } from '../../routes/Pravite-routes'



// import Swal from 'sweetalert2'


const GetAllSeanceReserveHook = () => {

    const dispatch = useDispatch()



    // get id prof in token -----------------
    const [IdProf, setIdProf] = useState(null)
    const [UserData, setUserData] = useState(null)
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
        const id = getIdFromToken(storedToken)
        setIdProf(id)
        setUserData(user)

    }, [])





      // Loading 
      const [Loadingdata, setLoadingData] = useState(false)
      const [IspressValid, setIspressValid] = useState(false)


    // Dispatch All seance reserve of prof
    useEffect(() => {
        if (IdProf != null) {
            dispatch(GetAllSeanceTempOfProf(IdProf))
        }
    }, [IdProf,Loadingdata])

    const DataSeanceReserve = useSelector(state => state.RedSeance.AllSeanceReserveOfProf)










  



    // function to delete seance temporaire of prof 
    const handelDeleteSeance = async (id) => {
        setIspressValid(true)

        // console.log('id', id)

        if (id) {
            await dispatch(DeleteSeanceTempOfProf(id))

        }

    }

    // msg delete seance temporaire 
    const MsgDeleteSeanceTemp = useSelector(state => state.RedSeance.Msg_Delete_Seance_Temp)

    useEffect(() => {
      if(MsgDeleteSeanceTemp.message === 'Seance deleted successfully' && IspressValid ){
        setLoadingData(prev => !prev)
        notifySuccess(MsgDeleteSeanceTemp.message)
        setIspressValid(false)
      }
    }, [MsgDeleteSeanceTemp])
    



    return [
        DataSeanceReserve ,handelDeleteSeance
    ]


}

export default GetAllSeanceReserveHook