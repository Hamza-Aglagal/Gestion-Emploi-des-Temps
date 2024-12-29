import { Box } from '@mui/material'
import React from 'react'

const CardSeanceReserve = ({ data, seanceKey, handelDeleteSeance }) => {


  // console.log('test :', seanceKey)

  return (


    <Box sx={{ width: '90%', height: '5rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', boxShadow: '1px 3px 5px grey ', padding: '9px', borderRadius: '5px', marginBottom: '1rem' }} >

      <div> {data && data.seance.jour} </div>
      <div> {data && data.seance.date_heurs.heur_debut} </div>
      <div> {data && data.seance.date_heurs.heur_fin}  </div>
      <div> {data && data.seance.salle.adresse} -- {data && data.seance.salle.nom} </div>

      <div> groupes </div>

      <div style={{ display:'flex', flexDirection:'row' }} >
        {
          data.groupes &&
          data.groupes.map((item, index) => (
            <p key={index} style={{ width: '30px',  }} >
              {item.nom}|
            </p>
          ))
        }
      </div>

      <Box style={{ color: 'red', cursor: 'pointer' }} onClick={() => handelDeleteSeance(seanceKey)} > Supprimer </Box>


    </Box>


  )
}

export default CardSeanceReserve

