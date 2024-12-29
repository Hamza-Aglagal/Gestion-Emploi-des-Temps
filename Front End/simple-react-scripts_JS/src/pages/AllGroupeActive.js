// @mui
import { Container, Typography, Skeleton } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import GetAllGroupeshooks from '../Hook/Active/get-groupes-hook';
import { GetGroupesActive } from '../Redux/Actions/GroupeAction';
import CardGroupe from '../components/Cards/CardGroupe';
import CardeGRPNonActive from '../components/Cards/CardeGRPNonActive';


// ----------------------------------------------------------------------

export default function AllGroupeActive() {
  const { themeStretch } = useSettings();

  const [GroupeEnligne,GroupeHorsligne] = GetAllGroupeshooks()


  // console.log('GroupeHorsligne :', GroupeHorsligne)

  return (
    <Page title="Groupes Active">
      <Container maxWidth={themeStretch ? false : 'xl'}>

        <Typography variant="h5" component="h1" paragraph style={{ color: 'green' }}>
          GP <span > Active </span>
        </Typography>



        {
          GroupeEnligne ? (
            GroupeEnligne.map((item, index) =>
              <CardGroupe key={index} data={item} />
            )
          ) : <p> Aucun groupe En ligne </p>
        }
        {/* 

        <Skeleton width="80%" height={88} sx={{ bgcolor: 'grey.250' }} />
        <Skeleton width="80%" height={88} sx={{ bgcolor: 'grey.250' }} />
        <Skeleton width="80%" height={88} sx={{ bgcolor: 'grey.250' }} /> */}




        <Typography variant="h5" component="h1" paragraph style={{ color: 'red' }}>
          GP <span > non Active </span>
        </Typography>


        {
          GroupeHorsligne && (
            GroupeHorsligne.map((item) =>
              <CardeGRPNonActive key={item.id} data={item} />
            )
          )
        }


        <Skeleton width="80%" height={88} sx={{ bgcolor: 'grey.250' }} />
        <Skeleton width="80%" height={88} sx={{ bgcolor: 'grey.250' }} />
        <Skeleton width="80%" height={88} sx={{ bgcolor: 'grey.250' }} />

      </Container>
    </Page>
  );
}
