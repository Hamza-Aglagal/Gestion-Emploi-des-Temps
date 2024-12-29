import * as React from 'react';
// @mui
import { Container, Typography, Skeleton } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

// import { TabContext,TabList,TabPanel } from '@material-ui/lab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Grid from '@mui/material/Unstable_Grid2';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';


// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import { GetSalleActive } from '../Redux/Actions/SalleAction';
import GetSalleActiveHook from '../Hook/Active/get-salles-hook';

// ----------------------------------------------------------------------

export default function PageThree() {
  const { themeStretch } = useSettings();

  const [SalleEnligne, SalleHorsligne] = GetSalleActiveHook()


  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  const [SallesCentreActive, setSallesCentre] = React.useState([])
  const [SalleGuelizActive, setSalleGueliz] = React.useState([])
  const [SalleNonActiveCentre, setSalleNonActiveCentre] = React.useState([])
  const [SalleNonActiveGueliz, setSalleNonActiveGueliz] = React.useState([])

  React.useEffect(() => {
    if (SalleEnligne) {
      const datacentre = SalleEnligne.filter((item) => item.adresse === "Centre")
      setSallesCentre(datacentre)
      const datagueliz = SalleEnligne.filter((item) => item.adresse === "Gueliz")
      setSalleGueliz(datagueliz)
    }
    if (SalleHorsligne) {
      const datacentrehorsligne = SalleHorsligne.filter((item) => item.adresse === "Centre")
      setSalleNonActiveCentre(datacentrehorsligne)
      const dataguelizhorsligne = SalleHorsligne.filter((item) => item.adresse === "Gueliz")
      setSalleNonActiveGueliz(dataguelizhorsligne)
    }

  }, [SalleEnligne, SalleHorsligne])


  // console.log('SallesCentre :', SallesCentre)
  // console.log('SalleGueliz :', SalleGueliz)



  return (
    <Page title="Salles Active">
      <Container maxWidth={themeStretch ? false : 'xl'}>

        <TabContext value={value}  >
          <Box sx={{ borderBottom: 5, borderColor: 'divider', marginBottom: '1rem' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" >
              <Tab style={{ color: 'grey', fontSize: '1.5rem', fontWeight: '900' }} label="Centre" value="1" />
              <Tab style={{ color: 'grey', fontSize: '1.5rem', fontWeight: '900' }} label="Guiliz" value="2" />
            </TabList>
          </Box>

          {/* -------- Panel 1 ------------------------------------ */}
          <TabPanel value="1" style={{ color: 'green', marginTop: '7px ' }} >

            <Typography variant="h6" component="h6" paragraph style={{ color: 'green', marginTop: '7px ' }}>
              Salle <span > Active </span>
            </Typography>



            <Grid container spacing={2}>


              {
                SallesCentreActive.length !== 0 ?
                  SallesCentreActive.map((item, index) => (
                    <Grid key={index} xs={3} sx={{ height:'5rem', boxShadow:'1px 2px 3px ', marginLeft:'7px'}} >
                      <Box width="100%" height={300} sx={{ bgcolor: 'grey.250' }}> {item.nom} </Box>
                    </Grid>
                  )) : [1, 2, 3, 4].map((item, index) => (
                    <Grid key={index} xs={3} >
                      <Skeleton width="100%" height={300} sx={{ bgcolor: 'grey.250' }} />
                    </Grid>
                  ))
              }

              {/* <Grid xs={3} >
                <Skeleton width="100%" height={300} sx={{ bgcolor: 'grey.250' }} />
              </Grid>
              <Grid xs={3} >
                <Skeleton width="100%" height={300} sx={{ bgcolor: 'grey.250' }} />
              </Grid>
              <Grid xs={3} >
                <Skeleton width="100%" height={300} sx={{ bgcolor: 'grey.250' }} />
              </Grid>
              <Grid xs={3} >
                <Skeleton width="100%" height={300} sx={{ bgcolor: 'grey.250' }} />
              </Grid> */}


            </Grid>


            <Typography variant="h6" component="h6" paragraph style={{ color: 'red', marginTop:'3rem' }}>
              Salle <span > non Active </span>
            </Typography>

            <Grid container spacing={2}>

              {
                SalleNonActiveCentre.length !== 0 ?
                  SalleNonActiveCentre.map((item, index) => (
                    <Grid key={index} xs={3}  sx={{ height:'5rem', boxShadow:'1px 2px 3px red ', marginLeft:'7px'}} >
                      <Box width="100%" height={300} sx={{ bgcolor: 'grey.250' }}> {item.nom} </Box>
                    </Grid>
                  )) : [1, 2, 3, 4].map((item, index) => (
                    <Grid key={index} xs={3} >
                      <Skeleton width="100%" height={300} sx={{ bgcolor: 'grey.250' }} />
                    </Grid>
                  ))
              }

            </Grid>

          </TabPanel>



          {/* -------- Panel 2 ------------------------------------ */}
          <TabPanel value="2">

            <Typography variant="h6" component="h6" paragraph style={{ color: 'green' }}>
              Salle <span > Active </span>
            </Typography>

            <Grid container spacing={2}>


              {
                SalleGuelizActive.length !== 0 ?
                  SalleGuelizActive.map((item, index) => (
                    <Grid key={index} xs={3}  sx={{ height:'5rem', boxShadow:'1px 2px 3px ', marginLeft:'7px'}} >
                      <Box width="100%" height={300} sx={{ bgcolor: 'grey.250' }}> {item.nom} </Box>
                    </Grid>
                  )) : [1, 2, 3, 4].map((item) => (
                    <Grid key={item} xs={3} >
                      <Skeleton width="100%" height={300} sx={{ bgcolor: 'grey.250' }} />
                    </Grid>
                  ))
              }


            </Grid>



            <Typography variant="h6" component="h6" paragraph style={{ color: 'red' }}>
              Salle <span > non Active </span>
            </Typography>

            <Grid container spacing={2}>

              {
                SalleNonActiveGueliz.length !== 0 ?
                SalleNonActiveGueliz.map((item, index) => (
                    <Grid key={index} xs={3}  sx={{ height:'5rem', boxShadow:'1px 2px 3px red ', marginLeft:'7px'}} >
                      <Box width="100%" height={300} sx={{ bgcolor: 'grey.250' }}> {item.nom} </Box>
                    </Grid>
                  )) : [1, 2, 3, 4].map((item) => (
                    <Grid key={item} xs={3} >
                      <Skeleton width="100%" height={300} sx={{ bgcolor: 'grey.250' }} />
                    </Grid>
                  ))
              }

            </Grid>

          </TabPanel>



        </TabContext>






      </Container>
    </Page>
  );
}
