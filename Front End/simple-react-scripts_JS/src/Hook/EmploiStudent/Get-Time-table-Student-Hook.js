import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { GetAllGroupe, GetGroupesActive, GetGroupesWithNiveau } from '../../Redux/Actions/GroupeAction'
import { GetAllProf } from '../../Redux/Actions/ProfAction'
import { GetAllFillier } from '../../Redux/Actions/FilliereAction'
import { GetAllNiveau } from '../../Redux/Actions/NiveauAction'
import { ChekDatesDiponibleOfGroupe, GetAllDates, GetAllDatesDisponibleInDay, GetAllDatesSecondaire, GetAllDatesWithDays, GetOneDatesSecondaire } from '../../Redux/Actions/DatesAction'
import { AddSeance, DeleteSeance, GetAllSeanceOfProf, GetAllSeanceOfStudent } from '../../Redux/Actions/SeanceAction'
import { notifySuccess, notifyWarning } from '../../hooks/notification/useNotif'
import { GetSallesWithDateAndJour } from '../../Redux/Actions/SalleAction'
import { getIdFromToken } from '../../routes/Pravite-routes'
import { GetAllModulesOfProf } from '../../Redux/Actions/ModuleAction'



// import Swal from 'sweetalert2'


const ShwoEmploiStudent = () => {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(GetAllDatesWithDays())

      
    }, [])



  



   // this used to rerender data of Emploi Prof 
   const [renderEmploiProf, setrenderEmploiProf] = useState(false)


     // get id prof in token -----------------
     const [IdStudent, setIdStudent] = useState(null)
     const [UserData, setUserData] = useState(null)
     useEffect(() => {
         const storedToken = localStorage.getItem('token');
         const user = JSON.parse(localStorage.getItem('user'));
         const id = getIdFromToken(storedToken)
         setIdStudent(id)
         setUserData(user)
         
       }, [])        

       

  
    // Get Emploi of prof ---------------------
    useEffect(() => {
        if (IdStudent) {
            dispatch(GetAllSeanceOfStudent(IdStudent))
            // dispatch(GetAllModulesOfProf(IdProf))
            setrenderEmploiProf(false)
        }
    }, [IdStudent,renderEmploiProf])
    const EmploiStudent = useSelector(state => state.RedSeance.AllSeanceOfStudent)
    // console.log('EmploiStudent : ', EmploiStudent)



    // const MoudlesProf = useSelector(state => state.RedModule.AllModulesOfProf)
    // // console.log('MoudlesProf : ', MoudlesProf)


  



 
    // ---------- get data Dates
    const DataDates = useSelector(state => state.RedDate.AllDateWithDays)
    // console.log('DataDates :', DataDates)



  

  
  




    return  [
        DataDates, UserData,
        EmploiStudent,

    ]


}

export default ShwoEmploiStudent