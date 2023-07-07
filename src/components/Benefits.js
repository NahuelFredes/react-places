import React from 'react';
import {red, lightBlue, amber} from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
export default class Benefit extends React.Component {
    render() {
        return (
            <ul>
                <Grid key={1} container spacing={5} style={{ 'justifyContent': 'center' , 'height':'10%'}}>
                    <Grid item md={3} style={{ 'height': "100%", 'padding': '10px', 'height':'10%' }}>
                        <Card sx={{ display: 'flex' }} className='Header-Benefit'>
                            <CardMedia
                                sx={{ 'backgroundColor': red[400], width: '50%' }}
                                component="img"
                                image="/Images/Heart.png"
                            />
                            <Box>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <div className='Header-Benefit-content'>
                                        <h3>Clasificaciones con emociones</h3>
                                        <p>Califica tus lugares con experiencias, no con numeros</p>
                                    </div>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid key={2} item md={3} style={{ 'height': "100%", 'paddingTop': '10px' }}>
                        <Card sx={{ display: 'flex' }} className='Header-Benefit'>
                            <CardMedia
                                sx={{ 'backgroundColor': lightBlue[400], width: '50%' }}
                                component="img"
                                image="/Images/wifi.png"
                            />
                            <Box>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <div className='Header-Benefit-content'>
                                        <h3>¿Sin internet? sin problemas</h3>
                                        <p>Places funciona sin internet o sin conexiones lentas</p>
                                    </div>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid key={3} item md={3} style={{ 'height': "100%", 'paddingTop': '10px' }}>
                        <Card sx={{ display: 'flex' }} className='Header-Benefit'>
                            <CardMedia
                                sx={{ 'backgroundColor': amber[400], width: '50%' }}
                                component="img"
                                image="/Images/star.png"
                            />
                            <Box>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <div className='Header-Benefit-content'>
                                        <h3>Tus lugares favoritos</h3>
                                        <p>Defini tu lista de lugares favoritos</p>
                                    </div>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </ul>
        );
    }
}