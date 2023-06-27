import {formatiarFecha} from "helpers/fecha"
import {formatoNumero,formatoNumeroDes} from "helpers/formato"
import { format, parseISO } from 'date-fns';
import React, { useState, useEffect } from 'react';

const ListadoProduccion = ({producciones}) => {
    const {id, cantidad, fecha, nombre,ingreso} = producciones

    const fechaS = typeof fecha === 'string' ? parseISO(fecha) : fecha;
    const fechaFormateada = format(fechaS, 'MMMM dd');

   


    

    

    

  return (

    <>
        <table className="table-auto w-full text-center bg-white text-gray-700">
            <tbody>
                
                    <tr className="bg-white border-b hover:bg-lime-300 text-sm">
                        <td className="px-2 py-4 w-1/5 text-center border border-lime-400">{fechaFormateada}</td>
                        <td className="px-2 py-4 w-1/5 text-center border border-lime-400">{cantidad}</td>
                        <td className="px-2 py-4 w-1/5 text-center border border-lime-400">{formatoNumeroDes(cantidad / 540)}</td>
                        
                    </tr>
                
            </tbody>
        </table>
    </>
  )
}

export default ListadoProduccion
