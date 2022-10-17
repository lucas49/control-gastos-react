import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({
          gastos, 
          setGastoEditar, 
          eliminarGasto, 
          filtro, 
          gastosFiltrados
}) => {
  return (
    <div className="listado-gastos contenedor">
        

        { filtro ? (
                <>
                    <h2>{gastosFiltrados.length ? 'Gastos' : 'No Hay Gastos en esta categoría'}</h2>
                    {gastosFiltrados.map( gasto => (
                        <Gasto 
                            key={gasto.id}
                            gasto={gasto}
                            setGastoEditar={setGastoEditar}
                            eliminarGasto={eliminarGasto}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos aún'}</h2>
                    {gastos.map( gasto => (
                        <Gasto 
                            key={gasto.id}
                            gasto={gasto}
                            setGastoEditar={setGastoEditar}
                            eliminarGasto={eliminarGasto}
                        />
                    ))}
                </>
            )
        }
    </div>
)
}

// Multitenant para base de datos
// Logueo.

export default ListadoGastos




// const ListadoGastos = ({
//   gastos, 
//   setGastoEditar, 
//   elimiarGasto, 
//   filtro, 
//   gastosFiltrados
// }) => {
// return (
// <div className='listado-gastos contenedor'>


// { filtro ? (
//   <>

//       <h2>{gastosFiltrados.lenght ? 'Gastos' : 'No hay Gastos en esta categoria'}</h2>
//      { gastosFiltrados.map(gasto => (
//         <Gasto
//             key={gasto.id}
//             gasto={gasto}
//             setGastoEditar={setGastoEditar}
//             elimiarGasto={elimiarGasto}
//         />         
//         ))}
//   </>
//     ) : (
//       <>
//       <h2>{gastos.lenght ? 'Gastos' : 'No hay  Aun'}</h2>
//     {  gastos.map(gasto => (
//         <Gasto
//             key={gasto.id}
//             gasto={gasto}
//             setGastoEditar={setGastoEditar}
//             elimiarGasto={elimiarGasto}
//         />
//     ))}
//     </>
//     )
//     }

// </div>
// )
// }