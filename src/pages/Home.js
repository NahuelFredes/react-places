import React from 'react';
import Button from '@mui/material/Button';
import { indigo} from '@mui/material/colors';

import Title from '../components/Title';
import data from '../requests/places';
import Benefit from '../components/Benefits';
import PlaceCard from '../components/Places/PlaceCard';
import { TransitionGroup } from 'react-transition-group';


export default class Home extends React.Component {
    constructor(props){
        super(props);

        this.state={
            places: data.places
        }
        this.hidePlace = this.hidePlace.bind(this);
    }
    
    places() {
        return this.state.places.map((place, index) => {
            return (
                <PlaceCard onRemove={this.hidePlace} place={place} index={index}></PlaceCard>
            );
        })
    }

    hidePlace(place){
        this.setState({
            places: this.state.places.filter(elem => elem != place)
        })
    }

    render() {
        return (
            <section>
                <div className='Header-background'>
                    <div style={{ 'width': '80%', 'margin': '0 auto' }}>
                        <div className='Header-main'>
                            <Title title='Places'></Title>
                            <Button variant='contained'>Crear cuenta gratuita</Button>
                            <img className='Header-illustration' src={process.env.PUBLIC_URL + '/Images/header-image.png'} />
                        </div>
                        <div>
                            <Benefit></Benefit>
                        </div>
                    </div>
                </div>
                <div style={{ 'backgroundColor': indigo[400], 'padding': '50px', 'color': 'white' }}>
                    <h3 style={{ 'fontSize': '24px' }}>Sitos Populares</h3>
                    <TransitionGroup className='row'>
                        {this.places()}
                    </TransitionGroup>
                </div>
            </section>
        );
    }
}