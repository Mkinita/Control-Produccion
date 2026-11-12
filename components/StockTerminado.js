
import React from 'react'
import { formatoNumero } from 'helpers/formato'

const StockTerminado = ({ orden }) => {

  const {
    id,
    nombre,
    pedido = [],
    cantidad = 0,
    cliente
  } = orden

  return (
    <>
      {pedido.map((oc, index) => {

        const volumen =
          Number(oc.espesor || 0) *
          Number(oc.ancho || 0) *
          Number(oc.largo || 0) *
          Number(oc.piezas || 0) *
          (
            Number(oc.cantidad || 0) -
            Number(cantidad || 0)
          ) / 1000000

        return (
          <tr
            key={`${id}-${oc.id || index}`}
            className="bg-white hover:bg-lime-100 text-sm transition-colors"
          >
            <td className="px-4 py-3 text-center border border-lime-400">
              {id}
            </td>

            <td className="px-4 py-3 text-center border border-lime-400">
              {oc.espesor}
            </td>

            <td className="px-4 py-3 text-center border border-lime-400">
              {oc.ancho}
            </td>

            <td className="px-4 py-3 text-center border border-lime-400">
              {oc.largo}
            </td>

            <td className="px-4 py-3 text-center border border-lime-400 font-semibold">
              {formatoNumero(volumen)}
            </td>

            <td className="px-4 py-3 text-center border border-lime-400">
              {nombre}
            </td>

            <td className="px-4 py-3 text-center border border-lime-400">
              {cliente}
            </td>
          </tr>
        )
      })}
    </>
  )
}

export default StockTerminado
