import React from 'react';
import {Card, Typography, CardContent, CardActions} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles= makeStyles(()=>({
    root:{
        textAlign: 'center',
        backgroundColor: 'rgba(73,155,234,1)',
        marginLeft: 30
    },
    texto:{
        fontSize: 18,
        color: 'white'
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    imagen:{
        width: '95%',
        height: '25vh',
        margin: '5px auto',
        objectFit: 'fill',
        maxWidth: '50%',
        maxHeight: '70%',
    }
    }));

function Cards(props) {

    const classes=useStyles();
    let imgComponent = <span/>    
    if (props.imagen!==undefined && props.imagen!==""){
        console.log("PEPE>>"+props.imagen)
        imgComponent = <img className={classes.imagen} src={props.imagen} alt=""></img>
    }
    return (
        <Card className={classes.root}>
            <CardContent>
                {props.icono}
                <Typography  className={classes.titulo}>
                {props.titulo}
                </Typography>

                <Typography  className={classes.texto}>
                {props.texto}
                </Typography>
                
            </CardContent>            
            {imgComponent}
        </Card>
    );
}

export default Cards;
