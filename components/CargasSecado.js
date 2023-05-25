import {formatiarFecha} from "helpers/fecha"
import {formatoNumero} from "helpers/formato"


const ListadoProduccionFecha = ({seco}) => {
    const {id, nombre,fecha,espesor,ancho,largo,piezas,cantidad} = seco





  
  return (
    
    <>
        <table className="table-auto w-full text-center bg-white text-gray-700">
            <tbody>
                
                    <tr className="bg-white border-b hover:bg-amber-300 text-sm">
                        <td className="px-6 py-4 w-1/5 text-center border border-amber-400">{fecha}</td>
                        <td className="px-6 py-4 w-1/5 text-center border border-amber-400">{nombre}</td>
                        <td className="px-6 py-4 w-1/5 text-center border border-amber-400">{formatoNumero(espesor * ancho * largo * piezas * cantidad / 1000000)}</td>
                    </tr>
            </tbody>
        </table>
    </>
  )
}

export default ListadoProduccionFecha