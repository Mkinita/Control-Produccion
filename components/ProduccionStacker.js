import {formatiarFecha} from "helpers/fecha"
import {formatoNumero} from "helpers/formato"
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { format, parseISO } from 'date-fns';

const ListadoProduccion = ({producciones}) => {
    const {id, volumen, fecha, nombre,ingreso} = producciones

    const fechaS = typeof fecha === 'string' ? parseISO(fecha) : fecha;
    const fechaFormateada = format(fechaS, 'MMMM dd');
    

    

  return (

    <>
        <table className="table-auto w-full text-center bg-white text-gray-700">
            <tbody>
                
                    <tr className="bg-white border-b hover:bg-lime-300 text-sm">
                        <td className="px-2 py-1 w-1/5 text-center border border-lime-400">{fechaFormateada}</td>
                        <td className="px-2 py-1 w-1/5 text-center border border-lime-400">{volumen}</td>
                        <td className="px-2 py-1 w-1/5 text-center border border-lime-400">{formatoNumero(volumen / 9)}</td>
                        <td className="px-2 py-1 w-1/5 text-center border border-lime-400">{ingreso}</td>
                        <td className="px-2 py-1 w-1/5 text-center border border-lime-400">{formatoNumero(ingreso / 9)}</td>
                    </tr>
                
            </tbody>
        </table>
    </>
  )
}

export default ListadoProduccion
