import {formatiarFecha} from "helpers/fecha"
import {formatoNumero} from "helpers/formato"


const ListadoSaldosFecha = ({saldo}) => {
    
    const {fecha,espesor,ancho,largo,piezas,calidad,id,calle} = saldo

  return (
    
    <>
        <table className="table-auto w-full text-center bg-white text-gray-700">
            <tbody>

                    <tr className="bg-white border-b hover:bg-lime-300 text-sm">
                    <td className="px-6 py-4 w-1/5 text-center border border-lime-400">{id}</td>
                        <td className="px-6 py-4 w-1/5 text-center border border-lime-400">{espesor}x{ancho}x{largo}x{piezas}</td>
                        <td className="px-6 py-4 w-1/5 text-center border border-lime-400">{calidad}</td>
                        <td className="px-6 py-4 w-1/5 text-center border border-lime-400">{formatoNumero(espesor * ancho * largo * piezas *1 / 1000000 )}</td>
                        <td className="px-6 py-4 w-1/5 text-center border border-lime-400">Calle: {calle}</td>
                    </tr>

            </tbody>
        </table>
    </>
  )
}

export default ListadoSaldosFecha