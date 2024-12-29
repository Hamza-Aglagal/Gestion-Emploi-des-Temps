import React from 'react'
import { Box, Typography } from '@mui/material'

import GetAllSeanceReserveHook from '../../Hook/Seance/All-Seance-reserve-hook'

import Page from '../../components/Page'
// import GetAllSeanceReserve from '../../Hook/Seance/All-Seance-reserve-hook'
import CardSeanceReserve from '../../components/Cards/CardSeanceReserve'




const SeanceReserve = () => {


    const [
        DataSeanceReserve, handelDeleteSeance
    ] = GetAllSeanceReserveHook()
    // console.log('DataSeanceReserve : ', DataSeanceReserve)



    return (

        <Page>

            <Typography variant="h5" component="h1" paragraph sx={{ marginTop: '1rem' }} >
                Seance reserve
            </Typography>


            <Box sx={{ marginTop: '5rem', marginLeft: '5rem' }}>

                <Box sx={{ width: '90%', height: '5rem', fontWeight:'Bold', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '9px', borderRadius: '5px', marginBottom: '1rem' }} >

                    <div> jour </div>
                    <div>  heur_debut </div>
                    <div>  heur_fin  </div>
                    <div> Adresse -- Salle </div>
                    <div> groupes </div>

                    <Box> Action </Box>


                </Box>

                {
                    DataSeanceReserve.length !== 0
                        ? Object.entries(DataSeanceReserve).map(([key, item], index) => (
                            <CardSeanceReserve key={index} data={item} seanceKey={key} handelDeleteSeance={handelDeleteSeance} />
                        ))
                        : <Box> aucun seance reserve </Box>
                }


            </Box>


        </Page>



    )
}

export default SeanceReserve


