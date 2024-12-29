import { useEffect, useState } from 'react';

// @mui
import { Container, Typography, Skeleton } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import GetAllProfhooks from '../Hook/Active/get-prof-avtive-hook';
import CardActiveProf from '../components/Cards/CardActiveProf';
import CardNonActiveProf from '../components/Cards/CardNonActiveProf';

// ----------------------------------------------------------------------

export default function ProfActive() {
  const { themeStretch } = useSettings();

  const [DataProf] = GetAllProfhooks()

  // console.log('DataProf :', DataProf)

  const [DataActive, setDataActive] = useState(null)
  const [DataNonActive, setDataNonActive] = useState(null)

  useEffect(() => {
    setDataActive(DataProf.prof_en_ligne)
    setDataNonActive(DataProf.prof_non_en_ligne)
  }, [DataProf])



  return (
    <Page title="Professeurs">
      <Container maxWidth={themeStretch ? false : 'xl'}>


        <Typography variant="h5" component="h1" paragraph style={{ color: 'green' }}>
          Prof <span > Active </span>
        </Typography>


        {
          DataActive ? (
            DataActive.map((item, index) =>
              <CardActiveProf key={index} data={item} />
            )
          ) : <p> Aucun prof En ligne </p>
        }
        {/* 
        <Skeleton width="80%" height={88} sx={{ bgcolor: 'grey.250' }} />
        <Skeleton width="80%" height={88} sx={{ bgcolor: 'grey.250' }} />
        <Skeleton width="80%" height={88} sx={{ bgcolor: 'grey.250' }} /> */}



        <Typography variant="h5" component="h1" paragraph style={{ color: 'red' }}>
          Prof <span > non Active </span>
        </Typography>

        {
          DataNonActive ? (
            DataNonActive.map((item, index) =>
              <CardNonActiveProf key={index} data={item} />
            )
          ) : <p> Aucun prof En ligne </p>
        }

        {/* <Skeleton width="80%" height={88} sx={{ bgcolor: 'grey.250' }} />
        <Skeleton width="80%" height={88} sx={{ bgcolor: 'grey.250' }} />
        <Skeleton width="80%" height={88} sx={{ bgcolor: 'grey.250' }} /> */}


      </Container>
    </Page>
  );
}
