import {formatoNumero} from "helpers/formato"
import React, { useState, useEffect } from 'react';


const StockTerminado = ({orden}) => {
  const {id, nombre, total, pedido, fecha, folio, descripcion, cantidad, calidad,cliente} = orden
  

  
  
  

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse bg-white text-gray-700">
          <tbody className="text-center">
            {pedido.map(oc => (
              <tr className="bg-white border-b hover:bg-lime-300 text-sm" key={oc.id}>
                <td className="px-6 py-4 w-1/6 text-center border border-lime-400">{oc.espesor}</td>
                <td className="px-6 py-4 w-1/6 text-center border border-lime-400">{oc.ancho}</td>
                <td className="px-6 py-4 w-1/6 text-center border border-lime-400">{oc.largo}</td>
                <td className="px-6 py-4 w-1/6 text-center border border-lime-400">{formatoNumero(oc.espesor * oc.ancho * oc.largo * oc.piezas *(oc.cantidad - cantidad) / 1000000 )}</td>
                <td className="px-6 py-4 w-1/6 text-center border border-lime-400">{nombre}</td>
                <td className="px-6 py-4 w-1/6 text-center border border-lime-400">{cliente}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default StockTerminado
