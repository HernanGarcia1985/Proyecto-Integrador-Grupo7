import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {IconButton} from '@material-ui/core';


import notebook from '../assets/img/notebook-mano.jpg';

const useStyles = makeStyles(()  => ({ //creacion de estilos PASO I
    root:{
        flexGrow: 1 //comenzamos con estra propiedad 
    },
    menuButton:{
        marginRight: '16px'
    },
    title:{
        flexGrow: 1
    },
    imagen:{
        borderRadius: '3%'
    }
}));

function Graphics(props){
    
    const classes = useStyles();

    return (
        <div className={classes.root}> 
             <IconButton color="inherit">
            <img src={notebook} width="500px" height="300px" className={classes.imagen} alt="Logo"/>
            </IconButton>
        </div>
    );
}

export default Graphics;

