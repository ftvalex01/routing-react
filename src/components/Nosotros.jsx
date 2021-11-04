import React from 'react'

const Nosotros = () => {

    const[count,setCounter]

    React.useEffect(()=>{
         document.title=`you clicked ${count} times`
    })
    aumentar=()=>{
        (count+1)
    }

    return (
        <div>
            Soy la pagina de nosotros
            <button onClick={()=>setCounter()}></button>
        </div>
    )
}

export default Nosotros
