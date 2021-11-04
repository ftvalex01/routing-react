import React from 'react';
import {Link} from 'react-router-dom';

const Nosotros = () => {

    

    const [equipo,setEquipo] = React.useState([])


    React.useEffect(()=>{
        llamadaApi()
    }, [])

    const llamadaApi = async()=>{
       const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
       const users = await data.json()
       setEquipo(users.civilizations)
    }
    

    return (
        <div>
            Soy la pagina de nosotros
            <ul>
            {
                equipo.map(item =>(
                    <li key={item.id}>
                    <Link to={`/nosotros/${item.id}`}>{item.name}-{item.expansion}</Link></li>
                )
                 )
            }
            </ul>
        </div>
    )
}

export default Nosotros
