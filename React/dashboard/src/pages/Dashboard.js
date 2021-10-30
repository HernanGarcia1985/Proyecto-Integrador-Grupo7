import React, {  useEffect, useState} from 'react'; //IMPORTANDO HOOKS 
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
import Cards from '../componentes/Cards.js';
import Graphics from '../componentes/Graphics.js';

var traerDatosUrl = 'http://localhost:3001/API/todosLosUsuarios';

var traerProductosUrl = 'http://localhost:3001/API/todosLosProductos';

var traerCategoriasUrl = 'http://localhost:3001/API/todasLasCategorias';



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


    const [cantidadUsuarios, setCantidadUsuarios] = useState(0); //USAMOS HOOKS USESTATE
    const [cantidadProductos, setCantidadProductos] = useState(0);
    const [cantidadCategorias, setCantidadCategorias] = useState(0);
    
    


    useEffect(() => { //SIRVE PARA GESTIONAR EL CICLO DE VIDA DEL COMPONENTE
        
        fetch(traerDatosUrl)
      .then(response => response.json() )            
      .then(data =>  setCantidadUsuarios(data.cantidad))
      .catch(e =>console.log(e))
      },[]);
      

    

    useEffect(() => {
          
          fetch(traerProductosUrl)
        .then(response => response.json() )      
        .then(data =>  setCantidadProductos(data.cantidad))
        
        .catch(e =>console.log(e))
        },[]);// CON ESTE ARRAY VACIO LE INDICAMOS AL HOOK QUE NO LE HAGA SEGUIMIENTO A NINGUNA DEPENDENCIA

        

        useEffect(() => {
              
              fetch(traerCategoriasUrl)
            .then(response => response.json() )      
            .then(data =>  setCantidadCategorias(data.cantidad))
            
            .catch(e =>console.log(e))
            },[]);
  


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
                   <CardsHeader icono={<PeopleIcon className={classes.iconos}/>} titulo="TOTAL DE USUARIOS" texto={cantidadUsuarios} color="rgb(72,190,209)" font="white"/>
                </Grid>

                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeader icono={<LocalGroceryStoreIcon className={classes.iconos}/>} titulo="TOTAL DE PRODUCTOS" texto={cantidadProductos} color="rgb(72,190,209)" font="white"/>
                </Grid>

                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeader icono={<CategoryIcon className={classes.iconos}/>} titulo="TOTAL DE CATEGORIAS" texto={cantidadCategorias} color="rgb(72,190,209)" font="white"/>
                </Grid>



                <Grid container spacing={4} className={classes.container} xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards icono={<EmojiPeopleIcon className={classes.iconos}/>} titulo="ULTIMO USUARIO CREADO" texto="5665"/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards icono={<LastPageIcon className={classes.iconos}/>} titulo="ULTIMO PRODUCTO CREADO" texto="111,092"/>
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