import Carrusel from "../Componentes/Carrusel"
import Navegacion from "../Componentes/Navegacion"
import Alert from 'react-bootstrap/Alert';
const Inicio = () => {
    return (
        <body class="backgroundcircuit">
        <div className='header'>
        <Alert className="">Pagina web y tienda online
        </Alert>
            <Navegacion/>
            <Carrusel/>
        </div>
        </body>
    )
}

export default Inicio