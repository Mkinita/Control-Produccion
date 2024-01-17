import {formatiarFecha} from "helpers/fecha"
import {formatoNumero} from "helpers/formato"


const ListadoSaldosFecha = ({saldo}) => {
    
    const {fecha,espesor,ancho,largo,piezas,calidad,id} = saldo

  return (
    
    <>
        <table className="table-auto w-full text-center bg-white text-gray-700">
            <tbody>

                    <tr className="bg-white border-b hover:bg-lime-300 text-sm">
                    <td className="px-6 py-4 w-1/6 text-center border border-lime-400">{id}</td>
                        <td className="px-6 py-4 w-1/6 text-center border border-lime-400">{espesor}</td>
                        <td className="px-6 py-4 w-1/6 text-center border border-lime-400">{ancho}</td>
                        <td className="px-6 py-4 w-1/6 text-center border border-lime-400">{largo}</td>
                        <td className="px-6 py-4 w-1/6 text-center border border-lime-400">{piezas}</td>
                        <td className="px-6 py-4 w-1/6 text-center border border-lime-400">{calidad}</td>
                        <td className="px-6 py-4 w-1/6 text-center border border-lime-400">{formatoNumero(espesor * ancho * largo * piezas *1 / 1000000 )}</td>
                    </tr>

            </tbody>
        </table>
    </>
  )
}

export default ListadoSaldosFecha