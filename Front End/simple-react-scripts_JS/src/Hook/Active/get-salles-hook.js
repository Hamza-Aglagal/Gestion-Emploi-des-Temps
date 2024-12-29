import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetGroupesActive } from '../../Redux/Actions/GroupeAction'
import { GetSalleActive } from '../../Redux/Actions/SalleAction'


// import Swal from 'sweetalert2'


const GetSalleActiveHook = () => {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(GetSalleActive())
    }, [])

             
    // get data groupes
    const DataSalles = useSelector(state => state.RedSalle.Salle_Active)

    // console.log('DataSalles :', DataSalles)

    const SalleEnligne = DataSalles.Salle_en_ligne
    const SalleHorsligne = DataSalles.Salle_non_en_ligne




    const handelSubmit = async (e) => {
        e.preventDefault()

        // useEffect(() => {
        //     if (Loading === false) {
        //         setSelectedFile(null)
        //         setName('')
        //         setImg("https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg")
        //         setPrice('')
        //         setDesc('')
        //         setCategory('')
        //         setLoading(true)
        //         Swal.fire({
        //             position: 'buttom-end',
        //             icon: 'success',
        //             title: 'Product has been added',
        //             showConfirmButton: false,
        //             timer: 1500
        //         })
        //         // console.log('is finish....')
        //         setTimeout(() => setIspress(false), 1000)
        //     }
        // }, [Loading])



    }

    return [SalleEnligne,SalleHorsligne]


}

export default GetSalleActiveHook