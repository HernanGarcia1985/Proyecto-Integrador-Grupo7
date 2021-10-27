import React from 'react';
import {Grid} from '@material-ui/core'; //importamos la librería que se instaló
import {makeStyles} from '@material-ui/core/styles'; //importamos paquetes styles
import Navbar from '../componentes/Navbar';
import 'fontsource-roboto';
import '../assets/css/Dashboard.css';
import PeopleIcon from '@material-ui/icons/People';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import CategoryIcon from '@material-ui/icons/Category';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import LastPageIcon from '@material-ui/icons/LastPage';
import CardsHeader from '../componentes/CardsHeader.js';
import CardsRed from '../componentes/CardsRed.js';

import Cards from '../componentes/Cards.js';


const useStyles = makeStyles(()  => ({ //creacion de estilos PASO I
    root:{
        flexGrow: 1, //comenzamos con estra propiedad 
       
        
    },
    iconos:{
        color: 'white', 
             
    
    },
    container:{
       
        paddingTop: '40px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        marginLeft: 5,
        alignItems: 'center'
        
    },
  
    body:{
        
        backgroundColor: "#EEEEEE",
       
    }
}));

function Dashboard(props){
    //instanciamos los estilos dentro de la funcion
    const classes = useStyles();
    return(
        //llamamos a nuestra clase root- armamos el contenedor y dentro todos los items necesarios
        <body className={classes.body}>
        <div className={classes.root}> 
        
            <Grid container spacing = {8}> 
                <Grid item xs={12}>
                    <Navbar/>
                </Grid>

               
            
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                   <CardsHeader icono={<PeopleIcon className={classes.iconos }/>} fontSize="large" titulo="TOTAL DE USUARIOS" texto="Ej. 56" color="rgb(72,190,209)" font="white"/>
                </Grid>

                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeader icono={<LocalGroceryStoreIcon className={classes.iconos}/>} titulo="TOTAL DE PRODUCTOS" texto="Argentina" color="rgb(72,190,209)" font="white"/>
                </Grid>

                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeader icono={<CategoryIcon className={classes.iconos}/>} titulo="TOTAL DE CATEGORIAS" texto="5" color="rgb(72,190,209)" font="white"/>
                </Grid>

                {/* Estas son las tarjetas rojas  */}

                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                   <CardsRed icono={<EmojiPeopleIcon className={classes.iconos }/>} fontSize="large" titulo="ULTIMO USUARIO CREADO" texto="Carlos Sanchez" color="rgb(72,190,209)" font="white"/>
                </Grid>

                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsRed icono={<LastPageIcon className={classes.iconos}/>} titulo="ULTIMO PRODUCTO CREADO" texto="COMIDA PARA GATO CAT" color="rgb(72,190,209)" font="white"/>
                
                </Grid>

                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsRed icono={<CategoryIcon className={classes.iconos}/>} titulo="CATEGORIAS" texto='Alimento Seco, Alimento Humedo, Cuidados y belleza, Cuchas y camas, Bandeja y material sanitario' color="rgb(72,190,209)" font="white"/>
                </Grid>

                
   

                
               

                <Grid >
                    <Grid item xs={4} sm={6} md={6} lg={6} xl={6}>
                        <Cards titulo="LISTADO DE PRODUCTOS" texto="Lorem Ipsusmmmlñdghsolighoighosigh<ñosadi, asfihueoifguoi
                        afd akjueboifeuf
                        d jklandlgoisg
                        dghisoghuaposighosi"/>
                </Grid>
             
                               

                    
                </Grid>

                




            </Grid>
        </div>
        </body>
    )
};

export default Dashboard;