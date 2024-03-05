import {formatiarFecha} from "helpers/fecha"
import {formatoNumero} from "helpers/formato"


const ListadoProduccionFecha = ({orden}) => {
    const {id, nombre, total, pedido, fecha, folio, descripcion,operador} = orden





  
  return (
    
    <>
        <table className="table-auto w-full text-center bg-white text-gray-700">
            <tbody>
                {pedido.map(oc => (
                    <tr className="bg-white border-b hover:bg-amber-300 text-sm"key={oc.id}>
                        <td className="px-6 py-4 w-1/5 text-center border border-amber-400">{formatiarFecha(fecha)}</td>
                        <td className="px-6 py-4 w-1/5 text-center border border-amber-400">{oc.detalle}</td>
                        <td className="px-6 py-4 w-1/5 text-center border border-amber-400">{operador}</td>
                        <td className="px-6 py-4 w-1/5 text-center border border-amber-400">{nombre}</td>
                        <td className="px-6 py-4 w-1/5 text-center border border-amber-400">{formatoNumero(oc.espesor * oc.ancho * oc.largo * oc.piezas *oc.cantidad / 1000000 )}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}

export default ListadoProduccionFecha