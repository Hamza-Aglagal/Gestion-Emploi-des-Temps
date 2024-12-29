import React from 'react';
import { Box } from '@mui/material';
import ShwoEmploiStudent from '../../Hook/EmploiStudent/Get-Time-table-Student-Hook';
import useSettings from '../../hooks/useSettings';

const TimeTable = () => {
    const { themeStretch } = useSettings();
    const [DataDates, , EmploiStudent] = ShwoEmploiStudent();

    console.log(EmploiStudent)

    const FormatTime = (time) => {
        const parsedTime = new Date(`2000-01-01T${time}`);
        return parsedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const renderCellContent = (item, day) => {
        const matchingSeances = EmploiStudent[day];

        if (matchingSeances) {
            const matchingSeance = matchingSeances.find(
                (seance) => seance.date_heurs.id === item.date_id || seance.date_heurs.type_Stp === item.date_id
            );

            if (matchingSeance) {
                return (
                    <Box style={{ width: '100%', textAlign:'center', display:'flex', flexDirection:'column', justifyContent:'center' , alignItems:'center', fontSize:'12px'}}>

                       
                        <div style={{width:'100%'}}>
                            {matchingSeance.module.nom}
                        </div>
                        <div style={{color:'black'}}>
                            {matchingSeance.salle.adresse} Salle {matchingSeance.salle.nom}
                        </div>
                        <div>
                            {matchingSeance.professeur.nom} {matchingSeance.professeur.prenom}
                        </div>
                        <div style={{color:'green'}}>
                            {matchingSeance.date_heurs.type === 'Secondaire' ? (

                                <spain> {FormatTime(matchingSeance.date_heurs.heur_debut)} à {FormatTime(matchingSeance.date_heurs.heur_fin)} </spain>
                            ) : null}
                        </div>

                    </Box>
                );
            }
        }
    };

    return (
        <main className="MaineTimeTable" style={{ margin: '0', width: '70rem', height: '40rem' }}>
            <div className="timetable" id="timetable">
                <Box style={{ width: '100%', height: '3rem', display: 'flex', marginBottom: '2rem' }}>
                    <h2>Timetable</h2>
                </Box>

                <table>
                    <thead>
                        <tr>

                            <th style={{ borderBottom: 'grey solid 1px', width: '25px', height: '55px', borderRight: 'grey 1px solid' }} > jour / date</th>

                            {DataDates[Object.keys(DataDates)[0]]
                                ? DataDates[Object.keys(DataDates)[0]].map((timeSlot, timeIndex) => (
                                    <th key={timeIndex} style={{ borderBottom: 'grey solid 1px', width: '35px', height: '65px', borderRight: 'grey 1px solid' }} >
                                        {FormatTime(timeSlot.heur_debut)} à {FormatTime(timeSlot.heur_fin)}
                                    </th>
                                ))
                                : null}
                        </tr>
                    </thead>

                    <tbody>
                        {Object.keys(DataDates).map((day, index) => (
                            <tr key={index}  >
                                <th style={{ borderBottom: 'grey solid 1px', width: '35px', height: '65px', borderRight: 'grey 1px solid' }} >
                                    {day}
                                </th>
                                {DataDates[day].map((item, index) => (
                                    <td style={{ borderBottom: 'grey 1px solid', width: '35px', height: '65px', borderRight: 'grey 1px solid' }} key={index}>{renderCellContent(item, day)}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default TimeTable;
