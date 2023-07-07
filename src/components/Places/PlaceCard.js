import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/joy/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { CSSTransition } from 'react-transition-group';

export default class PlaceCard extends React.Component {
    constructor(props){
        super(props);
        this.state={
            show: true
        }
    }
    render() {
        return (
            <CSSTransition 
                key={this.props.index} 
                timeout={2000} 
                classNames={'fade-scale'} 
                in={this.props.in}
                appear={true}
                unmountOnExit={true}
                mountOnEnter={true}
                >
                <div key={this.props.index} className='col-xs-12 col-sm-4' >
                    <Card key={this.props.index}>
                        <CardMedia
                            height={'20%'}
                            component="img"
                            image={process.env.PUBLIC_URL + this.props.place.imageUrl}
                        />
                        <CardContent>
                            <h2>{this.props.place.title}</h2>
                            <p>{this.props.place.description}</p>
                        </CardContent>
                        <CardActions>
                            <Button >Ver Más</Button>
                            <Button onClick={() => this.props.onRemove(this.props.place)}>Ocultar</Button>
                        </CardActions>
                    </Card>
                </div>
            </CSSTransition>
        );
    }
}