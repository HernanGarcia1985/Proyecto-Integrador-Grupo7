import React from 'react';
import {Grid} from '@material-ui/core'; //importamos la librería que se instaló
import {makeStyles} from '@material-ui/core/styles'; //importamos paquetes styles
import Navbar from '../componentes/Navbar';
import 'fontsource-roboto';
import '../assets/css/Dashboard.css';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PublicIcon from '@material-ui/icons/Public';
import VideocamIcon from '@material-ui/icons/Videocam';
import CardsHeader from '../componentes/CardsHeader.js';
import Cards from '../componentes/Cards.js';
import Graphics from '../componentes/Graphics.js';

const useStyles = makeStyles(()  => ({ //creacion de estilos PASO I
    root:{
        flexGrow: 1, //comenzamos con estra propiedad 
        
    },
    iconos:{
        color: 'white'
    },
    container:{
        paddingTop: '40px',
        alignItems: 'center'
    },
    containerGrafica:{
        marginTop: '40px'
    },
    body:{
        backgroundColor: "#EEEEEE"
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
                   <CardsHeader icono={<YouTubeIcon className={classes.iconos}/>} titulo="TOTAL DE USUARIOS" texto="Andrea G" color="rgb(72,190,209)" font="white"/>
                </Grid>

                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeader icono={<PublicIcon className={classes.iconos}/>} titulo="TOTAL DE PRODUCTOS" texto="Argentina" color="rgb(72,190,209)" font="white"/>
                </Grid>

                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeader icono={<VideocamIcon className={classes.iconos}/>} titulo="TOTAL DE CATEGORIAS" texto="85" color="rgb(72,190,209)" font="white"/>
                </Grid>



                <Grid container spacing={4} className={classes.container} xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="ULTIMO USUARIO CREADO" texto="692"/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="ULTIMO PRODUCTO CREADO" texto="111,092"/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="CATEGORIAS" texto="2,504 horas"/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo="LISTADO DE PRODUCTOS" texto="14.2%"/>
                    </Grid>

                </Grid>

                <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>
                <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={classes.containerGrafica}>
                <Graphics />
                </Grid>




            </Grid>
        </div>
        </body>
    )
};

export default Dashboard;