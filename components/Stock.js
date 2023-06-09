import {formatiarFecha} from "helpers/fecha"
import {formatoNumero} from "helpers/formato"
import axios  from 'axios'
import { toast } from "react-toastify"
import React, { useState } from 'react';
import EditarStock from "./EditarStock";


const Stock = ({orden}) => {
    const {id, nombre, total, pedido, fecha, folio, descripcion,cantidad,calidad} = orden


    





    
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post(`/api/stock/${orden.id}`);
          console.log(res.data);
        } catch (err) {
          console.error(err);
        }
      };

  return (
    
    <>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-center bg-white text-gray-700">
            
            <tbody>
              {pedido.map(oc => (
                <tr key={oc.id}>
                  <td className="border px-4 py-2">{oc.detalle}</td>
          <td className="border px-4 py-2">{oc.cantidad}</td>
          <td className="border px-4 py-2">{cantidad}</td>
          <td className="border px-4 py-2">{oc.cantidad - cantidad}</td>
          <td className="border px-4 py-2">{nombre}</td>
          <td className="border px-4 py-2">
            <EditarStock key={orden.id} orden={orden} />
          </td>
          <td className="border px-4 py-2">{formatoNumero(oc.espesor * oc.ancho * oc.largo * oc.piezas *(oc.cantidad - cantidad) / 1000000 )}</td>
        </tr>
      ))}
    </tbody>
  </table>

        </div>


        

    </>
  )
}

export default Stock