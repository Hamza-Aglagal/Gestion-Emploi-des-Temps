import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetGroupesActive } from '../../Redux/Actions/GroupeAction'
import { GetProfActive } from '../../Redux/Actions/ProfAction'


// import Swal from 'sweetalert2'


const GetAllProfhooks = () => {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(GetProfActive())
    }, [])

    // get data prof
    const DataProf = useSelector(state => state.RedProf.AllProfActive)




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

    return [DataProf]


}

export default GetAllProfhooks